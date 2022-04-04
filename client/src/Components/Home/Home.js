import React, { useEffect, useState } from 'react'
import About from '../About/About';

import Tasks from '../Tasks/Tasks'

function Home() {

  const [user, setUser ] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    console.log(loggedInUser)
    if (loggedInUser !== 'undefined') {
      const foundUser = loggedInUser;
      setUser(JSON.parse(foundUser));
    }
  }, []);

  return (
    <div className='container'>
      <div className='mt-5 lead display-5'>Welcome{user ? <span>, {user.nickname}</span> : ""}!</div>
      { user ? <Tasks/> : <About/>}
    </div>
  )
}

export default Home