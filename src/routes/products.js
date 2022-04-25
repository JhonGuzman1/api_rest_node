const { Router } = require('express');
const router = Router();
const Product = require('../models/Product');

router.get('/api/products', async (req,res)=>{
    const products = await Product.find();
    res.json({message: "Succes", data:products});
});

router.post('/api/products/create',async (req,res)=>{

    const product = req.body;
    
   await Product.create({
        Name: product.Name,
        Description : product.Description,
        Price: product.Price
    });

    res.json({message: "Succes" ,data: product});
});

module.exports = router;
