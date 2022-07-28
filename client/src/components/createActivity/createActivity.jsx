import React, { useEffect, useState } from 'react'
import { getActivity, getAllCountries, postActivity } from '../../redux/actions/index.js'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'



export default function CreateActivity() {

    const dispatch = useDispatch()
    const history = useHistory
    const countries = useSelector(state => state.countries)
    //const activities = useSelector(state => state.activities)
    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
    })
    const [incorrect, setIncorrect] = useState(true)

    useEffect(() => {
        //dispatch(getActivity())
        dispatch(getAllCountries())
    }, [dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function handleCountries(e) {
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]//concateno lo que hay en el arreglo y pusheo lo que selecciono
        })
    }

    function handleSubmit(e) {
        dispatch(postActivity(input))
        alert('Actividad creada 🧗‍♀️')
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: []
        })
        history.push('/countries')
    }




    return (
        <div>
            <Link to='/countries'><button>Volver</button></Link>
            <h1>Agregá una actividad</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre de la actividad</label>
                    <input
                        type='text'
                        value={input.name}
                        name='name'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Dificultad</label>
                    <input
                        type='text'
                        value={input.difficulty}
                        name='difficulty'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Duración</label>
                    <input
                        type='text'
                        value={input.duration}
                        name='duration'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Temporada</label>
                    <input
                        type='text'
                        value={input.season}
                        name='season'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Paises donde se realiza la actividad</label>
                    <input
                        type='text'
                        value={input.countries}
                        name='countries'
                    onChange={handleChange}
                    />
                </div>
                <select name='countries' onChange={handleCountries}>
                    {
                        countries.map(c=> {
                            return (
                                <option key={c.id} value={c.name}>{c.name}</option>
                            )
                        })
                    }

                </select>
                <button type='submit' >Crear</button>
            </form>


        </div>
    )
}
