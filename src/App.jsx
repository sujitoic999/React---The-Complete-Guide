import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";

// function App() {
//   log('<App /> rendered');

//   const [enteredNumber, setEnteredNumber] = useState(0);
//   const [chosenCount, setChosenCount] = useState(0);

//   function handleChange(event) {
//     setEnteredNumber(event.target.value);
//   }

//   function handleSetClick() {
//     setChosenCount(enteredNumber);
//     setEnteredNumber(0);
//   }

//   return (
//     <div>
//       <Header />
//       <main>
//         <section id="configure-counter">
//           <h2>Set Counter</h2>
//           <input type="number" onChange={handleChange} value={enteredNumber} />
//           <button onClick={handleSetClick}>Set</button>
//         </section>
//         <Counter initialCount={chosenCount} />
//       </main>
//     </div>
//   );
// }

function App() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(4);

  let c = 6;

  console.log("first C value", c);

  console.log("first value of a", a);

  const increaseA = (e) => {
    let c = 1;
    console.log("second value of c", c);
    console.log("insideA");
    e.preventDefault();
    setA(a + 1);
  };

  c = c + 1;

  console.log("third value of c", c);

  console.log("second value of a", a);

  const increaseB = (e) => {
    console.log("insideB");
    e.preventDefault();
    setB(b + 1);
  };

  return (
    <div className="justify-content-center">
      <input type="number" value={a} />
      <input type="number" value={b} />
      <button type="button" onClick={increaseA}>
        IncA
      </button>
      <button type="button" onClick={increaseB}>
        IncB
      </button>
    </div>
  );
}

export default App;
