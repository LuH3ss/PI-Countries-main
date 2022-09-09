import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './noResults.css'

export default function NoResults() {
  return (
    <div>
        <div className='empty-container'>
            <h5>Este pais todavia no tiene actividades</h5>
            <p>Si quieres, puedes <button className='button-84'>
                <NavLink style={{textDecoration: 'none', color: 'white'}} to='/activity'>
                Crear una Actividad Nueva
                </NavLink>
                </button></p>

        </div>

    </div>
  )
}
