import { Button, Label, Select, TextInput } from "flowbite-react";
import React, { useContext, useRef } from "react";
import { ProductContext } from "../context/ProductProvider";
import { ItemContext } from "../context/ItemProvider";

const CheckOutForm = () => {
  const { products } = useContext(ProductContext);
  const { addItem } = useContext(ItemContext);
  const selectRef = useRef();
  const quantityRef = useRef();
  const formRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();

    const id = Date.now();

    const currentProduct = products.find(
      (product) => product.id === parseInt(selectRef.current.value)
    );

    const quantity = parseInt(quantityRef.current.value);

    const cost = quantity * parseFloat(currentProduct.price).toFixed(2);

    const newItem = {
      id,
      product: currentProduct,
      quantity,
      cost,
    };

    addItem(newItem);
    formRef.current.reset();

    // console.log(currentProduct)

    // console.log(selectRef.current.value);
    // console.log(quantityRef.current.value);
  };

  return (
    <>
      <form ref={formRef} onSubmit={formHandler} className=" w-full block mb-5">
        <div className=" grid grid-cols-5 gap-3">
          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select Fruit" />
            </div>
            <Select ref={selectRef} id="countries" required>
              {products.map(({ id, title }) => (
                <option value={id} key={id}>
                  {title}
                </option>
              ))}
            </Select>
          </div>

          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="base" value="Quantity" />
            </div>
            <TextInput
              ref={quantityRef}
              id="base"
              type="number"
              sizing="md"
              required
            />
          </div>

          <div className=" col-span-1 ">
            <Button
              type="submit"
              className="w-full h-full flex justify-center items-center"
            >
              Buy
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckOutForm;
