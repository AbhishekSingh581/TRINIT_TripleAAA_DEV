const express=require('express');
const bodyParser = require('body-parser')
const app=express();

const PORT=process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/tabInfo',(req,res)=>{
    console.log(req.body.url);
    res.status(200).end()
})

const server=app.listen(PORT,function(){
    console.log("Server is running");
})