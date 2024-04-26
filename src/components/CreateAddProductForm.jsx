import { Button, Label, TextInput } from "flowbite-react";
import React, { useRef } from "react";

const CreateAddProductForm = ({ addProduct }) => {
  const formRef = useRef();
  const productRef = useRef();
  const priceRef = useRef();
  const stockRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title: productRef.current.value,
      price: parseFloat(priceRef.current.value),
      stock: parseInt(stockRef.current.value),
    };
    addProduct(newProduct);
    formRef.current.reset();
  };
  return (
    <>
      <form ref={formRef} onSubmit={formSubmitHandler}>
        <div className=" grid grid-cols-2 gap-3">
          <div className=" col-span-2">
            <div className="block">
              <Label htmlFor="new_product" value="New Product" />
            </div>
            <TextInput ref={productRef} id="new_product" type="text" required />
          </div>
          <div className=" col-span-1">
            <div className=" block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput ref={priceRef} id="price" type="number" required />
          </div>
          <div className=" col-span-1">
            <div className=" block">
              <Label htmlFor="stock" value="Stock" />
            </div>
            <TextInput ref={stockRef} id="stock" type="number" required />
          </div>
          <Button className=" col-span-2" type="submit">
            Add
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreateAddProductForm;
