// import "./App.css";
// import Lottery from "./Lottery";
// import { sum } from "./helper";

// function App() {
//   let winCondition = (ticket) => {
//     //return sum(ticket) === 16;
//     //return ticket.every((num) => num === ticket[0]);
//     return ticket[0] === 0;
//   };

//   return (
//     <>
//       <Lottery n={3} winningSum={16} winCondition={winCondition} />
//     </>
//   );
// }

// export default App;



import { useState } from "react";
import "./Lottery.css";

export default function App() {
  const [ticket, setTicket] = useState("");
  const [winningNumber, setWinningNumber] = useState("");
  const [isWinner, setIsWinner] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Random 6 digit number
  const generateNumber = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Generate Ticket
  const generateTicket = () => {
    setIsGenerating(true);
    setShowResult(false);
    setWinningNumber("");
    setIsWinner(false);

    // Ticket number
    const newTicket = generateNumber();

    setTicket(newTicket);

    // 50% WIN / 50% LOSE
    setTimeout(() => {
      let newWinningNumber;

      if (Math.random() < 0.5) {
        // WIN
        newWinningNumber = newTicket;
      } else {
        // LOSE
        newWinningNumber = generateNumber();

        // Make sure winning number is different
        while (newWinningNumber === newTicket) {
          newWinningNumber = generateNumber();
        }
      }

      setWinningNumber(newWinningNumber);

      // Check result
      if (newTicket === newWinningNumber) {
        setIsWinner(true);
      } else {
        setIsWinner(false);
      }

      setShowResult(true);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="lottery-app">
      <div className="lottery-card">
        {/* Header */}
        <div className="logo">🎟️ Lucky Lottery</div>

        <h1>Try Your Luck!</h1>

        <p className="subtitle">
          Generate your ticket and let luck decide your result.
        </p>

        {/* Ticket */}
        <div className="ticket">
          <p>YOUR TICKET</p>

          <div className="ticket-number">{ticket || "------"}</div>
        </div>

        {/* Generate Button */}
        <button
          className="primary-btn"
          onClick={generateTicket}
          disabled={isGenerating}
        >
          {isGenerating ? "Checking Your Luck..." : "Generate Ticket"}
        </button>

        {/* Checking Message */}
        {isGenerating && (
          <div className="checking">🎲 Drawing your winning number...</div>
        )}

        {/* Result Automatically Shows */}
        {showResult && (
          <div className="result-card">
            <p className="result-label">WINNING NUMBER</p>

            <div className="winning-number">{winningNumber}</div>

            {isWinner ? (
              /* WIN */
              <div className="winner-result">
                <div className="result-icon">🏆</div>

                <h2>YOU WIN!</h2>

                <p>
                  Congratulations! 🎉
                  <br />
                  Both numbers are same.
                </p>
              </div>
            ) : (
              /* LOSE */
              <div className="loser-result">
                <div className="result-icon">😔</div>

                <h2>BETTER LUCK NEXT TIME</h2>

                <p>Your ticket and winning number are different.</p>
              </div>
            )}
          </div>
        )}
      </div>

      <footer>🍀 Good Luck!</footer>
    </div>
  );
}
