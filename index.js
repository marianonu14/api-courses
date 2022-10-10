const express = require('express')
const app = express()

const courses = require('./data/courses.json')

app.get('/', function (req, res) {
  res.send('Welcome to the API Courses...')
})

app.get('/api', (req, res) => {
    res.send(courses);
  })

app.get('/api/sports', (req, res) => {
res.send(courses.sports);
})

app.get('/api/sports/:id', (req, res) => {
const id = Number(req.params.id);
const result = courses.sports.filter(course => course.id === id);

if(!result.length) return res.send('ID not Founded')

res.send(result);
})

app.get('/api/sports', (req, res) => {
res.send(courses.sports);
})

app.get('/api/technologies', (req, res) => {
res.send(courses.technologies);
})

app.get('/api/technologies/:id', (req, res) => {
    const id = Number(req.params.id);
    const result = courses.technologies.filter(course => course.id === id);
    
    if(!result.length) return res.send('ID not Founded')
    
    res.send(result);
    })

app.use((req, res) => {
    res.status(400).send('Page Not Found: Error 404')
})

const PORT = process.env.PORT || 3500

app.listen(PORT, () => {
    console.log(`Listen on Port: ${PORT}`)
})