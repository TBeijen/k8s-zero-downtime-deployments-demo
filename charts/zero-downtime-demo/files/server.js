const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

process.on('SIGTERM', function() {
  console.log('caught SIGTERM');
  
  const duration = process.env.SLEEP_DURATION ? parseInt(process.env.SLEEP_DURATION) : 0;
  console.log(`sleeping for ${duration} seconds before exit.`);
  
  setTimeout(function() {
    console.log('exiting...');
    process.exit(0);
  }, duration * 1000);
});

const server = http.createServer((req, res) => {
  console.log('GET /');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Zero downtime demo');
});

server.listen(port, hostname, () => {
  console.log(`Zero downtime demo running at http://${hostname}:${port}/`);
});