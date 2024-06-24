const http = require('http');
const { exec } = require('child_process');

const child = exec('sh start.sh');
child.stdout.on('data', (data) => {
  console.log(`start.sh stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`start.sh stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`start.sh child process exited with code ${code}`);
});
