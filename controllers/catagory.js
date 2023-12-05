const CATAGORY = require('../model/catagory')

exports.AddCatagory =async function (req,res,next) {
    try {
        if(!req.body.name || !req.body.colorcode){
            throw new Error("Pease enter data")
        }
        const data = await CATAGORY.create(req.body)
        res.status(202).json({
            message:"Data Created!!! ",
            data
        })
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }
}
exports.Getcataory = async function (req,res,next) {
    
    try {
        const data = await CATAGORY.find()
    res.status.json({
        message:"Data Find",
        data
    })
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
        
    }
}
exports.Deletcatagory = async function (req,res,next) {
    
    try {
        await CATAGORY.findByIdAndDelete(req.query.id)
        res.status(202).json({
            message:"Delete Data"
        })
    } catch (error) {
        res.status(404).json({
            message:error.message
        })        
    }
}

exports.Updatecatagory = async function (res,req,next) {
    try {
        await CATAGORY.findByIdAndUpdate(req.query.id , req.body)
        res.status(202).json({
            message:"Update All Data"
        })
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }
}
