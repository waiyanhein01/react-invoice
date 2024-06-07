import React, { createContext, useState } from "react";

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    const isExited = items.find((item) => item.product === newItem.product);
    if (isExited) {
      updateQuantity(isExited.id, newItem.quantity);
    } else {
      setItems([...items, newItem]);
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const quantity = item.quantity + amount;
          const cost = (item.product.price * quantity).toFixed(2);
          return { ...item, quantity, cost };
        }
        return item;
      })
    );
  };

  return (
    <ItemContext.Provider
      value={{ items, addItem, removeItem, updateQuantity }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
