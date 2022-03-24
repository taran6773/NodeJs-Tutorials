const fs= require('fs')
const http = require('http')
const port = process.env.PORT || 3000;

const server=http.createServer();

server.on('request', (req,res)=>{
    // fs.readFile('input.txt', (err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // })


    //----- Srreaming------

    //const rstream = fs.createReadStream('input.txt');
    // rstream.on('data', (chunkData)=>{
    //     res.write(chunkData);
    // })
    // rstream.on('end',()=>{
    //     res.end();
    // })
    // rstream.on('error',(err)=>{
    //     console.error(err);
    //     res.end('file not found')
    // })

    //----Third Way----
    
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);
})

server.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})