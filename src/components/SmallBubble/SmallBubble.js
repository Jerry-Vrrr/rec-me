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
    <div className='bubble-wrap'>
      <div
      className="little-bubs"
      id={item.id}
      onClick={() => setQuery(item.Name)}
    >
      <img className='image' src={image} />
      <h4>{item.Name}</h4>
    </div>
    
    </div>
    
  );
};

export default SmallBubble;
