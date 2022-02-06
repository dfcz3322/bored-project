import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Components/pages/start';
import Activity from './Components/pages/activity';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/activity" element={<Activity />}></Route>
        <Route path="/" element={<Start />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
