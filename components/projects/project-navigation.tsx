"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface NavigationProps {
  previous?: Project;
  next?: Project;
}

export default function ProjectNavigation({
  previous,
  next,
}: NavigationProps) {
  return (
    <section className="mt-28 border-t border-white/10 pt-10">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="glass rounded-[28px] p-6 border border-white/10 block hover:border-cyan-400 transition"
            >
              <span className="flex items-center gap-2 text-cyan-400 text-sm">
                <ArrowLeft size={16} /> Previous Project
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white">
                {previous.title}
              </h3>

              <p className="mt-2 text-slate-400">{previous.category}</p>
            </Link>
          ) : (
            <div className="glass rounded-[28px] p-6 opacity-40 border border-white/10">
              <p className="text-slate-500">Beginning of Projects</p>
            </div>
          )}
        </div>

        <div>
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="glass rounded-[28px] p-6 border border-white/10 block text-right hover:border-cyan-400 transition"
            >
              <span className="flex items-center justify-end gap-2 text-cyan-400 text-sm">
                Next Project <ArrowRight size={16} />
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white">{next.title}</h3>

              <p className="mt-2 text-slate-400">{next.category}</p>
            </Link>
          ) : (
            <div className="glass rounded-[28px] p-6 opacity-40 border border-white/10 text-right">
              <p className="text-slate-500">End of Projects</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}