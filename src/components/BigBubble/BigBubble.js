import "./_BigBubble.scss";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Route, Link } from "react-router-dom";
import { fetchImages } from "../../apiCalls";

const BigBubble = () => {
  const data = useContext(DataContext);
  const mainItem = data.data.mainItem;

  const [image, setImage] = useState(null)
  useEffect(() => {
    fetchImages(mainItem.Name).then(imageInfo => {
        setImage(imageInfo.thumb_url)
    });
  }, [mainItem.Name])
  
  return (
    <Link to={`/${mainItem.Name}`}>
      <div className="bubble-wrap">
        <article className="big-bubs" onClick={() => {
        data && data.setQuery(mainItem.Name)}}>
          <img
            className="image"
            src={image}
          ></img>
        </article>
        <h2>{data && <p>{mainItem.Name}</p>}</h2>
      </div>
    </Link>
  );
};

export default BigBubble;
