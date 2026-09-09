"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

interface Props {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="glass rounded-4xl border border-white/10 p-8"
    >
      <Quote className="text-cyan-400" size={30} />

      <p className="mt-6 leading-8 text-slate-300">
        &quot;{testimonial.review}&quot;
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={52}
          height={52}
          className="rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-white">
            {testimonial.name}
          </h4>

          <p className="text-sm text-slate-400">
            {testimonial.role}
          </p>

          <p className="text-sm text-cyan-400">
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}