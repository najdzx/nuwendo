import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('=== Nuwendo Backend Startup ===');
console.log('Current directory:', __dirname);
console.log('Node version:', process.version);
console.log('PORT:', process.env.PORT || '5000');
console.log('DATABASE_URL set:', !!process.env.DATABASE_URL);
console.log('NODE_ENV:', process.env.NODE_ENV || 'development');
console.log('===============================');

// Import the server from backend directory
const serverPath = join(__dirname, 'backend', 'server.js');
console.log('Importing server from:', serverPath);

import(serverPath)
  .then(() => {
    console.log('Server started successfully');
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
