import React, { useContext } from "react";
import "./_BubbleBox.scss";
import BigBubble from "../BigBubble/BigBubble";
import { DataContext } from "../../contexts/DataContext";
import SmallBubble from "../SmallBubble/SmallBubble";
import { nanoid } from "nanoid";

const BubbleBox = () => {
  const data = useContext(DataContext);
  console.log("this is data", data);
  const relatedItems = data.data.relatedItems;
  const createBubbles = () => {
    return relatedItems.map((item, index) => {
      item.id = `bubble${index+=1}`;
      return <SmallBubble item={item} key={index+=1} setQuery={data.setQuery} />;
    });
  };

  return (
    <div className="bubble-box">
      <section className="banner">
        <img
          className="banner"
          src="https://www.synometrix.com/wp-content/uploads/2020/05/Light-Up-Beach-Ball-4.jpg"
        ></img>
      </section>
      {data && <BigBubble />}
      <div className="baby-bubble-wrap">{data && createBubbles()}</div>
    </div>
  );
};

export default BubbleBox;
