import React, { useContext, useEffect, useState } from "react";
import "./_SmallBubble.scss";
import { fetchImages } from "../../apiCalls";
import { GameContext } from "../../contexts/GameContext";
import defaultThumbnail from "../../images/default-thumb.jpg";

const SmallBubble = ({ item, setSearchQuery, didIWin }) => {
  const [image, setImage] = useState("");
  const gameInfo = useContext(GameContext);

  const smallBubbleHandler = () => {
    setSearchQuery(item.name);
    didIWin(item.name);
    return gameInfo.gameIsActive
      ? gameInfo.setTurnCounter((prevCounter) => (prevCounter -= 1))
      : null;
  };

  useEffect(() => {
    fetchImages(item.name).then((imageInfo) => {
      setImage(imageInfo.thumb_url);
    });
  }, [item.name]);

  return (
    <>
      {image && item ? (
        <div
          className="little-bubs scale-in-center"
          tabIndex={0}
          id={item.id}
          onClick={() => smallBubbleHandler()}
        >
          <img className="image" style={{zIndex: 1}} src={image} alt={`thumbnail-${item.name}`} />
          <img
            className="image"
            src={defaultThumbnail}
            alt="no artist-default thumbnail"
          />
          <h5 className="sm-name" style={{zIndex: 1}}>{item.name}</h5>
        </div>
      ) : (
        <div
          className="little-bubs scale-in-center"
          tabIndex={0}
          id={item.id}
          onClick={() => smallBubbleHandler()}
        >
          <img
            className="image"
            src={defaultThumbnail}
            alt="no artist-default thumbnail"
          />
          <h5 className="sm-name">{item.name}</h5>
        </div>
      )}
    </>
  );
};

export default SmallBubble;
