"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, BriefcaseBusiness, Clock3 } from "lucide-react";

const cards = [
  {
    icon: Mail,
    title: "Email",
    value: "emekanjoku86@gmail.com",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lagos, Nigeria",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: BriefcaseBusiness,
    title: "Open To",
    value: "Remote · Freelance · Contract",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Clock3,
    title: "Response Time",
    value: "Usually within 24 hours",
    color: "from-orange-500 to-red-500",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass rounded-3xl border border-white/10 p-6"
          >
            <div className="flex items-center gap-5">
              <div
                className={`w-14 h-14 rounded-2xl bg-linear-to-br ${card.color} flex items-center justify-center`}
              >
                <Icon className="text-white" size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-400">{card.title}</p>
                <p className="text-white font-medium mt-1">{card.value}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}