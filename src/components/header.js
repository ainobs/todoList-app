import './Header.css'
import { IoAdd } from 'react-icons/io5';

const Header = ({ submit, todo, setTodo }) => {
    return ( 
        <div className="header">
            <p className="header-text">TODO</p>
            <form onSubmit={submit} className="form">
                <input 
                    type="text"
                    className="todo-form" 
                    placeholder="Create a new todo..."
                    value= {todo}
                    onChange= {(e)=> {setTodo(e.target.value)}}
                />
                <IoAdd onClick={submit} className="todo-btn" />
            </form>
        </div>
     );
}
 
export default Header;