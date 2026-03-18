

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden 
      bg-gradient-to-br from-[#031B15] via-[#064E3B] to-[#000000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

      {/* FULL BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bigGrid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bigGrid)" />
        </svg>
      </div>

      {/* FLOATING ORBS */}
      {[1, 2, 3].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 200 + i * 80,
            height: 200 + i * 80,
            background: "rgba(16,185,129,0.2)",
          }}
          animate={{
            x: [50, -50, 50],
            y: [50, -50, 50],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* CENTRAL GLASS PANEL */}
      <div className="relative z-10 flex flex-col items-center px-10 py-12 
       ">

        {/* HOLOGRAM LOGO */}
        {/* HOLOGRAM WHATSAPP LOGO */}
<motion.div
  className="mb-6 relative"
  animate={{
    scale: [1, 1.2, 1],
    rotate: [0, 5, -5, 0],
  }}
  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
>

  {/* Glow Ring */}
  <div className="absolute inset-0 bg-emerald-400 blur-3xl opacity-70 rounded-full"></div>

  {/* Outer Glass Ring */}
  <div className="bg-white border border-emerald-300 rounded-full p-1 backdrop-blur-xl shadow-[0_0_40px_rgba(16,185,129,0.7)]">

    {/* Official WhatsApp Icon */}
    <svg
      width="60"
      height="60"
      viewBox="0 0 32 32"
      fill="#25D366"
    >
      <path d="M16.03 2C8.57 2 2.5 7.87 2.5 15.13c0 2.65.83 5.12 2.3 7.18L2 30l7.93-2.5a13.5 13.5 0 006.1 1.43c7.46 0 13.5-5.87 13.5-13.12C29.53 7.87 23.5 2 16.03 2zM23 18.8c-.3.8-1.7 1.6-2.3 1.65-.62.06-1.4.1-2.2-.16-.5-.16-1.1-.36-1.9-.7-3.3-1.36-5.46-4.64-5.64-4.86-.18-.22-1.32-1.77-1.32-3.38s.85-2.4 1.15-2.73c.3-.34.68-.4.92-.4s.46 0 .66.02c.22 0 .5-.08.78.56.3.64.96 2.1 1.05 2.26.08.15.14.32.03.52-.1.2-.16.32-.33.5l-.5.55c-.16.16-.3.33-.13.64.18.3.8 1.48 1.74 2.4 1.22 1.2 2.3 1.6 2.64 1.75.35.14.55.12.76-.08.22-.22.82-.98 1.05-1.3.22-.32.45-.26.75-.16s2.05.96 2.4 1.12c.35.18.58.26.66.4.04.16.04.78-.26 1.6z"/>
    </svg>

  </div>
</motion.div>


        {/* NEON LOADING RINGS */}
        <motion.div
          className="relative w-28 h-28 rounded-full border border-white/20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
        >
          <motion.div
            className="absolute inset-3 rounded-full border-4 border-emerald-400 border-t-transparent"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />
        </motion.div>

        {/* TEXT */}
        <motion.h2
          className="mt-8 text-xl text-emerald-400 font-semibold tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          POWERING AUTOMATION
        </motion.h2>

        <motion.p
          className="mt-2 text-sm text-white/70 text-center max-w-xs"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          WhatsApp API • Campaigns • Bots • Growth
        </motion.p>

        {/* PROGRESS BAR */}
        <div className="w-48 h-[3px] mt-6 rounded-full bg-white/20 overflow-hidden">
          <motion.div
            className="h-full bg-emerald-400 rounded-full"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
          />
        </div>

      </div>
    </motion.div>
  );
};

export default Loader;




