const http = require('http');
const fs = require("fs")
const port = process.env.PORT || 3000;


const server=http.createServer((req, res)=>{
        const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`, "utf-8")
        const objData=JSON.parse(data)

    // console.log(req.url);
    if(req.url=='/'){
        res.end('Hello!');
    }else if(req.url=='/about'){
        res.end('About')
    }else if(req.url=='/contact'){
        res.end('Contact')
    }else if(req.url=='/userapi'){
        res.writeHead(200, {"sontent-type": "application/json"})
            res.end(objData[2].name)
    }else{
        res.writeHead(404, {"content-type": "text/html"})
        res.end('<h1>404 NOT FOUND</h1>')
    }
})

server.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})