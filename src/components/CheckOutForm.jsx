import { Button, Label, Select, TextInput } from "flowbite-react";
import React from "react";

const CheckOutForm = ({products}) => {
  return (
    <>
      <form className=" w-full block mb-5">
        <div className=" grid grid-cols-5 gap-3">
          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select Fruit" />
            </div>
            <Select id="countries" required>
               {products.map(({id, title}) => <option value={id} key={id}>{title}</option>)}
            </Select>
          </div>

          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="base" value="Quantity" />
            </div>
            <TextInput id="base" type="number" sizing="md" />
          </div>

          <div className=" col-span-1 ">
            <Button className="w-full h-full flex justify-center items-center">Buy</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckOutForm;
