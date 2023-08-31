import { useState } from "react";
import "./App.css";

export default function App() {
  return <Body />;
}

function Body() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function HandleCountPlus() {
    return setCount((count) => count + 1);
  }

  function HandleCountMinus() {
    return setCount((count) => count - 1);
  }

  return (
    <div className="entire">
      <div className="step">
        <button className="btnStepMinus">-</button>
        <span className="innerStep">Step: {step}</span>
        <button className="btnStepPlus">+</button>
      </div>

      <div className="count">
        <button onClick={HandleCountMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={HandleCountPlus}>+</button>
      </div>

      <p>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
