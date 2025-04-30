const expr=require('express')
const app=expr()
const bp=require('body-parser')
const adminsrout=require('./routes/admin')
const shopr=require('./routes/Shop')
app.use(bp.urlencoded())
app.use(shopr)
app.use('/admin',adminsrout)
app.use((req,res,next)=>{
res.status(404).send('<h1>404 page found </h1>')

})
app.listen(3000)
