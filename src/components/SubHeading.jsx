import React from "react";

const SubHeading = ({ children, className }) => {
  return (
    <h3 className={`text-xl text-gray-500 font-serif mb-3 ${className}`}>
      {children}
    </h3>
  );
};

export default SubHeading;
