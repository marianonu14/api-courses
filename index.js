const express = require('express')
const app = express()

const technologies = require('./routes/technologies')
const sports = require('./routes/sports')

const courses = require('./data/courses.json')

app.get('/', function (req, res) {
    res.send('Welcome to the API Courses...')
    })

app.get('/api', (req, res) => {
    res.send(courses);
    })

app.use('/api/technologies', technologies);
app.use('/api/sports', sports);



app.use((req, res) => {
    res.status(404).send('Page Not Found: Error 404')
    })

const PORT = process.env.PORT || 3500

app.listen(PORT, () => {
    console.log(`Listen on Port: ${PORT}`)
    })