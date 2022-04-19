import "./_BigBubble.scss";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Link } from "react-router-dom";
import { fetchImages } from "../../apiCalls";
import Error from "../Error/Error";
import defaultThumbnail from "../../images/default-thumb.jpg"
import {getRandom} from "../../utils"
import { initialItems } from "../../data";
 
const BigBubble = () => {
  const data = useContext(DataContext);
  const mainItem = data.data.mainItem;

  const [image, setImage] = useState(null);
  useEffect(() => {
    fetchImages(mainItem.Name)
      .then((imageInfo) => {
        setImage(imageInfo.thumb_url);
      })
      .catch((err) => {
        <Error error={err.message} />;
      });
  }, [mainItem.Name]);

  return (
    <Link to={`/artists/${mainItem.Name}`}>
      <div className="big-bub-container">
        {image && (
          <div className="bubble-wrap scale-in-center">
            <article
              className="big-bubs"
              onClick={() => {
                data && data.setQuery(mainItem.Name);
              }}
            >
              {image === "https://photos.bandsintown.com/artistThumb.jpg" ||
              !image ? <img className="image" src={defaultThumbnail} /> : (
                <img className="image" src={image} />
              )}
            </article>
            <h2>{data && <p className="big-bub-name">{mainItem.Name}</p>}</h2>
          </div>
        )}
        
          <button className="dice-button" onClick={()=> {data.setQuery(getRandom(initialItems))}}></button>
        
      </div>
    </Link>
  );
};

export default BigBubble;
