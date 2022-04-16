
import React, { useState } from 'react';
import './_Header.scss'
import SearchBar from '../SearchBar/SearchBar'


const Header = () => {
  return (  
    <section className='header'>
      <h1>RecMe</h1>
      <div className='search-bar'>
      <SearchBar />
      </div>
      
    </section>
  );
}
 
export default Header;


