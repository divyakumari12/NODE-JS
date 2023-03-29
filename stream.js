const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on('request',(req,res)=>
{
fs.readFile('stream.txt',(err, data)=>
{
    if(err) throw err;
    res.end(data.toString());
});
});
server.listen(3000, ()=>
{
    console.log("listening to port");
});