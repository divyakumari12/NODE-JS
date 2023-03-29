//all requests will be entertained 
//create a file
// const fs = require("fs");
// fs.writeFile("fs.txt", "I am the original data", (err)=>{
//     console.log('file is created');
//     console.log(err);
// })

// //Read file data
// fs.readFile("fs.txt",(err,data)=>{
//     console.log(data);
// })

const fs = require("fs");
		fs.readFile("fs.txt","utf-8",(err,data) =>  {
            if(err){console.log("kya matlb file maujood nahi hai");}
            else{
   				 console.log(data);}
    					})
		console.log("second data");
        console.log("secfdfdond data");


