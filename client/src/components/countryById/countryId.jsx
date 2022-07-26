import React, {useEffect} from 'react'
import {useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {getById} from '../../redux/actions/index.js'


export default function CountryId() {
    const dispatch = useDispatch()
    const {id } = useParams()
    useEffect(()=> {
        dispatch(getById(id))
    }, [])

    const country = useSelector(state => state.countryDetail)


    console.log(country)


  return (
    <div>
        <h1>{country.name}</h1>
        <img src={`${country.flags}`} alt={`Bandera de ${country.name}`}/>
        <p>Código: {country.id}</p>
        <p>Continente: {country.continents}</p>
        <p>Capital: {country.capital}</p>
        <p>Subregión: {country.subregion}</p>
        <p>Área: {country.area}km²</p>
        <p>Población: {country.population} habitantes</p>
        <p>Actividades: {country.activities}</p>

    </div>
  )
}
