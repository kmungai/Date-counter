import { useState } from "react";
import "./App.css";

export default function App() {
  return <Body />;
}

function Body() {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState();

  function HandleStepPlus() {
    setStep((step) => step + 1);
    setDate((date) => date.myDate() + step);
  }

  function HandleStepMinus() {
    return step > 1 ? setStep((step) => step - 1) : null;
  }

  // function HandleStepMinus() {}

  function myDate() {
    var today = new Date();
    var todayDate = today.getDate();
    var day = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    var newMonth = months[month];

    var daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    var newDays = daysOfWeek[day];

    return `${newDays} ${newMonth} ${todayDate} ${year}`;
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

      <p className="dateMessage">{date}</p>
    </div>
  );
}
