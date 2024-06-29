import {useState} from "react";

import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Item } from "./components/Item";

const App = () => {
  const [items, setItems] = useState([])
  const [orderBy, SetOrderBy] = useState('newest')

  class Model {
    constructor(name, quantity) {
      this.id = crypto.randomUUID()
      this.name = name
      this.quantity = +quantity
      this.stored = false
    }
  } 

  const handleChangeOrder =(e) => SetOrderBy(e.target.value)

  const sortedItems = orderBy === 'stored'
   ? items.filter(item => item.stored) 
   : orderBy === 'alphabetically'
   ? items.toSorted((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0 )
   : items

  const handleSubmit = (e) =>{
    e.preventDefault()
    const {nome, selectQtd} = e.target.elements
    let name = nome.value
    const quantity = selectQtd.value
    const newItem = new Model(name, quantity)

    setItems(prevState => ([...prevState, newItem] ))
  }
  const handleChecked = (itemID) => 
    setItems(prevState =>
      prevState.map(item => (item.id === itemID ? {...item, stored: !item.stored} : item))
    )

  const deleteItem = (itemID) =>{
   return setItems(items.filter(item => item.id !== itemID))
  }

  return (
    <>
    <Header/>
    <Form handleSubmit={handleSubmit}/>
  <div className="container-main">
    <div className="list">

        {
          sortedItems.map(item =>(
      
              <Item 
              verifyStored={item.stored ? 'isChecked' : " "}
              key={item.id}
              quantity={item.quantity}
              name={item.name}
              Isstored={item.stored}
              handleCheck={() => handleChecked(item.id)}
              handleDelete={() => deleteItem(item.id)}/>

          ))

        }
    </div>
   <div className="filters">
    <select value={orderBy} onChange={handleChangeOrder}>
      <option value="newest">Itens inserido recentemente</option>
      <option value="stored">Itens guardados</option>
      <option value="alphabetically">Organizar por ordem alfabética</option>
    </select>
   </div>
  </div>
    <footer>
      <p>você tem {items.length} items na lista e já guardou tantos %</p>
    </footer>
    </>
  )
}

export { App } 