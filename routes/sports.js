const express = require('express'); 
const router = express.Router();

const courses = require('../data/courses.json');

router.get('/', (req, res) => {
    res.send(courses.sports);
    })

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const result = courses.sports.filter(course => course.id === id);

    if(!result.length) return res.send('ID not Founded')

    res.send(result);
    })

module.exports = router;