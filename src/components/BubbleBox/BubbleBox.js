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
import Error from "../Error/Error";



const BubbleBox = () => {
  const gameInfo = useContext(GameContext)
  const data = useContext(DataContext);
  const relatedItems = data.data.relatedItems;

  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const didIWin = (artistName) => {
    if (!gameInfo.gameIsActive) {
      return
    }
    if (gameInfo.turnCounter > 1 && artistName === gameInfo.goalArtist) {
      gameInfo.setTurnCounter(7)
      gameInfo.setGameIsActive(false)
      gameInfo.setGameMessage(winResponses[getRandomIndex(winResponses)])
      return setTimeout(gameInfo.setGameMessage(''), 7000)
    }
    if (gameInfo.turnCounter > 1 && artistName !== gameInfo.goalArtist) {
      return gameInfo.setGameMessage(attemptResponses[getRandomIndex(attemptResponses)])
    }
    if (gameInfo.turnCounter === 1) {
      gameInfo.setTurnCounter(7)
      gameInfo.setGameIsActive(false)
      gameInfo.setGameMessage(loseResponses[getRandomIndex(loseResponses)])
      return setTimeout(gameInfo.setGameMessage(''), 7000)

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
          {data && relatedItems.length ? <BigBubble setQuery={data.setQuery}/> : null}
          {!relatedItems.length && <h2 className='search-error'>No artist found!</h2>}
          <div className="baby-bubble-wrap">{data && createBubbles()}</div>
        </React.Fragment>
        :
        <Loader />
      }

    </div>
  );
};

export default BubbleBox;