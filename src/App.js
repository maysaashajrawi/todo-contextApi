import React from 'react';
import './App.css';

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {TaskProvider} from './components/TasksContext';
function App() {
  return (
    <TaskProvider>
      <div className="App">
      <h1>Todo List</h1>
            <TodoForm/>
            <TodoList/>

      </div>
    </TaskProvider>
    
  );
}

export default App;
