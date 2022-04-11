import React, { useState, createContext, useEffect, useAsync } from "react";
import { fetchData } from "../apiCalls";

const initialItems = ["red hot chili peppers", "nirvana", "the beatles"]
const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};

const DataContext = createContext();

const DataContextProvider = ({ children }) => {

  const [data, setData] = useState(null);
  const [searchQuery, setQuery] = useState(""); 
  useEffect(() => {
    setQuery(initialItems[getRandomIndex(initialItems)])
  }, [searchQuery])
  
  useEffect(() => {
    fetchData(searchQuery).then((info) => {
      setData({
        mainItem: info.Similar.Info[0],
        relatedItems: info.Similar.Results,
      });
    });
  }, [searchQuery]);

  return (
    <DataContext.Provider value={{ data }}>
      {data && children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
