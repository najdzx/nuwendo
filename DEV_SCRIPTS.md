# Development Environment Scripts

These scripts help you manage your Nuwendo development environment easily.

## 📜 Available Scripts

### 1. **start-dev.ps1** - Start All Services
Starts both backend and frontend development servers.

```powershell
.\start-dev.ps1
```

**What it does:**
- ✅ Checks if ports 5000 (backend) and 5173 (frontend) are available
- ✅ Stops any existing processes on those ports (with confirmation)
- ✅ Checks and installs dependencies if missing
- ✅ Creates .env files from .env.example if needed
- ✅ Starts backend server on port 5000
- ✅ Starts frontend dev server on port 5173
- ✅ Displays service URLs and status
- ✅ Shows live logs (optional)

**After starting:**
- Backend: http://localhost:5000
- Frontend: http://localhost:5173
- Health Check: http://localhost:5000/api/health

### 2. **stop-dev.ps1** - Stop All Services
Stops all running development services.

```powershell
.\stop-dev.ps1
```

**What it does:**
- ✅ Stops background jobs created by start-dev.ps1
- ✅ Kills processes running on ports 5000 and 5173
- ✅ Cleans up related Node.js processes
- ✅ Removes job tracking file

### 3. **status-dev.ps1** - Check Service Status
Shows the current status of all services.

```powershell
.\status-dev.ps1
```

**What it displays:**
- ✅ Backend status and health check
- ✅ Frontend status
- ✅ Database connection status
- ✅ Background job information
- ✅ Active URLs

## 🚀 Quick Start

### First Time Setup

1. Make sure you have Node.js installed
2. Configure your environment files:
   ```powershell
   # Backend
   Copy-Item backend\.env.example backend\.env
   # Edit backend\.env with your database credentials
   
   # Frontend (optional)
   Copy-Item frontend\.env.example frontend\.env
   ```

3. Start everything:
   ```powershell
   .\start-dev.ps1
   ```

### Daily Workflow

**Start your day:**
```powershell
.\start-dev.ps1
```

**Check if services are running:**
```powershell
.\status-dev.ps1
```

**Stop at the end of the day:**
```powershell
.\stop-dev.ps1
```

## 🔧 Troubleshooting

### "Execution Policy" Error

If you get an error about execution policy, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Ports Already in Use

The start script will detect this and ask if you want to stop existing processes.
Or manually stop them:
```powershell
.\stop-dev.ps1
```

### Services Won't Start

1. Check if dependencies are installed:
   ```powershell
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

2. Check your .env files exist and are configured:
   ```powershell
   # Check if they exist
   Test-Path backend\.env
   Test-Path frontend\.env
   ```

3. Check the logs when starting:
   - The start script shows live logs
   - Look for error messages in red

### View Logs After Starting

If you closed the start script but services are still running:
```powershell
# Check the job IDs first
.\status-dev.ps1

# View backend logs
Receive-Job -Id <BackendJobId> -Keep

# View frontend logs
Receive-Job -Id <FrontendJobId> -Keep
```

## 📝 Environment Variables

### Backend (.env)
Required variables:
- `DB_HOST` - Database host (default: localhost)
- `DB_PORT` - Database port (default: 5432)
- `DB_NAME` - Database name
- `DB_USER` - Database user
- `DB_PASSWORD` - Database password
- `JWT_SECRET` - Secret key for JWT tokens (min 32 chars)
- `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASSWORD` - Email config

### Frontend (.env)
Optional variables:
- `VITE_API_URL` - Backend API URL (default: http://localhost:5000)
- `VITE_APP_URL` - Frontend URL (default: http://localhost:5173)

## 💡 Tips

- **Keep services running in background:** Press Ctrl+C when the start script asks, services will continue running
- **Check service health:** Visit http://localhost:5000/api/health
- **Quick restart:** Run `.\stop-dev.ps1` followed by `.\start-dev.ps1`
- **Database setup:** Run `node nuwendo db:setup` to initialize your database

## 🌐 Production Deployment

These scripts are for **local development only**. For production:
- Backend: Deploy to Railway
- Frontend: Deploy to Vercel

See [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment instructions.

---

**Need help?** Check the main [README.md](README.md) or [SETUP_GUIDE.md](SETUP_GUIDE.md)
