const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 2001;
//create a server instance

const todoItems = [
  { name: "Code the Backend", done: false },
  { name: "Run 10KM", done: false },
];

const books = [
  { name: "Moby Dick", author: "Herman Melvin" },
  { name: "Tom Sawyer", author: "Mark Twain" },
];

http
  .createServer((req, res) => {
    // console.log(req);
    const serverURL = url.parse(req.url, true);
    // console.log(serverURL);
    // for CORS
    const headers = {
      "Access-Control-Allow-Origin": "*" /* @dev First, read about security */,
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
      "Content-Type": "application/json",
      /** add other headers as per requirement */
    };
    
    if (serverURL.path === "/tasks" && req.method === "GET") {
      //error natin knina :)
      res.writeHead(200, headers);
      res.end(JSON.stringify(todoItems));
    }else if(serverURL.path === "/tasks" && req.method === "POST"){
      res.writeHead(200, headers);
      todoItems.push({
        "name": "give dog bath",
        "done": false
      });
      res.end(JSON.stringify(todoItems));
    }


    if (serverURL.path === "/books" && req.method === "GET") {
      res.writeHead(200, headers);
      res.end(JSON.stringify(books));
    }
  })
  .listen(port)
  .on("listening", () => {
    console.log(`Server is running on port ${port}`);
  });
