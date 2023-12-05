const TOPIC = require('../model/topic')

exports.AddTopic = async function (req,res,next) {
    try {
       if (!req.body.name || !req.body.description || !req.body.subcatagory) {
        throw new Error("Please Fielp All Data")
       } 
       const data = await TOPIC.create(req.body)
       res.status(202).json({
        message:"Data Created!!!",
        data
       })
    } catch (error) {
      res.status(404).json({
        message:error.message
      })  
    }
}
exports.GetTopic =  async function (req,res,next) {
    try {

        const data = TOPIC.find().populate('subcatagory')
        res.status(202).json({
            message:"Find All Data",
            data
        })
    } catch (error) {
        res.status(404).json({
            message:error.message
        })  
    }
}
exports.DeleteTopic =  async function (req,res,next) {
    try {
        await TOPIC.findByIdAndDelete(req.body.id)
        res.status(202).json({
            message:"Delete All Data"
        })
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        })  
    }
}
exports.PutTopic  = async function(req,res,next) {
    try {
        await TOPIC.findByIdAndUpdate(req.body.id , req.body)
        res.status(202).json({
            message:"Data Updated!!"
        })
    } catch (error) {
        res.status(404).json({
            message:error.message
        })  
    }
}
