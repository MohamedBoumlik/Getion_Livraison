const mongoose = require('mongoose');

const Prime = mongoose.Schema({
    Command_id:{type:mongoose.Schema.Types.ObjectId,ref:'Command'},
    Driver_id:{type:mongoose.Schema.Types.ObjectId,ref:'Driver'},
    Month:{type:String},
},{timestamps:true})

module.exports = mongoose.model('Prime',Prime);