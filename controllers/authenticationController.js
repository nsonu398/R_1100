const express = require('express');
const joi = require('joi');
const bcrypt = require('bcrypt');


const router = express.Router();
router.use(express.json());



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
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        
    }catch(err){
        res.send({"error": err});
    }
});

router.post('/login',async(req, res)=>{
    if(user.validate(req.body).error){
        return res.status(400).send(user.validate(req.body).error.message);
    }
    try{
        
        
    }catch(err){
        res.send({"error": err});
    }
});




module.exports = router;