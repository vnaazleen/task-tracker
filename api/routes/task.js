const express = require('express')
const router = express.Router()

const Task = require('../model/task')

// ------- ADD A TASK -------------------
router.post('/add', async (req, res) => {

    const task = await new Task(req.body)
    await task.save()

    res.send(task)

})

// ------- GET ALL TASKS -------------------
router.get('/tasks', async (req, res) => {

    const tasks = await Task.find()
    res.send(tasks)

})

// ------- EDIT A TASK -------------------
router.put('/tasks/edit/:id', async (req, res) => {

    const taskId = req.params.id
    const task = await Task.findByIdAndUpdate(req.params.id, req.body)
    await task.save()

    res.send(await Task.findById(taskId))
})

// ------- DELETE A TASK -------------------
router.delete('/tasks/delete/:id', async (req, res) => {

    const taskId = req.params.id
    const task = await Task.findByIdAndDelete(req.params.id)

    res.send("Task " + taskId + " is deleted")
})


module.exports = router