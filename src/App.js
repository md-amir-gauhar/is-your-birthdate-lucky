import { useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleClick = () => {
    let dateString = date.replace(/-+/g, "");
    let sum = 0;
    for (let letter of dateString) {
      sum += Number(letter)
    }
    if (sum % number === 0) {
      setResult("Yayyy!! Your birthdate is luckyyy 🤩🤩🤩");
    }
    else {
      setResult("Ooops!!! your birthdate isn't lucky🙄🙄😶");
    }
  }
  return (
    <div className="app">
      <header className="header">
        <h2>Is your birthday lucky?</h2>
      </header>
      <div className="app_body">
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="number" placeholder="Enter your lucky number..." value={number} onChange={e => setNumber(e.target.value)} />
        <button onClick={handleClick}>Click me!</button>
        <p className="text">{result}</p>
      </div>
    </div>
  );
}

export default App;
