const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;