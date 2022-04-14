import './_SingleArtist.scss';
import { DataContext } from "../../contexts/DataContext";
import { useContext, useEffect } from 'react';
import RelatedArtist from '../RelatedArtist/RelatedArtist'
import { Link } from 'react-router-dom'


const SingleArtist = ({name}) => {
  const data = useContext(DataContext);
  const mainItem = data.data.mainItem;
  const relatedItems = data.data.relatedItems;

  console.log(mainItem)

  const createSimilarList = () => {
    return relatedItems.map((item, index) => {
      item.id = `blerb${index+=1}`;
      return <RelatedArtist name={item.Name} id={item.id} key={index+=1} setQuery={data.setQuery} />;
    });
  };

  useEffect(() => {
    data.setQuery(name)
  }, [])

  return (
    <section className="single-artist-page">
      {data && <div className='header-section'>
        <h1>{name}</h1>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <button>&times;</button>
        </Link>
        </div> }
      <div className='video-list-container'>
        <div className='youtube-vid'>
        <iframe width='100%' height='100%' src={mainItem.yUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='allowfullscreen'></iframe>
        </div>
      <div className='related-artists'>
        {createSimilarList()}
      </div>
      </div>
      <div className='article-box'>
      <article className='article'>{mainItem.wTeaser}</article>
      </div>
      <div className='wiki-art'>
      <a href={mainItem.wUrl} target='_blank' style={{ textDecoration: 'none' }}>check them out on Wikipedia!</a>
      </div>
      
    </section>
  );
}

export default SingleArtist;
