const expr=require('express')
const app=expr()
const http=require('http')

app.use((req,res,next)=>{
    console.log('1 midwaare')
    next()
})
app.use((req,res,next)=>{
    console.log('2 midwaare')
    
})
app.use((req,res,next)=>{
    console.log('3 midwaare')
})

const server=http.createServer(app)
server.listen(3000)
// next is used to go to next midware 