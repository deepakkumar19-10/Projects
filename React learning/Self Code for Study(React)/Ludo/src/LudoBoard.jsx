//=================//
//Self Code
//==================//

import { useState } from "react";

export default function LudoBoard() {
  // 1 Way
  //   let [blueMove, setBlueMove] = useState(0);
  //   let [yellowMove, setYellowMove] = useState(0);
  //   let [greenMove, setGreenMove] = useState(0);
  //   let [redMove, setRedMove] = useState(0);

  // 2 Way
  let [Moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let [count, setCount] = useState(0);

  let updateBlue = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
  };

  let updateYellow = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };

  let updateGreen = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };

  let updateRed = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };

  return (
    <div>
      <h1>Game Begins!</h1>

      <div className="board">
        <p>Blue moves = {Moves.blue}</p>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={updateBlue}
        >
          +1
        </button>
        <p>Yellow moves = {Moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green moves = {Moves.green}</p>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={updateGreen}
        >
          +1
        </button>
        <p>Red moves = {Moves.red}</p>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={updateRed}
        >
          +1
        </button>
      </div>
    </div>
  );
}
