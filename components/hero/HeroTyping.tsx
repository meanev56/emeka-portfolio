"use client";

import { Typewriter } from "react-simple-typewriter";

export default function HeroTyping() {
  return (
    <span className="gradient-text text-xl md:text-2xl font-semibold">
      <Typewriter
        words={[
          "Frontend Engineer",
          "Next.js Specialist",
          "React Developer",
          "TypeScript Developer",
          "UI Engineer",
        ]}
        loop
        cursor
        typeSpeed={80}
        deleteSpeed={50}
      />
    </span>
  );
}