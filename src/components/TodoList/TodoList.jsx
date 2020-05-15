import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todoData, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todoData.map((item) => {
    const { id, ...itemProps } = item;
    return (
        <TodoListItem 
          key={item.id}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onDeleted={() => onDeleted(id)} 
          {...itemProps} 
        />
    );
  });

  return (
    <div className="todo-list">
      <ul>{elements}</ul>
    </div>
  );
};

export default TodoList;
