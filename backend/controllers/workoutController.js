const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// GET all workouts
const getWorkouts = async (req, res) => {
    const workouts = (await Workout.find({})).toSorted({createdAt: -1}) // -1 is descending order
    res.status(200).json(workouts)
}

// GET a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

// Create a new workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body

    // Add doc to DB
    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } 
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// DELETE a workout

// UPDATE a workout

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
}