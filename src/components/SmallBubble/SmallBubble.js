import React, { useContext, useEffect, useState } from "react";
import "./_SmallBubble.scss";
import { fetchImages } from "../../apiCalls";


const SmallBubble = ({ item, setQuery }) => {
  const [image, setImage] = useState(null)
  useEffect(() => {
    fetchImages(item.Name).then(imageInfo => {
        setImage(imageInfo.thumb_url)
    });
  }, [item.Name])
  
  return (
    <div
      className="little-bubs"
      id={item.id}
      onClick={() => setQuery(item.Name)}
    >
      <p>{item.Name}</p>
      <img src={image} />
    </div>
  );
};

export default SmallBubble;
