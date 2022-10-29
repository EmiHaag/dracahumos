import React, { useState, createContext } from "react";

export const AddressContext = createContext();

export const AddressProvider = (props) => {
  const [address, setAddress] = useState({});
  return (
    <AddressContext.Provider value={[address, setAddress]}>
      {props.children}
    </AddressContext.Provider>
  );
};
