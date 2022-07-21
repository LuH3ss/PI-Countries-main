import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getAllCountries} from '../../redux/actions/index.js'
import CountryCard from '../country/countryCard';



export default function Countries () {


    const allCountries = useSelector((state) => state.countries); //ahora tengo acceso a un estado global(que viene del store) en este componente local
    const dispatch = useDispatch()//acceso a dispatch function del store
    useEffect(() => {
        dispatch(getAllCountries())// este dispatch está aca por la razon de que queremos que se dispache al cargar el componente
    },[])//asi vacio digo q se actualice 1 sola vez

  return (
    <div>
        <h1>Los paises</h1>
        {allCountries.map(({id, name, flags, continents})=> {

            return <CountryCard
            key = {id}
            
            name = {name}
            flags = {flags}
            continent = {continents}
            />
        })
        }
    </div>
  )
}


