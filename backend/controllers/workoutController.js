const Workout = require('../models/workoutModel')

// GET all workouts
const getWorkouts = async (req, res) => {
    const workouts = (await Workout.find({})).toSorted({createdAt: -1}) // -1 is descending order
    res.status(200).json(workouts)
}

// GET a single workout

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
    createWorkout
}