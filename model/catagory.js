const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catagoryschema = new Schema({
    name : String,
    colorcode : String
})
const CATAGORY = mongoose.model("catagory",catagoryschema)
module.exports = CATAGORY