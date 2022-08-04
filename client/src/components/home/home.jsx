import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'


const Home = () => {

    return (
        <div className='container'>
            <div className='container_intro'>
            <h1>Hola!</h1>
            <h3>Click en el boton para ingresar 😉</h3>
            <Link to="/countries">
                <button >Paises</button>
            </Link>
            </div>
        </div>
    )



}

export default Home