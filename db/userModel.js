const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    email : {
        type: String,
        required: [true, 'Please provide an email'],
        unique: [true, 'Email already exists'],
    },
    password : {
        type: String,
        required: [true, 'Please provide a password'],
        unique : false,
    },
});



module.exports = mongoose.model('User', UserSchema) || mongoose.models.User;
