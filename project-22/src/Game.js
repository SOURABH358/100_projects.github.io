import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Game({ games, setGames, sudoku, setSudoku, setSolution, board, setBoard, setResult}) {
    useEffect(() => {
        const getTiles = async () => {
            const options = {
                method: 'GET',
                url: 'https://sudoku-board.p.rapidapi.com/new-board',
                params: { diff: '2', stype: 'list', solu: 'true' },
                headers: {
                    'X-RapidAPI-Key': 'a1238b7942msh225a191ee761b65p1ba5e1jsn457057aff454',
                    'X-RapidAPI-Host': 'sudoku-board.p.rapidapi.com'
                }
            };
            try {
                const { data: { response } } = await axios.request(options)
                let tiles = response["unsolved-sudoku"]
                let solTiles = response["solution"]
                let newTiles = tiles.map(el => {
                    return el.map(data => data)
                })
                setBoard(newTiles)
                setSudoku(tiles)
                setSolution(solTiles)
            } catch (error) {
                console.log(error)
            }
        }
        getTiles()
        
    }, [games])
    function handleEntry(event) {
        if (parseInt(event.target.value) < 1 || parseInt(event.target.value) > 9) {
            event.target.value = ""
        }
        else {
            const i = event.target.id.split('_')[0]
            const j = event.target.id.split('_')[1]
            setSudoku(prevalue => {
                let arr = [...prevalue]
                arr[i][j] = parseInt(event.target.value);
                return arr;
            })
        }

    }
    function handleSubmit(event){
        event.preventDefault();
        setResult(true)
        setGames(false)
    }

    function showTiles() {
        return sudoku.map((el, i) => {
            return el.map((data, j) => {
                if (board[i][j] === 0)
                    return <input type="number" id={`${i}_${j}`} onChange={handleEntry} value = {data?data:""} max="9" min="1" />
                else
                    return <input type="text" id={`${i}${j}`} readOnly={true} value={data} className="filled" />
            })
        })
    }
    return (
        <section id="games-section">
            <form id="sudoku">
                {showTiles()}
            </form>
            <div>
                <button type="button" id="verify" className="btn">Verify</button>
                <button type="submit" id="submit" className="btn" onClick={handleSubmit}>Submit</button>
            </div>
        </section>
    )
}