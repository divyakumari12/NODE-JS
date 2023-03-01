//create and write
const fsobj = require("fs");
fsobj.writeFileSync("fs.txt", "this is a fs file");

//append
fsobj.appendFileSync("fs.txt", "\nthis is the added data");

//read file
fsobj.readFileSync("fs.txt");
const read = fsobj.readFileSync("fs.txt");
console.log(read);// reads in binary form or buffer always

fsobj.readFileSync("fs.txt", "utf8"); // unicode transformation format

//rename a file
fsobj.renameSync("fs.txt", "new.txt");

//if we remove sync it will give error because there is no callback function