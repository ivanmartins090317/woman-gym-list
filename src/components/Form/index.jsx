import './form.css'

const ids = Array.from({length:10},() => crypto.randomUUID())

const Form = ({handleSubmit}) =>{
  return(
     <div className="container-form">
     <form onSubmit={handleSubmit}>
      <select name="selectQtd">
       {
        ids.map( (id, index) =>(
          <option key={id} value={index + 1}>{index + 1}</option>
        ))
       }
      </select>
      <input type="text" name='nome'/>
      <button>Adicionar</button>
     </form>
    </div>
  )
}

export { Form }