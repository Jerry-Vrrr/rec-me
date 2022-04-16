import React, { useState, createContext, useEffect  } from "react";
import { fetchData } from "../apiCalls";
import Error from "../components/Error/Error";
import initialItems from "../data";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {

  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const gameReset = () => {

  }

  const [turnCounter, setTurnCounter] = useState(6)
  
  const [goalArtist, setGoalArtist] = useState(initialItems[getRandomIndex(initialItems)])

  const [gameIsActive, setGameIsActive] = useState(true)

  const [gameMessage, setGameMessage] = useState("")

  return (
    <GameContext.Provider value={{ turnCounter, setTurnCounter, goalArtist, gameIsActive, gameReset, gameMessage, setGameMessage }}>
      {children}
    </GameContext.Provider>
  );

}

export {GameContext, GameContextProvider}