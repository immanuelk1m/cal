import React from 'react';
import CodeLookup from './components/CodeLookup';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculus 1(02분반)_조장환교수님 수강 코드 조회</h1>
      </header>
      <main>
        <CodeLookup />
      </main>
    </div>
  );
}

export default App;