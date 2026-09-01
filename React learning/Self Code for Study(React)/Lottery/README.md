# 🎟️ Lucky Lottery React App

Welcome to the **Lucky Lottery** project! This is an interactive, frontend-only React application where users can test their luck by generating a virtual lottery ticket. 

## ✨ Features

- **Instant Ticket Generation**: Generates a random 6-digit lottery ticket number.
- **Suspenseful Draw**: Simulates a live draw with a 1.5-second loading state ("Drawing your winning number...").
- **Fair Probability Logic**: Built-in algorithm ensures a 50% chance of winning and a 50% chance of losing.
- **Engaging UI/UX**: 
  - Clean, modern card-based interface with beautiful gradients.
  - Custom keyframe animations (trophy bounce, confetti effects) for winners.
  - Fully responsive design that works seamlessly on desktop and mobile.
- **Dual Architecture**: 
  - *Active Flow*: A streamlined, single-file approach (`App.jsx`) handling all state and logic.
  - *Modular Flow*: Contains a secondary component-based architecture (`Lottery.jsx`, `Ticket.jsx`, `TicketNum.jsx`, `helper.js`) demonstrating advanced props passing and state management.

## 🛠️ Tech Stack

- **React.js**: Frontend UI library (Hooks: `useState`).
- **Vanilla CSS**: Custom styling and animations (`Lottery.css`, `index.css`).
- **Vite**: Fast frontend build tool.

## 📂 Project Structure

```text
src/
├── App.jsx           # Main active application component with core game logic
├── App.css           # Global layout styles
├── Lottery.css       # Core styling, layouts, and animations for the active game
├── index.css         # CSS variables, root styling, and theme configurations
│
# Modular Component Flow (Alternative)
├── Lottery.jsx       # Parent component for modular lottery logic
├── Ticket.jsx        # Renders the group of ticket numbers
├── TicketNum.jsx     # Renders individual ticket digits
├── Ticket.css        # Styles for the modular ticket container
├── TicketNum.css     # Styles for the individual numbers
└── helper.js         # Utility functions (genTicket, sum) for the modular flow
```

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
- Node.js installed on your computer.

### Installation

1. **Clone the repository** (if applicable) or download the project files.
2. **Navigate to the project directory**:
   ```bash
   cd lucky-lottery
   ```
3. **Install the dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Open your browser** and visit the local host link provided in your terminal (usually `http://localhost:5173`).

## 🎮 How to Play

1. Open the application in your browser.
2. Click the **"Generate Ticket"** button.
3. Wait for 1.5 seconds while the system draws the winning number.
4. See if your ticket matches the winning number to win the lottery!

## 🧠 Core Logic Snippet

The game uses a fair 50/50 probability mechanism to decide the outcome:
```javascript
if (Math.random() < 0.5) {
  // WIN: Matches the generated ticket
  newWinningNumber = newTicket;
} else {
  // LOSE: Generates a completely new random number
  newWinningNumber = generateNumber();
}
```
