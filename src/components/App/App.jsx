import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import AddTodo from "../AddTodo/AddTodo.jsx";

const App = () => {
  const [template, setTemplate] = useState("");
  const [filter, setFilter] = useState("all");
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodoData(todos);
    }
  }, []);

  const deleteItem = (id) => {
    const newTodos = todoData.filter(todo => todo.id !== id)
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setTodoData(newTodos);
  };

  const addItem = (label) => {
    const id = Math.round(Math.random() * 10000);
    const newTodoData = [...todoData];
    newTodoData.push({ id: id, label: label, done: false, important: false });
    localStorage.setItem("todos", JSON.stringify(newTodoData));
    setTodoData(newTodoData);
  };

  const toggleProperty = (arr, id, propName) => {
    const todos = [...arr];
    todos.forEach((todo) =>
      todo.id === id ? (todo[propName] = !todo[propName]) : todo
    );
    return todos;
  };

  const onToggleDone = (id) => {
    const newTodos = toggleProperty(todoData, id, "done")
    console.log(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setTodoData(newTodos);
  };

  const onToggleImportant = (id) => {
    const newTodos = toggleProperty(todoData, id, "important")
    console.log(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setTodoData(newTodos);
  };

  const filterTodos = (filter) => {
    setFilter(filter);
  };

  const doneCount = todoData.filter((todo) => todo.done).length;

  const toDoCount = todoData.length - doneCount;

  let visibleItems = todoData;
  if (template.trim().length > 0) {
    visibleItems = todoData.filter((todo) =>
      todo.label.toLowerCase().includes(template.toLowerCase())
    );
  }
  if (filter === "done") {
    visibleItems = visibleItems.filter((todo) => todo.done);
  } else if (filter === "active") {
    visibleItems = visibleItems.filter((todo) => !todo.done);
  }

  return (
    <div className="container">
      <AppHeader toDo={toDoCount} done={doneCount} />
      <SearchPanel
        template={template}
        setTemplate={setTemplate}
        filterTodos={filterTodos}
        filter={filter}
      />
      <TodoList
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
        onDeleted={deleteItem}
        todoData={visibleItems}
      />
      <AddTodo onAddTodo={addItem} />
    </div>
  );
};

export default App;
