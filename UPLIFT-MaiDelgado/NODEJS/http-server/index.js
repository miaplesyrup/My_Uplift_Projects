const http = require("http");
const url = require("url");
const fs = require("fs");
const mimeType = require("mime-types");

const port = 8080;

const server = http.createServer((req, res) => {
  //   res.end("Hello from http-server!!!!");

  const requestURL = url.parse(req.url);
  const filePath = __dirname + "/webfiles" + requestURL.path;

  const contentType = mimeType.lookup(filePath);
  console.log(contentType);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": contentType });
      res.end("File not found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
