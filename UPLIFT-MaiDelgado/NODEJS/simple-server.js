const http = require("http");
const fs = require("fs");

const port = 2001;
//create a server instance
http
  .createServer((req, res) => {
    fs.readFile("./read.html", (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("File not found!");
      }
    });
  })
  .listen(port)
  .on("listening", () => {
    console.log(`Server is running on port ${port}`);
  });


  //A delete A TASK

//B MARK A task as complete