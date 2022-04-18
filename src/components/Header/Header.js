import { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import './_Header.scss'
import SearchBar from '../SearchBar/SearchBar'


const Header = () => {
  const location = useLocation()
  
  return (  
    <section className='header'>
      <Link to="/">
       <h1>RecMe</h1>      
      </Link>
      
      <div className='search-bar-container'>
      {location.pathname === '/' && <SearchBar />}
      </div>
      
    </section>
  );
}
 
export default Header;


