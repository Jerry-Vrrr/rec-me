import React, { useState, createContext, useEffect, useAsync } from 'react'
import { fetchData } from '../apiCalls'





// const DataState = {
//     mainArtist: [],
//     relatedArtists: []
// }

 const DataContext = createContext();

 const DataContextProvider = ({ children }) => {
     const [data, setData] = useState([])
     useEffect(() => {
     fetchData()
    .then(info => {
      setData({ mainArtist: info.Similar.Info[0], relatedArtists: info.Similar.Results})
    })
  }, [])
   
     return (
          <DataContext.Provider value={{data}}>{children}</DataContext.Provider>
     )
}

export {DataContext, DataContextProvider}
