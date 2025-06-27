import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo   from '/vite.svg';
import Scoreboard from './components/Scoreboard';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Scoreboard />

      <div className="flex flex-col items-center mt-10">
        <div className="flex gap-4">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1 className="text-3xl font-semibold mt-6">Vite + React</h1>

        <div className="card mt-4">
          <button onClick={() => setCount((c) => c + 1)}>
            count is {count}
          </button>
          <p className="mt-2 text-sm">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </>
  );
}

export default App;