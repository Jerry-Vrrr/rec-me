import React, { useContext } from "react";
import "./_SmallBubble.scss";


const SmallBubble = ({ item, setQuery, image }) => {
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
