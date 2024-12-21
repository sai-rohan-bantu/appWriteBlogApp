import React from 'react'
import logo from '../assets/Logo.jpeg';

function Logo({width = '100px',
}) {
  return (
    <div>
      <img className="h-10 w-10 object-contain" src={logo} alt="Blog" />
    </div>
  )
}

export default Logo