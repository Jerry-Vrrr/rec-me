import './_Favorites.scss';
import React, { useState, useContext } from 'react';
import FavCard from '../FavCard/FavCard';
import { FavoriteContext } from '../../contexts/FavoriteContext';


const Favorites = () => {
  const context = useContext(FavoriteContext)

  return (

    <div className="favorites-container">
      <h1>{`The answer is ${context.toggle}`}</h1>
      <h1>{`name is ${context.name}`}</h1>
    </div>
  );
}

export default Favorites;
