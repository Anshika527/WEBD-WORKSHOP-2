import React, { useState } from "react";
import "./App.css";

function App() {
  const [n, setN] = useState("");
  const [sum, setSum] = useState(null);

  const calculateSum = () => {
    let total = 0;

    for (let i = 1; i <= Number(n); i++) {
      total += i;
    }

    setSum(total);
  };

  return (
    <div className="container">
      <h2>Sum of N Numbers</h2>

      <input
        type="number"
        placeholder="Enter N"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />

      <button onClick={calculateSum}>
        Calculate Sum
      </button>

      {sum !== null && (
        <p className="result">
          Sum of first {n} numbers = {sum}
        </p>
      )}
    </div>
  );
}

export default App;