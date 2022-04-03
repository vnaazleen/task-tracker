import React, { useState } from 'react'
import axios from 'axios'
import  { useNavigate  } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword ] = useState('')
  const navigate = useNavigate ()
  var user = null

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios({
      method: "POST",
      data: {
        username: email,
        password: password
      },
      withCredentials: true,
      url: "http://localhost:3500/login",
    })

    // store the user in localStorage
    user = res.data
    console.log(user)
    if(user) {
      localStorage.setItem('user', JSON.stringify(user))
      navigate("/")
    }
  }


  return (
    <div>
      <div className='container mt-5'>
        <h1 className='d-flex justify-content-center lead display-4'>Login</h1>
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
          <button className='btn btn-primary' type='submit'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login