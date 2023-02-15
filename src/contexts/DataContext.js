import React, { useState, createContext, useEffect } from "react";
import { getRandom } from "../utils";
import { initialArtists } from "../data";
import { fetchData, fetchSimilar } from "../apiCalls";
import Error from "../components/Error/Error";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [mainArtist, setMainArtist] = useState(null);
  // console.log("🚀 ~ file: DataContext.js:11 ~ DataContextProvider ~ mainArtist", mainArtist);
  const [relatedArtists, setRelatedArtists] = useState(null);
  // console.log("🚀 ~ file: DataContext.js:13 ~ DataContextProvider ~ relatedArtists", relatedArtists);
  const [searchQuery, setSearchQuery] = useState(getRandom(initialArtists));
  // console.log("🚀 ~ file: DataContext.js:15 ~ DataContextProvider ~ searchQuery", searchQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  /*dynamic fetch query*/
  useEffect(() => {
    setIsLoading(true);
      fetchData(searchQuery.replace(/&/g, "%26"))
      .then((info) => {
        setMainArtist(info.artist);
        setError(false)
        })
        .catch((err) => {
          setError(true);
        });
      fetchSimilar(searchQuery.replace(/&/g, "%26"))
        .then((info) => {
          setRelatedArtists(info.similarartists.artist);
          setError(false)
        })
        .catch((err) => {
          setError(true);
        }).finally(() => setIsLoading(false))
  }, [searchQuery]);

  return (
    <DataContext.Provider
      value={{ mainArtist, relatedArtists, setSearchQuery, isLoading, error }}
    >
      {mainArtist && relatedArtists ? children : null}
      {!isLoading && error ? (
        <>
          <Error />
        </>
      ) : null}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
