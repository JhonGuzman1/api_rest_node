const bcrypt = require('bcrypt');

function encrypt_password(password){
   
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

function compare_password(password_text, password_encrypt){
    
    return bcrypt.compareSync(password_text, password_encrypt);
}

module.exports = { encrypt_password, compare_password };
