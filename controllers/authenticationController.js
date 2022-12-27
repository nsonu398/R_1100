const express = require('express');
const joi = require('joi');
const bcrypt = require('bcrypt');


const router = express.Router();
router.use(express.json());

//database
const database = {};


const user = joi.object({
    email:joi.string().email().min(6).max(30).required(),
    password: joi.string().min(6).max(30).required()
});


router.get('/',async(req, res)=>{
    res.send("authentication");
});
router.post('/register',async(req, res)=>{
    if(user.validate(req.body).error){
        return res.status(400).send(user.validate(req.body).error.message);
    }
    try{
        if(database[req.body.email]){
            return res.status(200).send({'message':'email alreasy exists in database'});
        }else{
            database[req.body.email] = req.body;
            return res.status(200).send({'message':'account created successfully'});
        }
    }catch(err){
        res.send({"error": err});
    }
});
router.post('/login',async(req, res)=>{
    if(user.validate(req.body).error){
        return res.status(400).send(user.validate(req.body).error.message);
    }
    try{
        if(database[req.body.email]){
            if( JSON.stringify(database[req.body.email]) == JSON.stringify(req.body) ){
                return res.status(200).send({'message':'logged in successfully'});
            }
            else{
                return res.status(400).send({'message':'authentication failed'});
            }
        }else{
            return res.status(400).send({"message":"user doesn't exists"});
        }
    }catch(err){
        res.send({"error": err});
    }
});




module.exports = router;