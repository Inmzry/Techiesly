import { useState, useEffect } from "react";

function GradientTypewriter({
  text = "Hello, color",
  speed = 150,
  gradient = "linear-gradient(90deg, #378ADD, #1D9E75, #D4537E, #378ADD)",
  cursorColor = "#1D9E75",
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        i = 0; // restart the loop
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span
      className="title-name"
      style={{
        fontWeight: 800,
        fontFamily: "var(--font-tech)",
      }}
    >
      <span
        style={{
          background: gradient,
          backgroundSize: "300% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientShift 4s ease-in-out infinite",
        }}
      >
        {displayed}
      </span>
      <span
        style={{
          color: cursorColor,
          animation: "blink 0.8s step-start infinite",
        }}
      >
        |
      </span>
    </span>
  );
}

export default GradientTypewriter;
