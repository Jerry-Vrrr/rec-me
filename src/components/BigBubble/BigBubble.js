import "./_BigBubble.scss";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Link } from "react-router-dom";
import { fetchImages } from "../../apiCalls";
import Error from "../Error/Error";
import defaultThumbnail from "../../images/default-thumb.jpg";
import { truncateString } from "../../utils";

const BigBubble = () => {
  const data = useContext(DataContext);
  const mainArtist = data.mainArtist;

  const [image, setImage] = useState(null);
  useEffect(() => {
    fetchImages(mainArtist.name)
      .then((imageInfo) => {
        setImage(imageInfo.thumb_url);
      })
      .catch((err) => {
        <Error error={err.message} />;
      });
  }, [mainArtist.name]);

  return (
    <div className="big-bub-container">
      {mainArtist && (
        <div className="bubble-wrap scale-in-center">
          <Link to={`/artists/${mainArtist.name}`}>
            <article
              className="big-bubs"
              onClick={() => {
                data && data.setSearchQuery(mainArtist.name);
              }}
            >
              {!image ? (
                <img
                  className="big-bubs-image"
                  src={defaultThumbnail}
                  alt={mainArtist.name}
                  style={{ zIndex: -1 }}
                />
              ) : (
                <img
                  className="big-bubs-image"
                  src={image}
                  alt={mainArtist.name}
                />
              )}
            </article>
          </Link>
          <Link to={`/artists/${mainArtist.name}`}>
            {data && (
              <h2 className="big-bub-name">
                {truncateString(mainArtist.name)}
              </h2>
            )}
          </Link>
        </div>
      )}
    </div>
  );
};

export default BigBubble;
