require('dotenv').config();
const express = require('express');
const authentication = require('./controllers/authenticationController');
const path = require('path');
const multer = require('multer');


var storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null,"./uploads")
    },
    filename: (req, file, callback)=>{
        callback(null, file.fieldname+"-"+Date.now()+path.extname(file.originalname))
    }
});

const upload = multer({storage: storage});


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/',(req,res)=>{
    res.send({"message":"Hello"});
});

app.post('/', upload.single('image'), (req,res)=>{
    console.log(req);
    if(req.file){
        console.log(req.file);
    }
    return res.send({msj:"File Upload success."});
})

app.use('/auth',authentication);

app.listen(PORT,"192.168.71.60",()=>{
    console.log('listening on port '+PORT);
})