import React, { useContext } from "react";
import Container from "./Container";
import { Button } from "flowbite-react";
import { GeneralContext } from "../context/GeneralProvider";

const Footer = () => {
  const { drawerHandler } = useContext(GeneralContext);

  const printHandlerBtn = () => {
    print();
  };

  return (
    <footer className=" mt-auto mb-3">
      <Container>
        <div className="print:flex flex-col justify-center items-center text-xl text-gray-600 font-mono hidden">
          <h2 className="">Items are not Exchangeable.Come Again!</h2>
          <h3 className="">Thank You!</h3>
        </div>
        <div className=" flex gap-3 justify-end print:hidden">
          <Button
            onClick={drawerHandler}
            color="light"
            className=" outline-none"
          >
            Manage Inventory
          </Button>
          <Button onClick={printHandlerBtn}>Print</Button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
