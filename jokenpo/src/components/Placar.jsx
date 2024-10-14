import React from 'react';

const Placar = ({ playerScore, computerScore, ties }) => {
  return (
    <div>
      <h2>Placar</h2>
      <p>Jogador: {playerScore}</p>
      <p>Computador: {computerScore}</p>
      <p>Empates: {ties}</p>
    </div>
  );
};

export default Placar;
