import React from "react";
import "./StatusFilter.css";

const StatusFilter = ({ filter, filterTodos }) => {
  const buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  return (
    <div className="status-filter">
      {buttons.map(({ name, label }) => {
        return (
          <button
            key={name}
            onClick={() => filterTodos(name)}
            className={filter === name ? "button-active" : ""}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default StatusFilter;
