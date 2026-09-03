import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-slate-800">

      <Container>

        <div className="py-14 flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h2 className="text-3xl font-bold gradient-text">
              Njoku Emeka
            </h2>

            <p className="text-slate-400 mt-2 max-w-sm">
              Frontend Engineer building production-ready web applications with Next.js and React.
            </p>
          </div>

          <div className="flex gap-5 items-center">

            <FaGithub/>

            <FaLinkedin/>

            <Mail/>

          </div>

        </div>

        <div className="border-t border-slate-800 py-6 text-sm text-slate-500 flex justify-between">

          <span>© 2026 Njoku Emeka</span>

          <span>Built with Next.js + Tailwind CSS</span>

        </div>

      </Container>

    </footer>
  );
}