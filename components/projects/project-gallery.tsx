"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: GalleryProps) {
  return (
    <section className="mt-28">
      <div className="mb-10 text-center">
        <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
          Project Gallery
        </p>

        <h2 className="text-4xl font-bold">Desktop & Mobile Experience</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-[28px] overflow-hidden border border-white/10"
          >
            <Image
              src={image}
              alt={`Screenshot ${index + 1}`}
              width={1200}
              height={800}
              className="w-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}