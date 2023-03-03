const d5cSchema=require("./mongoose");
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/inft");

const updateIndb=async()=>{
    const d5cModel = mongoose.model("d5c",d5cSchema);
    let data=await d5cModel.updateOne(
        {name:"gagan"},
        {$set:{name:"gagandeep"}}
    )
    console.log(data);
}

updateIndb();