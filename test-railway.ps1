# Test Railway Backend After Configuration
# Run this AFTER you configure Railway dashboard settings

Write-Host "`n🧪 Testing Railway Backend...`n" -ForegroundColor Cyan

$baseUrl = "https://nuwendo-production.up.railway.app"
$allPassed = $true

# Test 1: Ping endpoint
Write-Host "Test 1: Ping endpoint" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/ping" -UseBasicParsing -TimeoutSec 10
    if ($response.Content -eq "OK") {
        Write-Host "   ✓ PASSED - Ping works!" -ForegroundColor Green
    } else {
        Write-Host "   ⚠ WARNING - Got response but not 'OK': $($response.Content)" -ForegroundColor Yellow
        $allPassed = $false
    }
} catch {
    Write-Host "   ✗ FAILED - $($_.Exception.Message)" -ForegroundColor Red
    $allPassed = $false
}

Write-Host ""

# Test 2: Root endpoint
Write-Host "Test 2: Root endpoint (API info)" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/" -UseBasicParsing -TimeoutSec 10
    $json = $response.Content | ConvertFrom-Json
    if ($json.message -like "*Nuwendo*") {
        Write-Host "   ✓ PASSED - Root endpoint works!" -ForegroundColor Green
        Write-Host "   Message: $($json.message)" -ForegroundColor Gray
    } else {
        Write-Host "   ⚠ WARNING - Unexpected response" -ForegroundColor Yellow
        $allPassed = $false
    }
} catch {
    Write-Host "   ✗ FAILED - $($_.Exception.Message)" -ForegroundColor Red
    $allPassed = $false
}

Write-Host ""

# Test 3: API Health endpoint (with database)
Write-Host "Test 3: API Health endpoint (includes database)" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/api/health" -UseBasicParsing -TimeoutSec 10
    $json = $response.Content | ConvertFrom-Json
    if ($json.status -eq "OK" -and $json.database -eq "Connected") {
        Write-Host "   ✓ PASSED - API and database working!" -ForegroundColor Green
        Write-Host "   Status: $($json.status)" -ForegroundColor Gray
        Write-Host "   Database: $($json.database)" -ForegroundColor Gray
    } else {
        Write-Host "   ⚠ WARNING - Unexpected health response" -ForegroundColor Yellow
        Write-Host "   Response: $($response.Content)" -ForegroundColor Gray
        $allPassed = $false
    }
} catch {
    Write-Host "   ✗ FAILED - $($_.Exception.Message)" -ForegroundColor Red
    $allPassed = $false
}

Write-Host ""

# Test 4: CORS test (simulate frontend request)
Write-Host "Test 4: CORS headers check" -ForegroundColor Yellow
try {
    $headers = @{
        'Origin' = 'https://frontend-liart-six-87.vercel.app'
    }
    $response = Invoke-WebRequest -Uri "$baseUrl/" -Headers $headers -UseBasicParsing -TimeoutSec 10
    if ($response.Headers['Access-Control-Allow-Origin']) {
        Write-Host "   ✓ PASSED - CORS configured!" -ForegroundColor Green
        Write-Host "   Allow-Origin: $($response.Headers['Access-Control-Allow-Origin'])" -ForegroundColor Gray
    } else {
        Write-Host "   ⚠ WARNING - No CORS headers found" -ForegroundColor Yellow
        $allPassed = $false
    }
} catch {
    Write-Host "   ✗ FAILED - $($_.Exception.Message)" -ForegroundColor Red
    $allPassed = $false
}

Write-Host ""
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan

if ($allPassed) {
    Write-Host "   ✅ ALL TESTS PASSED!" -ForegroundColor Green
    Write-Host "   Railway backend is working correctly!" -ForegroundColor Green
    Write-Host ""
    Write-Host "   Next step: Test from frontend" -ForegroundColor Yellow
    Write-Host "   1. Open https://frontend-liart-six-87.vercel.app" -ForegroundColor White
    Write-Host "   2. Open DevTools (F12) → Console" -ForegroundColor White
    Write-Host "   3. Check API URL points to Railway" -ForegroundColor White
    Write-Host "   4. Try logging in" -ForegroundColor White
} else {
    Write-Host "   ❌ SOME TESTS FAILED" -ForegroundColor Red
    Write-Host ""
    Write-Host "   If you see 502 errors:" -ForegroundColor Yellow
    Write-Host "   • Railway dashboard configuration not applied yet" -ForegroundColor White
    Write-Host "   • Check Railway Settings → Root Directory = 'backend'" -ForegroundColor White
    Write-Host "   • Check Railway Settings → Start Command = 'node server.js'" -ForegroundColor White
    Write-Host "   • Make sure you clicked 'Redeploy' after changing settings" -ForegroundColor White
    Write-Host "   • Wait 2-3 minutes for deployment to complete" -ForegroundColor White
}

Write-Host "═══════════════════════════════════════`n" -ForegroundColor Cyan
