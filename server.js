var http = require("http");
var url = require("url");

var server = http.createServer(function(request, response){
    //const path = url.parse(request.url).pathname;
    const path = request.url
    
    var content="";
    if(path == "/batman"){
        content="배트맨을 요청했군요";
    }else if(path == "/superman"){
        content="수퍼맨을 요청했군요";
    }
    response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    response.end(content);
});

server.listen(8888, function(){
    console.log("The server is running at 8888 port...");
});