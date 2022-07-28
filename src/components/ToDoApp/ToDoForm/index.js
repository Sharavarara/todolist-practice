import React from 'react';
import {Formik,Form,Field} from 'formik';

const ToDoForm = () => {
  return (
    <Formik>
      <Form>
        <Field
          type='text'
          placeholder='Type your task'
        />
        <Field
          type='submit'
          name='submitTask'
          value='Add'
        />
      </Form>
    </Formik>
  );
}

export default ToDoForm;