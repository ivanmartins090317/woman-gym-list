import { useState } from 'react'
import { Model } from '../../Model'

import './form.css'

const ids = Array.from({length:10},() => crypto.randomUUID())

const Form = ({onSubmitItem}) =>{
  const [inputValue, setInputValue ] = useState('')
  const [selectValue, setSelectValue] = useState('')
  
  const handleInputValue = e => setInputValue(e.target.value)
  const handleSelectValue = e => setSelectValue(e.target.value)
   
  const handleSubmit = (e) =>{
    e.preventDefault()


    const newItem = new Model(inputValue, selectValue)

    onSubmitItem( newItem )

    setInputValue('')
    setSelectValue('1')
  }

  return(
     <div className="container-form">
     <form onSubmit={handleSubmit}>
      <select value={selectValue} onChange={handleSelectValue}>
       {
        ids.map( (id, index) =>(
          <option key={id} value={index + 1}>{index + 1}</option>
        ))
       }
      </select>
      <input type="text" name='nome' value={inputValue} onChange={handleInputValue}/>
      <button>Adicionar</button>
     </form>
    </div>
  )
}

export { Form }