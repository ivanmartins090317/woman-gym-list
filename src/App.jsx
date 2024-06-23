import {useState} from "react";

import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Item } from "./components/Item";

const App = () => {
  const [items, setItems] = useState([])

  class Model {
    constructor(name, quantity) {
      this.id = crypto.randomUUID()
      this.name = name
      this.quantity = quantity
    }
  } 

  const handleSubmit = (e) =>{
    e.preventDefault()
    const {nome, select} = e.target.elements
    const name = nome.value
    const quantity = select.value
    const newItem = new Model(name, quantity)
    console.log(newItem);
    setItems(prevState => ([...prevState, newItem] ))
  }

  const deleteItem = (itemID) =>{
   return setItems(items.filter(item => item.id !== itemID))
  }
  return (
    <>
    <Header/>
    <Form handleSubmit={handleSubmit}/>
   {
    items.map(item =>(
      <Item key={item.id} quantity={item.quantity} name={item.name} handleDelete={() => deleteItem(item.id)}/>
    ))

   }
    <footer>
      <p>você tem {items.length} items na lista e já guardou tantos %</p>
    </footer>
    </>
  )
}

export { App } 