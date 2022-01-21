const mongoose = require('mongoose');

const Command = mongoose.Schema({
    Nom:{type:String},
    VilleD:{type:String},
    VilleA:{type:String},
    Poid:{type:String},
    Distance:{type:String},
    Date:{type:Date},
    Prix:{type:String},
    Status:{type:String},
    Driver:{type:mongoose.Schema.Types.ObjectId,ref:'Driver'},
},{timestamps:true})

module.exports = mongoose.model('Command', Command);