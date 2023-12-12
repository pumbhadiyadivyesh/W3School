const SUBCATAGORY = require('../model/subcatagory')

exports.AddsubCatagory = async function (req,res,next) {
    try {

        if (!req.body.name || !req.body.catagory) {
            throw new Error("Please Enter All Data")
        }
        const data = await SUBCATAGORY.create(req.body)
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
exports.GetsubCatagory = async function (req,res,next) {
    
    try {
        const data = await SUBCATAGORY.find().populate('catagory')
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
exports.DeletesubCatagory = async function (req,res,next) {
    
    try {
        await SUBCATAGORY.findByIdAndDelete(req.body.id)
        res.status(202).json({
            message:"Data Delete"
        })
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }
}
exports.PutsubCatagory = async function (req,res,next) {
    try {
        const psub=await SUBCATAGORY.findByIdAndUpdate(req.body.id,req.body)
        res.status(202).json({
            message:"Update All Data",
            psub:psub
        })
    } catch (error) {
        res.status(404).json({
            message:error.message
        })  
    }
}