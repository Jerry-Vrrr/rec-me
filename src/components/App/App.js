import React, { useEffect, useState } from 'react';
import '../App/_App.scss';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BubbleBox from '../BubbleBox/BubbleBox';
import Favorites from '../Favorites/Favorites';
import { FavoriteContext, FavoriteContextProvider } from '../../contexts/FavoriteContext';
import { fetchData } from '../../apiCalls';
// import DataContext from '../../contexts/DataContext'
import {DataContextProvider} from '../../contexts/DataContext'


const App = () => {


  


  return (
    <div className="App">
      <Header />
      {/* <FavoriteContextProvider>
        <Favorites />
      </FavoriteContextProvider> */}
      <DataContextProvider>
      <BubbleBox />
      </DataContextProvider>
      <Footer />
    </div>
  );
}

export default App;
