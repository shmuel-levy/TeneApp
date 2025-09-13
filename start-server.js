const { spawn } = require('child_process');
const path = require('path');

// Set environment variables
process.env.NODE_OPTIONS = '--openssl-legacy-provider';
process.env.BROWSER = 'none';

// Path to react-scripts start.js
const reactScriptsPath = path.join(__dirname, 'node_modules', 'react-scripts', 'scripts', 'start.js');

console.log('Starting React development server...');
console.log('Script path:', reactScriptsPath);

// Spawn the react-scripts process
const child = spawn('node', [reactScriptsPath], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname
});

child.on('error', (error) => {
  console.error('Error starting server:', error);
});

child.on('exit', (code) => {
  console.log(`Server exited with code ${code}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  child.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nShutting down server...');
  child.kill('SIGTERM');
  process.exit(0);
});