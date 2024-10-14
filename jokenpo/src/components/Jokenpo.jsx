import React, { useState } from 'react';
import Resultado from './Resultado';
import Placar from './Placar';

const Jokenpo = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [ties, setTies] = useState(0);
  const [result, setResult] = useState('');

  const choices = ['Pedra', 'Papel', 'Tesoura'];

  const playGame = (choice) => {
    setPlayerChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    if (choice === randomChoice) {
      setTies(ties + 1);
      setResult('Empate');
    } else if (
      (choice === 'Pedra' && randomChoice === 'Tesoura') ||
      (choice === 'Papel' && randomChoice === 'Pedra') ||
      (choice === 'Tesoura' && randomChoice === 'Papel')
    ) {
      setPlayerScore(playerScore + 1);
      setResult('Você venceu!');
    } else {
      setComputerScore(computerScore + 1);
      setResult('Computador venceu!');
    }
  };

  const resetGame = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setPlayerScore(0);
    setComputerScore(0);
    setTies(0);
    setResult('');
  };

  return (
    <div>
      <h1>Jokenpô</h1>
      <div>
        {choices.map((choice, index) => (
          <button key={index} onClick={() => playGame(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <Placar playerScore={playerScore} computerScore={computerScore} ties={ties} />
      <Resultado playerChoice={playerChoice} computerChoice={computerChoice} result={result} />
      <button onClick={resetGame}>Zerar o placar</button>
    </div>
  );
};

export default Jokenpo;
