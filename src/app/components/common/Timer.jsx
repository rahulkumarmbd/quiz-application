'use client';

import { useEffect, useRef, useState, memo } from "react";
import './timer.css';

const Timer = ({ initialMinutes , onOver }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const timerInterval = useRef();

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      clearInterval(timerInterval.current);
      onOver();
    } else {
      timerInterval.current = setInterval(() => {
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timerInterval.current);
  }, [minutes, seconds]);

  return (
    <div className="timer">
      <span>Time Left: </span>
      <span className="minutes">
        {minutes < 10 ? "0" : ""}
        {minutes}
      </span>
      <span>:</span>
      <span className="seconds">
        {seconds < 10 ? "0" : ""}
        {seconds}
      </span>
    </div>
  );
};

export default memo(Timer);
