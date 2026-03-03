import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { chdir } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const backendDir = join(__dirname, 'backend');

console.log('=== Nuwendo Backend Startup ===');
console.log('Current directory:', __dirname);
console.log('Backend directory:', backendDir);
console.log('Node version:', process.version);
console.log('PORT:', process.env.PORT || '5000');
console.log(' DATABASE_URL set:', !!process.env.DATABASE_URL);
console.log('NODE_ENV:', process.env.NODE_ENV || 'development');
console.log('===============================');

// Change to backend directory
try {
  chdir(backendDir);
  console.log('Changed to backend directory');
} catch (err) {
  console.error('Failed to change directory:', err);
  process.exit(1);
}

// Import and run the server directly
import('./backend/server.js')
  .then(() => {
    console.log('Server module loaded successfully');
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
