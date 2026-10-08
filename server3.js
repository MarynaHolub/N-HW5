import http from 'http';
import 'dotenv/config';

const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (req.method === 'GET') {
    if (req.url === '/') {
      res.end('GET-запрос обработан');
      return;
    }
  }
  if (req.method === 'PUT') {
    res.end('PUT-запрос обработан');
    return;
  }

  if (req.method === 'DELETE') {
    res.end('DELETE-запрос обработан');
    return;
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
