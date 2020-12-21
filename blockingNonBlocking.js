// Synchronous or Blocking
// Asynchronous or non blocking
const fs = require('fs')
fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(err,data);
});
console.log("this is message");