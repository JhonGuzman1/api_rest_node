const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const utils = require('../utils/utils');


router.post('/api/user/create',async (req,res)=>{

    const request = req.body;
    
    const existUserModel = await User.findOne({Email: request.Email});

    if(existUserModel){
        res.json({message: "Email already exist " ,data: null});
    }else{
        const userModel = await User({
            FirstName: request.FirstName,
            LastName : request.LastName,
            Email: request.Email,
            Password: utils.encrypt_password(request.Password)
        });
    
        const user = await userModel.save();
        
        res.json({message: "Succes Create" ,data: user});
    }
});

router.post('/api/user/login',async (req,res)=>{

    const request = req.body;
    
    const userModel = await User.findOne({Email: request.Email});
    if(userModel){
        if(utils.compare_password(request.Password,userModel.Password)){
            res.json({message: "Succes Login" ,data: userModel});
        }else{
            res.json({message: "Email or Password is incorrect" ,data: null});
        }
        
    }else{
        res.json({message: "User not registered" ,data: null});
    }

});



module.exports = router;
