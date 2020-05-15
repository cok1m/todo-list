import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ done, important, label, onDeleted, onToggleDone, onToggleImportant }) => {

  const classNames = ["todo-list-item"];
  if (done) classNames.push("done");
  if (important) classNames.push('important')

  return (
    <li className={classNames.join(" ")}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}
      >
        {label}
      </span>
      <span>
      <button 
          className="button-important"
          onClick={onToggleImportant}  
        >
          <i className="fa fa-exclamation" />
        </button>
        <button 
          className="button-delete"
          onClick={onDeleted}
        > 
          <i className="fa fa-trash-o" />
        </button>
      </span>
    </li>
  );
};

export default TodoListItem;
