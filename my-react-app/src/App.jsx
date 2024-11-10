import { useState } from "react";
import "./App.css";

function App() {
  let [loanAmount, setLoanAmount] = useState(null);
  let [interestRate, setinterestRate] = useState(null);
  let [months, setMonths] = useState(null);
  let [result, setResult] = useState("m nhi batayunga");

  function clickKaro() {
    let monthlyInterestRate = parseFloat(interestRate) / 12 / 100;
    let numberOfMonths = parseInt(months);

    let calculation =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    let erx = calculation.toFixed(0);
    setResult(erx);
  }

  function badlav1(e) {
    setLoanAmount(e.target.value);
  }

  function badlav2(e) {
    setinterestRate(e.target.value);
  }

  function badlav3(e) {
    setMonths(e.target.value);
  }
  return (
    <>
      <h1>EMI Calculator</h1>
      <div>Loan amount</div>
      <input
        type="number"
        placeholder="Enter Loan Amount"
        value={loanAmount}
        onChange={badlav1}
      />
      <div>Interest Rate</div>
      <input
        type="number"
        placeholder="Enter Interest Rate"
        value={interestRate}
        onChange={badlav2}
      />
      <div>Months to pay</div>
      <input
        type="number"
        placeholder="Enter Month to Pay"
        value={months}
        onChange={badlav3}
      />
      <br />
      <button onClick={clickKaro}>Here We Go</button>
      <h2>Your Monthly Payment is : {result}</h2>
    </>
  );
}

export default App;
