const http = require("http");
//res can be called only once inside a function

const server = http.createServer((require, response)=>{
    console.log(request.url);
    response.write("This will be printed");
    response.end("hello I am a response");
    response.end("This will not get printed");
});

server.listen(1000,()=>{
   console.log("listening to port number 1000");
});