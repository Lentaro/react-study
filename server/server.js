const express = require('express')
const mongoose = require('mongoose')

//链接mongo 并且使用react这个集合
const DB_URL = 'mongodb://localhost:27017/react'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connet success')
})

//类似于mysql中 mongo有文档和字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
// User.create({
//     user:'xiaoming',
//     age:'17'
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
// User.remove({age:17},function(err,doc){
//     console.log(doc)
// })
// User.update({'user':'xiaoming'},{'$set':{age:17}},function(err,doc){
//         console.log(doc)
// })
//新建APP
const app = express()
app.get('/',function(req,res){
    res.send('<h1>Jud.</h1>')
})
// app.get('/delet',function(req,res){})
app.get('/data',function(req,res){
    User.findOne({'user':'Ariadust'},function(err,doc){
        res.json(doc)
    })
    // res.json({name:'Ariadust',type:'school'})
})

app.listen(9090,function(){
    console.log('Node app start at post 9090')
})