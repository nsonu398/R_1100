require('dotenv').config();
const express = require('express');
const authentication = require('./controllers/authenticationController');


const app = express();

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('{"message":"Hello"}');
});
app.use('/auth',authentication);

app.listen(8000,()=>{
    console.log('listening on port 8000');
})