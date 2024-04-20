import CreateForm from "./CreateForm";
import Lists from "./Lists";
import "./index.css"
import React, { useState } from 'react'

const App = () => {
  let [fruits, setFruit] = useState(
    [
      { name: "Apple", id: 1, price: 0.99, stock: 0 },
      { name: "Banana", id: 2, price: 0.49, stock: 200 },
      { name: "Orange", id: 3, price: 0.79, stock: 120 },
      { name: "Grapes", id: 4, price: 2.49, stock: 0 },
      { name: "Mango", id: 5, price: 1.99, stock: 100 }
    ]
  );

  const addFruitHandler = (newFruit) => {
    setFruit([...fruits, newFruit]);
  }
  
  return (
    <div>
      <div className="">
        <h1 className=" text-5xl font-bold">Fruits List</h1>
        {fruits.map((fruit) => <Lists fruit={fruit} key={fruit.id} />)}
        <CreateForm/>
      </div>
    </div>
  )
}

export default App
