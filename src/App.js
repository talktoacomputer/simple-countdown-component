import { useEffect, useState } from "react";
import "./App.css";
import { CountdownInput } from "./scripts/CountdownInput";
import { IntervalTimer } from "./scripts/IntervalTimer";

function App() {
  const [timeInSeconds, setTimeInSeconds] = useState(10);

  return (
    <div className="App">
      <IntervalTimer defaultSecondsCountdown={timeInSeconds} />
      {/* Setting countdown from the form is not implemented for now. Moving on to a different project. */}
    </div>
  );
}

export default App;
