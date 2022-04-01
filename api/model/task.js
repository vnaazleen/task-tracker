const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }, 
    priority: {
        type: Number,
        default: 0
    }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task