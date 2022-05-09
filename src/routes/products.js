const { Router } = require('express');
const router = Router();
const Product = require('../models/Product');

router.get('/api/products', async (req,res)=>{
    const products = await Product.find();
    res.json({message: "Succes", data:products});
});

router.post('/api/products/create',async (req,res)=>{

    const request = req.body;
    
    const product = await Product.create({
        Name: request.Name,
        Description : request.Description,
        Price: request.Price
    });


    res.json({message: "Succes Create" ,data: product});
});

router.post('/api/products/edit',async (req,res)=>{

    const request = req.body;
    
    const product = await Product.findByIdAndUpdate(
        { _id: request.Id },
        {
            $set:{
                Name: request.Name,
                Description : request.Description,
                Price: request.Price
            }
        }
    );

    res.json({message: "Succes Edit" ,data: product});
});


router.post('/api/products/delete',async (req,res)=>{

    const request = req.body;
    
    const product = await Product.findByIdAndDelete(
        { _id: request.Id }
    );

    res.json({message: "Succes Delete" ,data: product});
});

module.exports = router;
