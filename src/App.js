import React from 'react';
import CodeLookup from './components/CodeLookup';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>코드 조회 시스템</h1>
      </header>
      <main>
        <CodeLookup />
      </main>
    </div>
  );
}

export default App;