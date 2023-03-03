const mongoose = require("mongoose")

const d5cSchema = new mongoose.Schema({
    name:String,
    id:String,
    "roll no":Number
});

module.exports=d5cSchema;