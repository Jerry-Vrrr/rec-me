import React, { useState, createContext, useEffect, useAsync } from "react";
import { fetchData } from "../apiCalls";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then((info) => {
      setData({
        mainItem: info.Similar.Info[0],
        relatedItems: info.Similar.Results,
      });
    });
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      {data && children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
