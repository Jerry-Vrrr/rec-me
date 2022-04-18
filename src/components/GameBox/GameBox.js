import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import "./_GameBox.scss";
import { getRandom } from "../../utils";
import { gameArtists } from "../../data";

const GameBox = () => {
  const gameInfo = useContext(GameContext);

  const startGame = () => {
    gameInfo.setGameIsActive((prev) => !prev);
    gameInfo.setGoalArtist(getRandom(gameArtists));
  };

  const gameButton = () => {
    return gameInfo.gameIsActive ? "Back to the recs!" : "Let's play a game!";
  };

  // const restartGame = () => {
  //   // gameInfo.setGameMessage('')
  //   gameInfo.setGoalArtist(getRandom(gameArtists))

  // }

  return (
    <div
      className={`game-display ${gameInfo.gameIsActive ? "dark fade-in" : ""}`}
    >
      <button className="button-64" onClick={() => startGame()}>
        <span class="text">{gameButton()}</span>
      </button>

      {/* <button className="button-64" id='restart-button' onClick={() => restartGame()}> */}
      {/* <span class="text">Restart Game</span>
      </button> */}

      {gameInfo.gameIsActive && (
        <div className="game-text">
          <h1>Can you get to {gameInfo.goalArtist} in 6 or less moves?</h1>
          <h2>Moves Left: {gameInfo.turnCounter}</h2>
        </div>
      )}
      <h2>{gameInfo.gameMessage}</h2>
    </div>
  );
};

export default GameBox;
