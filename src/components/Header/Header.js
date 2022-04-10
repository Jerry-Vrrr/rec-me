
import React, { useState } from 'react';
import './_Header.scss'

const Header = () => {
  return (  
    <section className='header'>
      <h1>RecMe</h1>
      <div className='search-bar'>
        <select className='select' placeholder='choose'>Choose
         <option name='Music' value='Music'>Music</option>
          <option name='Movie' value='Movie'>Movie</option>
       </select>
       <input className='search' name='search' placeholder='search' ></input>
       <button className='submit'>🔎</button>
      </div>
      <button className='favorites' placeholder='Favorites'>Favorites</button>
    </section>
  );
}
 
export default Header;


