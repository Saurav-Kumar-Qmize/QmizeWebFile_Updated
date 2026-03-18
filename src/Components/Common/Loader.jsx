import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden
      bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

      {/* Square Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Glow */}
      <motion.div
        className="absolute w-80 h-80 bg-white/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1], x: [-50, 50, -50], y: [50, -50, 50] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Loader Box */}
      <div className="relative z-10 flex flex-col items-center text-white">

        {/* WhatsApp Icon */}
        <motion.div
          className="mb-8"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="64" height="64" viewBox="0 0 24 24" fill="white">
            <path d="M12.04 2C6.54 2 2 6.36 2 11.7c0 2.15.7 4.23 2.02 5.94L2 22l4.56-1.93a10.3 10.3 0 0 0 5.48 1.55c5.52 0 10.04-4.36 10.04-9.72C22.08 6.36 17.56 2 12.04 2Zm5.7 13.2c-.24.67-1.36 1.3-1.88 1.36-.5.06-1.13.1-1.82-.1-.42-.13-.97-.3-1.67-.6-2.95-1.23-4.88-4.18-5.02-4.38-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.15 1.02-2.43.25-.27.58-.33.77-.33.2 0 .39 0 .56.01.18 0 .42-.07.66.5.24.56.82 1.92.9 2.05.07.13.12.28.03.46-.1.18-.15.28-.3.44-.15.16-.31.35-.44.47-.15.14-.31.28-.14.56.17.28.76 1.35 1.63 2.18 1.12 1.07 2.06 1.4 2.35 1.56.3.14.47.12.64-.07.18-.2.74-.85.93-1.13.2-.28.39-.23.66-.13.28.1 1.78.84 2.08 1 .3.15.49.23.57.35.05.12.05.68-.19 1.35Z"/>
          </svg>
        </motion.div>

        {/* Loader Ring */}
        <motion.div
          className="relative w-24 h-24 border-4 border-white/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <motion.div
            className="absolute inset-2 border-4 border-white border-t-transparent rounded-full"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="mt-10 text-xl md:text-2xl font-semibold tracking-wide text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Powering WhatsApp Business API
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="mt-3 text-sm md:text-base text-white/80 max-w-md text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Automate chats • Send campaigns • Verify users • Support customers faster
        </motion.p>

      </div>

    </motion.div>
  );
};

export default Loader;






