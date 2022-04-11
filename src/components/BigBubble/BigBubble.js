import './_BigBubble.scss';
import { useContext } from 'react';
import {DataContext} from '../../contexts/DataContext'

const BigBubble = () => {
  const data = useContext(DataContext)
  const artist = data.data.mainArtist
  console.log(artist)
  return (
    <div className='bubble-wrap'>
      <article className="big-bubs">
        <img className='image' src='https://www.rockaxis.com/img/newsList/2813934.jpg'></img>
      </article>
      <h2>{data && <p>{artist.Name}</p>}</h2>
    </div>
  );
}

export default BigBubble;
