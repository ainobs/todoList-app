import './List.css';
import { FaTrash, FaRegEdit } from 'react-icons/fa';
import FlipMove from 'react-flip-move';

const List = ({items, deleteItem, editTodo, handleCheck}) => {
 
    return ( 
        <div className="container">
            <p className="list-text">What Are You Doing Today ?</p>
            <FlipMove duration={300} easing='ease-in-out'>
                {items.map((item) => {
                    return <div key={item.id} className="todo-list">
                        <input type="checkbox" checked={item.completed} className="input-checkbox" onChange={() => {handleCheck(item.id)} } />
                        <span className={item.completed ? 'active' : 'input-text'}>{item.text}</span>
                        <FaRegEdit className="edit-btn" onClick={() => editTodo(item.id)} />
                        <FaTrash className="delete-btn" onClick={() => deleteItem(item.id)} />
                    </div>
                
                })}
            </FlipMove>
            
        </div>
    )
}
 
export default List;