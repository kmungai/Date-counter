import { useState } from "react";
import "./App.css";

export default function App() {
  return <Body />;
}

function Body() {
  const [step, setStep] = useState(1);
  const [Date, setDate] = useState(1);

  const initialDate = date.toLocaleDateString();

  function HandleStepPlus() {
    setStep((step) => step + 1);
  }

  function HandleStepMinus() {
    return step > 1 ? setStep((step) => step - 1) : null;
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
        <button>-</button>
        <span>Count: 0</span>
        <button>+</button>
      </div>

      <p className="dateBar"> {}</p>
    </div>
  );
}

function HandleStepMinus() {}
