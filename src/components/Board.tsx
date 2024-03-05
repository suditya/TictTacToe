import { useEffect, useState } from "react";
import "../styles/Board.css";
import Box from "./Box";
const Board = () => {
  const X = "✖️";
  const O = "⭕️";
  const [boxArray, setBoxArray] = useState(Array(9).fill(null));
  const [isFirstPlayer, setFirstPlayer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      checkWinner();
    }, 400);
  }, [boxArray]);

  const alertWinner = (value: string) => {
    if (value == X) alert("Player 1 won the game!");
    else alert("Player 2 won the game!");

    //end the game
  };

  const checkWinner = () => {
    console.log(boxArray);
    if (boxArray.every((box) => box != null)) {
      alert("Game Draw");
      return;
    }
    // Rows
    for (let i = 0; i < 9; i += 3) {
      if (
        boxArray[i] === boxArray[i + 1] &&
        boxArray[i + 1] === boxArray[i + 2]
      ) {
        if (boxArray[i] !== null) {
          alertWinner(boxArray[i]);
          return;
        }
      }
    }

    // Columns
    for (let i = 0; i < 3; i++) {
      if (
        boxArray[i] === boxArray[i + 3] &&
        boxArray[i + 3] === boxArray[i + 6]
      ) {
        if (boxArray[i] !== null) {
          alertWinner(boxArray[i]);
          return;
        }
      }
    }

    // Diagonals
    if (boxArray[0] === boxArray[4] && boxArray[4] === boxArray[8]) {
      if (boxArray[0] !== null) {
        alertWinner(boxArray[0]);
        return;
      }
    }

    if (boxArray[2] === boxArray[4] && boxArray[4] === boxArray[6]) {
      if (boxArray[2] !== null) {
        alertWinner(boxArray[2]);
        return;
      }
    }
  };

  const handleClick = (idx: number): void => {
    console.log(idx);
    const updatedBoxArray = [...boxArray];
    if (boxArray[idx] != null) return;
    if (isFirstPlayer) {
      updatedBoxArray[idx] = X; // Emoji for Player 1
    } else {
      updatedBoxArray[idx] = O; // Emoji for Player 2
    }
    console.log(updatedBoxArray);
    setBoxArray(updatedBoxArray);
    setFirstPlayer(!isFirstPlayer);
  };

  return (
    <>
      {isFirstPlayer ? (
        <h4>Player 1's Turn ✨</h4>
      ) : (
        <h4>Player 2's Turn 🌟</h4>
      )}
      <div className="board-container">
        <div className="board-row">
          <Box
            value={boxArray[0]}
            onClick={() => handleClick(0)}
            left={true}
            top={true}
          ></Box>
          <Box
            value={boxArray[1]}
            onClick={() => handleClick(1)}
            top={true}
          ></Box>
          <Box
            value={boxArray[2]}
            onClick={() => handleClick(2)}
            right={true}
            top={true}
          ></Box>
        </div>
        <div className="board-row">
          <Box
            value={boxArray[3]}
            onClick={() => handleClick(3)}
            left={true}
          ></Box>
          <Box value={boxArray[4]} onClick={() => handleClick(4)}></Box>
          <Box
            value={boxArray[5]}
            onClick={() => handleClick(5)}
            right={true}
          ></Box>
        </div>
        <div className="board-row">
          <Box
            value={boxArray[6]}
            onClick={() => handleClick(6)}
            left={true}
            bottom={true}
          ></Box>
          <Box
            value={boxArray[7]}
            onClick={() => handleClick(7)}
            bottom={true}
          ></Box>
          <Box
            value={boxArray[8]}
            onClick={() => handleClick(8)}
            right={true}
            bottom={true}
          ></Box>
        </div>
      </div>
    </>
  );
};

export default Board;
