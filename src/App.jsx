import {useState} from "react";

import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Item } from "./components/Item";


const Footer = ({items}) => {
  const totalItems = items.reduce((acc, item) => item.stored ? acc + 1 : acc, 0)
  const percetItemsStored = ((totalItems / items.length) * 100).toFixed(0)
  const singularOurPlural = items.length === 1 ? 'item' : 'Items'

  return(
    <footer>
      <p>
        {`Você possui ${items.length} ${singularOurPlural} na lista`}
        {items.length > 0 && <span> já guardou {totalItems} de ({percetItemsStored} %)</span>}
      </p>
    </footer>
  )
}

const App = () => {
  const [items, setItems] = useState([])
  const [orderBy, SetOrderBy] = useState('newest')


  const handleSubimitItem = (item) => setItems(prevState => [...prevState, item])
  const handleChangeOrder = (e) => SetOrderBy(e.target.value)

  const sortedItems = orderBy === 'stored'
   ? items.filter(item => item.stored) 
   : orderBy === 'alphabetically'
   ? items.toSorted((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0 )
   : items


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
    <Form onSubmitItem={handleSubimitItem}/>
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
  
   <Footer items={items} />
    </>
  )
}

export { App } 