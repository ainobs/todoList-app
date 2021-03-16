import './Header.css'
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
                <button type="submit" className="todo-btn">+</button>
            </form>
        </div>
     );
}
 
export default Header;