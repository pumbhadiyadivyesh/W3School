const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subcatagoryschema = new Schema({
    name : String,
    catagory :{
        type:Schema.Types.ObjectId,
        ref:"catagory"                                       
    }
})
const SUBCATAGORY = mongoose.model("subcatagory",subcatagoryschema)
module.exports = SUBCATAGORY