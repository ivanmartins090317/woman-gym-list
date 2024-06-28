import "./item.css"
const Item = ({quantity, name, handleDelete, handleCheck, Isstored, verifyStored}) =>{
 return( 
    <div 
      className="container-list">
      <input type="checkbox" name="item-list" checked={Isstored} onChange={handleCheck}/>
      <span className={verifyStored}>{quantity} {name}</span>
      <button onClick={handleDelete}>x</button>
    </div>
 )
}

export { Item }