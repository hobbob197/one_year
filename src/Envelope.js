import React, { useState } from 'react';
import './Envelope.css';

function Envelope() {
  const [flapOpen, setFlapOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setFlapOpen(!flapOpen);
  };

  return (
    <div className={`container ${flapOpen ? 'flap-active' : ''}`} onClick={handleEnvelopeClick}>
      <div className={`envelope-wrapper ${flapOpen ? 'flap' : ''}`}>
        <div className="envelope">
          <div className="letter">
            <div className="text">
            <h3>Happy One Year Anniversary my Love ❤️</h3>
              <p>Getting close to you was the best decision i have ever made in life, thank you so much for this past year. I love you so much❤️❤️
              </p>
            </div>
          </div>
        </div>
        <div className="heart"></div>
      </div>
    </div>
  );
}

export default Envelope;
