// const http=require('http')
app.use('/second',(req,res,next)=>{
    console.log('second page')
    res.send('<h1>second page</h1>')   
    })
app.use('/',(req,res,next)=>{
console.log('first page')
res.send('<h1>first page</h1>')   
 }) // always runs so give in second
 // const server=http.createServer(app)
// server.listen(3000)
// next is used to go to next midware 
// insd of setheader & wrt use send
// ------------------------------------------------------------