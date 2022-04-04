import React, { useState } from 'react'

import Task from './Task'
import './Task.css'
import { readTasks, editTask } from '../../controller/taskController'

function Tasks() {

  const [ tasks, setTasks ] = useState([])
  const [ displayTasks, setDisplayTasks ] = useState([])
  const [ typeOfTasks, setTypeOfTasks ] = useState("4")

  useState(() =>  {
    readTasks()
    .then(res => {
          if(res.data !== "Please login") {
            setTasks(res.data)
            setDisplayTasks(res.data)
          }
    })
    .catch( err => console.log(err))
    console.log(tasks)
  }, [])

  function taskList() {
    return displayTasks.map(
      (task, index) => <Task key={index} handleCheckTask={checkTask} task={task}/>
    )
  }

  function checkTask(id) {
    tasks.map(async (task) => {
      if(task._id === id) {
        task.checked = !task.checked

        await editTask({
          title: task.title,
          description: task.description,
          priority: task.priority,
          checked: !task.checked
        }, task._id ).then((res) => {
          console.log(res.data)
        })
      }

      return task
    })

    filterTasksOnType(typeOfTasks)
    console.log(displayTasks)
  }

  function handleChangeTasks(e) {
    filterTasksOnType(e.target.value)
  }

  function filterTasksOnType(type) {
    var filteredTasks
    if(type === "4") {
      filteredTasks = tasks
    } else if(type === "3") {
      filteredTasks = tasks.filter((task) => task.checked)
    } else if (type !== "4") {
      filteredTasks = tasks.filter((task) => task.priority === Number(type))
    } 

    setDisplayTasks([...filteredTasks])
    setTypeOfTasks(type)

    console.log(type)
    console.log(displayTasks)
  }

  return (
      <div className='mt-5'>

      <div className='tasks-header mb-5'>
        <a className='btn btn-primary' href='/add'> <b>+</b> Add Task </a>

        <select className="btn custom-select" value={typeOfTasks} onChange={handleChangeTasks}>
          <option value="4">All tasks</option>
          <option value="0">Important</option>
          <option value="1">Moderate</option>
          <option value="2">Later</option>
          <option value="3">Completed</option>
        </select>
      </div>

      {
        displayTasks !== [] ? taskList() : <p>You don't have any tasks yet</p>
      }
      </div>
  )
}
export default Tasks