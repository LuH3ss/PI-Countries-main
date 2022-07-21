import React from 'react'

export default function CountryCard(props) {
  console.log(props.flags)
  return (
    <div>
      <img src={`${props.flags}`} alt={`Bandera de ${props.name}`}/>
      
      <ul>
        <li>{props.name}</li>
        <li>{props.continent}</li>
      </ul>
      <button>Más detalles</button>
    </div>
  )
}
