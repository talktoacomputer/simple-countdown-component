import React, { useEffect, useState } from "react";

export const IntervalTimer = ({ defaultSecondsCountdown }) => {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [countdownTo, setCountdownTo] = useState(defaultSecondsCountdown || 0);
  const [intervalId, setIntervalId] = useState(null);
  const [timeoutCount, setTimeoutCount] = useState(0);

  //Effect is supposed to run when the component loads into DOM and whenever timer needs to be manipulated
  useEffect(() => {
    if (timerIsRunning && countdownTo > 0) {
      initializeIntervalTimer();
    } else {
      clearIntervalTimer();
    }
  }, [timerIsRunning]);

  // Starts a timer based on the state variable 'countdownTo' which keeps store of the remaining seconds to count ata any given time.
  const initializeIntervalTimer = () => {
    let countToSecs = countdownTo;
    let intervalIdStore = setInterval(() => {
      if (countToSecs > 0) {
        countToSecs--;
        setCountdownTo(countToSecs);
      } else {
        timesUp();
      }
    }, 1000);
    setIntervalId(intervalIdStore);
  };

  // Clears the interval from running any further
  const clearIntervalTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTimerIsRunning(false);
  };

  // Function can be used to trigger events that occur after time has run out. For now, it simply restarts the timer.
  // To prevent it from restarting automatically, try commenting out 'restartTimer()'.
  const timesUp = () => {
    console.log("Time's up!");
    setTimeoutCount(timeoutCount + 1);
    setTimerIsRunning(false);
    restartTimer();
  };

  const startTimer = () => {
    if (countdownTo < 1) {
      resetTimer();
    }
    setTimerIsRunning(true);
  };

  const pauseTimer = () => {
    if (timerIsRunning) {
      clearIntervalTimer();
    }
  };

  const resetTimer = () => {
    setCountdownTo(defaultSecondsCountdown);
  };

  // Resets the countdown to default time and starts it again.
  const restartTimer = () => {
    resetTimer();
    startTimer();
  };

  // Function can be modified to produce a customised output.
  // Simply modify the return statement to try it out.
  const timeString = (totalSeconds) => {
    let hours = parseInt(totalSeconds / 3600);
    let minutes = parseInt((totalSeconds % 3600) / 60);
    let seconds = parseInt((totalSeconds % 3600) % 60);
    return `${hours}H : ${minutes}M: ${seconds}S`;
  };

  return (
    <div>
      {timeString(countdownTo)}
      {!timerIsRunning && (
        <div>
          {countdownTo > 0 ? (
            <button onClick={() => startTimer()}>
              {countdownTo < defaultSecondsCountdown ? "Resume" : "Start"}
            </button>
          ) : (
            ""
          )}
          {countdownTo < defaultSecondsCountdown ? (
            <button onClick={() => resetTimer()}>Reset</button>
          ) : (
            ""
          )}
        </div>
      )}
      {timerIsRunning && (
        <div>
          <button onClick={() => pauseTimer()}>Pause</button>
        </div>
      )}
      <p>
        Countdown finished <strong>{timeoutCount}</strong> times.
      </p>
    </div>
  );
};
