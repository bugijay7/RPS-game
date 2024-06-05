import React, { useState } from 'react';
import './App.css';

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [roundResult, setRoundResult] = useState('');
  const [gameWinner, setGameWinner] = useState('');

  const getRandomComputerResult = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const hasPlayerWonTheRound = (player, computer) => {
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  };

  const getRoundResults = (userOption) => {
    const computerResult = getRandomComputerResult();

    if (hasPlayerWonTheRound(userOption, computerResult)) {
      setPlayerScore(playerScore + 1);
      setRoundResult(`Player wins! ${userOption} beats ${computerResult}`);
    } else if (computerResult === userOption) {
      setRoundResult(`It's a tie! Both chose ${userOption}`);
    } else {
      setComputerScore(computerScore + 1);
      setRoundResult(`Computer wins! ${computerResult} beats ${userOption}`);
    }

    if (playerScore === 3 || computerScore === 3) {
      setGameWinner(playerScore === 3 ? "Player" : "Computer");
      setPlayerScore(0);
      setComputerScore(0);
    }
  };

  const handleResetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setRoundResult('');
    setGameWinner('');
  };

  return (
    <div className="App">
      <h1>Let's play Rock, Paper, Scissors!</h1>
      <div className="score-container">
        <strong>Player Score: <span className="score">{playerScore}</span></strong>
        <strong>Computer Score: <span className="score">{computerScore}</span></strong>
      </div>
      <section className="options-container">
        <h2>Choose an option:</h2>
        <div className="btn-container">
          <button onClick={() => getRoundResults("Rock")} className="btn">Rock</button>
          <button onClick={() => getRoundResults("Paper")} className="btn">Paper</button>
          <button onClick={() => getRoundResults("Scissors")} className="btn">Scissors</button>
        </div>
      </section>
      <div className="results-container">
        <p id="results-msg">{roundResult}</p>
        {gameWinner && <p id="winner-msg">{`${gameWinner} has won the game!`}</p>}
        {gameWinner && <button onClick={handleResetGame} className="btn">Play again?</button>}
      </div>
      <details className="rules-container">
        <summary>Rules to the game</summary>
        <p>You will be playing against the computer.</p>
        <p>You can choose between Rock, Paper, and Scissors.</p>
        <p>The first one to three points wins.</p>
        <p>Here are the rules to getting a point in the game:</p>
        <ul>
          <li>Rock beats Scissors</li>
          <li>Scissors beats Paper</li>
          <li>Paper beats Rock</li>
        </ul>
        <p>If the player and computer choose the same option (Ex. Paper and Paper), then no one gets the point.</p>
      </details>
    </div>
  );
}
{/* Import React and useState: 
Start by importing React and useState from the React library. 
This allows you to create a functional component and manage 
state within it.

Import CSS Styles: 
Import any CSS stylesheets that you want to apply to your component. 
This ensures that your component's layout and design are consistent with the
 styles defined in the CSS file.

Define the Main Component:
 Create a function component named App which serves as the main component
  of your application. This component will contain the logic and 
  JSX elements for your Rock, Paper, Scissors game.

State Management with useState:
 Use the useState hook to define state variables for player score,
  computer score, round result, and game winner. This allows you to 
  update and track the state of your application.

Define Helper Functions:
Create helper functions like getRandomComputerResult and hasPlayerWonTheRound
 to handle game logic. These functions help in generating the computer's choice 
 and determining the winner of each round.

Handle Round Results:
 Implement a function getRoundResults to handle the outcome of each round
  based on the player's choice and the computer's choice. Update the state 
  variables accordingly to reflect the score and round result.

Reset the Game: 
Implement a function handleResetGame to reset the game when it ends.
 This function resets the scores, round result, and game winner, 
 allowing the player to play again.

Render JSX Elements: 
Use JSX syntax to render the game interface, including the title, player
 and computer scores, options for the player to choose, round result, 
 game winner message, and game rules.

Event Handling: 
Attach event handlers to the buttons for the player to choose Rock, 
Paper, or Scissors. These event handlers call the getRoundResults function
 with the respective user choice.

Display Game Rules: 
Include a section to display the rules of the game. This section can be toggled
 to show or hide the rules using a <details> HTML element. */}
export default App;
