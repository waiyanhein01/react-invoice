import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([
    { id: 1, title: "Apple", stock: 50, price: 1.99 },
    { id: 2, title: "Banana", stock: 30, price: 0.99 },
    { id: 3, title: "Orange", stock: 40, price: 1.49 },
    { id: 4, title: "Grapes", stock: 25, price: 2.49 },
    { id: 5, title: "Watermelon", stock: 15, price: 3.99 },
  ]);

  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };
  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
