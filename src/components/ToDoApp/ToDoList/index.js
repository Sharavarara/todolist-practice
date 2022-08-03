import React, {useContext} from 'react';
import {TodosContext} from './../../../context';

const ToDoList = () => {
  const [todos, setTodos] = useContext(TodosContext);
  const deleteTask = (id) => {
    setTodos([...todos.filter((task) => task.id !== id)])
  }
  console.log(todos)
  return (
    <ul>
      {todos.map((task) =>
        <li key={task.id}>
          {task.body}
          <button onClick={()=>(deleteTask(task.id))}>x</button>
        </li>
      )}
    </ul>
  );
}

export default ToDoList;