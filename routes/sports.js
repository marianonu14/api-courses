const express = require('express'); 
const router = express.Router();

const courses = require('../data/courses.json').sports;

router.use(express.json())

router.get('/', (req, res) => {
    res.send(courses);
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const result = courses.filter(course => course.id === id);

    if(!result.length) return res.send('ID not Founded')

    res.send(result);
})

router.post('/', (req, res) => {    
    courses.push(req.body);

    res.send(courses)
})

router.put('/:id', (req, res) => {    
    const id = req.params.id
    const index = courses.findIndex(course => course.id === Number(id));

    if(index === -1) return res.status(404).send('This course doesnt exist')

    courses[index] = req.body

    res.send(courses)
})

router.delete('/:id', (req, res) => {    
    const id = req.params.id
    const index = courses.findIndex(course => course.id === Number(id));

    if(index === -1) return res.status(404).send('This course doesnt exist')

    courses.splice(index,1)

    res.send(courses)
})

module.exports = router;