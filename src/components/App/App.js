import React, { useEffect, useState } from 'react';
import '../App/_App.scss';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BubbleBox from '../BubbleBox/BubbleBox';
import Favorites from '../Favorites/Favorites';
import { FavoriteContext, FavoriteContextProvider } from '../../contexts/FavoriteContext';
import { fetchData } from '../../apiCalls';


const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
    .then(info => {
      setData({ mainArtist: info.Similar.Info, relatedArtists: info.Similar.Results})
    })
  }, [])


  return (
    <div className="App">
      <Header />
      {/* <FavoriteContextProvider>
        <Favorites />
      </FavoriteContextProvider> */}
      <BubbleBox />
      <Footer />
    </div>
  );
}

export default App;
