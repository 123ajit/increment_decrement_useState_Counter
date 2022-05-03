import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [numbers, setNumbers] = useState(0);
  const incrementNumber = () => {
    setNumbers(numbers + 1);
  };
  const decrementNumber = () => {
    if (numbers > 0) {
      setNumbers(numbers - 1);
    } else {
      setNumbers(0);
      alert("you have reached your limit of decresing number");
    }
  };
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="text-light">{numbers}</h1>
        <button className="btn btn-warning mx-3 my-5" onClick={incrementNumber}>
          Increment
        </button>
        <button className="btn btn-danger" onClick={decrementNumber}>
          Decrement
        </button>
      </div>
    </div>
  );
}
