const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/shoppingcart');
var user = require('./models/usermodel');
var product = require('./models/productmodel');

var db = mongoose.connection;
// var user1 = new user({name: "xyz", email: "xyz@yahoo.com", password:"xyz123", type:"admin", order:{}};
// var products = [{id: 1, product: 'Pen', description: 'Stationery', price: 10},
//                 {id: 2, product: 'Shirt', description: 'Clothes', price: 100},
//                 {id: 3, product: 'Bottle', description: 'Consumable', price: 20},
//                 {id: 4, product: 'Pencil', description: 'Stationery', price: 4},
//                 {id: 5, product: 'Jacket', description: 'Clothes', price: 200}];

const port = 3000;
const app = express();

const AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

app.use(session({secret: 'userSecert'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

// product.collection.insert(products, (err, docs)=>{
//     if(err) return console.error(err);
//     console.log("Mutiple records inserted.")
// })

// user1.save((err, data)=>{
//     if(err) return console.error(err);
//     console.log("Record inserted.")
// })

app.get('/', (req,res)=>{
    product.find((err, data)=>{
        if(err) throw err;
        res.render('index.ejs', {data:data})
    }) 
})

app.get('/dashboard', (req,res)=>{
        res.render('register-login.ejs')
    }) 

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});