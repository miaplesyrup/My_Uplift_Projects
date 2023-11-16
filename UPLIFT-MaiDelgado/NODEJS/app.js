// console.log("Hello, World!");
// let age = 29;
// const name = "Juan";
// age++;
// console.log(`Hello, ${name}! I am ${age} years old.`);

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question(`How are you today? `, (feelings) => {
//   console.log(`Am glad you are ${feelings}!`);
//   readline.close();
// });

const fileSystem = require("fs");
// console.log(fileSystem);

fileSystem.writeFile("todos.txt", "todo 1: Run 10km tomorrow.", (err) => {
  if (err) {
    console.log("Error occured: ", err);
  }
  console.log("Done Writing!");
});
console.log("Log before writing is finished!");

const speacialDate = require("./special-date");
console.log(`Today is ${speacialDate().date}`);
