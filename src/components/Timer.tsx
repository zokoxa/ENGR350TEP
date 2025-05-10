import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  /** Duration in seconds, default is 180 seconds (3 minutes) */
  duration?: number;
  /** URL of the sound to play when the timer ends */
  endSoundUrl?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  duration = 180,
  endSoundUrl = "aaa.m4a",
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  // Alert and play sound when time is up
  useEffect(() => {
    if (timeLeft === 0) {
      // play end sound
      const audio = new Audio(endSoundUrl);
      audio
        .play()
        .catch((err) => console.warn("Unable to play end sound:", err));
      setTimeout("2000");
      alert("Times up!");
    }
  }, [timeLeft, endSoundUrl]);

  // Countdown logic
  useEffect(() => {
    if (timeLeft <= 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Calculate elapsed percentage so bar grows left-to-right
  const elapsed = duration - timeLeft;
  const percentage = (elapsed / duration) * 100;

  return (
    <>
      {/* Sticky progress bar at top with transparent background */}
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: "7px",
          backgroundColor: "black",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: "#00f2ea",
            transition: "width 1s linear",
          }}
        />
      </div>
    </>
  );
};

export default CountdownTimer;
