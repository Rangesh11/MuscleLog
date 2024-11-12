const { timeStamp } = require("console")
const mongoose=require("mongoose")
const { type } = require("os")
const { title } = require("process")

const Schema=mongoose.Schema;

const workoutschema =new Schema({
    title:{
        type:String,
        required: true
    },
    reps:{
        type:Number,
        required: true
    },
    load:{
        type:Number,
        required: true
    }
},{timeStamps:true})

module.exports=mongoose.model("workout",workoutschema)