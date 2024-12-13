import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]); 
  const [title, setTitle] = useState('');


  function addTodo(todoText) {
    const newTodo = { id: uuidv4(), text: todoText, completed: false };
    setTodos([...todos, newTodo]);
  }

  function handleCheck(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div className="App">
      <Header />
      <Form handleSubmit={handleSubmit} title={title} setTitle={setTitle} />
      <TodoList todos={todos} handleCheck={handleCheck} />
    </div>
  );
}

export default App;