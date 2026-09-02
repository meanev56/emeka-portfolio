import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="gradient-text text-2xl font-bold">
          Njoku Emeka
        </h2>

        <p className="text-slate-400 mt-2">
          Frontend Engineer building beautiful web experiences.
        </p>

        <div className="flex gap-4 my-6">
          <FaGithub />
          <FaLinkedin />
          <Mail />
        </div>

        <p className="text-sm text-slate-500">
          © 2026 Njoku Emeka. Built with Next.js & Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}