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

const App = () => {
  const [products, setProduct] = useState([
    { id: 1, title: "Apple", stock: 50, price: 1.99 },
    { id: 2, title: "Banana", stock: 30, price: 0.99 },
    { id: 3, title: "Orange", stock: 40, price: 1.49 },
    { id: 4, title: "Grapes", stock: 25, price: 2.49 },
    { id: 5, title: "Watermelon", stock: 15, price: 3.99 },
  ]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerHandler = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }
  return (
    <main className=" flex flex-col min-h-screen">
      <Header>
        <Container>
          <MainHeading>Invoice App</MainHeading>
          <SubHeading>Online Shop</SubHeading>
        </Container>
      </Header>
      <Container>
        <CheckOutForm products={products} />
        <CheckOutItemsList/>
      </Container>
      <Footer>
        <Container>
          <div className=" flex gap-3 justify-end">
            <Button onClick={drawerHandler} color="light" className=" outline-none">
              Manage Inventory
            </Button>
            <Button>Print</Button>
          </div>
        </Container>
      </Footer>
      <Drawer products={products}  isDrawerOpen={isDrawerOpen} drawerHandler={drawerHandler}/>
    </main>
  );
};

export default App;
