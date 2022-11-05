import React, { useEffect, useState } from "react";
import axios from "axios";
import './Game.css'
export default function Game({games, sudoku, setSudoku,solution, setSolution}) {
    
    useEffect(() => {
        const getTiles = async () =>{
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
                const {data:{response}} = await axios.request(options)
                let tiles = response["unsolved-sudoku"].map(el => {
                    return el.map(data => {
                        if (data === 0)
                            return <input type="text" />
                        else
                            return <input type="text" readOnly = {true} value={data} className = "filled"/>
                    })
                })
                let solTiles = response["solution"].map(el => {
                    return el.map(data => {
                        if (data === 0)
                            return <input type="text" />
                        else
                            return <input type="text" readOnly = {true} value={data} className = "filled"/>
                    })
                })
                setSudoku(tiles)
                setSolution(solTiles)
            } catch (error) {
                console.log(error)
            }
        }
        getTiles()
    },[games])

    return (
        <section id="games-section">
            <form id="sudoku">
                {solution}
            </form>
                <div>
                    <button type = "button" id = "verify">Verify</button>
                    <button type = "submit" id = "submit">Submit</button>
                </div>
        </section>
    )
}