import React, {useContext} from 'react';
import {TodosContext} from './../../../context';

const ToDoList = () => {
  const value = useContext(TodosContext);
  return (
    <ul>
      {value.map((task) => <li key={task.id}>{task.body}</li>)}
    </ul>
  );
}

export default ToDoList;