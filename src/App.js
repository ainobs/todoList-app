import { useState, useEffect } from 'react';
import './App.css';
import Header from './component/header';
import List from './component/List';
import Footer from './component/Footer';

let App = ()=> {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const temp = localStorage.getItem("list");
    const loadedList = JSON.parse(temp);
    if(loadedList) {
      setTodoList(loadedList);
    }
  }, []);

  useEffect(() => {
    const store = JSON.stringify(todoList);
    localStorage.setItem("list", store);
  }, [todoList]);

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

  const completedItems = () => {
    let hold = [...todoList];
    hold.filter((e) =>  e.completed === true)
  
    setTodoList(hold);
  }

  

  const active = () => {
    let hold = todoList.filter((e) => e.completed === false);
    setTodoList(hold);
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
      setTodoList(checkList)
  }
  
  return (
    <div className="App">
      <Header todo={todo} setTodo={setTodo} submit={handleSubmit} />
      <List items={todoList} deleteItem={handleDelete} editTodo={handleEdit} handleCheck={handleCheckBox}/>
      <Footer items={todoList} completed={completedItems} active={active}/>
    </div>
  );
}

export default App;
