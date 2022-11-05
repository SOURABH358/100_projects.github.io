import React from "react";

export default function Result({ solution, board, sudoku, setGames, setResult }) {

    function getBoard() {
        return sudoku.map((el, i) => {
            return el.map((data, j) => {
                const check = solution[i][j]===data?"correct":"incorrect";
                if (board[i][j] === 0)
                    return <input type="number" id={`${i}_${j}`} readOnly={true} value={data?data:""} className = {data?check:""}/>
                else
                    return <input type="number" key={`${i}${j}`} readOnly={true} value={data?data:""} className="filled"/>
            })
        })
    }
    function getSolution() {
        return solution.map((el, i) => {
            return el.map((data, j) => {
                
                if (board[i][j] === 0)
                    return <input type="text" readOnly={true} value={data?data:""} />
                else
                    return <input type="text" readOnly={true} value={data?data:""}  className = "filled"/>
            })
        })
    }
    function handleAgain(){
        setResult(false)
        setGames(true)
    }
    return (
        <section id="result-section">
            <div className="result-title">
                <h2>Your Solution</h2>
                <h2>Solution</h2>
            </div>
            <div id="boards">
                <div id = "user">
                    {getBoard()}

                </div>
                <div id = "solution">
                    {getSolution()}
                </div>
            </div>
            
            <button type="button" id="play__again" className="btn" onClick={handleAgain}>Play Again</button>
        </section>
    )
}