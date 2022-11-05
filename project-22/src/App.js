import React, {useState} from "react";
import axios from "axios";
import Rules from "./Rules";
import Game from "./Game";
import Result from "./Result";
import './App.css'

function App(){
  const [rules, setRules] = useState("");

  return(<>
    <Rules
    rules = {rules}
    setRules = {setRules}
    />
    {/* <Game />
    <Result /> */}
  </>
  )
}
export default App;
// const options = {
//   method: 'GET',
//   url: 'https://sudoku-board.p.rapidapi.com/new-board',
//   params: {diff: '2', stype: 'list', solu: 'true'},
//   headers: {
//     'X-RapidAPI-Key': 'a1238b7942msh225a191ee761b65p1ba5e1jsn457057aff454',
//     'X-RapidAPI-Host': 'sudoku-board.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });