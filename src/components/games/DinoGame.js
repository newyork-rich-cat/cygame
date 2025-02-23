import React, { useState, useEffect } from 'react';
import '../styles/DinoGame.css';

function DinoGame() {
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space' && !isJumping) {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isJumping]);

  return (
    <div className="game-container">
      <div className={`dino ${isJumping ? 'jump' : ''}`}></div>
      <p>Press Space to jump!</p>
    </div>
  );
}

export default DinoGame;
