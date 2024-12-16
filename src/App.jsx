import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

const LSKEY = 'MyTodoList.todos';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(LSKEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  }) 
  const [title, setTitle] = useState('');

  useEffect(() => {
    localStorage.setItem(LSKEY, JSON.stringify(todos));
  }, [todos]);


  function addTodo(todoText) {
    const newTodo = { id: uuidv4(), text: todoText, completed: false };
    setTodos([...todos, newTodo]);
  }

  function handleCheck(id) {
    const updatedTodos = todos.find((todo) => todo.id === id);
    if (updatedTodos) {
      updatedTodos.completed = !updatedTodos.completed;
      setTodos([...todos]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  function removeTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <Header />
      <Form handleSubmit={handleSubmit} title={title} setTitle={setTitle} />
      <TodoList todos={todos} handleCheck={handleCheck} removeTodo={removeTodo} />
    </div>
  );
}

export default App;