import React from "react";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";
import { Button } from "flowbite-react";
import CreateAddProductForm from "./CreateAddProductForm";

const Drawer = ({ isDrawerOpen, drawerHandler, products }) => {
  return (
    <div
      className={`bg-slate-50 shadow w-[400px] h-screen fixed right-0 z-30 duration-150 overflow-y-scroll ${
        !isDrawerOpen && "translate-x-full"
      }`}
    >
      <div className=" p-3">
        <div className=" flex justify-between items-center">
          <div className="">
            <MainHeading>Your Products</MainHeading>
            <SubHeading>Manage Product</SubHeading>
          </div>
          <Button
            onClick={drawerHandler}
            className=""
            color="failure"
            size="xs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>

        {products.map(({ id, title, price, stock }) => (
          <div key={id} className=" flex justify-between items-center rounded-md p-3 mb-3 bg-white">
            <span>{title} ({stock})</span>
            <span className="">$<span className=" font-mono">{price}</span></span>
          </div>
        ))}

        <CreateAddProductForm/>
      </div>
    </div>
  );
};

export default Drawer;
