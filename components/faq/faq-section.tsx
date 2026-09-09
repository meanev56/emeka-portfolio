"use client";

import { motion } from "framer-motion";
import FAQItem from "./faq-item";
import { faqs } from "@/data/testimonials";

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
          FAQ
        </span>

        <h2 className="mt-8 text-5xl font-bold">
          Frequently Asked Questions
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-400">
          Everything you might want to know before working with me.
        </p>
      </motion.div>

      <div className="mx-auto mt-20 max-w-4xl space-y-5">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>

      <div className="glass mx-auto mt-20 max-w-4xl rounded-[36px] border border-white/10 p-10 text-center">
        <h3 className="text-3xl font-bold">
          Still have a question?
        </h3>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
          Feel free to reach out if you&apos;d like to discuss a project,
          collaboration, frontend engineering role or UI implementation.
        </p>

        <a
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 font-medium text-white"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}