import React from 'react';
import './App.css';
import useLocalStorage from './useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage('name', '');
  return (
    <div className="App">
      <h1>React Custom Hooks</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Name" />
    </div>
  );
}

export default App;
