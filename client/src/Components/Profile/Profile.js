import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

  const [email, setEmail] = useState('')

  useEffect(() => {
    axios(
      {
        method: "GET",
        withCredentials: true,
        url: "http://localhost:3500/user",
      }
    )
    .then((res) => {
      setEmail(JSON.stringify(res.data))
      console.log(res)
    })
  })

  return (
    <div className='container'>
        <h1>Profile</h1>
        { email }
    </div>
  )
}

export default Profile