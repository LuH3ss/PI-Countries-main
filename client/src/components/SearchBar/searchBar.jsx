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
    <form onSubmit={handleSubmit}>
        <input
        onChange={handleInput}
        type = 'text'
        placeholder = 'Qué país querés ver?'
        className='searchbar_input'
        />
        <button className='button-54' type = 'submit'>
         Buscar
        </button>
    </form >
  )
}
