import { Button } from "flowbite-react";
import React, { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import MainHeading from "./components/MainHeading";
import SubHeading from "./components/SubHeading";
import Footer from "./components/Footer";
import CheckOutForm from "./components/CheckOutForm";
import CheckOutItemsList from "./components/CheckOutItemsList";
import Drawer from "./components/Drawer";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [products, setProduct] = useState([
    { id: 1, title: "Apple", stock: 50, price: 1.99 },
    { id: 2, title: "Banana", stock: 30, price: 0.99 },
    { id: 3, title: "Orange", stock: 40, price: 1.49 },
    { id: 4, title: "Grapes", stock: 25, price: 2.49 },
    { id: 5, title: "Watermelon", stock: 15, price: 3.99 },
  ]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [items, setItems] = useState([]);

  const drawerHandler = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const addItem = (newProduct) => {
    setItems([...items, newProduct]);
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
    <main className=" flex flex-col min-h-screen">
      <Header>
        <Container>
          <MainHeading className="">Invoice App</MainHeading>
          <SubHeading className="">Online Shop</SubHeading>
        </Container>
      </Header>
      <Container>
        <CheckOutForm addItem={addItem} products={products} />
        <CheckOutItemsList
          updateQuantity={updateQuantity}
          removeItem={removeItem}
          items={items}
        />
      </Container>
      <Footer>
        <Container>
          <div className=" flex gap-3 justify-end">
            <Button
              onClick={drawerHandler}
              color="light"
              className=" outline-none"
            >
              Manage Inventory
            </Button>
            <Button>Print</Button>
          </div>
        </Container>
      </Footer>
      <Drawer
        products={products}
        isDrawerOpen={isDrawerOpen}
        drawerHandler={drawerHandler}
      />
      <Toaster position="bottom-left"reverseOrder={false} />
    </main>
  );
};

export default App;
