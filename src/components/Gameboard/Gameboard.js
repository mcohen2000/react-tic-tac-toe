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
        if (boardArr[0] === "X"){
            return setWinnerText(`Congrats! Player X won in ${playerTurn} turns!`);
        }
        return setWinnerText(`Congrats! Player O won in ${playerTurn} turns!`);
    }
    if (boardArr[3] !== "" && boardArr[3] === boardArr[4] && boardArr[3] === boardArr[5]) {
        if (boardArr[3] === "X"){
            return setWinnerText(`Congrats! Player X won in ${playerTurn} turns!`);
        }
        return setWinnerText(`Congrats! Player O won in ${playerTurn} turns!`);
    }
    if (boardArr[6] !== "" && boardArr[6] === boardArr[7] && boardArr[6] === boardArr[8]) {
        if (boardArr[6] === "X"){
            return setWinnerText(`Congrats! Player X won in ${playerTurn} turns!`);
        }
        return setWinnerText(`Congrats! Player O won in ${playerTurn} turns!`);
    }
    // vertical wins
    if (boardArr[0] !== "" && boardArr[0] === boardArr[3] && boardArr[0] === boardArr[6]) {
        if (boardArr[0] === "X"){
            return setWinnerText(`Congrats! Player X won in ${playerTurn} turns!`);
        }
        return setWinnerText(`Congrats! Player O won in ${playerTurn} turns!`);
    }
    if (boardArr[1] !== "" && boardArr[1] === boardArr[4] && boardArr[1] === boardArr[7]) {
        if (boardArr[1] === "X"){
            return setWinnerText(`Congrats! Player X won in ${playerTurn} turns!`);
        }
        return setWinnerText(`Congrats! Player O won in ${playerTurn} turns!`);
    }
    if (boardArr[2] !== "" && boardArr[2] === boardArr[5] && boardArr[2] === boardArr[8]) {
        if (boardArr[2] === "X"){
            return setWinnerText(`Congrats! Player X won in ${playerTurn} turns!`);
        }
        return setWinnerText(`Congrats! Player O won in ${playerTurn} turns!`);
    }
    // diagonal wins
    if (boardArr[0] !== "" && boardArr[0] === boardArr[4] && boardArr[0] === boardArr[8]) {
        if (boardArr[0] === "X"){
            return setWinnerText(`Congrats! Player X won in ${playerTurn} turns!`);
        }
        return setWinnerText(`Congrats! Player O won in ${playerTurn} turns!`);
    }
    if (boardArr[2] !== "" && boardArr[2] === boardArr[4] && boardArr[2] === boardArr[6]) {
        if (boardArr[1] === "X"){
            return setWinnerText(`Congrats! Player X won in ${playerTurn} turns!`);
        }
        return setWinnerText(`Congrats! Player O won in ${playerTurn} turns!`);
    }
    // draw
    if (boardArr[0] !== "" && boardArr[1] !== "" && boardArr[2] !== "" && boardArr[0] !== "" && boardArr[3] !== "" && boardArr[4] !== "" && boardArr[5] !== "" && boardArr[6] !== "" && boardArr[7] !== "" && boardArr[8] !== ""){
        return setWinnerText("Draw!")
    }
  }
  function handleClick(e) {
      if (winnerText === "") {
        if (e.target.className.includes("notPlayed")) {
            const updatedBoard = boardArr;
            setBoardArr(updatedBoard);
            setPlayerTurn((prevState) => prevState + 1);
        if (playerTurn % 2 === 1) {
            updatedBoard[e.target.id] = "X";
        }
        if (playerTurn % 2 === 0) {
            updatedBoard[e.target.id] = "O";
        }
        checkWin();
      }
    }
  }

  return (
    <div>
      <h3>{winnerText}</h3>
      <div className="gameBoard" onClick={handleClick}>
        {boardArr.map((item, index) => <div key={index} id={index} className={item==="" ? "box notPlayed" : "box"}>{item}</div>)}
      </div>
    </div>
  );
};

export default Gameboard;
