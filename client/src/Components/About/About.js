import React from 'react'
import './About.css'

function About() {
  return (
    <div className='container mt-3'>
        <p>Hi there! Welcome to Task Tracker app, One place where you can save and filter all your tasks based on priorities</p>
        <div>
            <p className='lead display-6'>Features</p>
            <ul>
                <li>Save your task (with priority)</li>
                <li>Filter your tasks</li>
                <li>Mark task as completed</li>
                <li>Edit your tasks</li>
                <li>Delete your tasks</li>
            </ul>
        </div>
        <p>To get started, <a class="link" href="/register">Register here</a>. If you already have an account, <a class="link" href="/login">Login here</a></p>
    </div>
  )
}

export default About