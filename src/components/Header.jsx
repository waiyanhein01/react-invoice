import React from "react";
import Container from "./Container";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";

const Header = () => {
  return (
    <header>
      <Container>
        <MainHeading className="">Invoice App</MainHeading>
        <SubHeading className="">Online Shop</SubHeading>
      </Container>
    </header>
  );
};

export default Header;
