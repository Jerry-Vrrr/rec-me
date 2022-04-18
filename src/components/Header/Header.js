import { useState, useContext } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import './_Header.scss'
import SearchBar from '../SearchBar/SearchBar'
import { GameContext } from '../../contexts/GameContext';


const Header = () => {
  const location = useLocation()
  const gameInfo = useContext(GameContext)
  return (  
    <section className='header'>
      <Link to="/">
       <h1>RecMe</h1>      
      </Link>
      
      <div className='search-bar-container'>
      {location.pathname === '/' && !gameInfo.gameIsActive && <SearchBar />}
      </div>
      
    </section>
  );
}
 
export default Header;


