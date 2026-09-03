"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingText() {
  return (
    <Typewriter
      words={[
        "Frontend Engineer",
        "Next.js Specialist",
        "React Developer",
        "TypeScript Developer",
        "UI Engineer"
      ]}
      loop
      cursor
      cursorStyle="|"
      typeSpeed={90}
      deleteSpeed={45}
      delaySpeed={2000}
    />
  );
}