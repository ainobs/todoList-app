import { useState, useEffect } from 'react';
import Header from './components/header';
import List from './components/List';
import Footer from './components/Footer';

const App = ()=> {

  // SETTING STATES TO KEEP TRACK OF USER INPUTS AND UPDATE LIST
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  //RETRIEVING USER DATA STORED IN THE LOCAL STORAGE
  useEffect(() => {
    const temp = localStorage.getItem("list");
    const loadedList = JSON.parse(temp);
    if(loadedList) {
      setTodoList(loadedList);
    }
  }, []);

  //SAVING USER DATA IN THE LOCAL STORAGE WHICH IS SAVED WHENEVER THERE IS A CHANGE IN THE LIST ITEMS
  useEffect(() => {
    const store = JSON.stringify(todoList);
    localStorage.setItem("list", store);
  }, [todoList]);

  //FUNCTION TO HANDLE FORM SUBMISSION
  const handleSubmit = (e)=> {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      text: todo,
      completed: false
    }

    // TO PREVENT EMPTY SPACES TO BE INSERTED INTO THE TODO LIST
    if(todo !== '') {
      setTodoList([...todoList, newItem]);
      setTodo('');
    }
  }

  //DELETE ITEM FUNCTION
  const handleDelete = (id) => {
    let deleteItem = todoList.filter((e)=> e.id !== id);
    setTodoList(deleteItem);
  }

  //HANDLE EDIT FUNCTION WHICH REMOVES THE ITEM FROM THE LIST AND 
  //RETURNS IT BACK TO THE INPUT FORM WHERE CORRECTIONS CAN BE MADE
  const handleEdit = (id) => {
    let deleteItem = todoList.filter((e)=> e.id !== id);
    let edit = todoList.find((e) => e.id === id)
    setTodo(edit.text);
    setTodoList(deleteItem);
  }

  //HANDLE CHECKBOX FUNCTION
  const handleCheckBox = (id) => {
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
      <Footer items={todoList} />
    </div>
  );
}

export default App;
