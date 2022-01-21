const mongoose = require('mongoose');

const Driver = mongoose.Schema({
    name:{type:String},
    email:{type:String,required:[true,"le champs Email est Obligatoire"]},
    password:{type:String},
    Salaire:{type:String},
    Vehicule:{type:String},
},{timestamps:true})

module.exports = mongoose.model('Driver',Driver);