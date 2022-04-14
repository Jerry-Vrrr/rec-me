
import React, { useState } from 'react';
import './_Header.scss'
import Form from '../SearchBar/SearchBar'


const Header = () => {
  return (  
    <section className='header'>
      <h1>RecMe</h1>
      <div className='search-bar'>
        <select className='select' placeholder='choose'>Choose
         <option name='Music' value='Music'>Music</option>
          <option name='Movie' value='Movie'>Movie</option>
       </select>
      <Form />
      </div>
      <button className='favorites' placeholder='Favorites'>Favorites</button>
    </section>
  );
}
 
export default Header;


