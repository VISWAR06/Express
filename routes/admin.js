
 const express = require('express')
 const router=express.Router()
 router.get('/form',(req,res,next)=>{
    res.send('<form action="/out" method="POST"><input type="text" name="title"><input type="submit" value="send"> </form>')
}) // get method

router.post('/out',(req,res,next)=>{
    console.log('data:',req.body)
    res.send('<b>product subit</b>')
}) //use post only if the post is come in

module.exports=router