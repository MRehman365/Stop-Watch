import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    clearInterval(intervalRef.current);
    const now = Date.now();
    setStartTime(now);
    intervalRef.current = setInterval(() => {
      const currentTime = Date.now();
      setElapsedTime(currentTime - now);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setStartTime(null);
    setElapsedTime(0);
  };

  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);

  return (
    <div className='app'>
      <p>STOP-WATCH</p>
      <a>Cloud.Max</a>
      <h2>{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</h2>
      <div className='buttons'>
        <button className='start' onClick={handleStart}>Start</button>
        <button className='stop' onClick={handleStop}>Stop</button>
        <button className='reset' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
