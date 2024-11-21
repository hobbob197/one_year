// src/components/Flower.js
import React from 'react';
import './App.css';

function Flower({ type }) {
  return (
    <div className={`flower ${type}`}>
      <div className={`flower__leafs ${type}`}>
        {[...Array(4)].map((_, index) => (
          <div key={index} className={`flower__leaf flower__leaf--${index + 1}`} />
        ))}
        <div className="flower__white-circle"></div>
        {[...Array(8)].map((_, index) => (
          <div key={index} className={`flower__light flower__light--${index + 1}`} />
        ))}
      </div>
      <div className="flower__line">
        {[...Array(6)].map((_, index) => (
          <div key={index} className={`flower__line__leaf flower__line__leaf--${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Flower;
