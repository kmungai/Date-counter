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
    return setCount((count) => count + step);
  }

  function HandleCountMinus() {
    return setCount((count) => count - step);
  }

  function HandleStepPlus() {
    return setStep((step) => step + 1);
  }

  function HandleStepMinus() {
    return setStep((step) => step - 1);
  }

  return (
    <div className="entire">
      <div className="step">
        <button className="btnStepMinus" onClick={HandleStepMinus}>
          -
        </button>
        <span className="innerStep">Step: {step}</span>
        <button className="btnStepPlus" onClick={HandleStepPlus}>
          +
        </button>
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
