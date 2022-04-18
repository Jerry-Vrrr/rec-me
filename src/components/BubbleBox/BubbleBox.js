import React, { useContext, useEffect, useState } from "react";
import "./_BubbleBox.scss";
import BigBubble from "../BigBubble/BigBubble";
import { DataContext } from "../../contexts/DataContext";
import { GameContext } from "../../contexts/GameContext";
import SmallBubble from "../SmallBubble/SmallBubble";
import { getRandom } from "../../utils";
import {
  initialItems,
  winResponses,
  loseResponses,
  attemptResponses,
} from "../../data";
import GameBox from "../GameBox/GameBox";
import Loader from "../Loader/Loader";

const BubbleBox = () => {
  const gameInfo = useContext(GameContext);
  const data = useContext(DataContext);
  const relatedItems = data.data.relatedItems;

  const didIWin = (artistName) => {
    if (!gameInfo.gameIsActive) {
      return;
    }
    if (gameInfo.turnCounter >= 1 && artistName === gameInfo.goalArtist) {
      gameInfo.setGameMessage(getRandom(winResponses));
      gameInfo.setGameOver(true)
    }
    if (gameInfo.turnCounter > 1 && artistName !== gameInfo.goalArtist) {
      return gameInfo.setGameMessage(getRandom(attemptResponses));
    }
    if (gameInfo.turnCounter === 1) {
      gameInfo.setGameMessage(getRandom(loseResponses));
      gameInfo.setGameOver(true)
    }
  };

  useEffect(() => {
    data.setQuery(getRandom(initialItems));
  }, []);

  const createBubbles = () => {
    return relatedItems.map((item, index) => {
      item.id = `bubble${(index += 1)}`;
      return (
        <SmallBubble
          item={item}
          key={(index += 1)}
          setQuery={data.setQuery}
          didIWin={didIWin}
        />
      );
    });
  };

  return (
    <div className="bubble-box">
      <section className="banner">
        <GameBox />
      </section>
      {!data.isLoading ? (
        <React.Fragment>
          {data && relatedItems.length ? (
            <BigBubble setQuery={data.setQuery} />
          ) : null}
          {!relatedItems.length && (
            <h2 className="search-error">No artist found! Please try again!</h2>
          )}
          <div className="baby-bubble-wrap">{data && createBubbles()}</div>
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BubbleBox;
