import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { DataContext } from "../../contexts/DataContext";
import "./_GameBox.scss";
import balls from "../../images/beach-balls.png";
import {getRandom} from "../../utils"
import { gameArtists } from "../../data";

const GameBox = () => {
  const gameInfo = useContext(GameContext);

  const startGame = () => {
    gameInfo.setGameIsActive((prev) => !prev);
    gameInfo.setGoalArtist(getRandom(gameArtists))
  };

  const gameButton = () => {
    return gameInfo.gameIsActive ? "End Game" : "Start Game";
  };

  return (
    <div className={`game-display ${gameInfo.gameIsActive ? "dark fade-in" : ""}`}>
      <button className="start-game-button" onClick={() => startGame()}>
        {gameButton()}
      </button>
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
