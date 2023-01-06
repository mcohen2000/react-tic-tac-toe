import React, { useState } from "react";
import "./Gameboard.css";

const Gameboard = () => {
  const [winnerText, setWinnerText] = useState("");
  const [playerTurn, setPlayerTurn] = useState(1);
  const [boardArr, setBoardArr] = useState([
    "", "", "",
    "", "", "",
    "", "", "",
  ]);

  function checkWin() {
    // horizontal wins
    if (boardArr[0] !== "" && boardArr[0] === boardArr[1] && boardArr[0] === boardArr[2]) {
        if (boardArr[0] === 1){
            return setWinnerText("Congrats! Player X Wins");
        }
        return setWinnerText("Congrats! Player O Wins");
    }
    if (boardArr[3] !== "" && boardArr[3] === boardArr[4] && boardArr[3] === boardArr[5]) {
        if (boardArr[3] === 1){
            return setWinnerText("Congrats! Player X Wins");
        }
        return setWinnerText("Congrats! Player O Wins");
    }
    if (boardArr[6] !== "" && boardArr[6] === boardArr[7] && boardArr[6] === boardArr[8]) {
        if (boardArr[6] === 1){
            return setWinnerText("Congrats! Player X Wins");
        }
        return setWinnerText("Congrats! Player O Wins");
    }
    // vertical wins
    if (boardArr[0] !== "" && boardArr[0] === boardArr[3] && boardArr[0] === boardArr[6]) {
        if (boardArr[0] === 1){
            return setWinnerText("Congrats! Player X Wins");
        }
        return setWinnerText("Congrats! Player O Wins");
    }
    if (boardArr[1] !== "" && boardArr[1] === boardArr[4] && boardArr[1] === boardArr[7]) {
        if (boardArr[1] === 1){
            return setWinnerText("Congrats! Player X Wins");
        }
        return setWinnerText("Congrats! Player O Wins");
    }
    if (boardArr[2] !== "" && boardArr[2] === boardArr[5] && boardArr[2] === boardArr[8]) {
        if (boardArr[2] === 1){
            return setWinnerText("Congrats! Player X Wins");
        }
        return setWinnerText("Congrats! Player O Wins");
    }
    // diagonal wins
    if (boardArr[0] !== "" && boardArr[0] === boardArr[4] && boardArr[0] === boardArr[8]) {
        if (boardArr[0] === 1){
            return setWinnerText("Congrats! Player X Wins");
        }
        return setWinnerText("Congrats! Player O Wins");
    }
    if (boardArr[2] !== "" && boardArr[2] === boardArr[4] && boardArr[2] === boardArr[6]) {
        if (boardArr[1] === 1){
            return setWinnerText("Congrats! Player X Wins");
        }
        return setWinnerText("Congrats! Player O Wins");
    }
  }
  function handleClick(e) {
    if (winnerText === "") {
      if (e.target.className.includes("notPlayed")) {
        const updatedBoard = boardArr;
        updatedBoard[e.target.id] = playerTurn % 2;
        setBoardArr(updatedBoard);
        setPlayerTurn((prevState) => prevState + 1);
        e.target.classList.toggle("notPlayed");
        if (playerTurn % 2 === 1) {
          e.target.innerHTML = "X";
        }
        if (playerTurn % 2 === 0) {
          e.target.innerHTML = "O";
        }
        checkWin();
      }
    }
  }
  return (
    <div>
      <h3>{winnerText}</h3>

      <div className="gameBoard" onClick={handleClick}>
        <div id="0" className="box box0 notPlayed"></div>
        <div id="1" className="box box1 notPlayed"></div>
        <div id="2" className="box box2 notPlayed"></div>
        <div id="3" className="box box3 notPlayed"></div>
        <div id="4" className="box box4 notPlayed"></div>
        <div id="5" className="box box5 notPlayed"></div>
        <div id="6" className="box box6 notPlayed"></div>
        <div id="7" className="box box7 notPlayed"></div>
        <div id="8" className="box box8 notPlayed"></div>
      </div>
    </div>
  );
};

export default Gameboard;
