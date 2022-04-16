import "./_BigBubble.scss";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Route, Link } from "react-router-dom";
import { fetchImages } from "../../apiCalls";
import Error from "../Error/Error";

const BigBubble = () => {
  const data = useContext(DataContext);
  const mainItem = data.data.mainItem;

  const [image, setImage] = useState(null)
  useEffect(() => {
    fetchImages(mainItem.Name).then(imageInfo => {
        setImage(imageInfo.thumb_url)
    }).catch((err) => {
      <Error error={err.message}/>
    })
  }, [mainItem.Name])
  
  return (
    <Link to={`/artists/${mainItem.Name}`}>
    <div>
      {image && <div className="bubble-wrap scale-in-center">
        <article className="big-bubs" onClick={() => {
        data && data.setQuery(mainItem.Name)}}>
        {image === "https://photos.bandsintown.com/artistThumb.jpg" || !image ? 
        <img className="image" src='https://ca.slack-edge.com/T029P2S9M-U0S2QJD42-62348d5b08d9-512'/> : 
        <img className="image" src={image}/>
        }
        </article>
        <h2>{data && <p>{mainItem.Name}</p>}</h2>
      </div>}

    </div>
    </Link>
  );
};

export default BigBubble;
