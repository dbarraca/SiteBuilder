const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create User Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;