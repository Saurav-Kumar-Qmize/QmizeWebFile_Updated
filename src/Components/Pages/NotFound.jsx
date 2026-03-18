// import React from "react";
// import { motion } from "framer-motion";

// // ------------------------------
// //  FUTURISTIC AI 404 PAGE
// //  Neon Grid • Hologram • Matrix Pattern
// // ------------------------------

// export default function Futuristic404() {
//   // Generate animated light particles
//   const particles = Array.from({ length: 80 }).map((_, i) => ({
//     size: 2 + (i % 4),
//     x: Math.random() * 600,
//     y: Math.random() * 350,
//     delay: Math.random() * 3,
//     dur: 4 + Math.random() * 5,
//   }));

//   // Neon Square Matrix Background Pattern
//   const bgSquarePattern = `data:image/svg+xml;utf8,${encodeURIComponent(`
//     <svg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'>
//       <rect width='120' height='120' fill='transparent'/>
//       <rect x='8' y='8' width='35' height='35' rx='6' stroke='#00ffae33' stroke-width='1.5' fill='rgba(0,255,180,0.05)'/>
//       <rect x='60' y='18' width='24' height='24' rx='4' fill='rgba(0,255,160,0.08)'/>
//       <rect x='95' y='8' width='14' height='14' rx='4' fill='rgba(0,255,200,0.08)'/>
//       <rect x='40' y='70' width='38' height='38' rx='8' stroke='#00ffc880' stroke-width='1.5' fill='rgba(255,255,255,0.04)'/>
//     </svg>
//   `)}`;

//   return (
//     <div
//       className="min-h-screen w-full relative flex items-center justify-center overflow-hidden px-6 py-12"
//       style={{
//         background:
//           "linear-gradient(180deg, #031d12, #022417, #03351f, #044d2c)",
//         backgroundSize: "100% 100%",
//       }}
//     >
//       {/* GRID BACKGROUND OVERLAY */}
//       <div
//         className="absolute inset-0 opacity-[0.14] pointer-events-none"
//         style={{
//           backgroundImage: `url('${bgSquarePattern}')`,
//           backgroundSize: "180px",
//         }}
//       />

//       {/* Animated radial glow */}
//       <motion.div
//         className="absolute inset-0 opacity-40 -z-20"
//         animate={{ opacity: [0.2, 0.5, 0.2] }}
//         transition={{ duration: 9, repeat: Infinity }}
//         style={{
//           background:
//             "radial-gradient(circle at 50% 40%, #00ffc870, #00ffae20, transparent)",
//         }}
//       />

//       {/* Floating particles */}
//       <div className="absolute inset-0 pointer-events-none -z-10">
//         {particles.map((p, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-emerald-100 rounded-full"
//             style={{ width: p.size, height: p.size, left: p.x, top: p.y }}
//             animate={{
//               y: [0, -40 - (i % 15) * 4, 0],
//               x: [0, (i % 12) * 4, 0],
//               opacity: [0.3, 1, 0.3],
//             }}
//             transition={{
//               delay: p.delay,
//               duration: p.dur,
//               repeat: Infinity,
//             }}
//           />
//         ))}
//       </div>

//       {/* MAIN CARD */}
//       <div className="relative max-w-6xl w-full">
//         {/* GLOW FRAME */}
//         <div className="absolute inset-0 rounded-3xl pointer-events-none"
//           style={{
//             boxShadow: "inset 0 0 140px rgba(0,255,180,0.12)",
//           }}
//         />

//         <div className="relative p-10 md:p-16 rounded-3xl bg-white/10 backdrop-blur-2xl border border-green-300/20 shadow-[0_0_60px_rgba(0,255,180,0.25)]">

//           <div className="flex flex-col md:flex-row gap-12 items-center justify-between">

//             {/* LEFT HOLOGRAM SECTION */}
//             <motion.div
//               className="relative w-full md:w-1/2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               {/* Hologram ring */}
//               <motion.div
//                 className="absolute left-1/2 -translate-x-1/2 top-8 w-64 h-64 rounded-full blur-2xl"
//                 animate={{ opacity: [0.3, 0.7, 0.3] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 style={{
//                   background: "radial-gradient(circle, #00ffc8, transparent 70%)",
//                 }}
//               />

