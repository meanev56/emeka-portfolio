"use client";

import CountUp from "react-countup";

const stats = [
  { number:6, label:"Production Websites" },
  { number:5, label:"Frontend Technologies" },
  { number:4, label:"Industries Worked In" },
  { number:100, label:"Responsive Designs" },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

      {stats.map((stat)=>(
        <div
          key={stat.label}
          className="glass rounded-2xl p-5 text-center"
        >

          <h3 className="text-3xl font-bold gradient-text">
            <CountUp end={stat.number} duration={3}/>
            {stat.number===100 ? "%" : "+"}
          </h3>

          <p className="text-sm text-slate-400 mt-2">
            {stat.label}
          </p>

        </div>
      ))}

    </div>
  );
}