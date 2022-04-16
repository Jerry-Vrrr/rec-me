import React, { useContext, useEffect } from "react";
import "./_BubbleBox.scss";
import BigBubble from "../BigBubble/BigBubble";
import { DataContext } from "../../contexts/DataContext";
import SmallBubble from "../SmallBubble/SmallBubble";
import initialItems from '../../data'
import { fetchImages } from "../../apiCalls";


const BubbleBox = () => {

 
const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};

  const data = useContext(DataContext);
  const relatedItems = data.data.relatedItems;

  useEffect(() => {
    data.setQuery(initialItems[getRandomIndex(initialItems)]);
  }, []);


  const createBubbles = () => {
    const result = relatedItems.map((item, index) => {
      item.id = `bubble${index+=1}`;
      return <SmallBubble item={item} key={index+=1} setQuery={data.setQuery} />;
            })
    return result
  };

  return (
    <div className="bubble-box">
      <section className="banner">
        <img
          className="banner"
          src="https://www.synometrix.com/wp-content/uploads/2020/05/Light-Up-Beach-Ball-4.jpg"
        ></img>
      </section>
      {!relatedItems.length && <h2>No artist found! Check your spelling!</h2>}
      {data && relatedItems.length ? <BigBubble setQuery={data.setQuery}/> : null}
      <div className="baby-bubble-wrap">{data && createBubbles()}</div>

    </div>
  );
};

export default BubbleBox;
