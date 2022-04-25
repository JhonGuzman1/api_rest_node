const mongoose = require('mongoose');


function connect(){
    mongoose.connect('mongodb://localhost:27017/ecommerce',{
        useNewUrlParser: true
    });

    console.log('DATABASE');
}

module.exports = { connect };
