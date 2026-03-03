# Nuwendo Development Environment Startup Script
# This script starts all required services for local development

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Starting Nuwendo Development Env  " -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Function to check if a port is in use
function Test-Port {
    param($Port)
    $connection = Test-NetConnection -ComputerName localhost -Port $Port -WarningAction SilentlyContinue -InformationLevel Quiet
    return $connection
}

# Function to kill process on port
function Stop-ProcessOnPort {
    param($Port)
    $process = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique
    if ($process) {
        Write-Host "Stopping process on port $Port..." -ForegroundColor Yellow
        Stop-Process -Id $process -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 2
    }
}

# Check if ports are already in use
Write-Host "Checking ports..." -ForegroundColor Yellow
if (Test-Port 5000) {
    Write-Host "Port 5000 (Backend) is already in use." -ForegroundColor Red
    $response = Read-Host "Do you want to stop the existing process? (y/n)"
    if ($response -eq 'y') {
        Stop-ProcessOnPort 5000
    } else {
        Write-Host "Exiting. Please free port 5000 first." -ForegroundColor Red
        exit 1
    }
}

if (Test-Port 5173) {
    Write-Host "Port 5173 (Frontend) is already in use." -ForegroundColor Red
    $response = Read-Host "Do you want to stop the existing process? (y/n)"
    if ($response -eq 'y') {
        Stop-ProcessOnPort 5173
    } else {
        Write-Host "Exiting. Please free port 5173 first." -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "Ports are clear!" -ForegroundColor Green
Write-Host ""

# Check if node_modules exist
Write-Host "Checking dependencies..." -ForegroundColor Yellow
if (-not (Test-Path ".\backend\node_modules")) {
    Write-Host "Backend dependencies not found. Installing..." -ForegroundColor Yellow
    Set-Location backend
    npm install
    Set-Location ..
}

if (-not (Test-Path ".\frontend\node_modules")) {
    Write-Host "Frontend dependencies not found. Installing..." -ForegroundColor Yellow
    Set-Location frontend
    npm install
    Set-Location ..
}

Write-Host "Dependencies OK!" -ForegroundColor Green
Write-Host ""

# Check if .env files exist
Write-Host "Checking environment files..." -ForegroundColor Yellow
if (-not (Test-Path ".\backend\.env")) {
    Write-Host "Warning: backend/.env not found. Using .env.example as template." -ForegroundColor Yellow
    if (Test-Path ".\backend\.env.example") {
        Copy-Item ".\backend\.env.example" ".\backend\.env"
        Write-Host "Created backend/.env from .env.example. Please configure it!" -ForegroundColor Yellow
    }
}

if (-not (Test-Path ".\frontend\.env")) {
    Write-Host "Warning: frontend/.env not found." -ForegroundColor Yellow
    if (Test-Path ".\frontend\.env.example") {
        Copy-Item ".\frontend\.env.example" ".\frontend\.env"
        Write-Host "Created frontend/.env from .env.example" -ForegroundColor Yellow
    }
}

Write-Host ""

# Start Backend
Write-Host "Starting Backend Server (Port 5000)..." -ForegroundColor Cyan
$backendJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD\backend
    npm run dev
}

Write-Host "Backend starting... (Job ID: $($backendJob.Id))" -ForegroundColor Green
Start-Sleep -Seconds 3

# Start Frontend
Write-Host "Starting Frontend Dev Server (Port 5173)..." -ForegroundColor Cyan
$frontendJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD\frontend
    npm run dev
}

Write-Host "Frontend starting... (Job ID: $($frontendJob.Id))" -ForegroundColor Green
Start-Sleep -Seconds 5

# Display status
Write-Host ""
Write-Host "=====================================" -ForegroundColor Green
Write-Host "     Services Started Successfully   " -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
Write-Host "Backend:  http://localhost:5000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host "Health:   http://localhost:5000/api/health" -ForegroundColor Cyan
Write-Host ""
Write-Host "Backend Job ID:  $($backendJob.Id)" -ForegroundColor Gray
Write-Host "Frontend Job ID: $($frontendJob.Id)" -ForegroundColor Gray
Write-Host ""
Write-Host "To view logs:" -ForegroundColor Yellow
Write-Host "  Backend:  Receive-Job -Id $($backendJob.Id) -Keep" -ForegroundColor Gray
Write-Host "  Frontend: Receive-Job -Id $($frontendJob.Id) -Keep" -ForegroundColor Gray
Write-Host ""
Write-Host "To stop services:" -ForegroundColor Yellow
Write-Host "  Run: .\stop-dev.ps1" -ForegroundColor Gray
Write-Host "  Or:  Stop-Job -Id $($backendJob.Id),$($frontendJob.Id); Remove-Job -Id $($backendJob.Id),$($frontendJob.Id)" -ForegroundColor Gray
Write-Host ""

# Save job IDs to file for stop script
@{
    BackendJobId = $backendJob.Id
    FrontendJobId = $frontendJob.Id
} | ConvertTo-Json | Out-File -FilePath ".\dev-jobs.json"

# Wait a bit and check if services are running
Start-Sleep -Seconds 3

$backendStatus = Get-Job -Id $backendJob.Id
$frontendStatus = Get-Job -Id $frontendJob.Id

if ($backendStatus.State -eq "Running" -and $frontendStatus.State -eq "Running") {
    Write-Host "All services are running!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Press Ctrl+C to keep services running in background" -ForegroundColor Yellow
    Write-Host "   (use stop-dev.ps1 to stop them later)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Or wait here to see live logs..." -ForegroundColor Yellow
    Write-Host ""
    
    # Keep script running and show logs
    try {
        while ($true) {
            Start-Sleep -Seconds 1
            
            # Show backend logs
            $backendOutput = Receive-Job -Id $backendJob.Id
            if ($backendOutput) {
                Write-Host "[BACKEND] $backendOutput" -ForegroundColor Blue
            }
            
            # Show frontend logs
            $frontendOutput = Receive-Job -Id $frontendJob.Id
            if ($frontendOutput) {
                Write-Host "[FRONTEND] $frontendOutput" -ForegroundColor Magenta
            }
        }
    }
    catch {
        Write-Host ""
        Write-Host "Keeping services running in background..." -ForegroundColor Yellow
        Write-Host "Use .\stop-dev.ps1 to stop them." -ForegroundColor Yellow
    }
} else {
    Write-Host "Some services failed to start!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Backend Status: $($backendStatus.State)" -ForegroundColor Yellow
    Write-Host "Frontend Status: $($frontendStatus.State)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Check logs:" -ForegroundColor Yellow
    Write-Host "Backend logs:" -ForegroundColor Cyan
    Receive-Job -Id $backendJob.Id
    Write-Host ""
    Write-Host "Frontend logs:" -ForegroundColor Cyan
    Receive-Job -Id $frontendJob.Id
}
