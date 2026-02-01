"use client";
import { Typewriter } from "react-simple-typewriter";

export function TypingText() {
  return (
    <h2 className="text-lg text-cyan-400 font-serif sm:text-2xl  lg:text-3xl md:text-2xl lg:font-serif">
      {" "}
      <span>
        <Typewriter
          words={["JavaScript Developer", "Web Designer", "Next.js Developer"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h2>
  );
}
