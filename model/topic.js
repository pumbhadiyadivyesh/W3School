const mongoose = require('mongoose')
const Schema = mongoose.Schema

const topicschema = new Schema({
    name : String,
    description : String,
    subcatagory :{
        type:Schema.Types.ObjectId,
        ref:"subcatagory"                                       
    }
})
const TOPIC = mongoose.model("topic",topicschema)
module.exports = TOPIC