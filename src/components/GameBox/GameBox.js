import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import "./_GameBox.scss";
import { getRandom } from "../../utils";
import { gameArtists } from "../../data";

const GameBox = () => {
  const gameInfo = useContext(GameContext);

  const startGame = () => {
    gameInfo.setGameIsActive((prev) => !prev);
    restartGame()
  };

  const gameButton = () => {
    return gameInfo.gameIsActive ? "Quit Game" : "Let's play a game!";
  };

  const restartGame = () => {
    gameInfo.setTurnCounter(6);
    gameInfo.setGameMessage('')
    gameInfo.setGameOver(false)
    gameInfo.setGoalArtist(getRandom(gameArtists))
  }

  return (
    <div
      className={`game-display ${gameInfo.gameIsActive ? "dark fade-in" : ""}`}
    >
      <button className="button-64" onClick={() => startGame()}>
        <span className="text">{gameButton()}</span>
      </button>

      {gameInfo.gameOver && (<button className="button-64" id='restart-button' onClick={() => restartGame()}> 
        <span className="text">New Game</span>
      </button> )}

      {gameInfo.gameIsActive && !gameInfo.gameOver && (
        <div className="game-text">
          <h1>Can you get to {gameInfo.goalArtist} in 6 or less moves?</h1>
          <h2>Moves Left: {gameInfo.turnCounter}</h2>
        </div>
      )}
      {gameInfo.gameIsActive && <h2 className="game-msg" >{gameInfo.gameMessage}</h2>}
    </div>
  );
};

export default GameBox;
