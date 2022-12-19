import React, { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="timerLayout">
        Dzisiaj jest
        {time.toLocaleDateString("pl", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        {time.toLocaleTimeString()}
      </div>
    </>
  );
};

export default Clock;
