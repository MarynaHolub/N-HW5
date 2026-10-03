import http from 'http';
import 'dotenv/config';

const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
  if (req.method === 'PUT') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('PUT-запрос обработан');
    return;
  }

  if (req.method === 'DELETE') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('DELETE-запрос обработан');
    return;
  }
});

server.listen(PORT, () => {
  console.log(`Server connecting at http://localhost:${PORT}`);
});
