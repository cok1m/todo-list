import React from "react";
import "./SearchPanel.css";
import StatusFilter from "../StatusFilter/StatusFilter";

const SearchPanel = ({label, setTemplate, filter, filterTodos}) => {
  return (
    <div className="search-panel">
      <div>
        <input 
          placeholder="Search" 
          value={label}
          onChange={(event) => setTemplate(event.target.value)}
          />
      </div>
      <StatusFilter
        filter={filter}
        filterTodos={filterTodos}
      />
    </div>
  );
};

export default SearchPanel;
