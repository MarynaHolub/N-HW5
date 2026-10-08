import http from 'http';
import 'dotenv/config';
import fs from 'fs'

const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
  try {
    throw new Error('Error');
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    fs.appendFile('errors.log', `${new Date().toLocaleString()} - method: ${req.method} - url: ${req.url} - ${error.message}\n`, (err) => {
      if (err) {
        console.error('Ошибка записи в файл:', err);
      }
    });
    res.end('Internal Server Error');
    return;
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
