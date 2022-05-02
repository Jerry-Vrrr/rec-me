import "./_BigBubble.scss";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Link } from "react-router-dom";
import { fetchImages } from "../../apiCalls";
import Error from "../Error/Error";
import defaultThumbnail from "../../images/default-thumb.jpg";

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
    <div className="big-bub-container">
      {image && (
        <div className="bubble-wrap scale-in-center">
          <Link to={`/artists/${mainItem.Name}`}>
            <article
              className="big-bubs"
              onClick={() => {
                data && data.setQuery(mainItem.Name);
              }}
            >
              {image === "https://photos.bandsintown.com/artistThumb.jpg" ||
              !image ? (
                <img
                  className="image"
                  src={defaultThumbnail}
                  alt={mainItem.Name}
                />
              ) : (
                <img className="image" src={image} alt={mainItem.Name} />
              )}
            </article>
          </Link>
          {data && <h2 className="big-bub-name">{mainItem.Name}</h2>}
        </div>
      )}
    </div>
  );
};

export default BigBubble;
