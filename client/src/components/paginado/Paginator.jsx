import React from 'react'
import './paginator.css'

export default function Paginator({countrysPP, allCountries, paginator}) {

    const pages = []


    for (let i = 0; i <= Math.ceil(allCountries/countrysPP); i++) {
        pages.push(i + 1)
        
    }


    return (
        <nav>
            <ul className='paginator'>
                {
                    pages && pages.map(num => (
                        <li className='num' value ={num} key={num} onClick={paginator}>
                             {num}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