//               {/* Floating Cubes */}
//               <motion.div
//                 animate={{ y: [0, -15, 0], rotate: [0, 3, -3, 0] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//               >
//                 <div className="w-48 h-48 bg-gradient-to-br from-emerald-200/30 to-emerald-500/20 rounded-xl border border-emerald-300/40 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,180,0.3)] mx-auto" />
//               </motion.div>

//               {/* AI neon bar */}
//               <motion.div
//                 className="w-40 h-2 mt-6 mx-auto bg-emerald-400 rounded-full"
//                 animate={{ width: ["40%", "90%", "40%"] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               />
//             </motion.div>

//             {/* RIGHT TEXT */}
//             <motion.div
//               className="flex-1 text-center md:text-left"
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <motion.h1
//                 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-emerald-300 tracking-tight drop-shadow-[0_0_25px_#00ffc8]"
//                 initial={{ scale: 0.7 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 1 }}
//               >
//                 404
//               </motion.h1>

//               <p className="mt-4 text-lg text-green-100/80 max-w-lg">
//                 The page you’re seeking has drifted into the AI void.  
//                 Let’s teleport you back safely.
//               </p>

//               <div className="mt-7 flex flex-wrap gap-4 justify-center md:justify-start">
//                 <motion.a
//                   href="/"
//                   className="px-6 py-3 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/40"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Go Home
//                 </motion.a>

//                 <motion.a
//                   href="/contact"
//                   className="px-6 py-3 bg-white/20 border border-emerald-300 text-emerald-100 rounded-xl backdrop-blur-xl"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   Report Issue
//                 </motion.a>
//               </div>
//             </motion.div>
//           </div>

//           {/* Futuristic Wave Footer */}
//           <motion.div className="mt-20" initial={{ height: 0 }} animate={{ height: 65 }}>
//             <svg viewBox="0 0 1200 120" className="w-full h-16" preserveAspectRatio="none">
//               <path
//                 d="M0,0 C300,80 900,0 1200,60 L1200,120 L0,120 Z"
//                 fill="#02281c"
//                 opacity="0.9"
//               />
//             </svg>
//           </motion.div>
//         </div>

//         {/* LARGE FLOATING NEON ORBS */}
//         <motion.div
//           className="absolute -left-40 top-40 w-96 h-96 rounded-full opacity-50 -z-20"
//           animate={{ y: [0, -20, 0], rotate: [0, 12, -12, 0] }}
//           transition={{ duration: 14, repeat: Infinity }}
//           style={{
//             background: "radial-gradient(circle,#00ffcc55,#00ffbb33,#0000)",
//             filter: "blur(40px)",
//           }}
//         />

//         <motion.div
//           className="absolute -right-40 bottom-20 w-96 h-96 rounded-full opacity-40 -z-20"
//           animate={{ y: [0, 25, 0], rotate: [0, -10, 10, 0] }}
//           transition={{ duration: 15, repeat: Infinity }}
//           style={{
//             background: "radial-gradient(circle,#00ffc855,#00ffb033,#0000)",
//             filter: "blur(45px)",
//           }}
//         />
//       </div>
//     </div>
//   );
// }







// import React from "react";
// import { motion } from "framer-motion";

// export default function Cloud404() {
//   return (
//     <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 bg-gradient-to-br from-[#f8fbff] via-[#eef7f4] to-[#fdfcff]">

//       {/* Soft background orbs */}
//       <motion.div
//         className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-[120px]"
//         style={{ background: "radial-gradient(circle,#c7f9e9,#ffffff)" }}
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ duration: 12, repeat: Infinity }}
//       />

//       <motion.div
//         className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full blur-[120px]"
//         style={{ background: "radial-gradient(circle,#e6dcff,#ffffff)" }}
//         animate={{ scale: [1.1, 1, 1.1] }}
//         transition={{ duration: 14, repeat: Infinity }}
//       />

