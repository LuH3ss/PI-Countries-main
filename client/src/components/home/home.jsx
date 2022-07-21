import React from 'react';
import { Link } from 'react-router-dom';


export const Home = () => {

    return (
        <div>
            <div>{/**este div tendra img de fondo paises */}
            <h1>Hola!</h1>
            <h3>Click en el boton para ingresar 😉</h3>
            <Link to="/countries">
                <button >Paises</button>
            </Link>
            </div>
        </div>
    )



}