import React, { useContext } from "react";
import "./_BubbleBox.scss";
import BigBubble from "../BigBubble/BigBubble";
import { DataContext } from "../../contexts/DataContext";
import SmallBubble from "../SmallBubble/SmallBubble";
import { nanoid } from 'nanoid'

const BubbleBox = () => {
  const data = useContext(DataContext);
  const mainItem = data.data.mainItem;
  const relatedItems = data.data.relatedItems;
  const createBubbles = () => {
    return relatedItems.map(item => {
      let id = nanoid()
      item.id = id
      return <SmallBubble
        item={item}
        key={item.id}
      />
    })
  } 

  return (
    <div className="bubble-box">
      <section className="banner">
        <img
          className="banner"
          src="https://www.synometrix.com/wp-content/uploads/2020/05/Light-Up-Beach-Ball-4.jpg"
        ></img>
      </section>
      {data && <BigBubble />}
      <div className="baby-bubble-wrap">
        {data && createBubbles()}
      </div>
    </div>
  );
};

export default BubbleBox;
