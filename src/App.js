import { useState } from 'react';
import './App.css';

let App = ()=> {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  let handleSubmit = (e)=> {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      text: setTodo
    }
    setTodoList([...todoList, newItem]);
    setTodo('');
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Create a new todo..."
          value= {todo}
          onChange= {(e)=> {setTodo(e.target.value)}}
        />
        <button>+</button>
      </form>
      
    </div>
  );
}

export default App;
