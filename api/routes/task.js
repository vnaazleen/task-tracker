const express = require('express')
const router = express.Router()

const Task = require('../model/task')

// ------- ADD A TASK -------------------
router.post('/tasks/add', async (req, res) => {
    if(req.isAuthenticated()) {
        const task = await new Task({
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            userId: req.user.id
        })
        await task.save()
        console.log(task)
        res.send(task)
    } else {
        res.send("Please login")
    }

})

// ------- GET ALL TASKS -------------------
router.get('/tasks', async (req, res) => {
    //console.log(req.user)
    if(req.isAuthenticated()) {
        const tasks = await Task.find({ userId: req.user.id })
        res.send(tasks)
    } else {
        res.send("Please login")
    }

})

// ------- GET A TASKS -------------------
router.get('/tasks/:id', async (req, res) => {
    if(req.isAuthenticated()) {
        const task = await Task.findById(req.params.id)
        res.send(task)
    } else {
        res.send("Please login")
    }

})

// ------- EDIT A TASK -------------------
router.put('/tasks/edit/:id', async (req, res) => {
    console.log(req.body)
    if(req.isAuthenticated()) {
        const taskId = req.params.id
        const task = await Task.findByIdAndUpdate(req.params.id, req.body)
        await task.save()

        console.log(task)

        res.send(await Task.findById(taskId))
    } else {
        res.send("Please login")
    }
})

// ------- DELETE A TASK -------------------
router.delete('/tasks/delete/:id', async (req, res) => {

    if(req.isAuthenticated()) {
        const taskId = req.params.id
        const task = await Task.findByIdAndDelete(req.params.id)

        res.send("Task " + taskId + " is deleted")
    } else {
        res.send("Please login")
    }
})


module.exports = router