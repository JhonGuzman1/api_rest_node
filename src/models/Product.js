const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    Name: String,
    Description : String,
    Price: Schema.Types.Number
});

module.exports = model('products',productSchema);