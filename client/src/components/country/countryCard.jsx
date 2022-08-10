import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./countryCards.css";
export default function CountryCard(props) {
  return (
    <div className="country_card">
      <img src={`${props.flags}`} alt={`Bandera de ${props.name}`} />
      <ul>
        <li>Nombre: {props.name}</li>
        <li>Contiente: {props.continent}</li>
        <li>Habitantes: {props.population} </li>
      </ul>
      <NavLink className="more_detail" to={`/country/${props.id}`}>
        <button className="button-84">Más detalles</button>
      </NavLink>
    </div>
  );
}
