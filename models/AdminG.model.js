const mongoose = require('mongoose');

const Admin = mongoose.Schema({
    name:{type:String},
    email:{type:String,required:[true,"le champs Email est Obligatoire"]},
    password:{type:String},
},{timestamps:true})

module.exports = mongoose.model('Admin',Admin);