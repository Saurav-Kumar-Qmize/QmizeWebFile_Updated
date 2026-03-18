import { motion } from "framer-motion";
import { Megaphone, Newspaper, Share2 } from "lucide-react";
import { PenTool, Send, Layers, BarChart3 } from "lucide-react";
import { useState } from "react";
import {
  Globe,

  Radio,
  Tv,
  Rss,
  Network,
  
} from "lucide-react";
import pressrelease from "../../assets/Images/press-release-sample.jpg";
import { Plus, Minus } from "lucide-react";


import icon1 from "../../assets/Images/cnbc-channel.jpeg";
import icon2 from "../../assets/Images/dailyhunt_news_channel.jpg";
import icon3 from "../../assets/Images/dh-channel.webp";
import icon4 from "../../assets/Images/dna-channel.webp";
import icon5 from "../../assets/Images/enterprenour-channel.webp";
import icon6 from "../../assets/Images/forbes-channel.webp";
import icon7 from "../../assets/Images/ht-channel.webp";
import icon8 from "../../assets/Images/india-today-channel.webp";
import icon9 from "../../assets/Images/lokmat-channel.webp";
import icon10 from "../../assets/Images/ly-channel.webp";
import icon11 from "../../assets/Images/midday-channel.webp";
import icon12 from "../../assets/Images/moneycontrol-channel.webp";
import icon13 from "../../assets/Images/news-18-channel.webp";
import icon14 from "../../assets/Images/outlook-channel.webp";
import icon15 from "../../assets/Images/pioneer-channel.webp";
import icon16 from "../../assets/Images/the-economics-times-channel.webp";
import icon17 from "../../assets/Images/thehindu-channel.webp";
import icon19 from "../../assets/Images/theprint-channel.webp";

import icon20 from "../../assets/Images/thetribune-channel.webp";
import icon21 from "../../assets/Images/theweek-channel.webp";
import icon22 from "../../assets/Images/toi-channel.webp";

import icon24 from "../../assets/Images/zee_news_channel.webp";
import icon25 from "../../assets/Images/zee-business-channel.webp";





