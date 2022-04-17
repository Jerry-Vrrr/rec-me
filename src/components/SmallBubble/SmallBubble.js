import React, { useContext, useEffect, useState } from "react";
import "./_SmallBubble.scss";
import { fetchImages } from "../../apiCalls";
import Error from "../Error/Error";
import {GameContext} from "../../contexts/GameContext"
import { DataContext } from "../../contexts/DataContext";

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
          id={item.id}
          onClick={() => smallBubbleHandler()}
        >
          {image === "https://photos.bandsintown.com/artistThumb.jpg" ||
          !image ? (
            <img
              className="image"
              src="https://ca.slack-edge.com/T029P2S9M-U0S2QJD42-62348d5b08d9-512"
            />
          ) : (
            <img className="image" src={image} />
          )}
          <h4>{item.Name}</h4>
        </div>
      )}
    </div>
  );
};

export default SmallBubble;

//"https://photos.bandsintown.com/artistThumb.jpg"
// undefined
