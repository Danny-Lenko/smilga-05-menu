import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [dishes, setDishes] = useState(items)
  const [categories, setCategories] = useState(determineCategories())
  
  function determineCategories() {
    return [...new Set(items.map(item => item.category))]
  }

  function filterDishes(category) {
    if (!category) return setDishes(items)
    setDishes(items.filter(dish => dish.category === category))
  }

  return(
    <main>
      <section className="menu section">
        
        <div className="title">
          <h2>our menu</h2>
          <p className="underline"></p>
        </div>

        <Categories 
          categories={categories} 
          filterDishes={filterDishes} 
        />

        <Menu
          dishes={dishes}
        />
        
      </section>
    </main>
  )
}

export default App;
