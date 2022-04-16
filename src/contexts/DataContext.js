import React, { useState, createContext, useEffect, useRef } from "react";
import { fetchData } from "../apiCalls";
import Error from "../components/Error/Error";

const DataContext = createContext();
const DataContextProvider = ({ children }) => {

  const [data, setData] = useState(null);
  const [searchQuery, setQuery] = useState("");
  /* onLoad query */
  
  /*dynamic fetch query*/
  useEffect(() => {
    fetchData(searchQuery).then((info) => {
      setData({
        mainItem: info.Similar.Info[0],
        relatedItems: info.Similar.Results,
      });
    }).catch((err) => {
      <Error error={err.message}/>
    })
  }, [searchQuery]);

  
  return (
    <DataContext.Provider value={{ data, setQuery }}>
      {data && children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
