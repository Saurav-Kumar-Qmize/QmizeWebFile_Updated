import { motion } from "framer-motion";
import { Megaphone, TrendingUp, Users, BarChart3,Facebook, Instagram, Youtube, PenTool, CalendarCheck, Image,  BarChart } from "lucide-react";
import googlebusiness from "../../assets/Images/googlebusiness_sample.png";
import { useState } from "react";
import smmImage from "../../assets/Images/smm-image.png"
import gifvideo from '../../assets/Videos/create.gif';
import {
  Store,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Rocket,
  CheckCircle,
  Briefcase
} from "lucide-react";

import {
  
  ShoppingBag,
  Stethoscope,
  
  Landmark,
  CreditCard,
  Cpu,
  
} from "lucide-react";

import { Plus, Minus } from "lucide-react";


const SMMServices = () => {

    const plans = [
  {
    name: "Bronze Plan",
    price: "Rs 15,999/-",
    features: [
      "Google My Business Profile",
      "PR Published (FeaturedTimes, DailyHunt, medium etc.)",
      "Facebook Company Page Setup",
      "Facebook Profile Optimization",
      "6 Facebook Customize Posts",
      "Instagram Profile Optimization",
      "6 Instagram Posts",
      "Twitter Profile Optimization",
      "Twitter Cover Page",
      "Twitter Customize Post (6)",
      "LinkedIn Profile Optimization",
      "YouTube Channel Creation",
      "YouTube Background Design",
      "Pinterest Profile Optimization",
      "Pinterest Posting (6)",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Silver Plan",
    price: "Rs 21,999/-",
    features: [
      "Quora Profile",
      "Your Story Profile",
      "Google My Business Profile + Review",
      "PR Published (FeaturedTimes, DailyHunt, medium etc.)",
      "Facebook Page Setup + Optimization",
      "12 Facebook Posts",
      "Instagram Creative Images + Optimization",
      "12 Instagram Posts",
      "Twitter Profile Optimization",
      "12 Twitter Posts",
      "LinkedIn Profile Optimization",
      "Pinterest 12 Creative Designs",
      "YouTube Channel Creation + Optimization",
    ],
    popular: true,
    color: "from-purple-600 to-blue-600",
  },
  {
    name: "Gold Plan",
    price: "Rs 29,999/-",
    features: [
      "Quora Profile",
      "Business Listing (10+ Sites)",
      "Crunchbase Profile",
      "Your Story Profile + Review",
      "Google My Business Profile + Review",
      "PR Published",
      "20 Facebook Posts",
      "20 Instagram Posts",
      "20 Twitter Posts",
      "20 LinkedIn Posts",
      "YouTube Video Upload + Optimization",
      "Pinterest 20 Creative Designs",
    ],
    color: "from-yellow-500 to-emerald-500",
  },
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



  return (
    <>



     <section className="relative w-full overflow-hidden py-16 px-6 
      bg-gradient-to-br from-emerald-100 via-white to-emerald-200">

      {/* BACKGROUND GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none
        bg-[linear-gradient(90deg,_rgba(0,0,0,0.15)_1px,_transparent_1px),_linear-gradient(rgba(0,0,0,0.15)_1px,_transparent_1px)]
        bg-[size:40px_40px]">
      </div>

      {/* FLOATING ICONS */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 text-emerald-600 opacity-40"
      >
        <Users size={50} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-24 right-10 text-emerald-700 opacity-40"
      >
        <Megaphone size={55} />
      </motion.div>

      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/3 right-1/4 text-emerald-500 opacity-30"
      >
        <BarChart3 size={48} />
      </motion.div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Social Media Marketing That  
            <span className="text-emerald-600 block">
              Builds Brands & Drives Real Results
            </span>
          </h1>

          <p className="text-gray-700 text-base md:text-md leading-relaxed max-w-md">
            Turn your social platforms into powerful growth engines.
          
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-gray-800">
            <div className="flex items-center gap-2">
              <Rocket size={18} className="text-emerald-600" /> Social Media Management
            </div>
            <div className="flex items-center gap-2">
              <Megaphone size={18} className="text-emerald-600" /> Meta & Google Ads
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-emerald-600" /> GMV Optimization
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 size={18} className="text-emerald-600" /> Content Marketing
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/9031011559"
              className="px-3 py-2 rounded-full bg-emerald-600 text-white font-semibold 
                shadow-lg hover:bg-emerald-700 transition"
            >
              🚀 Get Your Free Social Strategy
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/9031011559"
              className="px-3 py-2 rounded-full bg-white border border-emerald-300 
                text-emerald-700 font-semibold shadow-md hover:bg-emerald-50 transition"
            >
              📈 Book a Consultation
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-emerald-300/20 blur-[120px] rounded-full"></div>

          <div className="relative rounded-3xl overflow-hidden 
            
            ">

            <img
              src={smmImage}
              alt="Social Media Marketing Services at Qmize"
              className="w-full h-80 md:h-[400px] object-contain"
            />
          </div>
        </motion.div>

      </div>
    </section>



    <section className="relative w-full overflow-hidden py-16 px-6 
      bg-white">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none 
        bg-[radial-gradient(#000_1px,transparent_1px)] 
        [background-size:22px_22px]" />

      {/* FLOATING GLOWS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-300/25 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-green-300/30 blur-[150px] rounded-full"></div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          {/* <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 rounded-full bg-emerald-100/80 
            text-emerald-700 font-semibold text-xs tracking-wide shadow-sm "
          >
            ABOUT OUR SMM SERVICES
          </motion.span> */}

          <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Social Media Marketing That  
            <span className="block text-emerald-600">Builds Brands & Drives Growth</span>
          </h2>

          <p className="text-gray-700 text-[15px] md:text-base leading-relaxed max-w-md">
            Your customers are scrolling. Your competitors are posting.  
            Your brand should be leading.
            <br /><br />
            With strategic content, targeted ads, and a powerful online presence, 
            we help businesses grow faster and convert stronger on the platforms 
            where their audience spends the most time.
          </p>

          {/* BULLET LIST */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-3 text-gray-800 text-sm"
          >
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Strategic content & storytelling
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Data-driven social media ads
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Brand building & customer engagement
            </li>
          </motion.ul>

        </motion.div>

        {/* RIGHT SIDE ILLUSTRATION CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow behind card */}
          <div className="absolute inset-0 blur-[70px] bg-emerald-300/30 rounded-3xl"></div>

          {/* Glassmorphism Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative rounded-3xl p-10 backdrop-blur-xl bg-white/60 
            border border-white/40 shadow-[0_10px_50px_rgba(16,185,129,0.25)]
            flex flex-col gap-8"
          >
            {/* Icon Row */}
            <div className="flex justify-between">
              <Facebook className="w-10 h-10 text-sky-600" />
              <Instagram className="w-10 h-10 text-pink-500" />
              <Youtube className="w-10 h-10 text-red-600" />
              <Megaphone className="w-10 h-10 text-emerald-700" />
            </div>

            {/* Image Placeholder */}
            <img
                     src={gifvideo}
                     alt="WhatsApp Automation Demo"
                     className="rounded-2xl w-full object-contain"
                   />
          </motion.div>
        </motion.div>
      </div>
    </section>





   






            
            <section className="relative w-full py-16 sm:py-16 px-6 
bg-gradient-to-br from-rose-50 via-white to-indigo-50 overflow-hidden">

  {/* BACKGROUND DECOR */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Soft gradient glows */}
    <div className="absolute -top-40 -left-40 w-[420px] h-[420px] 
      bg-pink-300/25 blur-[140px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[420px] h-[420px] 
      bg-indigo-300/25 blur-[140px] rounded-full"></div>

    {/* Dot pattern */}
    <div className="absolute inset-0 opacity-[0.04]
      bg-[radial-gradient(#000_1px,transparent_1px)]
      [background-size:24px_24px]"></div>
  </div>

  <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">


            <div
    className="
      pointer-events-none absolute inset-0 flex items-center justify-center
      font-extrabold leading-none select-none
      text-[160px] sm:text-[240px] md:text-[340px] lg:text-[420px]
      text-gray-200/60
    "
  >
    1
  </div>
    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
        Social Media Management
      </h2>

      <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
        Build brand awareness, trust, and engagement across platforms like 
        <span className="font-semibold text-indigo-600"> Facebook</span>, 
        <span className="font-semibold text-pink-600"> Instagram</span>, and 
        <span className="font-semibold text-blue-600"> LinkedIn</span> - using 
        content that actually connects with your audience.
      </p>

      {/* FEATURES LIST */}
      <div className="mt-10 space-y-4">
        {[
          "Profile optimisation",
          "Content strategy & planning",
          "Creative post designs",
          "Caption & hashtag strategy",
          "Reel & story content",
          "Engagement management",
          "Monthly performance reports",
        ].map((item, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className="mt-1 w-2.5 h-2.5 bg-gradient-to-tr 
              from-pink-500 to-indigo-500 rounded-full"></span>
            <p className="text-gray-800 text-sm md:text-base">{item}</p>
          </div>
        ))}
      </div>

      {/* RESULT */}
      <div className="mt-8 inline-block px-6 py-3 rounded-full 
        bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-sm font-semibold shadow-md">
        ✨ Stronger brand presence & audience connection
      </div>
    </div>

    {/* RIGHT VISUAL AREA */}
    <div className="relative flex justify-center">

      {/* MAIN GLASS PANEL */}
      <div className="relative w-full max-w-md rounded-3xl bg-white/70 
        backdrop-blur-xl border border-white/60 shadow-xl p-10">

        {/* CENTER ICON */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center
            bg-gradient-to-tr from-pink-500 to-indigo-500 shadow-lg">
            <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
              <path d="M22 3H2v18h20V3zm-4.5 6.5c-.3.9-1.1 1.6-2.1 1.8.8.6 1.1 1 1.1 1.5 0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7.8 0 1.6.2 2.3.6.8-.5 1.2-.9 1.4-1.7z"/>
            </svg>
          </div>
        </div>

        {/* SOCIAL ICON ROW */}
        <div className="flex justify-center gap-6">

          {/* Facebook */}
          <div className="w-12 h-12 rounded-full bg-blue-500/10 
            flex items-center justify-center">
            <svg width="20" height="20" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2.3c0-2 
              1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0022 12z"/>
            </svg>
          </div>

          {/* Instagram */}
          <div className="w-12 h-12 rounded-full bg-pink-500/10 
            flex items-center justify-center">
            <svg width="20" height="20" fill="#E1306C" viewBox="0 0 24 24">
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm4.8-.9a1 1 0 11-2 0 1 1 0 012 0z"/>
            </svg>
          </div>

          {/* LinkedIn */}
          <div className="w-12 h-12 rounded-full bg-sky-500/10 
            flex items-center justify-center">
            <svg width="20" height="20" fill="#0A66C2" viewBox="0 0 24 24">
              <path d="M4 3a2 2 0 110 4 2 2 0 010-4zm0 6h4v12H4V9zm6 0h4v1.7c.6-1 2-2 3.8-2 
              4 0 4.2 2.6 4.2 6v6.3h-4v-5.6c0-1.3 0-3-2-3s-2.2 1.5-2.2 2.9V21h-4V9z"/>
            </svg>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>





         <section className="relative py-24 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:26px_26px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Monthly Social Media Marketing Pricing Plans
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Choose a plan that fits your business growth goals.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className={`
              relative rounded-3xl p-8 backdrop-blur-xl border border-white/30 
              shadow-[0_15px_60px_rgba(0,0,0,0.15)] 
              bg-white/60 hover:shadow-[0_20px_80px_rgba(16,185,129,0.3)]
              transition-all duration-500
            `}
          >

            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 
              bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs 
              font-bold px-4 py-1 rounded-full shadow-md">
                MOST POPULAR
              </div>
            )}

            {/* Plan Heading */}
            <div className={`text-center mb-6`}>
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${plan.color} text-transparent bg-clip-text`}>
                {plan.name}
              </h3>
              <p className="text-4xl font-extrabold text-gray-900 mt-2">
                {plan.price}
              </p>
              <p className="text-sm text-gray-600">(Monthly Price)</p>
            </div>

            {/* Features */}
            <ul className="space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex gap-3 items-start text-gray-700 text-sm">
                  <CheckCircle size={18} className="text-emerald-600 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
           <a   
           href="https://wa.me/9031011559" target="_blank"
           > <button className=" cursor-pointer mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-md hover:shadow-xl transition-all">
              Chat With Us
            </button></a>

          </motion.div>
        ))}

      </div>
    </section>

































       




    







            <section className="relative w-full overflow-hidden py-16 px-6 
bg-gradient-to-b from-white via-green-50/40 to-white">

  {/* Subtle grid pattern */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.05]
    bg-[radial-gradient(#000_1px,transparent_1px)]
    [background-size:30px_30px]" />

  <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">


            <div
    className="
      pointer-events-none absolute inset-0 flex items-start justify-center
      font-extrabold leading-none select-none
      text-[160px] sm:text-[240px] md:text-[340px] lg:text-[420px]
      text-gray-200/60
    "
  >
    2
  </div>
    {/* LEFT CONTENT */}
    <div className="space-y-6">

      <span className="inline-block px-5 py-2 rounded-full 
        text-xs font-semibold tracking-wide
        bg-green-100 text-green-700">
        LOCAL SEO / GOOGLE MAPS
      </span>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
        Google Business Profile  
        <span className="block text-emerald-600">
          Optimization That Gets You Found
        </span>
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
        Your Google Business Profile is your digital shopfront.
        We optimise it to dominate map results, build trust,
        and bring ready-to-convert local customers.
      </p>

      {/* FLOW POINTS (NOT CARDS) */}
      <div className="mt-8 space-y-4 text-gray-700 text-sm md:text-base">

        <div className="flex items-start gap-3">
          <span className="text-green-600 font-bold">01</span>
          <p>
            Complete setup, verification, and accurate category selection
            to match real search intent.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-green-600 font-bold">02</span>
          <p>
            Image, video uploads & weekly posts that signal
            freshness and engagement to Google.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-green-600 font-bold">03</span>
          <p>
            Reviews strategy, reputation management, and performance
            tracking through insights.
          </p>
        </div>

      </div>

     

    </div>

    {/* RIGHT VISUAL SECTION */}
    <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden">
  <img
    src={googlebusiness}
    alt="Google Maps Visibility Services at Qmize"
    className="w-full h-full "
  />

  
</div>


  </div>
</section>













        <section className="relative w-full py-16 sm:py-16 px-6 
bg-gradient-to-br from-sky-50 via-white to-pink-50 overflow-hidden">

  {/* BACKGROUND DECOR */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Soft glows */}
    <div className="absolute -top-32 -right-32 w-[420px] h-[420px] 
      bg-sky-300/25 blur-[140px] rounded-full" />
    <div className="absolute bottom-0 left-0 w-[420px] h-[420px] 
      bg-pink-300/25 blur-[140px] rounded-full" />

    {/* Dot pattern */}
    <div className="absolute inset-0 opacity-[0.04]
      bg-[radial-gradient(#000_1px,transparent_1px)]
      [background-size:22px_22px]" />
  </div>

  <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">


        <div
    className="
      pointer-events-none absolute inset-0 flex items-center justify-center
      font-extrabold leading-none select-none
      text-[160px] sm:text-[240px] md:text-[340px] lg:text-[420px]
      text-gray-200/60
    "
  >
    3
  </div>
    {/* LEFT CONTENT */}
    <div>
      <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold 
        bg-gradient-to-r from-sky-500 to-pink-500 text-white">
        Paid Advertising
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        Meta Ads that <span className="text-sky-600">Scale Revenue</span>,  
        not just clicks
      </h2>

      <p className="mt-5 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
        Reach high-intent audiences on 
        <span className="font-semibold text-blue-600"> Facebook</span> and 
        <span className="font-semibold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent"> Instagram
        </span>  with laser-targeted campaigns built for speed, conversions, and ROI.
      </p>

      {/* SERVICE LIST */}
      <div className="mt-8 space-y-4">
        {[
          "Ad account setup & tracking",
          "Audience research & targeting",
          "Campaign structure planning",
          "Creative ad design & copywriting",
          "Budget optimisation & scaling",
          "Pixel, conversion & event tracking",
          "A/B testing for performance uplift",
        ].map((item, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className="mt-1 w-2.5 h-2.5 rounded-full 
              bg-gradient-to-tr from-sky-500 to-pink-500" />
            <p className="text-gray-800 text-sm md:text-base">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* RESULT BADGE */}
      <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full 
        bg-gradient-to-r from-sky-500 to-pink-500 text-white text-sm font-semibold shadow-md">
        🚀 High-quality leads & measurable ROI
      </div>
    </div>

    {/* RIGHT VISUAL */}
    <div className="relative flex justify-center">

      <div className="relative w-full max-w-md rounded-3xl bg-white/75 
        backdrop-blur-xl border border-white/60 shadow-xl p-10">

        {/* Meta logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center
            bg-gradient-to-tr from-sky-500 to-blue-600 shadow-lg">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="white">
              <path d="M20.4 5.6C19 4.2 17.2 3 15 3
              12.2 3 10 4.6 8.1 7.8
              6.2 4.6 4.7 3 2.9 3
              1.3 3 0 4.9 0 8.3
              0 11.9 1.8 14.8 3.7 14.8
              5 14.8 6.3 13.2 8.1 10
              10.2 14.2 11.6 17 14 17
              17.7 17 20.5 11.9 20.5 8.3
              20.5 6.9 20.6 6.1 20.4 5.6z"/>
            </svg>
          </div>
        </div>

        {/* Campaign Types */}
        <h4 className="text-gray-900 font-semibold text-sm text-center mb-4">
          Campaigns We Run
        </h4>

        <div className="grid grid-cols-2 gap-4 text-sm">
          {[
            "Lead Generation",
            "Website Traffic",
            "Sales & Conversions",
            "Remarketing",
            "Brand Awareness",
          ].map((type, i) => (
            <div key={i}
              className="px-3 py-2 rounded-xl text-center
              bg-gray-100 text-gray-800 font-medium">
              {type}
            </div>
          ))}
        </div>

        {/* Meta platforms */}
        <div className="mt-8 flex justify-center gap-6">
          {/* Facebook */}
          <span className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
            <svg width="20" height="20" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2.3c0-2 
              1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0022 12z"/>
            </svg>
            Facebook
          </span>

          {/* Instagram */}
          <span className="flex items-center gap-2 font-semibold text-sm
            bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            <svg width="20" height="20" fill="#E1306C" viewBox="0 0 24 24">
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"/>
            </svg>
            Instagram
          </span>
        </div>

      </div>
    </div>
  </div>
</section>









    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-white py-16 px-6">

  {/* BACKGROUND PATTERN */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.05]
       bg-[radial-gradient(#000_1px,transparent_1px)]
       [background-size:28px_28px]" />

  <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
<div
    className="
      pointer-events-none absolute inset-0 flex items-center justify-center
      font-extrabold leading-none select-none
      text-[160px] sm:text-[240px] md:text-[340px] lg:text-[420px]
      text-gray-200/60
    "
  >
    4
  </div>
    {/* LEFT — CONTENT FLOW */}
    <div className="space-y-10">

      {/* Heading */}
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Content Marketing that
          <span className="text-emerald-600"> Builds Trust </span>
          & Drives SEO
        </h2>

        <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
          Content is the backbone of digital success. We create meaningful,
          search-optimised content that attracts, educates, and converts -
          not just formats words.
        </p>
      </div>

      {/* CONTENT SERVICES — INLINE FLOW */}
      <div className="space-y-6 border-l-4 border-emerald-400 pl-6">

        {[
          "SEO blog writing that ranks & converts",
          "Website & landing page content",
          "High-performing ad copies & creatives",
          "Social media captions & storytelling",
          "Brand-consistent messaging frameworks",
        ].map((item, i) => (
          <div
            key={i}
            className="text-gray-800 font-medium text-sm md:text-base
                       animate-slideLeft"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT — PERFORMANCE RAIL */}
    <div className="relative">

      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-[2px] bg-emerald-300"></div>

      <div className="space-y-12 pl-12">

        {/* Reporting Intro */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            Reporting & Performance Tracking
          </h3>
          <p className="mt-3 text-gray-600 text-sm max-w-sm">
            Transparent data. Clear insights. Real growth decisions.
          </p>
        </div>

        {/* METRICS FLOW */}
        {[
          { title: "Monthly Performance Reports", desc: "Clear growth snapshots" },
          { title: "Keyword Ranking Reports", desc: "Search visibility tracking" },
          { title: "Website Traffic Insights", desc: "User behavior analysis" },
          { title: "Lead & Conversion Tracking", desc: "ROI-focused metrics" },
          { title: "Campaign Analysis", desc: "Optimization-driven decisions" },
        ].map((item, i) => (
          <div
            key={i}
            className="relative group animate-slideUp"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            {/* DOT */}
            <span className="absolute -left-[22px] top-2 w-3 h-3 
              rounded-full bg-emerald-500 shadow-md" />

            <h4 className="font-semibold text-gray-900">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>

  {/* ANIMATIONS */}
  <style>{`
    @keyframes slideLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .animate-slideLeft {
      animation: slideLeft 0.8s ease forwards;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-slideUp {
      animation: slideUp 0.8s ease forwards;
    }
  `}</style>

</section>







    <section className="relative w-full py-16 px-6 overflow-hidden 
  bg-gradient-to-br from-white via-emerald-50 to-white">

  {/* ANIMATED SQUARE GRID BACKGROUND */}
  <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="squareGrid" width="36" height="36" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="36" height="36" fill="none" stroke="#000" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#squareGrid)" />
    </svg>
  </div>

  {/* FLOATING GLOW */}
  <div className="absolute -top-40 -left-40 w-[420px] h-[420px] 
    bg-emerald-300/30 blur-[160px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[420px] h-[420px] 
    bg-green-200/30 blur-[160px] rounded-full" />

  <div className="relative z-10 max-w-6xl mx-auto">

    {/* HEADING */}
    <div className="max-w-3xl mb-14">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
        Why Choose Us for
        <span className="text-emerald-600"> Social Media Marketing?</span>
      </h2>

      <p className="mt-5 text-gray-600 text-base md:text-lg">
        We don’t chase vanity metrics. We focus on visibility, conversions,
        and long-term digital growth.
      </p>
    </div>

    {/* FEATURES GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">

      {[
        {
          title: "SEO-First Marketing",
          desc: "Every campaign is built to rank, convert, and scale organically."
        },
        {
          title: "Experienced Marketers",
          desc: "Certified professionals with hands-on industry expertise."
        },
        {
          title: "Budget-Friendly Plans",
          desc: "Growth-focused pricing that fits startups to enterprises."
        },
        {
          title: "Data-Driven Strategy",
          desc: "Decisions backed by analytics, insights, and performance tracking."
        },
        {
          title: "Clear Communication",
          desc: "Simple reporting, clear goals, and no hidden tactics."
        },
        {
          title: "Long-Term Growth Focus",
          desc: "We build digital assets that grow month after month."
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group flex gap-5 items-start 
                     hover:translate-x-2 transition-all duration-500"
        >
          {/* ICON */}
          <div className="flex-shrink-0 w-12 h-12 rounded-xl 
            bg-emerald-100 flex items-center justify-center
            group-hover:bg-emerald-200 transition-all">

            {/* CHECK SVG ICON */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17L4 12"
                stroke="#059669"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* TEXT */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h4>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>
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
            <span className="text-emerald-600">SMM</span>
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
  )
}

export default SMMServices