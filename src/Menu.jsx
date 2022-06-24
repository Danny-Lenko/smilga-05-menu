import React from 'react';

const Menu = ({dishes}) => {
  const allDishes = dishes.map(dish => (
    <div className="menu-item" key={dish.id}>
      <img src={dish.img} alt="" className="photo"/>
      <div className="item-info">
        <header>
          <h4>{dish.title}</h4>
          <p className="price">${dish.price}</p>
        </header>
        <p className="item-text">{dish.desc}</p>
      </div>
    </div>
  ))
  
  return(
    <div className="section-center">
      {allDishes}
    </div>
  )
};

export default Menu;
