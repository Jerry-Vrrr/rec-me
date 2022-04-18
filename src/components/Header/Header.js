
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './_Header.scss'
import SearchBar from '../SearchBar/SearchBar'


const Header = () => {
  return (  
    <section className='header'>
      <Link to="/">
       <h1>RecMe</h1>      
      </Link>
      
      <div className='search-bar-container'>
      <SearchBar />
      </div>
      
    </section>
  );
}
 
export default Header;


