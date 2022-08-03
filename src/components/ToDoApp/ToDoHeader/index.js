import React, { useContext } from 'react';
import {TodosContext} from './../../../context';

const ToDoHeader = () => {
  const [todos] = useContext(TodosContext)
  
  return (
    <h1>List of tasks: {todos.length}</h1>
  );
}

export default ToDoHeader;