# Deployment Diagnostics and Troubleshooting

## Current Status

### Frontend (Vercel)
- **URL**: https://frontend-liart-six-87.vercel.app
- **Status**: ✅ Deployed
- **Issue**: May be pointing to localhost instead of Railway backend

### Backend (Railway)
- **URL**: https://nuwendo-production.up.railway.app
- **Status**: ❌ Returning 502 errors
- **Issue**: Application not starting or crashing immediately

## Issues Fixed So Far

1. ✅ **Syntax Error in authController.js** (Line 633)
   - Problem: Garbage text was accidentally added
   - Fixed: Removed garbage text and restored proper syntax
   - Verified: Backend now works locally

2. ✅ **Railway Configuration**
   - Problem: Start command wasn't working
   - Fixed: Created start.js script with proper Node.js execution
   - Deployed: Latest commit includes fix

3. ✅ **Database SSL Configuration**
   - Problem: SSL might have been required
   - Fixed: Disabled SSL for Railway internal network

## Required: Check Railway Logs

**You MUST check Railway logs to see the actual error:**

1. Go to https://railway.app
2. Click on your "nuwendo" project
3. Click on the "backend" service
4. Click on the "Deployments" tab
5. Click on the latest deployment
6. Check the build logs and deployment logs

**Look for:**
- Any error messages during startup
- Whether the "✓ Connected to PostgreSQL database" message appears
- Any missing environment variables
- Any module not found errors

## Environment Variables Checklist

### Railway Backend
Verify these variables are set in Railway dashboard:

- `DATABASE_URL` - Should be: `${{Postgres.DATABASE_URL}}` (reference to your PostgreSQL service)
- `JWT_SECRET` - Your JWT secret key
- `CORS_ORIGIN` - Should be: `https://frontend-liart-six-87.vercel.app`
- `NODE_ENV` - Should be: `production`

### Vercel Frontend
Verify these variables are set in Vercel dashboard:

- `VITE_API_URL` - Should be: `https://nuwendo-production.up.railway.app`
- `VITE_APP_URL` - Should be: `https://frontend-liart-six-87.vercel.app`

## Next Steps

### Step 1: Check Railway Logs (CRITICAL)
Check the logs as described above and look for specific error messages.

### Step 2: Verify Environment Variables
Make sure all required environment variables are set correctly in both Railway and Vercel.

### Step 3: Test Health Endpoint
Once Railway shows the app is running, test:
```powershell
Invoke-WebRequest -Uri "https://nuwendo-production.up.railway.app/api/health" -UseBasicParsing
```

Should return:
```json
{"status":"OK","timestamp":"...","database":"Connected"}
```

### Step 4: Fix Frontend Environment Variables
If backend works but frontend still points to localhost:

1. Go to Vercel dashboard → Your project → Settings → Environment Variables
2. Remove `VITE_API_URL` if it exists
3. Add new `VITE_API_URL` with value: `https://nuwendo-production.up.railway.app`
4. Select: Production, Preview, Development
5. Redeploy: `cd frontend && vercel --prod`

### Step 5: Run Database Migrations
Once backend is connected, run migrations:

In Railway dashboard:
1. Go to your backend service
2. Click "Shell" or "Terminal"
3. Run: `cd backend && node database/setup.js`

## Common Issues and Solutions

### "Application failed to respond" (502)
- **Cause**: App crashed during startup
- **Solution**: Check Railway logs for error messages

### "Module not found"
- **Cause**: Dependencies not installed properly
- **Solution**: Clear build cache in Railway, redeploy

### "Database connection failed"
- **Cause**: DATABASE_URL not set or incorrect
- **Solution**: Use `${{Postgres.DATABASE_URL}}` format in Railway

### Frontend shows localhost API
- **Cause**: VITE_API_URL not set or frontend not rebuilt
- **Solution**: Set variable in Vercel, redeploy frontend

## Testing Locally

Backend:
```powershell
cd backend
$env:PORT=5000
node server.js
```

Frontend:
```powershell
cd frontend
$env:VITE_API_URL="http://localhost:5000"
npm run dev
```

## Contact Information

If you provide the Railway logs, I can help diagnose the specific issue causing the 502 error.
