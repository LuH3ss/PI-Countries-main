import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {getName} from '../../redux/actions/index.js'
import './searchBar.css'

export default function SearchBar() {


    const dispatch = useDispatch();
    const [name, setName] = useState("")

    function handleInput(e) {
      e.preventDefault()
      setName(e.target.value)
    }

    function handleSubmit(e) {
      e.preventDefault()
      dispatch(getName(name))
    }

  return (
    <form className='search-container' onSubmit={handleSubmit}>
        <input 
        className='searchbar_input'
        onChange={handleInput}
        type = 'text'
        placeholder = 'Qué país querés ver?'
        />
        <button className='button-84' type = 'submit'>
         Buscar
        </button>
    </form >
  )
}
