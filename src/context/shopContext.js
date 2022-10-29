import React, { useState, createContext } from "react";

export const ShopContext = createContext();

export const ShopProvider = (props) => {
  const [shopping, setShopping] = useState([]);

  return (
    <ShopContext.Provider value={[shopping, setShopping]}>
      {props.children}
    </ShopContext.Provider>
  );
};
