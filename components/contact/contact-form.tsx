"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(20),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormValues) {
    setLoading(true);
    setSuccess(false);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (response.ok) {
      reset();
      setSuccess(true);
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="glass rounded-4xl border border-white/10 p-8 md:p-10 space-y-6"
    >
      <h2 className="text-3xl font-bold text-white">Send me a message</h2>

      {success && (
        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4 flex items-center gap-3 text-green-400">
          <CheckCircle2 />
          Message sent successfully.
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm text-slate-300">Full Name</label>
        <input
          {...register("name")}
          placeholder="Njoku Emeka"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400"
        />
        <p className="mt-2 text-red-400 text-sm">{errors.name?.message}</p>
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">Email</label>
        <input
          {...register("email")}
          placeholder="name@example.com"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400"
        />
        <p className="mt-2 text-red-400 text-sm">{errors.email?.message}</p>
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">Subject</label>
        <input
          {...register("subject")}
          placeholder="Frontend Engineer Opportunity"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400"
        />
        <p className="mt-2 text-red-400 text-sm">{errors.subject?.message}</p>
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">Message</label>
        <textarea
          rows={7}
          {...register("message")}
          placeholder="Tell me about your project..."
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400 resize-none"
        />
        <p className="mt-2 text-red-400 text-sm">{errors.message?.message}</p>
      </div>

      <button
        disabled={loading}
        className="w-full rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 py-4 font-medium text-white flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {loading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <Send size={20} />
        )}
        {loading ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
}