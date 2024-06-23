import "./item.css"
const Item = ({quantity, name, handleDelete}) =>{
 return(
  <div className="container-main">
    <div 
      className="container-list">
      <input type="checkbox" name="item-list"/>
      <p>{quantity}</p>
      <p>{name}</p>
      <button onClick={handleDelete}>x</button>
    </div>
  </div>
 )
}

export { Item }