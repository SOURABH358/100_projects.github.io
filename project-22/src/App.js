import React, { useState } from "react";
import axios from "axios";
import Rules from "./Rules";
import Game from "./Game";
import Result from "./Result";
import './App.css'

function App() {
  const [rules, setRules] = useState("show");
  const [games, setGames] = useState(false)
  const [result, setResult] = useState(false)
  const [sudoku, setSudoku] = useState([])
  const [board, setBoard] = useState([])
  const [solution, setSolution] = useState([])
  return (<>
    <h1 id="game-title">Sudoku</h1>
    <Rules
      rules={rules}
      setRules={setRules}
      setGames={setGames}
    />
    {games
      ? <Game
        // games={games}
        setGames={setGames}
        sudoku = {sudoku}
        setSudoku = {setSudoku}
        solution = {solution}
        setSolution = {setSolution}
        board = {board}
        setBoard = {setBoard}
        setResult = {setResult}
      />
      : <></>}
    {result
    ?<Result 
    solution = {solution}
    board = {board}
    sudoku = {sudoku}
    setGames = {setGames}
    setResult = {setResult}
    />
    :<></>}
  </>
  )
}
export default App;
