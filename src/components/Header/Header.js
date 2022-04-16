
import React, { useState } from 'react';
import './_Header.scss'
import SearchBar from '../SearchBar/SearchBar'
import {Link} from 'react-router-dom';


const Header = () => {
  return (  
    <section className='header'>
      <Link to='/'><h1>RecMe</h1></Link>
      <div className='search-bar'>
      <SearchBar />
      </div>
      
    </section>
  );
}
 
export default Header;


