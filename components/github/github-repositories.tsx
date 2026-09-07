"use client";

import { motion } from "framer-motion";
import { repositories } from "@/data/github";

export default function GithubRepositories() {
  return (
    <section className="mt-28">
      <div className="mb-10">
        <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
          Featured Repositories
        </p>

        <h2 className="text-4xl font-bold">Projects & Applications</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {repositories.map((repo, index) => {
          const Icon = repo.icon;

          return (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-[28px] border border-white/10 p-8"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-purple-600">
                <Icon className="text-white" size={26} />
              </div>

              <h3 className="text-2xl font-bold">{repo.name}</h3>

              <p className="mt-4 text-slate-400 leading-7">{repo.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {repo.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}