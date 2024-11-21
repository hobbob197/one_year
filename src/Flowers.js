import React from 'react';
import Flower from './Flower';
import Grass from './Grass';
import './App.css';

function Flowers() {
  return (
    <div className="flowers">
      <Flower type="flower--1" />
      <Flower type="flower--2" />
      <Flower type="flower--3" />
      <Grass />
    </div>
  );
}

export default Flowers;
