import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'


export default function Navbar() {
  return (
    <div className='navbar'>
    
          <span className='home-title'>World Trip App</span>
      
        <Link to='/'>
            <button>Home</button>
        </Link>
        <Link to='/countries'>
            <button>Paises</button>
        </Link>
        <Link to='/activity'>
            <button>Crear Actividad</button>
        </Link>
     
    </div>
  )
}
