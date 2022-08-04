import React from 'react'
import './paginator.css'

export default function Paginator({ allCountries, paginator, nineCountries = 9, tenCountries}) {

    const pages = []


    for (let i = 1; i <= Math.ceil((((allCountries - nineCountries)/tenCountries)) + 1); i++) {
        pages.push(i )

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
