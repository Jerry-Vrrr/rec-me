import React, {useContext} from 'react'
import {GameContext} from "../../contexts/GameContext"
import { DataContext } from "../../contexts/DataContext";
import "./_GameBox.scss"


const GameBox = () => {
  const gameInfo = useContext(GameContext)

  const startGame = () => {
    gameInfo.setGameIsActive(prev => !prev)
  }

  const gameButton = () => {
    return gameInfo.gameIsActive ? 'End Game' : 'Start Game'
  }
  
return (
  <div>
    {/* onClick handler on button to set GameActive */}
    <button className="start-game-button" onClick={() => (startGame())}>{gameButton()}</button>
    {gameInfo.gameIsActive && <h1>Can you get to {gameInfo.goalArtist} in 6 or less moves?</h1>}
    <h2>{gameInfo.gameMessage}</h2>


  </div>
)
}

export default GameBox
