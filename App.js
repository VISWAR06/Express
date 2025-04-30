const expr=require('express')
const app=expr()
const bp=require('body-parser')

app.use(bp.urlencoded())
app.use('/form',(req,res,next)=>{
    res.send('<form action="/out" method="POST"><input type="text" name="title"><input type="submit" value="send"> </form>')
})
app.use('/out',(req,res,next)=>{
    console.log('data:',req.body)
    res.send('<b>product subit</b>')
})


app.listen(3000)
