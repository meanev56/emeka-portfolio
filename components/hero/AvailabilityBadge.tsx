"use client"

import { motion } from "framer-motion";

function AvailabilityBadge() {
  return (
    <motion.div
  animate={{ opacity:[0.6,1,0.6] }}
  transition={{ duration:2, repeat:Infinity }}
  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2"
>

  <span className="h-3 w-3 rounded-full bg-green-500"/>

  <p className="text-sm">
    Available for Remote Jobs & Freelance
  </p>

</motion.div>
  )
}

export default AvailabilityBadge