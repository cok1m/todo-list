import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = ({onAddTodo}) => {
  const [label, setLabel] = useState('')

  const onLabelChange = (event) => {
    setLabel(event.target.value)
  }

  const onSumbitHandler = (event) => {
    event.preventDefault()
    onAddTodo(label)
    setLabel('')
  }

  return (
    <form 
      onSubmit={onSumbitHandler}
      className="add-todo">
      <input 
        type="text" 
        placeholder="Add new todo"
        onChange={onLabelChange}
        value={label}
        required
      />
      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;
