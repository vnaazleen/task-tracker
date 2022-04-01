import React, { useState } from 'react'
import axios from 'axios'

function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword ] = useState('')

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Email: " + email + " Password: " + password)

    axios({
      method: "POST",
      data: {
        username: email,
        password: password
      },
      withCredentials: true,
      url: "http://localhost:3500/register",
    })
    .then((res) => {
      console.log(res.data)
    })
  }


  return (
    <div>
      <div className='container mt-5'>
        <h1 className='d-flex justify-content-center lead display-4'>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className='mt-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='text' name='email' id='email' className='form-control' value={email} onChange={handleEmailChange}/>
          </div>

          <div className='mt-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' name='password' id='password' className='form-control' value={password} onChange={handlePasswordChange}/>
          </div>

          <div className='d-flex justify-content-center mt-5'>
          <button className='btn btn-primary' type='submit'>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register