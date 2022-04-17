import React, { useContext, useEffect, useState } from "react";
import "./_BubbleBox.scss";
import BigBubble from "../BigBubble/BigBubble";
import { DataContext } from "../../contexts/DataContext";
import { GameContext } from "../../contexts/GameContext"
import SmallBubble from "../SmallBubble/SmallBubble";
import {
  initialItems,
  winResponses,
  loseResponses,
  attemptResponses,
} from '../../data'
import GameBox from "../GameBox/GameBox"
import balls from './beach-balls.png'
import Loader from "../Loader/Loader"



const BubbleBox = () => {
  const gameInfo = useContext(GameContext)
  const data = useContext(DataContext);
  const relatedItems = data.data.relatedItems;

  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const didIWin = (artistName) => {
    console.log(artistName)
    // console.log(gameInfo.turnCounter)
    // console.log("didIWinFire?")
    if (!gameInfo.gameIsActive) {
      console.log("gameisnotactive")
      return
    }
    if (gameInfo.turnCounter > 1 && artistName === gameInfo.goalArtist) {
      console.log("winner")
      return gameInfo.setGameMessage(winResponses[getRandomIndex(winResponses)])
    }
    if (gameInfo.turnCounter > 1 && artistName !== gameInfo.goalArtist) {
      console.log("not yet")
      return gameInfo.setGameMessage(attemptResponses[getRandomIndex(attemptResponses)])
    }
    if (gameInfo.turnCounter === 1) {
      console.log("loser")
      gameInfo.setGameMessage(loseResponses[getRandomIndex(loseResponses)])
    }
  }



  useEffect(() => {
    data.setQuery(initialItems[getRandomIndex(initialItems)]);
  }, []);

  const createBubbles = () => {
    return relatedItems.map((item, index) => {
      item.id = `bubble${index += 1}`;
      return <SmallBubble item={item} key={index += 1} setQuery={data.setQuery} didIWin={didIWin} />;
    });
  };

  return (
    <div className="bubble-box">
      <section className="banner">
        {/* <img  src={balls}></img> */}
        <GameBox />
      </section>
      {!data.isLoading ?
        <React.Fragment>
          {data && <BigBubble setQuery={data.setQuery} />}
          <div className="baby-bubble-wrap">{data && createBubbles()}</div>
        </React.Fragment>
        :
        <Loader />
      }
    </div>
  );
};

export default BubbleBox;
