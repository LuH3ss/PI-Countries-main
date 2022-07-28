import React from 'react'
import { Link } from 'react-router-dom';

export default function CountryCard(props) {
  
  return (
    <div>
      <img src={`${props.flags}`} alt={`Bandera de ${props.name}`}/>
      <ul>
        <li>{props.name}</li>
        <li>{props.continent}</li>
        <li>{props.population}</li>
      </ul>
      <Link to={`/country/${props.id}`}>
                <button>Mas detalles</button>
      </Link>
    </div>
  )
}
