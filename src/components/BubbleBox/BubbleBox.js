import React, { useContext, useEffect, useState } from "react";
import "./_BubbleBox.scss";
import BigBubble from "../BigBubble/BigBubble";
import { DataContext } from "../../contexts/DataContext";
import {GameContext} from "../../contexts/GameContext"
import SmallBubble from "../SmallBubble/SmallBubble";
import initialItems from '../../data'
import GameBox from "../GameBox/GameBox"
import Loader from "../Loader/Loader"


const BubbleBox = () => {
  const gameInfo = useContext(GameContext)
  const data = useContext(DataContext);
  const relatedItems = data.data.relatedItems;
 
const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};

const didIWin = () => {
  console.log(data.data.mainItem.Name)
  // console.log(gameInfo.turnCounter)
  // console.log("didIWinFire?")
  if (!gameInfo.gameIsActive) {
    console.log("gameisnotactive")
    return
  }
   if (gameInfo.turnCounter > 1 && data.data.mainItem.Name !== gameInfo.goalArtist){
    console.log("not yet")
    return gameInfo.setGameMessage("Nah, son")
  } 
  if (gameInfo.turnCounter === 1) {
    console.log("loser")
    gameInfo.setGameMessage("You're a loser baby!")
  }
  if (gameInfo.turnCounter > 1 && data.data.mainItem.Name === gameInfo.goalArtist) {
    console.log("winner")
    return gameInfo.setGameMessage("You did the thing!")
  } 
}

  

  useEffect(() => {
    data.setQuery(initialItems[getRandomIndex(initialItems)]);
  }, []);

  const createBubbles = () => {
    return relatedItems.map((item, index) => {
      item.id = `bubble${index+=1}`;
      return <SmallBubble item={item} key={index+=1} setQuery={data.setQuery} didIWin={didIWin} />;
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
        <Loader />
    }
    </div>
  );
};

export default BubbleBox;
