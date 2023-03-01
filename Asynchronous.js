//all requests will be entertained 

const fs = require("fs");
fs.writeFile("fs.txt", "I am the original data", (err)=>{
    console.log('file is created');
    console.log(err);
})