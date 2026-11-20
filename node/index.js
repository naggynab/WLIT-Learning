var a= 20;
var b= 30;
var c =40;
console.warm(a+b+c);


const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World');
}).listen(6000);