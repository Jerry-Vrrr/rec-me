import React, { useState, createContext, useEffect  } from "react";
import { fetchData } from "../apiCalls";
import Error from "../components/Error/Error";
import initialItems from "../data";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {

  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const [turnCounter, setTurnCounter] = useState(0)
  
  const [goalArtist, setGoalArtist] = useState(initialItems[getRandomIndex(initialItems)])

  const [gameIsActive, setGameIsActive] = useState(true)

  return (
    <GameContext.Provider value={{ setTurnCounter, goalArtist }}>
      {children}
    </GameContext.Provider>
  );

}