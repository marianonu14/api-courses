const express = require('express'); 
const router = express.Router();

const courses = require('../data/courses.json').technologies;

router.get('/', (req, res) => {
    res.send(courses);
})
    
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const result = courses.filter(course => course.id === id);

    if(!result.length) return res.send('ID not Founded')

    res.send(result);
})

module.exports = router;