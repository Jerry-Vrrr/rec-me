import React, { useContext, useEffect, useState } from "react";
import "./_BubbleBox.scss";
import BigBubble from "../BigBubble/BigBubble";
import { DataContext } from "../../contexts/DataContext";
import {GameContext} from "../../contexts/GameContext"
import SmallBubble from "../SmallBubble/SmallBubble";
import initialItems from '../../data'
import GameBox from "../GameBox/GameBox"


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
    return relatedItems.map((item, index) => {
      item.id = `bubble${index+=1}`;
      return <SmallBubble item={item} key={index+=1} setQuery={data.setQuery} />;
    });
  };

  return (
    <div className="bubble-box">
      <section className="banner">
        <GameBox />
      </section>
      {!data.isLoading ? 
        <React.Fragment>
          {data && <BigBubble setQuery={data.setQuery}/>}
          <div className="baby-bubble-wrap">{data && createBubbles()}</div>
        </React.Fragment>
        :
        <h1 className='loading'>LOADING</h1>
    }
    </div>
  );
};

export default BubbleBox;
