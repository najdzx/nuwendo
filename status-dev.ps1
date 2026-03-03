# Nuwendo Development Environment Status Script
# Shows the status of all development services

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Nuwendo Development Env Status    " -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Function to check if a port is in use
function Test-Port {
    param($Port)
    $connection = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue
    return $null -ne $connection
}

# Check Backend (Port 5000)
Write-Host "Backend (Port 5000):" -ForegroundColor Yellow
if (Test-Port 5000) {
    Write-Host "  Status: " -NoNewline
    Write-Host "RUNNING ✓" -ForegroundColor Green
    
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:5000/api/health" -UseBasicParsing -TimeoutSec 2
        $health = $response.Content | ConvertFrom-Json
        Write-Host "  Health: " -NoNewline
        if ($health.status -eq "OK") {
            Write-Host "OK ✓" -ForegroundColor Green
        } else {
            Write-Host "ERROR" -ForegroundColor Red
        }
        Write-Host "  Database: $($health.database)" -ForegroundColor Cyan
    }
    catch {
        Write-Host "  Health: Cannot reach endpoint" -ForegroundColor Red
    }
    
    Write-Host "  URL: http://localhost:5000" -ForegroundColor Cyan
} else {
    Write-Host "  Status: " -NoNewline
    Write-Host "STOPPED ✗" -ForegroundColor Red
}

Write-Host ""

# Check Frontend (Port 5173)
Write-Host "Frontend (Port 5173):" -ForegroundColor Yellow
if (Test-Port 5173) {
    Write-Host "  Status: " -NoNewline
    Write-Host "RUNNING ✓" -ForegroundColor Green
    Write-Host "  URL: http://localhost:5173" -ForegroundColor Cyan
} else {
    Write-Host "  Status: " -NoNewline
    Write-Host "STOPPED ✗" -ForegroundColor Red
}

Write-Host ""

# Check for background jobs
if (Test-Path ".\dev-jobs.json") {
    Write-Host "Background Jobs:" -ForegroundColor Yellow
    $jobs = Get-Content ".\dev-jobs.json" | ConvertFrom-Json
    
    if ($jobs.BackendJobId) {
        $backendJob = Get-Job -Id $jobs.BackendJobId -ErrorAction SilentlyContinue
        if ($backendJob) {
            Write-Host "  Backend Job: $($backendJob.State) (ID: $($jobs.BackendJobId))" -ForegroundColor Cyan
        }
    }
    
    if ($jobs.FrontendJobId) {
        $frontendJob = Get-Job -Id $jobs.FrontendJobId -ErrorAction SilentlyContinue
        if ($frontendJob) {
            Write-Host "  Frontend Job: $($frontendJob.State) (ID: $($jobs.FrontendJobId))" -ForegroundColor Cyan
        }
    }
    Write-Host ""
}

# Check Node processes
$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    Write-Host "Node.js Processes: $($nodeProcesses.Count) running" -ForegroundColor Gray
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""
