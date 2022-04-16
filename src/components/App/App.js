import React, { useEffect, useState } from 'react';
import '../App/_App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BubbleBox from '../BubbleBox/BubbleBox';
import { fetchData } from '../../apiCalls';
import {DataContextProvider} from '../../contexts/DataContext'
import SingleArtist from '../SingleArtist/SingleArtist';
import Error from '../Error/Error';


const App = () => {
  return (
    <div className="App">
      <DataContextProvider>
        <Header />

        <Switch>
          <Route exact path='/' render={() => {
            return (  
              <BubbleBox />         
            )
          }}/>

          <Route exact path='/artists/:Name' render={({match}) => {
            return (         
              <SingleArtist name={match.params.Name} />         
            )
          }}/>

          <Route>
            <Error />
          </Route>
    
        </Switch>
     
      </DataContextProvider>
      <Footer />
    </div>
  );
}

export default App;
