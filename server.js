import http from 'http';
import dotenv from 'dotenv/config'

const PORT = process.env.PORT
const server = http.createServer((req, res) => {
  if (!req.headers.authorization) {
    res.statusCode = 401;
    res.end('Unauthorized');
    return;
  }
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');
  res.end('Authorization header received');
});

server.listen(PORT, ()=>{
    console.log(`Server connecting at http://localhost:${PORT}`);
    
})