//       {/* Floating clouds */}
//       {Array.from({ length: 6 }).map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full bg-white/70 backdrop-blur-xl shadow-lg"
//           style={{
//             width: 120 + i * 25,
//             height: 60 + i * 10,
//             top: `${10 + i * 12}%`,
//             left: `${(i * 18) % 90}%`,
//           }}
//           animate={{ y: [0, -15, 0] }}
//           transition={{
//             duration: 6 + i,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* MAIN CARD */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95, y: 40 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="
//           relative z-10 max-w-3xl w-full
//           rounded-[32px]
//           bg-white/70 backdrop-blur-2xl
//           border border-white/60
//           shadow-[0_30px_80px_rgba(0,0,0,0.08)]
//           px-10 py-16 text-center
//         "
//       >

//         {/* Orbit ring */}
//         <motion.div
//           className="absolute inset-0 rounded-[32px] pointer-events-none"
//           style={{
//             border: "1px dashed rgba(0,0,0,0.05)",
//           }}
//           animate={{ rotate: 360 }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//         />

//         {/* 404 */}
//         <motion.h1
//           className="
//             text-[120px] md:text-[160px]
//             font-extrabold
//             bg-gradient-to-r from-emerald-400 via-green-400 to-indigo-400
//             bg-clip-text text-transparent
//             leading-none
//           "
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           404
//         </motion.h1>

//         <h2 className="mt-4 text-3xl font-bold text-gray-900">
//           This page drifted away ☁️
//         </h2>

//         <p className="mt-4 text-gray-600 max-w-xl mx-auto">
//           The link you followed may be broken, or the page has moved to another
//           cloud. Let’s get you back on track.
//         </p>

//         {/* CTA */}
//         <div className="mt-10 flex flex-wrap justify-center gap-4">
//           <motion.a
//             href="/"
//             whileHover={{ scale: 1.08 }}
//             whileTap={{ scale: 0.95 }}
//             className="
//               px-7 py-3 rounded-full
//               bg-gradient-to-r from-emerald-500 to-green-500
//               text-white font-semibold
//               shadow-lg
//             "
//           >
//             Go to Homepage
//           </motion.a>

//           <motion.a
//             href="/contact"
//             whileHover={{ scale: 1.08 }}
//             className="
//               px-7 py-3 rounded-full
//               bg-white
//               border border-gray-200
//               text-gray-700 font-semibold
//               shadow-sm
//             "
//           >
//             Contact Support
//           </motion.a>
//         </div>
//       </motion.div>
//     </div>
//   );
// }




import React from "react";
import { motion } from "framer-motion";

export default function Cartoon404() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 bg-gradient-to-br from-[#f6fbff] via-[#eef9f5] to-[#fff9fd]">

      {/* Twinkling stars */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-yellow-300"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Floating clouds */}
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full shadow-lg"
          style={{
            width: 120 + i * 30,
            height: 60 + i * 12,
            top: `${10 + i * 10}%`,
            left: `${(i * 18) % 90}%`,
          }}
          animate={{ x: [0, 30, 0] }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Cartoon planet */}
      <motion.div
        className="absolute -left-40 bottom-10 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle,#8ee3ff,#5fb9ff)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-white/50"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Astronaut */}
      <motion.div
        className="absolute right-20 top-24 text-7xl"
        animate={{
          y: [0, -20, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        👨‍🚀
      </motion.div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10 max-w-3xl w-full
          bg-white/80 backdrop-blur-2xl
          rounded-[32px]
          shadow-[0_25px_80px_rgba(0,0,0,0.1)]
          px-10 py-16 text-center
        "
      >
        {/* Bouncing 404 */}
        <motion.h1
          className="text-[120px] md:text-[160px] font-extrabold text-green-500"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.h1>

        <h2 className="text-3xl font-bold text-gray-900 mt-4">
          Oops! Page Lost 🚀
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Looks like this page floated off into space.
          Don’t worry, our astronaut is searching for it!
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <motion.a
            href="/"
            whileHover={{ scale: 1.15, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8 py-3 rounded-full
              bg-gradient-to-r from-green-500 to-emerald-400
              text-white font-bold
              shadow-lg
            "
          >
            Back to Home 🏠
          </motion.a>

          <motion.a
            href="/contact-us"
            whileHover={{ scale: 1.15, rotate: 2 }}
            className="
              px-8 py-3 rounded-full
              bg-yellow-100 text-yellow-800
              font-bold
            "
          >
            Contact Support 💬
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
