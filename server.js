import http from 'http';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  if (!req.headers.authorization) {
    res.statusCode = 401;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Unauthorized');
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Authorization header received');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
