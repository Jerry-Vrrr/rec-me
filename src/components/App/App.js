import React, { useState, useContext } from 'react';
import '../App/_App.scss';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Favorites from '../Favorites/Favorites';
import { FavoriteContext, FavoriteContextProvider } from '../../contexts/FavoriteContext';


const App = () => {
  return (
    <div className="App">
      <Header />
      <FavoriteContextProvider>
        <Favorites />
      </FavoriteContextProvider>
      <Footer />
    </div>
  );
}

export default App;
