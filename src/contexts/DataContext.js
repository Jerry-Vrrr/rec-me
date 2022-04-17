import React, { useState, createContext, useEffect  } from "react";
import { fetchData } from "../apiCalls";
import Error from "../components/Error/Error";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const DataContext = createContext();
const DataContextProvider = ({ children }) => {

  const [data, setData] = useState(null);
  const [searchQuery, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  /*dynamic fetch query*/
  useEffect(() => {
    setIsLoading(true)
    fetchData(searchQuery).then((info) => {
      setData({
        mainItem: info.Similar.Info[0],
        relatedItems: info.Similar.Results,
      });
    }).catch((err) => {
      setError(true)
    })
      .finally(() => setIsLoading(false))
  }, [searchQuery]);

  
  return (
    <DataContext.Provider value={{ data, setQuery, isLoading, error }}>
      {data && children}
      {!data && error ? 
        <React.Fragment>
          <Header />
          <Error />
        </React.Fragment> : null
      }
      
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
