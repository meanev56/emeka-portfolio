"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function NewsletterCTA() {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass relative overflow-hidden rounded-[40px] border border-white/10 p-10 md:p-16"
      >
        {/* Glow */}
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-purple-500/20 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-purple-600">
            <Sparkles className="text-white" size={28} />
          </div>

          <span className="mt-6 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Let&apos;s Build Together
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-5xl">
            Have a project in mind?
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Whether you&apos;re building a startup, dashboard, fintech application,
            business website or enterprise platform, I&apos;d love to help bring your
            ideas to life.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 font-medium text-white transition hover:scale-105"
            >
              <Mail size={20} />
              Start a Conversation
            </a>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Usually responds within 24 hours.
          </p>
        </div>
      </motion.div>
    </section>
  );
}