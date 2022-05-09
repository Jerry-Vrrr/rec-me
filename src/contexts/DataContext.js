import React, { useState, createContext, useEffect } from "react";
import { fetchData } from "../apiCalls";
import Error from "../components/Error/Error";

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [searchQuery, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  /*dynamic fetch query*/
  useEffect(() => {
    setIsLoading(true);
    fetchData(searchQuery)
      .then((info) => {
        setData({
          mainItem: info.Similar.Info[0],
          relatedItems: info.Similar.Results,
        });
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, [searchQuery]);

  return (
    <DataContext.Provider value={{ data, setQuery, isLoading, error }}>
      {data && children}
      {!data && error ? (
        <>
          <Error />
        </>
      ) : null}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
