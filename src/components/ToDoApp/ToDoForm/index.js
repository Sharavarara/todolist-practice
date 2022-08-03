import React, {useContext,useState} from 'react';
import { Formik, Form, Field } from 'formik';
import {TodosContext} from './../../../context';

const ToDoForm = () => {
  const [todos, setTodos] = useContext(TodosContext)
  const addTask = (value,formikBag) => {
    const newTask = {
      id: Date.now(),
      body: value.body,
      isDone: false
    }
    setTodos([...todos, newTask]);
    formikBag.resetForm();
    
  }
  return (
    <Formik
      onSubmit={addTask}
      initialValues={{body:''}}
    >
      {(formikProps) => {
        return (
          <Form>
            <Field
              name='body'
              type='text'
              placeholder='Type your task'
            />
            <Field
              type='submit'
              name='submitTask'
              value='Add'
            />
          </Form>
        )
      }}
    </Formik>
  );
}

export default ToDoForm;