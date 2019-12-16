import React from 'react';
import NavBar from './components/Nav/NavBar';
import Listing from './components/List/Listing';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Listing></Listing>
    </div>
  );
}

export default App;
