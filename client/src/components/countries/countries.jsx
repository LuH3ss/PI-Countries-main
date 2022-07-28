import React, { useState } from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getAllCountries, getByContinent, getOrdered, getByPopulation, getByActivity} from '../../redux/actions/index.js'
import CountryCard from '../country/countryCard';
import Paginator from '../paginado/Paginator.jsx';
import SearchBar from '../SearchBar/searchBar.jsx';



export default function Countries () {
    const continents = ['South America', 'Asia', 'Africa', 'Europe', 'Oceania', 'North America' ]


    const dispatch = useDispatch()//acceso a dispatch function del store
    const allCountries = useSelector((state) => state.countries); //ahora tengo acceso a un estado global(que viene del store) en este componente local

    const [page, setPage] = useState(1) //en qué pag estoy
    const[countriesPP, setCountriesPP] = useState(10) //cuantos countrys por pag tengo

    const handleOrdered = (e) => {
      dispatch(getOrdered(e.target.value))
    }

    const handleContinent = (e) => {
     // if(e.target.value === 'Todos') dispatch(getAllCountries())  
      dispatch(getByContinent(e.target.value))
    }

    const handlePoblation = (e) => {
      dispatch(getByPopulation(e.target.value))

    }

    const handleByAct = (e) => {
      dispatch(getByActivity(e.target.value))
    }


    useEffect(() => {
      dispatch(getAllCountries())// este dispatch está aca por la razon de que queremos que se dispache al cargar el componente
    },[dispatch])//asi vacio digo q se actualice 1 sola vez

    const indexLastCountry = page * countriesPP// la pagina en la que estoy por la cant de countrys que tengo por pagina
    const indexFirstCountry = indexLastCountry - countriesPP //el valor del ultimo (country) menos el de los items por pagina
    const countriesAtPage = allCountries.slice(indexFirstCountry, indexLastCountry)//countrys a renderizar


    const paginator = (e) => {
      setPage(e.target.value)
      setCountriesPP(10)
    }





  return (
    <div>
        <h1>Los paises</h1>
        <Paginator
        allCountries={allCountries.length}
        countrysPP = {countriesPP}
        paginator = {paginator}
        />
        <SearchBar/>
        <div>
          <select onChange={handleOrdered}>
            <option value='ascendente'>Orden Ascendente</option>
            <option value='descendente'>Orden Descendente</option>
          </select>
          <select onChange={handleByAct}>
            <option value='Todos'>Todos</option>
            <option value='actividades'>Con Actividades</option>
          </select>
          <select onChange={handleContinent}>
           {/* <option value='allCountries'>Todo los paísses</option> */}
             <option value='Todos'>Todos</option>
             {
             continents.map(c => {
              return (
                <option key={c} value={c}>{c}</option>
              )
             })
             }
             {/* <option value='byActivity'>Por Actividad</option> */}
          </select>
          <select onChange={handlePoblation}>
             <option value='Todos'>Todos</option>
             <option value='less_population'>Por menor población</option>
             <option value='more_population'>Por mayor población</option>
          </select>
        </div>
        {countriesAtPage.map(({id, name, flags, continents, population})=> {
            return <CountryCard
            key = {id}
            id = {id}
            name = {name}
            flags = {flags}
            continent = {continents}
            population = {population}
            />
        })
        }
    </div>
  )
}


