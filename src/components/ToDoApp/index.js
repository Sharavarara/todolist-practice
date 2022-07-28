import React, {useState} from 'react';
import ToDoForm from './ToDoForm';
import ToDoHeader from './ToDoHeader';
import ToDoList from './ToDoList';
import {TodosContext} from './../../context';

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <TodosContext.Provider value={todos}>
        <ToDoHeader />
        <ToDoForm />
        <ToDoList />
      </TodosContext.Provider>
    </div>
  );
}

export default ToDoApp;
