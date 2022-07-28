import React, { useContext } from 'react';
import {TodosContext} from './../../../context';

const ToDoHeader = () => {
  const {length: amountTasks} = useContext(TodosContext)
  
  return (
    <h1>List of tasks: {amountTasks}</h1>
  );
}

export default ToDoHeader;