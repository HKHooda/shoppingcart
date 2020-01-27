var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var productModel = new Schema({
    id:{type:Number},
    product:{type:String},
    description:{type:String},
    price:{type:Number}
});

module.exports = mongoose.model('product', productModel, 'productlist');