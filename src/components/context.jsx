import { createContext, useEffect, useState } from "react";
import { table_values } from "../ApiData";

export const StoreContext = createContext(null);

const StoreCongtextProvider = (props) => {
  
  const contextValue = {
    table_values
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreCongtextProvider;
