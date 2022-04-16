import React {useState} from 'react'
import "./_GameBox.scss"


const GameBox = () => {
  const [turnCounter, setTurnCounter] = useState(0)
  
return (
  <div>
    <button className="start-game-button">Let's play a game!</button>

  </div>
)
}

export default GameBox
