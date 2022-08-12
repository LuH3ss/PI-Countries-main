import React, { useEffect, useState } from 'react'
import {  getAllCountries, postActivity } from '../../redux/actions/index.js'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './createAct.css'



export default function CreateActivity() {

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    //const activities = useSelector(state => state.activities)

    const [errorButton, setErrorButton] = useState(true)
    const [formErrors, setFormErrors] = useState({
        name: '',
        season: '',
        difficulty: '',
        duration:''
    })
    
    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
    })


    useEffect(() => {
        //dispatch(getActivity())
        dispatch(getAllCountries())
    }, [dispatch])

    useEffect(() => {
       
    },[errorButton])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setFormErrors(validate(input))
      
        if(Object.keys(formErrors).length === 0) {
          
            setErrorButton(false)
        }
    }
    function handleCountries(e) {
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]//concateno lo que hay en el arreglo y pusheo lo que selecciono
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postActivity(input))
        alert('Actividad creada 🧗‍♀️')
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: []
        })
    }

    function handeClean() {
        setInput({
            countries:[]
        })
    }

    function validate(data) {
        let errors = {}
        if(validName(data.name)) errors.name = "Ingresar 3 caracteres minimo"
        if(validSeason(data.season)) errors.season = "Ingresa una temporada válida"
        if(validDuration(data.duration)) errors.duration = "De 00hs a 24hs. Incluí el 'hs'"
        if(validDifficulty(data.difficulty)) errors.difficulty = "Solo ingresar del 1 al 5"
        return errors
    }

    function validName(str) {
        if (typeof str !== 'string') return true
        if(str.length < 3) return true
    }

    function validSeason(str) {
        if (typeof str !== 'string') return true
     //   if (str !== 'Verano' || str !== 'Invierno' || str !== 'Otoño' || str !== 'Primavera') return true
    }

    function validDuration(str) {
        if (typeof str !== 'string') return true
    }

    function validDifficulty(num) {
      //  if (typeof num !== 'number') return true
        if(num > 5 || num < 1) return true
    }

    // function validateCountries (num) {
    // }




    return (
        <div className='create_section'>
            <div className='envolved_frame'>
            <div className='form_title'>
                <h1>Agregá una actividad</h1>
            </div>
            <div className='form_frame'>
            <p>
                Para crear una actividad turistica debes llenar este formulario. 🗓️🖋️
            </p>
            <form onSubmit={handleSubmit} className='form_container'>
                <div>
                    <label>Nombre de la actividad</label>
                    <input
                        type='text'
                        value={input.name}
                        name='name'
                        onChange={handleChange}
                        required
                        />
                    {
                        formErrors.name ?
                        <span style={{color:"red"}}>{formErrors.name}</span> :
                        false
                    }
                </div>
                <div>
                    <label>Dificultad</label>
                    <input
                        type='number'
                        value={input.difficulty}
                        name='difficulty'
                        onChange={handleChange}
                        required
                        />
                    {
                        formErrors.difficulty ?
                        <span style={{color:"red"}}>{formErrors.difficulty}</span> :
                        false
                    }
                </div>
                <div>
                    <label>Duración</label>
                    <input
                        type='number'
                        value={input.duration}
                        name='duration'
                        onChange={handleChange}
                        required
                        />
                    hs
                    {
                        formErrors.duration ?
                        <span style={{color:"red"}}>{formErrors.duration}</span> :
                        false
                    }
                </div>
                <div>
                    <label>Temporada</label>
                    <select 
                        name='season'
                        onChange={handleChange}
                        required
                        >
                        <option value="-1">Temporada</option>
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">Invierno</option>
                        <option value="Primavera">Primavera</option>
                        </select>
                        {
                            formErrors.season ? 
                            <span style={{color:"red"}}>{formErrors.season}</span> :
                            false
                        }
                </div>
                <div>
                    <label>Paises</label>
                    <input
                        type='text'
                        value={input.countries}
                        name='countries'
                        onChange={handleChange}
                        required
                        disabled={true}
                        />
                </div>
                <select name='countries' onChange={handleCountries}>
                    {
                        countries.map(c => {
                            return (
                                <option key={c.id} value={c.name}>{c.name}</option>
                                )
                            })
                        }
                </select>
                <button className='button-27' type='button' onClick={handeClean}>Limpiar selección de paises</button>
                <button className='button-27' type='submit' disabled={errorButton}>Crear</button>
                <Link to='/countries'><button className='button-27'>Volver</button></Link>
            </form>
        </div>
                            </div>
        </div>
    )
}
