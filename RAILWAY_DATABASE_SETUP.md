# Railway Database Connection Checklist

## The Problem
Server starts but doesn't connect to PostgreSQL. Logs show:
- ✅ Server is running on port 5000
- ❌ NO "✓ Connected to PostgreSQL database" message

## Check in Railway Dashboard

### 1. Verify PostgreSQL Service Exists
1. Go to your Railway project
2. Look for a **PostgreSQL** service (separate from your backend service)
3. If you DON'T see a PostgreSQL service:
   - Click "+ New" → "Database" → "PostgreSQL"
   - Wait for it to provision (1-2 minutes)

### 2. Check DATABASE_URL Variable
1. Click on your **backend** service
2. Go to "Variables" tab
3. Look for `DATABASE_URL`

**CRITICAL:** The value should be:
```
${{Postgres.DATABASE_URL}}
```

**NOT:**
- A raw connection string starting with `postgresql://`
- `"${{Postgres.DATABASE_URL}}"` (with quotes)
- Empty or undefined

### 3. How to Set DATABASE_URL Correctly
1. In backend service Variables tab
2. Click "+ New Variable"
3. Key: `DATABASE_URL`
4. Click the "reference" icon (looks like $)
5. Select: `Postgres` → `DATABASE_URL`
6. Save

### 4. Check New Deployment Logs
After pushing the latest code, check the logs for:

**Good signs:**
```
Database Configuration:
- DATABASE_URL present: true
- Database Host: [some hostname]
- Database Port: 5432
- Database Name: railway
✓ Connected to PostgreSQL database
```

**Bad signs:**
```
✗ Failed to connect to PostgreSQL database:
  Error: [error message]
  Code: [error code]
```

### Common Error Codes:
- **ENOTFOUND** - Database hostname not found (DATABASE_URL wrong)
- **ECONNREFUSED** - Can't connect to database (service not running)
- **28P01** - Authentication failed (wrong password)
- **3D000** - Database doesn't exist

## Testing Endpoints

Once fixed, test these:

```powershell
# Basic health (no database)
curl https://nuwendo-production.up.railway.app/health
# Should return: {"status":"OK","service":"nuwendo-backend","timestamp":"..."}

# Full health with database
curl https://nuwendo-production.up.railway.app/api/health
# Should return: {"status":"OK","timestamp":"...","database":"Connected"}
```

## Next Steps After Database Connects

1. ✅ Test health endpoint
2. Run database migrations
3. Fix frontend VITE_API_URL in Vercel
4. Test full application

## Still Not Working?

Share the FULL deployment logs including:
1. The "Database Configuration" section
2. Any error messages with error codes
3. Whether you see a PostgreSQL service in your project
