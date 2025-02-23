import React from 'react';
import { Link } from 'react-router-dom';

function Lobby() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>My Game Lobby</h1>
      <div>
        <img 
          src="https://via.placeholder.com/100" 
          alt="Logo" 
          style={{ width: '100px', margin: '20px' }} 
        />
      </div>
      <h2>Game List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '10px' }}>
          <Link to="/game/dino">Google Dinosaur Jump</Link>
        </li>
        <li style={{ margin: '10px' }}>
          <Link to="/game/wordchain">끝말잇기 게임</Link>
        </li>
      </ul>
    </div>
  );
}

export default Lobby;
