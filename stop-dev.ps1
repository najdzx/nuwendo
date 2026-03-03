# Nuwendo Development Environment Stop Script
# This script stops all running development services

Write-Host "=====================================" -ForegroundColor Red
Write-Host "  Stopping Nuwendo Development Env  " -ForegroundColor Red
Write-Host "=====================================" -ForegroundColor Red
Write-Host ""

# Function to kill process on port
function Stop-ProcessOnPort {
    param($Port, $Name)
    Write-Host "Checking port $Port ($Name)..." -ForegroundColor Yellow
    $connections = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue
    if ($connections) {
        $processes = $connections | Select-Object -ExpandProperty OwningProcess -Unique
        foreach ($proc in $processes) {
            try {
                $processInfo = Get-Process -Id $proc -ErrorAction Stop
                Write-Host "Stopping $($processInfo.ProcessName) (PID: $proc) on port $Port..." -ForegroundColor Yellow
                Stop-Process -Id $proc -Force
                Write-Host "✓ Stopped $Name" -ForegroundColor Green
            }
            catch {
                Write-Host "Could not stop process $proc" -ForegroundColor Red
            }
        }
    } else {
        Write-Host "No process found on port $Port" -ForegroundColor Gray
    }
}

# Try to read job IDs from file
if (Test-Path ".\dev-jobs.json") {
    Write-Host "Found dev-jobs.json, stopping background jobs..." -ForegroundColor Yellow
    $jobs = Get-Content ".\dev-jobs.json" | ConvertFrom-Json
    
    if ($jobs.BackendJobId) {
        Write-Host "Stopping Backend Job (ID: $($jobs.BackendJobId))..." -ForegroundColor Yellow
        Stop-Job -Id $jobs.BackendJobId -ErrorAction SilentlyContinue
        Remove-Job -Id $jobs.BackendJobId -ErrorAction SilentlyContinue -Force
        Write-Host "✓ Backend job stopped" -ForegroundColor Green
    }
    
    if ($jobs.FrontendJobId) {
        Write-Host "Stopping Frontend Job (ID: $($jobs.FrontendJobId))..." -ForegroundColor Yellow
        Stop-Job -Id $jobs.FrontendJobId -ErrorAction SilentlyContinue
        Remove-Job -Id $jobs.FrontendJobId -ErrorAction SilentlyContinue -Force
        Write-Host "✓ Frontend job stopped" -ForegroundColor Green
    }
    
    Remove-Item ".\dev-jobs.json" -Force
    Write-Host ""
}

# Stop processes on known ports
Stop-ProcessOnPort 5000 "Backend"
Stop-ProcessOnPort 5173 "Frontend"

# Stop any remaining node processes that might be related
Write-Host ""
Write-Host "Checking for remaining Node processes..." -ForegroundColor Yellow
$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    Write-Host "Found $($nodeProcesses.Count) Node.js process(es)" -ForegroundColor Yellow
    foreach ($proc in $nodeProcesses) {
        $procPath = $proc.Path
        if ($procPath -like "*nuwendo*") {
            Write-Host "Stopping Node process: $($proc.Id) - $procPath" -ForegroundColor Yellow
            Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
        }
    }
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Green
Write-Host "     All Services Stopped            " -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
