import React, { useState } from 'react';
import './App.css';

function InputTodo({ onComplete }) {
  const [todo, setTodo] = useState('')

  const handleAddTodo = () => {
    onComplete && onComplete(todo)
    setTodo('')
  }

  return (
    <div>
      <input type="text" value={todo} onChange={event => setTodo(event.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

function Todo() {
  const [todos, setTodos] = useState([])
  const [state, setState] = useState('')
  const handleAddTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const renderTodo = (t, tIndex) => (
    <div
      key={tIndex}
      style={{ backgroundColor: 'gray' }}>
      {t}
    </div>
  )

  return (
    <div style={{ padding: 30, backgroundColor: 'gray' }}>
      <InputTodo onComplete={handleAddTodo} />
      { todos.map(renderTodo) }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
