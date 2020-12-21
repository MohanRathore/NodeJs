const fs = require('fs');

let text = fs.readFileSync("read.txt","utf-8");
text = text.replace("Mohan","Minku");
console.log(text);
console.log("creating a new file")
fs.writeFileSync("rohan.txt",text);