const EventEmitter = require('events')

const event = new EventEmitter()

event.on('addNum', (a,b)=>{
    console.log(a+b)
})
// event.on('sayMyName', ()=>{
//     console.log("Taran")
// })
event.on('addNum', ()=>{
    console.log("Taran")
})

// event.emit('sayMyName')
event.emit('addNum', 5 ,6)

event.on('checkPage', (sc,msg)=>{
    console.log(`status code: ${sc} and page is ${msg}`)
})

event.emit('checkPage', 200, 'ok')