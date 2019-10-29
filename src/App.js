import React from 'react';
import 'reset-css'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Map from './components/Map/Map';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Map />
      <Landing />
    </div>
  );
}

export default App;
