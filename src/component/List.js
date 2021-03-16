import './List.css';

const List = ({items, deleteItem, editTodo, handleCheck}) => {

  
   
    return ( 
        <div className="container">
             {items.map((item) => {
            return <div key={item.id} className="todo-list">
                    <input className="input-checkbox" type="checkbox" onChange={() => {handleCheck(item.id)} }/>
                    <span className="input-text">{item.text}</span>
                    <button className="edit-btn" onClick={() => editTodo(item.id)}>gg</button>
                    <button className="delete-btn" onClick={() => deleteItem(item.id)}>x</button>
                </div>
            
            })}
        </div>
       
    )
}
 
export default List;