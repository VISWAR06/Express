const expr=require('express')
const app=expr()
const http=require('http')

app.use((req,res,next)=>{
    console.log('1 midwaare')
    next()
})
app.use((req,res,next)=>{
    console.log('2 midwaare')
    next()
})
app.use((req,res,next)=>{
    console.log('3 midwaare')
    res.send('<h1>bannu payalugah</h1>')
})

const server=http.createServer(app)
server.listen(3000)
// next is used to go to next midware 
// insd of setheader & wrt use send