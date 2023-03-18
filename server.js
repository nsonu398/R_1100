const express = require('express');
const app = express();

app.use(express.json());


app.get('/',async (req,res)=>{
    return res.send({msj:"Hello"});
})

app.get('/user',async (req,res)=>{
    return res.send({msj:"user"});
})

app.listen(5000,()=>{
    console.log("listening on port: 5000");
})