export default function PRServices() {


const mediaIcons = [
  [icon1, icon2, icon3, icon4, icon5, icon6],         // Row 1
  [icon7, icon8, icon9, icon10, icon11, icon12],      // Row 2
  [icon13, icon14, icon15, icon16, icon17, icon19],   // Row 3
  [icon20, icon21, icon22, icon24, icon25],   // Row 4
];




  const faqs = [
    {
      q: "What is WhatsApp Business API?",
      a: "It is a powerful solution that enables businesses to automate messages, send notifications, handle customer support, and scale communication seamlessly.",
    },
    {
      q: "How does Qmize help with WhatsApp automation?",
      a: "Qmize provides verified WhatsApp Business API access, automation tools, chatbots, templates, analytics, and campaign management.",
    },
    {
      q: "Is the WhatsApp API suitable for small businesses?",
      a: "Absolutely! Whether you are a startup or enterprise, the API helps automate customer communication and improve conversions.",
    },
    {
      q: "How long does onboarding take?",
      a: "Typically 24 hours after verification. Qmize provides fast onboarding with complete documentation support.",
    },
    {
      q: "Does Qmize offer customer support?",
      a: "Yes! 24x7 customer support with a dedicated success manager for all business plans.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };




  return (

    <>
    <section className="relative w-full overflow-hidden py-12 px-6 bg-gradient-to-br from-white via-emerald-50 to-emerald-100">

      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none
        bg-[radial-gradient(#000000_1px,transparent_1px)]
        [background-size:22px_22px]"
      ></div>

      {/* FLOATING PR ICONS */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-8 w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center"
      >
        <Megaphone className="text-emerald-600" size={26} />
      </motion.div>

      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center"
      >
        <Newspaper className="text-emerald-600" size={26} />
      </motion.div>

     
      {/* MAIN CONTENT WRAPPER */}
      <div className="relative max-w-6xl mx-auto text-center">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 font-semibold rounded-full text-xs shadow-sm"
        >
          PREMIUM PR DISTRIBUTION SERVICE
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
        >
          PR Distribution Services That{" "}
          <span className="text-emerald-600">
            Amplify Your Brand
          </span>{" "}
          Across Major Media Channels
        </motion.h1>

        {/* SUB-TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-2xl mx-auto text-gray-700 text-base md:text-md leading-relaxed"
        >
          Get Your Story Published on Top News Sites, Digital Media Platforms & Industry Portals.
          Our powerful PR network helps startups, brands, founders, and enterprises gain immediate
          media exposure & credibility.
        </motion.p>

        {/* LIST POINTS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-800 font-medium"
        >
          {[
            "250+ Media Platforms",
            "Guaranteed Publication",
            "Fast Turnaround",
            "SEO-Boosting Backlinks",
            "Build Brand Authority",
            "Trusted by Founders & Startups",
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
              <Share2 className="text-emerald-600" size={20} />
              {point}
            </div>
          ))}
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="https://wa.me/9031011559" target="_blank"><button className="cursor-pointer px-5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg text-sm md:text-base transition-all duration-300">
            🚀 Get PR Consultation
          </button></a>
          <a href="https://wa.me/9031011559" target="_blank"><button className="cursor-pointer px-5 py-1 bg-white border border-emerald-300 hover:bg-emerald-100 text-emerald-700 rounded-full shadow-md text-sm md:text-base transition-all duration-300">
            📢 View PR Packages
          </button></a>
        </motion.div>

      </div>
    </section>






    <section className="relative w-full py-16 px-6 bg-gradient-to-b from-white via-emerald-50/40 to-white overflow-hidden">

  {/* BACKGROUND PATTERN */}
  <div className="absolute inset-0 opacity-[0.07] pointer-events-none 
      bg-[radial-gradient(#000_1px,transparent_1px)] 
      [background-size:22px_22px]">
  </div>

  {/* GLOW ELEMENTS */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-300/30 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200/30 blur-[140px] rounded-full"></div>

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-6 animate-fadeIn">

      <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 
        rounded-full text-xs font-semibold tracking-wide">
        WHAT IS A PR RELEASE?
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        What Is a <span className="text-emerald-600">Press Release?</span>
      </h2>

      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        A Press Release (PR) is an official announcement shared with media outlets 
        to highlight important business news such as product launches, company updates,  
        achievements, events, and milestones.  
      </p>

      <p className="text-gray-700 leading-relaxed">
        Our team writes, optimizes, and distributes your story across credible media 
        publications to ensure <span className="font-semibold text-emerald-700">maximum reach, authority, and impact.</span>
      </p>

      {/* POINTS */}
      <ul className="space-y-3 text-gray-800 text-sm md:text-base">
        {[
          "Product Launches",
          "Company Announcements",
          "Founder Stories",
          "Funding News",
          "Achievements & Milestones",
          "Event Coverage",
          "Market Insights",
          "Case Studies & Innovations"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-3 h-3 bg-emerald-500 rounded-full mt-1"></span>
            {item}
          </li>
        ))}
      </ul>

    </div>

    {/* RIGHT IMAGE CARD */}
    <div className="relative animate-slideUp">

      {/* BACK LAYER */}
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br 
          from-emerald-200/40 via-white to-emerald-100/40 
          shadow-[0_30px_80px_rgba(16,185,129,0.25)]"></div>

      {/* IMAGE CARD */}
      <div className="relative rounded-3xl overflow-hidden bg-white/60 
          backdrop-blur-xl border border-white/50 
          shadow-[0_20px_50px_rgba(0,0,0,0.12)] 
          hover:shadow-[0_35px_70px_rgba(16,185,129,0.25)] 
          transition-all duration-700 hover:-translate-y-2 group">

        {/* PLACEHOLDER IMAGE */}
        <img
          src={pressrelease} // <-- replace with your image
          alt="PR Release Illustration"
          className="w-full h-64 md:h-80 object-cover group-hover:scale-105 
          transition-transform duration-[1200ms]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t 
            from-black/30 via-transparent to-transparent"></div>
      </div>

    </div>
  </div>

  {/* ANIMATIONS */}
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn { animation: fadeIn 0.9s ease forwards; }

    @keyframes slideUp {
      from {opacity:0; transform:translateY(40px);}
      to {opacity:1; transform:translateY(0);}
    }
    .animate-slideUp { animation: slideUp 1s ease forwards; }
  `}</style>

</section>










   




<section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-white via-emerald-50 to-white">

  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none
    bg-[radial-gradient(circle,rgba(0,0,0,0.6)_1px,transparent_1px)]
    [background-size:24px_24px]" />

  {/* Glow Orbs */}
  <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-300/30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200/40 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="relative z-10 text-center mb-14 px-6">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      Media Network <span className="text-emerald-600">Visibility</span>
    </h2>
    <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
      Your press release is published across a powerful network of top media platforms.
    </p>
  </div>

  {/* MAIN CONTAINER */}
  <div className="relative z-10 max-w-6xl mx-auto space-y-10">

    {/* 4 MARQUEE ROWS */}
    {mediaIcons.map((group, rowIndex) => (
      <div key={rowIndex} className="overflow-hidden">

        <div
          className={`
            flex gap-10 w-max 
            ${rowIndex % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"}
          `}
        >
          {/* Duplicate for infinite loop */}
          {[...Array(2)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex gap-10">
              {group.map((icon, i) => (
                <div
                  key={i}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/80 
                  backdrop-blur-xl shadow-md border border-emerald-100 
                  flex items-center justify-center 
                  hover:scale-110 transition-all duration-500
                  animate-float"
                >
                  <img
                    src={icon}
                    alt="media-logo"
                    className="w-12 md:w-16 opacity-80"
                  />
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
    ))}

  </div>

  {/* ANIMATIONS */}
  <style>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marquee-reverse {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0); }
    }
    .animate-marquee {
      animation: marquee 20s linear infinite;
    }
    .animate-marquee-reverse {
      animation: marquee-reverse 20s linear infinite;
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `}</style>

</section>













        <section className="relative w-full py-16 px-6 overflow-hidden bg-gradient-to-b from-white via-emerald-50 to-white">

  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none 
    bg-[radial-gradient(circle,rgba(0,0,0,0.6)_1px,transparent_1px)]
    [background-size:22px_22px]" />

  {/* Glow Orbs */}
  <div className="absolute -top-32 -left-20 w-72 h-72 bg-emerald-300/30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300/30 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="relative text-center mb-16 z-10">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      Why Brands <span className="text-emerald-600">Need PR Distribution</span>
    </h2>
    <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
      PR helps your brand reach the world with credibility, visibility, and influence.
    </p>
  </div>

  {/* MAIN GRID */}
  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    {[
      {
        title: "Instant Visibility",
        desc: "Share your story with thousands of readers instantly.",
        icon: "📢",
      },
      {
        title: "Brand Credibility",
        desc: "Get featured on trusted publications and build authority.",
        icon: "🏆",
      },
      {
        title: "SEO Benefits",
        desc: "High-quality backlinks improve ranking & domain authority.",
        icon: "🔗",
      },
      {
        title: "Wider Audience Reach",
        desc: "Connect with investors, customers, & industry experts.",
        icon: "🌍",
      },
      {
        title: "Authority Positioning",
        desc: "Become the go-to expert in your industry.",
        icon: "🎤",
      },
      {
        title: "Lead Generation",
        desc: "Drive high-intent traffic & new business opportunities.",
        icon: "📈",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="
          group relative bg-white/70 backdrop-blur-xl
          border border-emerald-200 rounded-2xl p-8
          shadow-[0_15px_40px_rgba(16,185,129,0.15)]
          hover:shadow-[0_20px_60px_rgba(16,185,129,0.25)]
          transition-all duration-500 hover:-translate-y-2
        "
      >
        {/* Floating Icon */}
        <div className="
          text-4xl mb-4 
          group-hover:scale-125 transition-transform duration-500
          animate-iconFloat
        ">
          {item.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>

        {/* Desc */}
        <p className="text-gray-700 mt-2 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}

  </div>

  {/* Animations */}
  <style>{`
    @keyframes iconFloat {
      0% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0); }
    }
    .animate-iconFloat {
      animation: iconFloat 3s ease-in-out infinite;
    }
  `}</style>

</section>







         <section className="relative w-full py-16 px-6 overflow-hidden 
      bg-gradient-to-b from-white via-emerald-50/40 to-white">

      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none
        bg-[radial-gradient(circle,rgba(0,0,0,0.6)_1px,transparent_1px)]
        [background-size:26px_26px]" />

      {/* GLOW ORBS */}
      <div className="absolute -top-40 -left-32 w-80 h-80 bg-emerald-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/30 blur-3xl rounded-full"></div>

      {/* HEADING */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Our <span className="text-emerald-600">PR Release Services</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          Everything you need to build authority, gain visibility & grow your brand’s media presence.
        </p>
      </div>

      {/* SERVICE GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* CARD 01 */}
        <div className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl 
          border border-emerald-200 shadow-[0_20px_60px_rgba(16,185,129,0.15)]
          hover:shadow-[0_30px_80px_rgba(16,185,129,0.25)]
          hover:-translate-y-2 transition-all duration-500">
          
          <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center
            group-hover:bg-emerald-200 transition">
            <PenTool size={30} className="text-emerald-600" />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-5">Press Release Writing</h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            We create powerful, journalist-friendly press releases that are:
          </p>

          <ul className="mt-4 text-gray-700 space-y-1 text-sm">
            <li>✔ Clear, engaging & newsworthy</li>
            <li>✔ SEO-optimized</li>
            <li>✔ Professionally structured</li>
            <li>✔ Ready for instant distribution</li>
          </ul>
        </div>

        {/* CARD 02 */}
        <div className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl 
          border border-emerald-200 shadow-[0_20px_60px_rgba(16,185,129,0.15)]
          hover:shadow-[0_30px_80px_rgba(16,185,129,0.25)]
          hover:-translate-y-2 transition-all duration-500">

          <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center
            group-hover:bg-emerald-200 transition">
            <Send size={30} className="text-emerald-600" />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-5">Press Release Distribution</h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            Your story gets published across:
          </p>

          <ul className="mt-4 text-gray-700 space-y-1 text-sm">
            <li>✔ News websites</li>
            <li>✔ Media networks</li>
            <li>✔ Business magazines</li>
            <li>✔ Startup publications</li>
            <li>✔ Industry portals</li>
            <li>✔ Google News approved sites</li>
          </ul>
        </div>

        {/* CARD 03 */}
        <div className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl 
          border border-emerald-200 shadow-[0_20px_60px_rgba(16,185,129,0.15)]
          hover:shadow-[0_30px_80px_rgba(16,185,129,0.25)]
          hover:-translate-y-2 transition-all duration-500">

          <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center
            group-hover:bg-emerald-200 transition">
            <Layers size={30} className="text-emerald-600" />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-5">Targeted Industry Distribution</h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            We distribute your PR to category-specific portals like:
          </p>

          <ul className="mt-4 text-gray-700 space-y-1 text-sm">
            <li>✔ Technology</li>
            <li>✔ Business & Startup</li>
            <li>✔ Finance & Real Estate</li>
            <li>✔ Healthcare & Lifestyle</li>
            <li>✔ Education & E-commerce</li>
          </ul>
        </div>

        {/* CARD 04 */}
        <div className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl 
          border border-emerald-200 shadow-[0_20px_60px_rgba(16,185,129,0.15)]
          hover:shadow-[0_30px_80px_rgba(16,185,129,0.25)]
          hover:-translate-y-2 transition-all duration-500">

          <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center
            group-hover:bg-emerald-200 transition">
            <BarChart3 size={30} className="text-emerald-600" />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-5">PR Tracking & Reporting</h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            You receive a full report including:
          </p>

          <ul className="mt-4 text-gray-700 space-y-1 text-sm">
            <li>✔ Live publication links</li>
            <li>✔ Domain authority metrics</li>
            <li>✔ Traffic analytics</li>
            <li>✔ SEO value (backlinks + mentions)</li>
          </ul>
        </div>

      </div>

      {/* CARD FLOAT ANIMATION */}
      <style>{`
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .group:hover {
          animation: floaty 3s ease-in-out infinite;
        }
      `}</style>

    </section>







<section className="relative w-full py-10 px-6 bg-gradient-to-b from-white to-white overflow-hidden">

  {/* BACKGROUND PATTERN */}
  <div className="absolute inset-0 opacity-[0.06] pointer-events-none
    bg-[radial-gradient(#000_1px,transparent_1px)]
    [background-size:26px_26px]" />

  {/* HEADING */}
  <div className="relative z-10 text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      How Our <span className="text-emerald-600">PR Distribution</span> Works
    </h2>
    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
      A smooth, powerful & highly effective workflow designed to maximize your media visibility.
    </p>
  </div>

  {/* MAIN WRAPPER */}
  <div className="relative z-10 max-w-5xl mx-auto">

    {/* CONNECTOR LINE */}
    <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full hidden md:block">
      <pattern id="lineAnim" width="4" height="20" patternUnits="userSpaceOnUse">
        <rect width="2" height="20" fill="#34d399">
          <animate attributeName="y" from="-20" to="20" dur="1.2s" repeatCount="indefinite" />
        </rect>
      </pattern>
      <rect width="2" height="100%" fill="url(#lineAnim)" />
    </svg>

    {/* STEP ITEMS */}
    <div className="space-y-16">

      {[
        { title: "Story Research", icon: "🧩", text: "We understand your announcement, angle, and goals to shape the perfect narrative." },
        { title: "Press Release Drafting", icon: "✍️", text: "Professionally written PR in newsroom format with SEO enhancements." },
        { title: "Media Selection", icon: "🎯", text: "We choose high-authority media outlets based on your audience." },
        { title: "Publication & Distribution", icon: "📢", text: "Your story is published across trusted news portals and Google News sites." },
        { title: "Reporting", icon: "📄", text: "You receive all live URLs, metrics, and insights in a detailed report." },
      ].map((step, index) => (
        
        <div
          key={index}
          className={`
            relative grid md:grid-cols-2 items-center gap-10
          `}
        >

          {/* LEFT SIDE CARD (for even indexes) */}
          <div className={`${index % 2 === 0 ? "md:pr-12" : "hidden md:block"}`}></div>

          {/* CARD */}
          <div
            className={`
              p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-emerald-100
              shadow-[0_10px_30px_rgba(16,185,129,0.15)]
              hover:shadow-[0_20px_50px_rgba(16,185,129,0.25)]
              hover:-translate-y-1 transition-all duration-500
              ${index % 2 !== 0 ? "md:order-first md:pl-12" : ""}
            `}
          >
            <div className="text-4xl mb-3">{step.icon}</div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              {step.title}
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base">
              {step.text}
            </p>
          </div>

        </div>
      ))}

    </div>
  </div>

</section>





      <section className="relative w-full py-12 px-6 bg-white overflow-hidden">

  {/* --- BACKGROUND DOT PATTERN --- */}
  <div className="absolute inset-0 opacity-[0.06] pointer-events-none
    bg-[radial-gradient(#000_1px,transparent_1px)]
    [background-size:26px_26px]"
  />

  {/* --- HEADING 1 --- */}
  <div className="relative z-10 text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      Who Can Use <span className="text-emerald-600">PR Distribution?</span>
    </h2>
    <p className="mt-3 max-w-xl mx-auto text-gray-600">
      PR is powerful for any brand or individual looking to amplify visibility.
    </p>
  </div>

  {/* --- GRID 1 (WHO CAN USE) --- */}
  <div className="relative z-10 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

    {[
      "Startups announcing funding",
      "Brands launching new products",
      "Entrepreneurs sharing success stories",
      "Companies announcing expansion",
      "Event organizers",
      "Influencers & coaches",
      "SaaS & IT companies",
      "Agencies & founders"
    ].map((item, index) => (
      <div
        key={index}
        className="
          group relative p-6 bg-white/80 backdrop-blur-xl rounded-2xl 
          border border-emerald-100 shadow-md
          hover:shadow-[0_20px_50px_rgba(16,185,129,0.20)]
          hover:-translate-y-1 transition-all duration-500
          animate-fadeUp
        "
        style={{ animationDelay: `${index * 0.07}s` }}
      >
        <div className="text-emerald-600 text-3xl mb-3">⚡</div>
        <p className="text-gray-800 font-medium">{item}</p>

        {/* Glow on hover */}
        <div className="
          absolute inset-0 rounded-2xl pointer-events-none opacity-0 
          group-hover:opacity-100 transition-all duration-500
          bg-gradient-to-br from-emerald-200/20 to-green-100/20
        "></div>
      </div>
    ))}

  </div>

  {/* --- HEADING 2 --- */}
  <div className="relative z-10 text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      Benefits of <span className="text-emerald-600">PR Distribution</span>
    </h2>
    <p className="mt-3 max-w-xl mx-auto text-gray-600">
      Strong media visibility = stronger brand trust & authority.
    </p>
  </div>

  {/* --- GRID 2 (BENEFITS) --- */}
  <div className="relative z-10 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {[
      { icon: "🚀", text: "Boost brand credibility instantly" },
      { icon: "🔗", text: "Improve SEO with high-authority backlinks" },
      { icon: "🌍", text: "Your story reaches a massive audience" },
      { icon: "💼", text: "Attract investors & customers" },
      { icon: "📈", text: "Strengthen your digital presence" },
      { icon: "✨", text: "Long-term online visibility" },
    ].map((item, index) => (
      <div
        key={index}
        className="
          group relative p-6 bg-white/80 backdrop-blur-xl rounded-2xl 
          border border-emerald-100 shadow-md
          hover:shadow-[0_20px_50px_rgba(16,185,129,0.20)]
          hover:-translate-y-1 transition-all duration-500
          animate-fadeUp
        "
        style={{ animationDelay: `${index * 0.07}s` }}
      >
        <div className="text-emerald-600 text-4xl mb-3">{item.icon}</div>
        <p className="text-gray-800 font-medium">{item.text}</p>

        <div className="
          absolute inset-0 rounded-2xl pointer-events-none opacity-0 
          group-hover:opacity-100 transition-all duration-500
          bg-gradient-to-br from-emerald-200/20 to-green-100/20
        "></div>
      </div>
    ))}

  </div>

  {/* --- ANIMATIONS --- */}
  <style>{`
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp {
      animation: fadeUp 0.7s ease-out forwards;
    }
  `}</style>

</section>








 <section className="w-full bg-[#fdfcf7] px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT SIDE HEADING */}
        <div className="col-span-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Frequently Asked <br />
            <span className="font-serif italic text-emerald-700">Questions</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Get instant answers to your most common questions.
          </p>
        </div>

        {/* RIGHT SIDE ACCORDION */}
        <div className="col-span-2 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
              >
                <span className="font-medium text-gray-900">
                  {item.q}
                </span>
                {openIndex === index ? (
                  <Minus className="text-emerald-700" size={20} />
                ) : (
                  <Plus className="text-gray-600" size={20} />
                )}
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 p-4 sm:p-5" : "max-h-0 p-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>








        
















    













          </>






  );
}
