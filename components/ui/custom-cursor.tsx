"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 12,
        y: position.y - 12,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 35 }}
      className="pointer-events-none fixed z-999 hidden h-6 w-6 rounded-full bg-cyan-400/30 backdrop-blur-xl md:block"
    />
  );
}