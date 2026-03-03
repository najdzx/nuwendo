import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serverPath = join(__dirname, 'backend', 'server.js');

console.log('Starting server from:', serverPath);

const child = spawn('node', [serverPath], {
  cwd: join(__dirname, 'backend'),
  stdio: 'inherit',
  env: process.env
});

child.on('exit', (code) => {
  console.log('Server exited with code:', code);
  process.exit(code);
});
