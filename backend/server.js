require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// Middleware
// next needs to be invoked to move onto app.get
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', workoutRoutes)

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})