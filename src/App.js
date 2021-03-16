import { useState } from 'react';
import './App.css';
import Header from './component/header';
import List from './component/List';

let App = ()=> {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  let handleSubmit = (e)=> {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      text: todo,
      completed: false
    }

    // TO ALLOW ONLY TEXTS TO BE INSERTED INTO THE TODO LIST
    if(todo !== '') {
      setTodoList([...todoList, newItem]);
      setTodo('');
    }
  }

  //DELETE ITEM FUNCTION
  let handleDelete = (id) => {
    let deleteItem = todoList.filter((e)=> e.id !== id);
    setTodoList(deleteItem);
  }

  //HANDLE EDIT FUNCTION
  let handleEdit = (id) => {
    let deleteItem = todoList.filter((e)=> e.id !== id);
    let edit = todoList.find((e) => e.id === id)
    setTodo(edit.text);
    setTodoList(deleteItem);
  }

  //HANDLE CHECKBOX FUNCTION
  let handleCheckBox = (id) => {
      let checkList = todoList.map((item) => {
        if(item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
      setTodoList(checkList);
  }
  
  return (
    <div className="App">
      <Header todo={todo} setTodo={setTodo} submit={handleSubmit} />
      <List items={todoList} deleteItem={handleDelete} editTodo={handleEdit} handleCheck={handleCheckBox}/>
    </div>
  );
}

export default App;
