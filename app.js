// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("please enter ur name", (name) => {
//   console.log("you enter:" + name);
//   rl.close();
// });

// rl.on("close", () => {
//   console.log("interface closed");
//   process.exit(0);
// });

// const path = require("path");

// console.log(path.parse(__filename));
// console.log(__filename);
console.log("happy");
// const os = require("os");
// console.log(os);
// const math = require("./math");
// import { add, sub, multi, div } from "./math.js";
// console.log(add(6, 6));
// console.log(sub(10, 2));
// console.log(multi(3, 3));
// console.log(div(2, 4));

// import { readFile } from "node:fs";
console.log(__dirname);

// const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "start.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "files", "subscribe.txt"),
      " hi how are you. Are you ok"
    );
    console.log("write complete");
    await fsPromises.appendFile(
      path.join(__dirname, "files", "super.txt"),
      " _nithila mahizhini one"
    );
    console.log("append complete");
    await fsPromises.rename(
      path.join(__dirname, "files", "subscribe.txt"),
      path.join(__dirname, "files", "happy.txt")
    );
    console.log("rename completed");
    await fsPromises.unlink(path.join(__dirname, "files", "sub.txt"));
    console.log("deleted");
  } catch (err) {
    console.error("error", err);
  }
};
fileOps();

// fs.readFile("./files/start.txt", "utf8", (err, data) => {

// process.on("uncaughtException", (err) => {
//   console.error(`There was an uncaught error : ${err}`);
//   process.exit(1);
// });
