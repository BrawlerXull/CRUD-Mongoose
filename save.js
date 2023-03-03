const d5cSchema=require("./mongoose");
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/inft");

const saveIndb=async()=>{
    const d5cModel = mongoose.model("d5c",d5cSchema);
    let data = new d5cModel({name:"gagan",id:"iit","roll no":9});
    let result = await data.save();
    console.log(result); 
}

saveIndb();