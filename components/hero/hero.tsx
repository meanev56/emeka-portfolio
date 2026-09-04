"use client";

import { motion } from "framer-motion";
import AuroraBackground from "./aurora-background";
import FloatingIcons from "./floating-icons";
import TypingText from "./typing";
import HeroButtons from "./hero-buttons";
import HeroSocials from "./hero-socials";
import Stats from "./stats";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <AuroraBackground />

      <FloatingIcons />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-14 items-center pt-24">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <span className="glass rounded-full px-4 py-2 text-sm inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"/>
            Available for Freelance & Remote Jobs
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Njoku Emeka</span>
          </h1>

          <div className="mt-6 text-2xl md:text-3xl font-semibold text-blue-400">
            <TypingText />
          </div>

          <p className="mt-8 text-lg text-slate-300 leading-8 max-w-xl">
            Frontend Engineer building production-ready web applications using
            Next.js, React, TypeScript, Tailwind CSS and REST APIs.
            I build beautiful interfaces for fintech, media, travel and
            analytics platforms.
          </p>

          <HeroButtons />

          <HeroSocials />

          <Stats />
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity:0, scale:.85 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:.8 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute w-112.5 h-112.5 rounded-full bg-blue-600/20 blur-[120px]"/>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-linear-to from-blue-600 via-purple-600 to-cyan-500 blur-3xl opacity-40 animate-pulse"/>

            <div className="glass rounded-full p-3">
              <Image
                src="/profile.png"
                alt="Njoku Emeka"
                width={360}
                height={360}
                className="rounded-full object-cover border border-white/20"
                priority
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y:[0,-10,0] }}
              transition={{ repeat:Infinity, duration:4 }}
              className="absolute -left-8 top-12 glass px-4 py-2 rounded-xl"
            >
              ⚡ Next.js
            </motion.div>

            <motion.div
              animate={{ y:[0,12,0] }}
              transition={{ repeat:Infinity, duration:5 }}
              className="absolute -right-6 bottom-20 glass px-4 py-2 rounded-xl"
            >
              🚀 TypeScript
            </motion.div>

            <motion.div
              animate={{ y:[0,-8,0] }}
              transition={{ repeat:Infinity, duration:3 }}
              className="absolute right-10 -top-6 glass px-4 py-2 rounded-xl"
            >
              🎨 Tailwind CSS
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y:[0,10,0] }}
        transition={{ repeat:Infinity, duration:2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-14 w-8 rounded-full border border-white/30 flex justify-center">
          <motion.div
            animate={{ y:[4,22,4] }}
            transition={{ repeat:Infinity, duration:2 }}
            className="mt-2 h-3 w-3 rounded-full bg-blue-500"
          />
        </div>
      </motion.div>
    </section>
  );
}