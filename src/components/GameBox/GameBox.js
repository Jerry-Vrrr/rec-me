import React, {useContext} from 'react'
import {GameContext} from "../../contexts/GameContext"
import { DataContext } from "../../contexts/DataContext";
import "./_GameBox.scss"


const GameBox = () => {
  const gameInfo = useContext(GameContext)

  
  
return (
  <div>
    {/* onClick handler on button to set GameActive */}
    <button className="start-game-button" >Let's play a game!</button>
    <h2>{gameInfo.gameMessage}</h2>


  </div>
)
}

export default GameBox
