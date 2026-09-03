"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { number:6, suffix:"+", label:"Production Websites" },
  { number:4, suffix:"+", label:"Industries Worked In" },
  { number:100, suffix:"%", label:"Responsive UI" }
];

export default function Stats() {
  return (
    <div className="mt-14 grid grid-cols-3 gap-4">

      {stats.map((stat,index)=>(
        <motion.div
          key={index}
          whileHover={{ scale:1.05 }}
          className="glass rounded-2xl p-4 text-center"
        >
          <h3 className="text-3xl font-bold text-blue-400">
            <CountUp end={stat.number} duration={2}/>
            {stat.suffix}
          </h3>

          <p className="text-xs text-slate-400 mt-2">
            {stat.label}
          </p>
        </motion.div>
      ))}

    </div>
  );
}