import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Megaphone } from "lucide-react";

import {
  Store,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Rocket,
  Briefcase
} from "lucide-react";
import { Plus, Minus } from "lucide-react";

import { AnimatePresence } from "framer-motion";
import { CheckCircle, Target,  ShieldCheck, PiggyBank } from "lucide-react";
import {
  
  ShoppingBag,
  Stethoscope,
  
  Landmark,
  CreditCard,
  Cpu,
  
} from "lucide-react";


import { useState } from "react";



export default function SeoServices() {

  const [openIndex, setOpenIndex] = useState(null);


  const industries = [
    { label: "Local Businesses", icon: <Building2 size={26} /> },
    { label: "E-commerce Stores", icon: <ShoppingBag size={26} /> },
    { label: "Healthcare", icon: <Stethoscope size={26} /> },
    { label: "Education", icon: <GraduationCap size={26} /> },
    { label: "Real Estate", icon: <Landmark size={26} /> },
    { label: "Finance", icon: <CreditCard size={26} /> },
    { label: "Technology & SaaS", icon: <Cpu size={26} /> },
    { label: "Startups & Enterprises", icon: <Rocket size={26} /> }
  ];

  const faqs = [
    {
      q: "Is SEO better than paid ads?",
      a: "SEO delivers long-term traffic, while ads stop when the budget ends."
    },
    {
      q: "Do you guarantee #1 ranking?",
      a: "SEO is a long-term growth strategy. You may start seeing improvements in rankings and traffic within 2–3 months, while strong, consistent results usually appear by 4–6 months depending on competition and website health."
    },
    {
      q: "Is SEO safe?",
      a: "Yes, when done with white-hat strategies."
    },
   
  ];





   const features = [
    { icon: <CheckCircle className="w-6 h-6 text-emerald-600" />, text: "Experienced SEO Professionals" },
    { icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />, text: "Ethical, White-Hat Techniques" },
    { icon: <BarChart3 className="w-6 h-6 text-emerald-600" />, text: "Transparent Monthly Reporting" },
    { icon: <Target className="w-6 h-6 text-emerald-600" />, text: "Custom Strategies — Not Templates" },
    { icon: <PiggyBank className="w-6 h-6 text-emerald-600" />, text: "Affordable & Flexible Pricing Plans" },
    { icon: <TrendingUp className="w-6 h-6 text-emerald-600" />, text: "Long-Term Growth Focus" },
  ];

  return (
    <>
    <section className="relative w-full min-h-[80vh] py-10 flex items-center overflow-hidden 
      bg-gradient-to-br from-emerald-100 via-white to-emerald-200 px-6">

      {/* DOT PATTERN */}
      <div className="absolute inset-0 opacity-[0.06]
        bg-[radial-gradient(#000_1px,transparent_1px)]
        [background-size:24px_24px]" />

      {/* GLOW ORBS */}
      <motion.div
        className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-emerald-400/30 blur-[160px] rounded-full"
        animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-green-300/30 blur-[180px] rounded-full"
        animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* FLOATING MARKETING ICONS */}
      <motion.div
        className="absolute left-10 top-28 text-emerald-500/70"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Megaphone size={36} />
      </motion.div>

      <motion.div
        className="absolute right-12 top-36 text-emerald-600/70"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <BarChart3 size={42} />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/3 text-emerald-500/70"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <TrendingUp size={40} />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="inline-block mb-5 px-3 py-1 rounded-full
            bg-white text-emerald-700 border border-emerald-300
            text-[10px] font-semibold tracking-wide">
            SEO SERVICES
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-4xl font-extrabold text-gray-900 leading-tight">
            SEO Services  
            <span className="text-emerald-600 block">That Drive Long-Term Growth</span>
          </h1>

          <p className="mt-6 text-gray-700 text-base md:text-md max-w-xl leading-relaxed">
            We deliver data-driven SEO strategies that boost
            visibility, attract the right audience, and convert traffic
            into measurable growth across platforms.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/9031011559"><button className="cursor-pointer px-4 py-1.5 rounded-full bg-emerald-600 text-white 
              font-semibold shadow-md hover:shadow-lg hover:bg-emerald-700 transition">
              Get Free SEO Audit →
            </button></a>

            <a href="https://wa.me/9031011559"><button className="cursor-pointer px-4 py-1.5 rounded-full bg-white text-emerald-700 
              border border-emerald-400 font-semibold hover:bg-emerald-50 transition">
              Talk to a SEO Expert
            </button></a>
          </div>
        </motion.div>

        {/* RIGHT VISUAL PANEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl bg-white/70 backdrop-blur-xl 
            border border-emerald-200 shadow-xl p-10">

          {/* INNER METRIC CARDS */}
          <div className="grid grid-cols-2 gap-4">

            {[
              ["SEO Growth", "3.4x"],
              ["Leads Generated", "120%"],
              ["Ad ROI", "5.2x"],
              ["Engagement", "98%"]
            ].map(([label, value], i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl p-5 bg-white shadow-md border border-emerald-200"
              >
                <h4 className="text-2xl font-bold text-emerald-600">{value}</h4>
                <p className="text-xs text-gray-600 mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>








      <section className="relative w-full overflow-hidden py-16 px-6 
      bg-gradient-to-br from-white via-emerald-50/40 to-white">

      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Soft Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.06]
          bg-[radial-gradient(#000_1px,transparent_1px)]
          [background-size:26px_26px]"
        />

        {/* Faded Big Number */}
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          text-[180px] sm:text-[250px] md:text-[320px] font-extrabold 
          text-gray-300/20 select-none pointer-events-none">
          1
        </h1>

        {/* Glow Orbs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 
          bg-emerald-300/30 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 
          bg-green-200/30 blur-[150px] rounded-full" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-6xl mx-auto">

        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            inline-block px-3 py-1 rounded-full text-xs font-semibold
            bg-emerald-100 text-emerald-700 border border-emerald-200
          "
        >
          WHAT IS SEO ?
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            mt-6 text-3xl md:text-3xl lg:text-4xl font-extrabold 
            text-gray-900 leading-snug
          "
        >
          What Is Search Engine Optimization  
          <span className="block text-emerald-600">
            & Why It Matters?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-gray-600 text-base md:text-md leading-relaxed max-w-3xl"
        >
          Search Engine Optimization (SEO) improves your website’s visibility 
          on Google so potential customers can find you when they need you. 
          A powerful SEO strategy helps you grow sustainably without relying 
          solely on ads.
        </motion.p>

        {/* BENEFITS GRID */}
        <div className="mt-10 grid sm:grid-cols-2 gap-6">

          {[
            "Increase organic website traffic",
            "Generate consistent leads without paid ads",
            "Build brand credibility & trust",
            "Improve user experience & engagement",
            "Stay ahead of competitors in rankings",
            "Achieve long-term digital growth"
          ].map((item, i) => (
            
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className="
                p-4 rounded-xl bg-white/60 backdrop-blur-xl
                border border-emerald-200 shadow-md
                flex items-center gap-3
              "
            >
              {/* Green Tick */}
              <span className="
                w-8 h-8 flex items-center justify-center rounded-full 
                bg-emerald-600 text-white text-lg
              ">
                ✓
              </span>

              <p className="text-gray-700 text-sm md:text-md font-medium">
                {item}
              </p>
            </motion.div>

          ))}

        </div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-gray-800 font-semibold text-md md:text-md"
        >
          If your website isn’t ranking - your competitors are winning your customers.
        </motion.p>

      </div>
    </section>







































           <section className="relative w-full overflow-hidden py-16 px-6 
bg-gradient-to-b from-white via-emerald-50/30 to-white">


<div
    className="
      pointer-events-none absolute inset-0 flex items-center justify-center
      font-extrabold leading-none select-none
      text-[160px] sm:text-[240px] md:text-[340px] lg:text-[420px]
      text-gray-200/60
    "
  >
    2
  </div>
  {/* SOFT BACKGROUND PATTERN */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.06]
    bg-[radial-gradient(#000_1px,transparent_1px)]
    [background-size:28px_28px]" />

  <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

    {/* LEFT SIDE – STRONG SEO MESSAGE */}
    <div className="sticky top-24 space-y-6">

      <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold
        bg-emerald-100 text-emerald-700 tracking-wide">
        SEO SERVICES
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
        SEO That Works  
        <span className="block text-emerald-600">
          Before & After Launch
        </span>
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
        We don’t treat SEO as an add-on.  
        SEO is baked into your website structure, content, speed
        and authority - from day one.
      </p>

      <div className="pt-4 space-y-3 text-sm text-gray-700">
        <p>✔ Long-term organic visibility</p>
        <p>✔ Sustainable lead generation</p>
        <p>✔ Search-first website architecture</p>
      </div>

    </div>

    {/* RIGHT SIDE – SEO PILLARS */}
    <div className="space-y-14">

      {/* ON-PAGE SEO */}
      <div className="relative pl-8">

        <div className="absolute left-0 top-0 h-full w-1 
          bg-gradient-to-b from-emerald-400 to-emerald-200 rounded-full" />

        <h3 className="text-2xl font-bold text-gray-900">
          On-Page SEO
        </h3>

        <p className="mt-3 text-gray-600 leading-relaxed">
          Everything users and search engines see - content, structure,
          speed and experience - perfectly aligned for rankings.
        </p>

        <p className="mt-4 font-medium text-emerald-700">
          Outcome → Higher rankings & better engagement
        </p>

      </div>

      {/* OFF-PAGE SEO */}
      <div className="relative pl-8">

        <div className="absolute left-0 top-0 h-full w-1 
          bg-gradient-to-b from-emerald-400 to-emerald-200 rounded-full" />

        <h3 className="text-2xl font-bold text-gray-900">
          Off-Page SEO
        </h3>

        <p className="mt-3 text-gray-600 leading-relaxed">
          We strengthen your online authority through backlinks,
          brand mentions and trust signals across the web.
        </p>

        <p className="mt-4 font-medium text-emerald-700">
          Outcome → Strong domain authority & Google trust
        </p>

      </div>

      {/* LOCAL SEO */}
      <div className="relative pl-8">

        <div className="absolute left-0 top-0 h-full w-1 
          bg-gradient-to-b from-emerald-400 to-emerald-200 rounded-full" />

        <h3 className="text-2xl font-bold text-gray-900">
          Local SEO
        </h3>

        <p className="mt-3 text-gray-600 leading-relaxed">
          Help nearby customers find your business exactly
          when they are ready to take action.
        </p>

        <p className="mt-4 font-medium text-emerald-700">
          Outcome → Calls, visits & local leads
        </p>

      </div>

    </div>
  </div>
</section>









          <section className="relative w-full py-16 px-6 bg-gradient-to-b from-white via-emerald-50/40 to-white overflow-hidden">

  {/* BACKGROUND PATTERN */}
  <div className="absolute inset-0 opacity-[0.06] pointer-events-none
    bg-[radial-gradient(#000_1px,transparent_1px)]
    [background-size:26px_26px]"
  />

  {/* FLOATING GLOWS */}
  <div className="absolute -top-32 -left-20 w-80 h-80 bg-emerald-300/25 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-300/20 blur-[140px] rounded-full"></div>

  {/* HEADING */}
  <div className="relative text-center max-w-3xl mx-auto mb-16">
    <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
      OUR SEO PROCESS
    </span>

    <h2 className="mt-6 text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
      A Proven <span className="text-emerald-600">SEO Framework</span> That Drives Results
    </h2>

    <p className="mt-4 text-gray-600 text-base md:text-lg">
      Our step-by-step SEO workflow ensures consistent growth, higher search rankings, and measurable business impact.
    </p>
  </div>

  {/* SEO PROCESS TIMELINE */}
  <div className="relative max-w-5xl mx-auto">

    {/* Vertical Line */}
    <div className="hidden md:block absolute left-1/2 top-0 w-[3px] h-full bg-emerald-300/60 -translate-x-1/2 rounded-full"></div>

    <div className="space-y-16">

      {/* STEP COMPONENT */}
      {[  
        {
          step: "01",
          title: "SEO Audit & Research",
          desc: "Deep analysis of your website, competitors, keywords & industry to understand real opportunities.",
        },
        {
          step: "02",
          title: "Strategy Planning",
          desc: "A customized SEO roadmap built for your business goals & market conditions.",
        },
        {
          step: "03",
          title: "Implementation",
          desc: "Technical SEO, on-page optimization, content improvements & off-page execution.",
        },
        {
          step: "04",
          title: "Continuous Optimization",
          desc: "Ongoing refinement based on performance, algorithm updates & competitor activity.",
        },
        {
          step: "05",
          title: "Reporting & Insights",
          desc: "Transparent monthly reporting with rankings, traffic insights, and growth metrics.",
        },
      ].map((item, i) => {
        
        const isLeft = i % 2 === 0;

        return (
          <div
            key={i}
            className={`relative grid md:grid-cols-2 gap-10 items-center`}
          >

            {/* TEXT CARD */}
            <div
              className={`p-6 rounded-2xl bg-white/70 backdrop-blur-xl border 
                border-emerald-200 shadow-[0_10px_40px_rgba(16,185,129,0.15)]
                transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,185,129,0.25)]
                ${isLeft ? "md:pr-10" : "md:order-2 md:pl-10"}
              `}
            >
              {/* STEP LABEL */}
              <span className="text-emerald-600 font-bold text-sm tracking-widest">
                STEP {item.step}
              </span>

              {/* TITLE */}
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* CENTER DOT ANIMATION */}
            <div
              className={`hidden md:flex justify-center ${isLeft ? "" : "md:order-1"}`}
            >
              <div className="w-7 h-7 bg-emerald-500 rounded-full 
                ring-[6px] ring-white shadow-xl animate-pulse">
              </div>
            </div>

          </div>
        );
      })}

    </div>
  </div>
</section>







      <section className="relative w-full py-16 px-6 overflow-hidden 
bg-gradient-to-b from-white via-emerald-50/40 to-white">

  {/* Background Pattern */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.06]
      bg-[radial-gradient(#000_1px,transparent_1px)]
      [background-size:26px_26px]" />

  {/* Glow Orbs */}
  <div className="absolute -top-32 -left-20 w-80 h-80 bg-emerald-300/30 blur-[130px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/40 blur-[150px] rounded-full"></div>

  <div className="relative max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        How Long Does <span className="text-emerald-600">SEO</span> Take to Show Results?
      </h2>
      <p className="mt-3 text-gray-600 max-w-xl mx-auto">
        SEO delivers powerful long-term growth. Here’s how the timeline typically looks.
      </p>
    </div>

    {/* Timeline Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* CARD 1 */}
      <div className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl 
          border border-emerald-200 hover:shadow-[0_10px_40px_rgba(16,185,129,0.25)]
          hover:-translate-y-2 transition-all duration-500 text-center">

        {/* Number */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 
            bg-emerald-500 text-white rounded-full flex items-center justify-center text-lg font-bold 
            shadow-lg group-hover:scale-110 transition">
          1
        </div>

        <h3 className="mt-8 text-lg font-bold text-emerald-700">4 - 6 Weeks</h3>
        <p className="mt-2 text-gray-700 text-sm">
          Early improvements begin - technical fixes, indexing, speed boost.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl 
          border border-emerald-200 hover:shadow-[0_10px_40px_rgba(16,185,129,0.25)]
          hover:-translate-y-2 transition-all duration-500 text-center">

        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 
            bg-emerald-500 text-white rounded-full flex items-center justify-center text-lg font-bold 
            shadow-lg group-hover:scale-110 transition">
          2
        </div>

        <h3 className="mt-8 text-lg font-bold text-emerald-700">2 - 3 Months</h3>
        <p className="mt-2 text-gray-700 text-sm">
          Keyword movement & noticeable organic growth starts.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl 
          border border-emerald-200 hover:shadow-[0_10px_40px_rgba(16,185,129,0.25)]
          hover:-translate-y-2 transition-all duration-500 text-center">

        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 
            bg-emerald-500 text-white rounded-full flex items-center justify-center text-lg font-bold 
            shadow-lg group-hover:scale-110 transition">
          3
        </div>

        <h3 className="mt-8 text-lg font-bold text-emerald-700">3 - 6 Months</h3>
        <p className="mt-2 text-gray-700 text-sm">
          Strong rankings, traffic boost, & consistent lead generation.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl 
          border border-emerald-200 hover:shadow-[0_10px_40px_rgba(16,185,129,0.25)]
          hover:-translate-y-2 transition-all duration-500 text-center">

        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 
            bg-emerald-500 text-white rounded-full flex items-center justify-center text-lg font-bold 
            shadow-lg group-hover:scale-110 transition">
          4
        </div>

        <h3 className="mt-8 text-lg font-bold text-emerald-700">Long Term</h3>
        <p className="mt-2 text-gray-700 text-sm">
          SEO becomes your highest ROI channel compared to paid ads.
        </p>
      </div>

    </div>
  </div>

</section>








        <section
      className="
        relative w-full py-16 px-6 
        bg-gradient-to-br from-white via-emerald-50/40 to-white 
        overflow-hidden
      "
    >
      {/* Background Pattern */}
      <div
        className="
          absolute inset-0 opacity-[0.05] pointer-events-none
          bg-[radial-gradient(#000_1px,transparent_1px)]
          [background-size:22px_22px]
        "
      />

      {/* Glow Elements */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-emerald-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/30 blur-[130px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose <span className="text-emerald-600">Us</span> for SEO Services?
        </h2>

        <p className="text-gray-600 mt-3 text-base md:text-lg max-w-xl mx-auto">
          We focus on SEO strategies that actually drive revenue - not just rankings.
        </p>

        {/* Feature List */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="
                group flex items-start gap-4 p-5 rounded-xl
                bg-white/70 backdrop-blur-xl
                border border-emerald-100 
                shadow-md hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
                animate-fadeInUp
              "
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="mt-1 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <p className="text-gray-800 font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <p className="mt-10 text-emerald-700 font-semibold text-sm md:text-base tracking-wide">
          We focus on real business results, not vanity metrics.
        </p>
      </div>

      {/* Keyframe Animation */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>
    </section>










     <section className="relative w-full py-16 px-6 overflow-hidden 
      bg-gradient-to-br from-emerald-50 via-white to-emerald-100">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.06] 
        bg-[radial-gradient(#000_1px,transparent_1px)] 
        [background-size:22px_22px] pointer-events-none" />

      {/* Glow Elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300/25 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900">
            Industries We Serve with{" "}
            <span className="text-emerald-600">SEO</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base md:text-md">
            From local shops to enterprise SaaS companies - we help every type 
            of business grow organically and rank higher on Google.
          </p>
        </div>

        {/* INDUSTRIES GRID */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
          gap-6 md:gap-8">

          {industries.map((item, i) => (
            <div
              key={i}
              className="
                group relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl 
                border border-emerald-200 shadow-md
                hover:shadow-[0_12px_40px_rgba(16,185,129,0.25)]
                hover:-translate-y-2 transition-all duration-500
                flex flex-col items-center text-center
              "
            >

              {/* Icon */}
              <div className="
                w-14 h-14 flex items-center justify-center rounded-xl 
                bg-emerald-100 text-emerald-600 mb-4
                group-hover:bg-emerald-200 group-hover:text-emerald-700
                transition-all duration-500
              ">
                {item.icon}
              </div>

              {/* Label */}
              <p className="text-gray-800 font-semibold text-sm md:text-base 
                group-hover:text-emerald-700 transition-all">
                {item.label}
              </p>

              {/* Highlight Glow */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100 
                bg-gradient-to-br from-emerald-200/10 to-green-300/10 
                rounded-2xl pointer-events-none transition-all duration-500
              " />
            </div>
          ))}
        </div>
      </div>
    </section>







        








































        <section className="relative w-full py-16 px-6 bg-gradient-to-b from-white via-emerald-50/50 to-white overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="faqGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="#000" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faqGrid)" />
        </svg>
      </div>

      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-300/30 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/30 blur-[160px]" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Digital Marketing <span className="text-emerald-600">FAQs</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Everything you need to know before growing your business online.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="
                  border border-emerald-200/70 rounded-2xl
                  bg-white/70 backdrop-blur-xl
                  shadow-sm hover:shadow-md
                  transition-all
                "
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="
                    w-full flex justify-between items-center
                    px-6 py-5 text-left
                  "
                >
                  <span className="text-gray-900 font-semibold text-lg">
                    {faq.q}
                  </span>

                  <span className="
                    w-9 h-9 flex items-center justify-center rounded-full
                    bg-emerald-100 text-emerald-700
                  ">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>








      
             
      










</>
  );
}
