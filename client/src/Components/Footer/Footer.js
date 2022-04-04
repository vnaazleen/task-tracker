import React from 'react'

import { FaHeart } from 'react-icons/fa';

import './Footer.css'

function Footer() {
  return (
    <div className='container footer'>
        <p>&copy; Made with <FaHeart/> by <a class="link" href="https://github.com/vnaazleen" target="_blank">Vaseem Naazleen Shaik</a></p>
    </div>
  )
}

export default Footer