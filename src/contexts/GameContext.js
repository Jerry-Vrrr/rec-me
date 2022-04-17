import React, { useState, createContext, useEffect  } from "react";
import { fetchData } from "../apiCalls";
import Error from "../components/Error/Error";
import {initialItems, gameArtists, attemptResponses, winResponses, loseResponses} from "../data";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {

  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const gameReset = () => {

  }

  // const [winResponses, setWinResponses] = useState(winResponses[getRandomIndex(winResponses)])
  // const [loseResponses, setLoseResponses] = useState(loseResponses[getRandomIndex(loseResponses)])
  // const [attemptResponses, setAttemptResponses] = useState(attemptResponses[getRandomIndex(attemptResponses)])

  const [turnCounter, setTurnCounter] = useState(6)
  
  const [goalArtist, setGoalArtist] = useState(gameArtists[getRandomIndex(gameArtists)])

  const [gameIsActive, setGameIsActive] = useState(false)

  const [gameMessage, setGameMessage] = useState('')

  return (
    <GameContext.Provider value={{ turnCounter, setTurnCounter, goalArtist, gameIsActive, setGameIsActive , gameReset, gameMessage, setGameMessage }}>
      {children}
    </GameContext.Provider>
  );

}

export {GameContext, GameContextProvider}