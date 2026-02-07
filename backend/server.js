const express = require('express')

// express app
const app = express()

// Listen for requests
app.listen(4000, () => {
    console.log('Listening on port 4000!!')
})