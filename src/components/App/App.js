import React, { useEffect, useState } from 'react';
import '../App/_App.scss';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BubbleBox from '../BubbleBox/BubbleBox';
import Favorites from '../Favorites/Favorites';
import { FavoriteContext, FavoriteContextProvider } from '../../contexts/FavoriteContext';
import { fetchData } from '../../apiCalls';
import {DataContextProvider} from '../../contexts/DataContext'
import SingleArtist from '../SingleArtist/SingleArtist';


const App = () => {
  return (
    <div className="App">
      <DataContextProvider>
      <Header />
      
      {/* <FavoriteContextProvider>
        <Favorites />
      </FavoriteContextProvider> */}


        <Route
      exact path='/'
      render={() => {
        return (  
          <BubbleBox />         
        )
      }} />

        <Route 
          exact path='/:Name'
          render={({match}) => {
          return (         
            <SingleArtist name={match.params.Name} />         
          )
      }} />

      </DataContextProvider>

      <Footer />
    </div>
  );
}

export default App;
