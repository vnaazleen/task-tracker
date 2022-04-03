import React, { useState } from 'react'
import  { useNavigate  } from 'react-router-dom'

import { createTask } from '../../controller/taskController'

function AddTask() {

  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ priority, setPriority ] = useState(0)
  const navigate = useNavigate()

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }

  function handleDescriptionChange(e) {
      setDescription(e.target.value)
  }

  function handlePriorityChange(e) {
        setPriority(Number(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
        title: title,
        description: description,
        priority: priority
    }
    createTask(data)
    .then((res) => {
        console.log(res.data)
    })

    navigate("/")
  }

  return (
    <div className='container'>
      <div className='mt-5'>
        <h1 className='d-flex justify-content-center lead display-4'>Add Task</h1>
        <form onSubmit={handleSubmit}>
          <div className='mt-3'>
            <label htmlFor='title' className='form-label'>Title</label>
            <input type='text' name='title' id='title' className='form-control' value={title} onChange={handleTitleChange}/>
          </div>

          <div className='mt-3'>
            <label htmlFor='description' className='form-label'>Description</label>
            <input type='description' name='description' id='description' className='form-control' value={description} onChange={handleDescriptionChange}/>
          </div>

          <div className='mt-3'>
            <label htmlFor='priority' className='form-label'>Priority</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="priority" id="0" value="0" onChange={handlePriorityChange} checked/>
                    <label className="form-check-label" htmlFor="0">
                        Highly Important
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="priority" onChange={handlePriorityChange} id="1" value="1"/>
                    <label className="form-check-label" htmlFor="1">
                        Moderate Important
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="priority" onChange={handlePriorityChange} id="2" value="2"/>
                    <label className="form-check-label" htmlFor="2">
                        Sometime Later
                    </label>
                </div>

                <div className='d-flex justify-content-center mt-5'>
                    <button className='btn btn-primary' type='submit'>Add</button>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask