"use client"

import { motion } from "framer-motion";
import { Mouse } from "lucide-react";

function ScrollIndicator() {
  return (
    <motion.div
 animate={{ y:[0,10,0] }}
 transition={{ repeat:Infinity, duration:2 }}
 className="mt-20 flex flex-col items-center"
>

  <Mouse className="text-cyan-400"/>

  <p className="text-xs uppercase tracking-widest text-slate-500 mt-2">
    Scroll
  </p>

</motion.div>
  )
}

export default ScrollIndicator