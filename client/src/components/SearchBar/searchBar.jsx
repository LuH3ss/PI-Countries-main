import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {getName} from '../../redux/actions/index.js'
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
        //value={name}
        onChange={handleInput}
        type = 'text'
        placeholder = 'Qué país querés ver?'
        />
        <button type = 'submit' >
         Buscar
        </button>
    </form >
  )
}
