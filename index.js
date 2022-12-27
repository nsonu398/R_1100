require('dotenv').config();
const express = require('express');
const authentication = require('./controllers/authenticationController');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('{"message":"Hello"}');
});
app.use('/auth',authentication);

app.listen(PORT,()=>{
    console.log('listening on port 8000');
})