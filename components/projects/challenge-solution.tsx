"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, Trophy } from "lucide-react";

interface Props {
  challenge: string;
  solution: string;
  result: string;
}

const cards = [
  {
    key: "challenge",
    title: "Challenge",
    icon: AlertTriangle,
    color: "from-orange-500 to-red-500",
  },
  {
    key: "solution",
    title: "Solution",
    icon: Lightbulb,
    color: "from-blue-600 to-cyan-500",
  },
  {
    key: "result",
    title: "Result",
    icon: Trophy,
    color: "from-emerald-500 to-teal-500",
  },
];

export default function ChallengeSolution({
  challenge,
  solution,
  result,
}: Props) {
  const values = { challenge, solution, result };

  return (
    <section className="mt-28">
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
          Case Study
        </p>

        <h2 className="text-4xl font-bold">How I approached this project</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass rounded-[28px] border border-white/10 p-8"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-linear-to-br ${card.color} flex items-center justify-center mb-6`}
              >
                <Icon className="text-white" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-5">
                {card.title}
              </h3>

              <p className="text-slate-300 leading-8">
                {values[card.key as keyof typeof values]}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}