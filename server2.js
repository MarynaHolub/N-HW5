import http from 'http';
import 'dotenv/config';
import fs from 'fs'

const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
  try {
    throw new Error('Error');
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    fs.appendFile('errors.log', 'Internal Server Error', (err) => {
      if (err) {
        console.error('Ошибка записи в файл:', err);
      }
    });
    res.end('Internal Server Error');
    return;
  }
});

server.listen(PORT, () => {
  console.log(`Server connecting at http://localhost:${PORT}`);
});
