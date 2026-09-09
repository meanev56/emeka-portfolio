"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./testimonials-card";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-24 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Testimonials
          </span>

          <h2 className="mt-8 text-5xl font-bold">
            What Teams Say About My Work
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Feedback from production projects, dashboards and frontend applications
            I&apos;ve contributed to.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.company}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}