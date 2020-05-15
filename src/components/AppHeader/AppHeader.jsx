import React from "react";
import "./AppHeader.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header">
      <h1>Todo List</h1>
  <p>Left: <b>{toDo}</b> Done: <b>{done}</b></p>
    </div>
  );
};

export default AppHeader;
