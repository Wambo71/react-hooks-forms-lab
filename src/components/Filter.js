// src/components/Filter.js
import React from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  function handleSearchInputChange(e) {
    onSearchChange(e.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearchInputChange}
      />
      <select name="filter" onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
