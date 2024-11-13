const express=require("express");
const Workout=require('../models/workoutschema');
const mongoose=require("mongoose")


const getworkouts =async(req,res)=>{
    const workouts=await Workout.find({})
    res.status(200).json(workouts);
}

const getworkout =async(req,res)=>{
    const {id}=req.params;
    const workout=await Workout.findById(id);
    if(!workout){
        res.status(404).json({error:"NO id found"});
    }
    res.status(200).json(workout);
}

const createworkout=async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
 
const deleteworkout =async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid){
    res.status(404).json({error:"NO id found"});
    }
    const workout =await Workout.findOneAndDelete({_id:id});
 
    if(!workout){
        res.status(404).json({error:"NO id found"});
    }
    res.status(200).json(workout);
}
const updateworkout=async(req,res)=>{
    const {id}=req.params;

    const workout=await Workout.findByIdAndUpdate({_id:id},{...req.body})
    if(!workout){
        res.status(404).json({error:"NO id found"});
    }
    res.status(200).json(workout);

}

module.exports={
    getworkout,
    getworkouts,
    createworkout,
    deleteworkout,
    updateworkout
}