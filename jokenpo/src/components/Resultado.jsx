import React, { useEffect, useState } from 'react';
import './Resultado.css';

const Resultado = ({ playerChoice, computerChoice, result }) => {
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (playerChoice && computerChoice) {
      setShowResult(false);
      setTimeout(() => setShowResult(true), 1000);
    }
  }, [playerChoice, computerChoice]);

  return (
    <div className="Result">
      <h2>Resultado</h2>
      {showResult && (
        <>
          <div className="choices">
            <div className={`choice ${result === 'Você venceu!' ? 'winner' : ''}`}>
              <h3>Você escolheu:</h3>
              <p className="highlight">{playerChoice}</p>
            </div>
            <div className={`choice ${result === 'Computador venceu!' ? 'winner' : ''}`}>
              <h3>Computador escolheu:</h3>
              <p className="highlight">{computerChoice}</p>
            </div>
          </div>
          <h3 className="final-result">{result}</h3>
        </>
      )}
    </div>
  );
};

export default Resultado;
