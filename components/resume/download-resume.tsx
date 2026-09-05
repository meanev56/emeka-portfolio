"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function DownloadResume() {
  return (
    <motion.a
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      href="/resume.pdf"
      download
      className="rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 px-7 py-4 text-white flex items-center gap-3 font-medium"
    >
      <Download size={20} />
      Download Resume (PDF)
    </motion.a>
  );
}