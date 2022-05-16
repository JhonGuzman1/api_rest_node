const {Schema, model}  = require('mongoose');

const UserSchema = new Schema({
    FirstName:{
        type: String,
        require: true,
        min: 2,
        max: 255,
    },
    LastName:{
        type: String,
        require: true,
        min: 2,
        max: 255,
    },
    Email:{
        type: String,
        require: true,
        min: 6,
        max: 1024,
    },
    Password:{
        type: String,
        require: true,
        minlenght: 6,
        maxlength: 255
    },
    Date:{
        type: Date,
        default: Date.Now
    }
});

module.exports = model('users',UserSchema);