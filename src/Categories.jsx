import { nanoid } from 'nanoid';
import React from 'react';

const Categories = ({ categories, filterDishes }) => {
  const allCategories = categories.map(category => (
    <button
      key={nanoid()}
      className="filter-btn"
      onClick={ () => filterDishes(category) }
    >
      {category}
    </button>
  ))
  
  return(
    <div className="btn-container">
      <button 
        className="filter-btn"
        onClick={ () => filterDishes() }
      >
        All
      </button>
      { allCategories }
    </div>
  )
};

export default Categories;
