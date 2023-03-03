const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/inft");

const d5cSchema = new mongoose.Schema({
    name:String,
    id:String,
    "roll no":Number
});


const saveIndb=async()=>{
    const d5cModel = mongoose.model("d5c",d5cSchema);
    let data = new d5cModel({name:"gagan",id:"iit","roll no":9});
    let result = await data.save();
    console.log(result); 
}


const updateIndb=async()=>{
    const d5cModel = mongoose.model("d5c",d5cSchema);
    let data=await d5cModel.updateOne(
        {name:"gagan"},
        {$set:{name:"gagandeep"}}
    )
    console.log(data);
}


const deleteIndb=async()=>{
    const d5cModel = mongoose.model("d5c",d5cSchema);
    let data=await d5cModel.deleteOne({name:"gagan"});
    console.log(data);

}

const findIndb=async()=>{
    const d5cModel = mongoose.model("d5c",d5cSchema);
    let data=await d5cModel.find({name:"gagandeep"});
    console.log(data);
}













