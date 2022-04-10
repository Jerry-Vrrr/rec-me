import React, { useContext } from 'react'
import './_BubbleBox.scss';
import BigBubble from '../BigBubble/BigBubble';
import {DataContext} from '../../contexts/DataContext'
  

const BubbleBox =  () => {
  const data = useContext(DataContext)
  const artist = data.data.mainArtist
  // console.log(artist)
  return (
    <div className="bubble-box">
      {data && <p>{artist.Name}</p>}
      <section className='banner'>new banner</section>
      {/* <p>{artist.Name}</p> */}
      
      <BigBubble /> 
    </div>
  );
}

export default BubbleBox;
