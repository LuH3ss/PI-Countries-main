import React from 'react'
import { Link } from 'react-router-dom';

export default function CountryCard(props) {
  console.log(props.flags)
  return (
    <div>
      <img src={`${props.flags}`} alt={`Bandera de ${props.name}`}/>
      <ul>
        <li>{props.name}</li>
        <li>{props.continent}</li>
      </ul>
      <Link to={`/country/${props.id}`}>
                <button>Mas detalles</button>
      </Link>
    </div>
  )
}
