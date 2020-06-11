const http = require("http");

http
  .createServer((request, response) => {
    response.write(200, { "content-Type": "text/plain" });
    response.end("Hello, world");
  })
  .listen(8000);

console.log("Server working in http://localhost:8000/");
