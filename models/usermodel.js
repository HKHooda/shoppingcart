var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var userModel = new Schema({
    name: String,
    email: String,
    password: String,
    type: String,
    order: [{}]
});

module.exports = mongoose.model('user', userModel, 'userlist');