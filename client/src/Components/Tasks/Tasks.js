import React, { Component } from 'react'

import Task from './Task'
import { readTasks } from '../../controller/taskController'

class Tasks extends Component {

  constructor(props) {
    super(props)
    this.state = {
        tasks: []
    };
  }

  componentDidMount() {
    readTasks()
      .then( res => {
        console.log(res.data)
          this.setState({
              tasks: (res.data === "Please login") ? [] : res.data
          })
      })
      .catch( err => console.log(err))
      console.log("Tasks " + this.state.tasks)
  }

  componentDidUpdate() {
    readTasks()
    .then( res => {
        this.setState({
            tasks: res.data === "Please login" ? [] : res.data
        })
    })
    .catch( err => console.log(err))
  }

  taskList = () => this.state.tasks.map(
      (task, index) => <Task key={index} task={task}/>
  )

  render() {
    return (
        <div className='mt-5'>

        <div className='mb-5'>
          <a className='btn btn-primary' href='/add'> <b>+</b> Add Task </a>
        </div>

        {
          this.state.tasks !== [] ? this.taskList() : <p>You don't have any tasks yet</p>
        }
        </div>
    )
  }


}
export default Tasks