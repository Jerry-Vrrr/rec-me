import React, { useContext } from "react";
import "./_SmallBubble.scss";
import { DataContext } from "../../contexts/DataContext";

const SmallBubble = ({ item, setQuery }) => {
  return (
    <div
      className="little-bubs"
      id={item.id}
      onClick={() => setQuery(item.Name)}
    >
      <p>{item.Name}</p>
    </div>
  );
};

export default SmallBubble;
