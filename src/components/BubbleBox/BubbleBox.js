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
      <section className='banner'>
        <img className='banner' src='https://www.synometrix.com/wp-content/uploads/2020/05/Light-Up-Beach-Ball-4.jpg'></img>
      </section>
      {/* {data && <p>{artist.Name}</p>} */}
      <BigBubble /> 
    </div>
  );
}

export default BubbleBox;
