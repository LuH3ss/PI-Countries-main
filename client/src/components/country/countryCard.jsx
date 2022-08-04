import React from 'react'
import { Link } from 'react-router-dom';
import './countryCards.css'
export default function CountryCard(props) {
  
  return (
    <div className='country_card'>
      <img src={`${props.flags}`} alt={`Bandera de ${props.name}`}/>
      <ul>
        <li>Nombre: {props.name}</li>
        <li>Contiente: {props.continent}</li>
        <li>Habitantes: {props.population} </li>
      </ul>
      <Link to={`/country/${props.id}`}>
                <button>Mas detalles</button>
      </Link>
    </div>
  )
}
