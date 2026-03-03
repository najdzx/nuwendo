# 🚨 URGENT: Railway Manual Configuration Required

## Current Status

**Deploy Logs Show**: Server running successfully
```
✓ Server is running on 0.0.0.0:5000
✓ Environment: production  
✓ Connected to PostgreSQL database
✓ Server ready to accept connections
```

**External Access**: All endpoints return 502 Bad Gateway

**Diagnosis**: Railway proxy/routing configuration issue - NOT a code problem!

---

## 🔧 MANDATORY FIXES IN RAILWAY DASHBOARD

### Step 1: Access Railway Dashboard

1. Go to: https://railway.app/dashboard
2. Click your **nuwendo** project
3. Click your **backend service** (the one showing the deploy logs)

### Step 2: Configure Service Settings

Click **"Settings"** tab and configure these:

#### A. Root Directory ⚠️ CRITICAL
```
Current: (probably empty or "/")
MUST SET TO: backend
```

**Why**: Railway needs to know your server code is in the `backend` folder.

**How**:
1. Find "Root Directory" field in Settings
2. Type: `backend`
3. Save changes

#### B. Start Command ⚠️ CRITICAL
```
Current: (auto-detected or from nixpacks)
RECOMMENDED: node server.js
```

**How**:
1. Find "Start Command" field in Settings
2. Type: `node server.js`
3. Save changes

**Note**: With Root Directory set to `backend`, the start command runs FROM that directory.

#### C. Custom Build Command (Optional)
```
Set to: npm install --production
```

#### D. Health Check ⚠️ IMPORTANT

**Option 1 - Disable Health Check** (Easiest):
1. Find "Health Check Path" in Settings
2. **Delete** the value (leave it empty)
3. Save

**Option 2 - Configure Health Check**:
1. Health Check Path: `/ping`
2. Health Check Timeout: `30` seconds
3. Health Check Interval: `60` seconds
4. Save

### Step 3: Environment Variables

In Settings → **Variables** tab, verify:

| Variable | Value | Status |
|----------|-------|--------|
| `DATABASE_URL` | `${{Postgres.DATABASE_URL}}` | ✅ Must use reference |
| `CORS_ORIGIN` | `https://frontend-liart-six-87.vercel.app` | ✅ Required |
| `JWT_SECRET` | (your secret key) | ✅ Required |
| `NODE_ENV` | `production` | ⚠️ Optional |
| `PORT` | (leave empty) | ✅ Railway sets automatically |

**CRITICAL**: `DATABASE_URL` MUST be in reference format: `${{Postgres.DATABASE_URL}}`
NOT a raw postgres:// connection string!

### Step 4: Redeploy

After making the above changes:
1. Click **"Deployments"** tab
2. Click **"Redeploy"** button on latest deployment, OR
3. Click **"Deploy"** button in top right

Wait 1-2 minutes for deployment to complete.

### Step 5: Monitor Deployment Logs

While deploying, watch the **Deploy Logs**:

**Must see these lines**:
```
✓ Server is running on 0.0.0.0:[PORT]
✓ Environment: production
✓ Connected to PostgreSQL database
✓ CORS Origin: https://frontend-liart-six-87.vercel.app
✓ Server ready to accept connections
```

**If you see request logs**, Railway is routing traffic:
```
2026-03-03T10:00:00.000Z GET /ping
2026-03-03T10:00:01.000Z GET /health
```

### Step 6: Test After Deployment

```powershell
# Test 1: Ping endpoint
Invoke-WebRequest -Uri "https://nuwendo-production.up.railway.app/ping"
# Should return: OK

# Test 2: Root endpoint  
Invoke-WebRequest -Uri "https://nuwendo-production.up.railway.app/"
# Should return: JSON with welcome message

# Test 3: Health with database
Invoke-WebRequest -Uri "https://nuwendo-production.up.railway.app/api/health"
# Should return: {"status":"OK","database":"Connected"}
```

---

## 🔍 Still Not Working?

### Check #1: Railway Service Domain

1. Settings → **Domains** section
2. Check if public domain is properly configured
3. Try **regenerating** the domain:
   - Remove existing domain
   - Railway will auto-generate a new one

### Check #2: Railway Region

Your service might be in a problematic region.

**How to check**:
1. Settings → scroll to bottom
2. Look for "Region" information

**Solution** (if needed):
1. Create a new service in a different region
2. Link to same GitHub repo and database

### Check #3: Railway Shell (Advanced)

Test if the server works INSIDE Railway:

1. Click **"Shell"** tab (terminal icon)
2. Wait for shell to connect
3. Run: `curl localhost:$PORT/ping`

**If this works**: Server is fine, it's a proxy issue
**If this fails**: Server isn't actually running

### Check #4: View Raw Logs

1. Deployments → Latest deployment
2. Click **"View Logs"** (not Deploy Logs)
3. Look for error messages after "Server ready to accept connections"

---

## 📋 Configuration Checklist

Before redeploying, verify:

- [ ] Settings → Root Directory = `backend`
- [ ] Settings → Start Command = `node server.js`
- [ ] Settings → Health Check = Empty OR `/ping` with 30s timeout
- [ ] Variables → `CORS_ORIGIN` = `https://frontend-liart-six-87.vercel.app`
- [ ] Variables → `DATABASE_URL` = `${{Postgres.DATABASE_URL}}`
- [ ] Variables → `JWT_SECRET` = (set to your secret)
- [ ] PostgreSQL service exists and is running (green checkmark)
- [ ] Both services in same project
- [ ] Public domain is configured

---

## 🎯 Why This Happens

Railway has multiple configuration layers:
1. **nixpacks.toml** (file-based)
2. **railway.json** (file-based)  
3. **Dashboard Settings** (UI-based) ← **Highest Priority**

Dashboard settings **override** file-based configs. The 502 error means Railway's proxy can't find your service, usually because:

- Root directory is wrong (looking in `/` instead of `/backend`)
- Health check is failing (timing out or wrong path)
- Start command isn't executing properly

Setting these explicitly in the dashboard ensures Railway knows exactly where and how to run your service.

---

## ✅ Expected Result After Fix

### In Browser:
- `https://nuwendo-production.up.railway.app/ping` → Shows "OK"
- `https://frontend-liart-six-87.vercel.app` → Can login, no CORS error

### In Railway Logs:
```
✓ Server is running on 0.0.0.0:5000
✓ Server ready to accept connections
2026-03-03T10:00:00.000Z GET /ping
2026-03-03T10:00:01.000Z GET /api/auth/patient-login/send-code
```

### In Browser Console (frontend):
```
🌐 API URL: https://nuwendo-production.up.railway.app/api
```

---

## 📞 After Configuration

Once you've made these changes in Railway dashboard and redeployed, share:
1. Whether endpoints respond (test /ping first)
2. Any error messages in deploy logs
3. Whether you see request logs when you test

The configuration MUST be done in Railway dashboard - file-based configs are not being applied correctly for your monorepo structure.
