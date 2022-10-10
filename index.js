const express = require('express');
const path = require('path');
const courses = require('./data/courses.json');

const app = express();

app.use(express.static('build'));

app.get('/api', (req, res) => {
  res.send(courses);
});

const technologies = require('./routes/technologies');
app.use('/api/technologies', technologies);

const sports = require('./routes/sports');
app.use('/api/sports', sports);

app.use((req, res) => {
  res.status(404).send('Page Not Found: Error 404');
});

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log(`Listen on Port: ${PORT}`);
});
