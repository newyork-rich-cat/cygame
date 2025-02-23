import React, { useState } from 'react';
import '../styles/WordChainGame.css';

function WordChainGame() {
  const [words, setWords] = useState(['바다']);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    if (!input) return;

    const lastWord = words[words.length - 1];
    const lastChar = lastWord.charAt(lastWord.length - 1);
    const firstChar = input.charAt(0);

    if (lastChar === firstChar) {
      setWords([...words, input]);
      setInput('');
      setMessage('');
    } else {
      setMessage('단어가 이어지지 않습니다!');
    }
  };

  return (
    <div className="wordchain-container">
      <h2>끝말잇기 게임</h2>
      <p>단어를 입력하세요 (마지막 단어: <strong>{words[words.length - 1]}</strong>)</p>
      <input 
        type="text" 
        value={input} 
        onChange={handleChange} 
        placeholder="다음 단어 입력"
      />
      <button onClick={handleSubmit}>제출</button>
      <p className="message">{message}</p>
      <div className="word-list">
        {words.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </div>
    </div>
  );
}

export default WordChainGame;
