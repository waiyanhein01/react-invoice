import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import GeneralProvider from "./context/GeneralProvider";
import ProductProvider from "./context/ProductProvider";
import ItemProvider from "./context/ItemProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeneralProvider>
      <ProductProvider>
        <ItemProvider>
          <App />
        </ItemProvider>
      </ProductProvider>
    </GeneralProvider>
  </React.StrictMode>
);
