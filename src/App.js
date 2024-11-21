import React from 'react';
import './App.css';

import Night from './Night';
import Flowers from './Flowers';
import Grass from './Grass';
import Envelope from './Envelope'; // Import the Envelope component

function App() {
  return (
    <div className="App">
      <Night />
      <Flowers />
      <Grass />
      <Envelope /> {/* Add the Envelope component here */}
    </div>
  );
}

export default App;
