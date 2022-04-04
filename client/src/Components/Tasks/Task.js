import React from 'react'
import { deleteTask } from '../../controller/taskController'
import { useNavigate } from 'react-router'

import { BsFillPenFill } from "react-icons/bs"
import { BsFillTrashFill } from "react-icons/bs"

import './Task.css'

function Task(props) {

  const navigate = useNavigate()

  function handleDelete() {
    deleteTask(props.task._id)
    .then((res) => console.log(res.data))
    window.location.reload()
  }

  function handleEdit() {
    navigate("/edit/" + props.task._id)
  }

  function getPriority(priority) {
    if (priority === 0) {
      return "Important"
    } else if (priority === 1) {
      return "Moderate"
    } else {
      return "Later"
    }
  }

  return (
    <div className="card mt-2">
      <div className="card-body">
        <h5 className="card-title">
          <input className="form-check-input" type="checkbox" checked={props.task.checked} onChange={() => props.handleCheckTask(props.task._id)}/>
          &nbsp;&nbsp;
          <span className={` ${ props.task.checked ? "striked" : ""}`}>{ props.task.title }</span>
        </h5>
        <p className="card-text">{ props.task.description }</p>

        <div className="components">
            <span>
              <span className={` ${ props.task.priority === 0 ? "Important" : props.task.priority === 1 ? "Moderate" : "Later"}`}>{ getPriority(props.task.priority) }</span>
              { props.task.checked && <span className='completed'>Completed</span>}
            </span>

            <span>
            <button onClick={handleEdit} className='btn btn-warning edit-btn'><BsFillPenFill/></button>
            <button onClick={handleDelete} className='btn btn-danger del-btn'><BsFillTrashFill/></button>
            </span>
        </div>

      </div>
    </div>
  )
}

export default Task