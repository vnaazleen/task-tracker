import React from 'react'
import './Task.css'

function Task(props) {


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
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
          &nbsp;&nbsp;
          { props.task.title }
        </h5>
        <p className="card-text">{ props.task.description }</p>
        <span className={` ${ props.task.priority === 0 ? "Important" : props.task.priority === 1 ? "Moderate" : "Later"}`}>{ getPriority(props.task.priority) }</span>
      </div>
    </div>
  )
}

export default Task