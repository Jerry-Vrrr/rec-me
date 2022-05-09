import React, { useContext, useEffect, useState } from "react";
import "./_SmallBubble.scss";
import { fetchImages } from "../../apiCalls";
import {GameContext} from "../../contexts/GameContext"
import { DataContext } from "../../contexts/DataContext";
import defaultThumbnail from "../../images/default-thumb.jpg"

const SmallBubble = ({ item, setQuery, didIWin }) => {
  const [image, setImage] = useState(null);
  const gameInfo = useContext(GameContext)
  const data = useContext(DataContext)

  const smallBubbleHandler = () => {
    setQuery(item.Name)
    didIWin(item.Name)
    return gameInfo.gameIsActive ? gameInfo.setTurnCounter((prevCounter) => prevCounter -= 1) : null
  }

  useEffect(() => {
    fetchImages(item.Name)
      .then((imageInfo) => {
        setImage(imageInfo.thumb_url);
      })
  }, [item.Name]);

  return (
    <div>
      {image && (
        <div
          className="little-bubs scale-in-center"
          tabIndex={0}
          id={item.id}
          onClick={() => smallBubbleHandler()}
        >
          {image === "https://photos.bandsintown.com/artistThumb.jpg" ||
          !image ? (
            <img className="image" src={defaultThumbnail} />
          ) : (
            <img className="image" src={image} />
          )}
          <h4 className="sm-name">{item.Name}</h4>
        </div>
      )}
    </div>
  );
};

export default SmallBubble;
