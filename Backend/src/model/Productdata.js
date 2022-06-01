const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProductDatabase');

// const Schema = mongoose.Schema;

// mongoose.connect("mongodb://localhost:27017/TestDB", {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
//     if (!err) console.log('db connected');
//     else console.log('db error');
// })

mongoose.connection.on('connected',()=>{
    console.log('connected to database mongodb @ 27017');
});

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Error in Database conncetion:'+err)
    }
}); 
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    productId : Number,
    productName : String,
    productCode : String,
    releaseDate : String,
    description : String,
    price : Number,
    starRating :Number,
    imageUrl : String
});

var Productdata = mongoose.model('product', NewProductSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Productdata;