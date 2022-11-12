import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const [binValue, setBinValue] = useState(0);

  const changeBinValue = (value: number) => {
    try {
      setValue(value);
      const result = parseInt(value.toString(2));
      setBinValue(result);
    } catch {}
  };

  return (
    <div className="App">
      <h1>Dec 2 Binary</h1>
      <input
        type="number"
        value={value}
        min={0}
        onChange={(ev) => changeBinValue(parseInt(ev.target.value))}
      />
      <p>
        {value} has the binary value: <em>{binValue}</em>
      </p>
    </div>
  );
}

export default App;
