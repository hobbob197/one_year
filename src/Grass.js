// src/components/Grass.js
import React from 'react';
import './App.css';

function Grass() {
  return (
    <div className="growing-grass">
      <div className="flower__grass flower__grass--1">
        <div className="flower__grass--top"></div>
        <div className="flower__grass--bottom"></div>
        {[...Array(8)].map((_, index) => (
          <div key={index} className={`flower__grass__leaf flower__grass__leaf--${index + 1}`} />
        ))}
        <div className="flower__grass__overlay"></div>
      </div>
      {/* Add additional grass components if needed */}
    </div>
  );
}

export default Grass;
