import React from "react";

export default function Rules() {
    return (
        <section className="show">
            <h1 id="game-title">Sudoku</h1>
            <div id="layover"></div>
            <div id="rules">
                <h2 id="rules-title">Sudoku Rules</h2>
                <ul id="rules-list">
                    <li>You have to fill all the boxes with number between 1-9</li>
                    <li>No Row or column should repeat the same number.</li>
                    <li>Some of the tiles are already prefilled to help you.</li>
                    <li>You can check if your sudoku is correct or not by clicking on the verify.</li>
                    <li>To view result click on submit</li>
                    <li>You can select the difficulty mode to challenge your self.</li>
                    <li>There is a timer running to notice time taken by you to solve the sudoku.</li>
                </ul>
                <div id="play" >
                    <button type="button">Play</button>
                </div>
            </div>
        </section>
    )
}