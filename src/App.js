import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './components/MainScreen';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/cart" />
      </Routes>
    </Router>
  );
}

export default App;
