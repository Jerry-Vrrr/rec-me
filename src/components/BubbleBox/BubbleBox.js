import React, { useContext, useEffect } from "react";
import "./_BubbleBox.scss";
import BigBubble from "../BigBubble/BigBubble";
import { DataContext } from "../../contexts/DataContext";
import { GameContext } from "../../contexts/GameContext";
import SmallBubble from "../SmallBubble/SmallBubble";
import { getRandom } from "../../utils";
import {
  initialArtists,
  winResponses,
  loseResponses,
  attemptResponses,
} from "../../data";
import GameBox from "../GameBox/GameBox";
import Loader from "../Loader/Loader";

const BubbleBox = () => {
  const gameInfo = useContext(GameContext);
  const data = useContext(DataContext);
  const mainArtist = data.mainArtist;
  const relatedArtists = data.relatedArtists;

  const didIWin = (artistName) => {
    if (!gameInfo.gameIsActive) {
      return;
    }
    if (gameInfo.turnCounter >= 1 && artistName === gameInfo.goalArtist) {
      gameInfo.setGameMessage(getRandom(winResponses));
      gameInfo.setGameOver(true);
    }
    if (gameInfo.turnCounter > 1 && artistName !== gameInfo.goalArtist) {
      return gameInfo.setGameMessage(getRandom(attemptResponses));
    }
    if (gameInfo.turnCounter === 1 && artistName !== gameInfo.goalArtist) {
      gameInfo.setGameMessage(getRandom(loseResponses));
      gameInfo.setGameOver(true);
    }
  };

  useEffect(() => {
    data.setSearchQuery(getRandom(initialArtists));
  }, []);

  const createBubbles = () => {
    return relatedArtists.map((item, index) => {
      item.id = `bubble${(index += 1)}`;
      return (
        <SmallBubble
          item={item}
          key={(index += 1)}
          setSearchQuery={data.setSearchQuery}
          didIWin={didIWin}
        />
      );
    });
  };

  if (!data.isLoading && !mainArtist.name) {
    return (
      <div className="bubble-box">
        <section className="banner">
          <GameBox />
        </section>
        <Loader />
      </div>
    );
  } 
  if (!data.isLoading && mainArtist.name) {
    return (
      <>
        <div className="bubble-box">
          <section className="banner">
            <GameBox />
          </section>
          <BigBubble setSearchQuery={data.setSearchQuery} />
          <button
            className="dice-button"
            aria-label="randomize artists"
            onClick={() => {
              data.setSearchQuery(getRandom(initialArtists));
            }}
          ></button>
          <div className="baby-bubble-wrap">{data && createBubbles()}</div>
        </div>
      </>
    );
  } else {
    return (
      <div className="bubble-box">
        <section className="banner">
          <GameBox />
        </section>
        <Loader />
      </div>
    );
  }
};

export default BubbleBox;
