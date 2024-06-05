import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";

function App() {
  log("<App /> rendered");

  const [enteredNumber, setEnteredNumber] = useState(0);
  const [chosenCount, setChosenCount] = useState(0);

  function handleChange(event) {
    setEnteredNumber(event.target.value);
  }

  function handleSetClick() {
    // setChosenCount((enteredNumber) => enteredNumber + 1);
    // console.log("jkfdjgjkjdg", chosenCount);
    // setEnteredNumber(0);
    // console.log("enteredNumber", enteredNumber); for experiment
    setChosenCount(enteredNumber);
    setChosenCount((prevChosenCount) => prevChosenCount + 1);
    // setEnteredNumber(0);
  }

  console.log("experiment on chosen count", chosenCount);

  return (
    <div>
      <Header />
      <main>
        <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section>
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </div>
  );
}

export default App;
