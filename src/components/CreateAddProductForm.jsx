import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

const CreateAddProductForm = () => {
  return (
    <>
      <form>
        <div className=" grid grid-cols-2 gap-3">
          <div className=" col-span-2">
            <div className="block">
              <Label htmlFor="new_product" value="New Product" />
            </div>
            <TextInput
              id="new_product"
              type="text"
              required
            />
          </div>
          <div className=" col-span-1">
            <div className=" block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              id="price"
              type="number"
              required
            />
          </div>
          <div className=" col-span-1">
            <div className=" block">
              <Label htmlFor="stock" value="Stock" />
            </div>
            <TextInput
              id="stock"
              type="number"
              required
            />
          </div>
          <Button className=" col-span-2" type="submit">Add</Button>
        </div>
      </form>
    </>
  );
};

export default CreateAddProductForm;
