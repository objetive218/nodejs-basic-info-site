let fs = require("fs");
let http = require("http");
let url = require("url");

http
  .createServer(function (req, res) {
    const adr = url.parse(req.url, true);
    let fileName = "";
    if(adr.pathname === "/"){
        fileName = "." + "/index.html";
    }else {
        fileName = "." + adr.pathname;
    }
    fs.readFile(fileName, function (err, data) {
        if(err){
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(page404);
            return res.end()
        }else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
        }
      
    });
  })
  .listen(8080);
