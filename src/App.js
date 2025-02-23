import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lobby from './components/Lobby';
import DinoGame from './components/games/DinoGame';
import WordChainGame from './components/games/WordChainGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/game/dino" element={<DinoGame />} />
        <Route path="/game/wordchain" element={<WordChainGame />} />
      </Routes>
    </Router>
  );
}

export default App;
