import React from 'react'
import './Navbar.css'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <header className='header'>
      <div className='nav-logo'>
        <a onClick={() => navigate('/')} href=''>HOME</a>
      </div>
      <div className='navs'>
          <a  onClick={() => navigate('/about')} href=''>ABOUT</a>
          <a onClick={() => navigate('/contacts')} href=''>CONTACT</a>
          <a  onClick={() => navigate('/courses')} href=''>COURSES</a>
      </div>
    </header>
  )
}

export default Navbar