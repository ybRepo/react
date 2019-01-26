const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/tasks')

//Takes care of GET endpoint and DB Controller call
router.get('/', (req, res) => {
    TaskController
        .getTasks()
        .then(task => res.json(task))
})

//Takes care of POST endpoint and DB Controller call
router.post('/', (req, res) => {
    const {description,status} = req.body
    TaskController
        .addTask(description, status)
        .then(task => res.json(task))
})

//Takes care of PUT endpoint and DB Controller call
router.put('/:id', (req, res) => {
    const {id, status} = req.params
    TaskController
        .updateTask(id, status)
        .then(task => res.json(task))
})

//Takes care of DELETE endpoint and DB Controller call
router.delete('/:id', (req, res) => {
    const {id} = req.params
    TaskController
        .deleteTask(id)
        .then(task => res.json(task))
})

module.exports = router