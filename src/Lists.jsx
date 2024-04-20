import React from "react";

const Lists = ({fruit: {name, price, stock}}) => {
  return (
    <div>
      <li>{name} ${price} ({stock === 0 ? 'out of stock' : stock}) </li>
    </div>
  );
};

export default Lists;
