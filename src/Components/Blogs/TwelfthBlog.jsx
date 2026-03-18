import { useState,useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";

import { Helmet } from "react-helmet";
import ontop from "../../assets/Images/whatsapp-message-not-delivered.jpeg"






import Footer from "../Common/Footer";
import {Link} from "react-router-dom";
import christmasImage from "../../assets/Images/christmas_offer_blog.webp";

export default function BlogLayout() {






  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };


    const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleParallax = () => {
      setParallaxOffset(window.scrollY * 0.08); // Adjust speed here
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);


    const [activeSection, setActiveSection] = useState("");
    const [openMenu, setOpenMenu] = useState(null);

  // Scroll Highlighting
 





useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const currentId = entry.target.id;
        setActiveSection(currentId);

        // providers ke ids list
        const providerIds = [
          "third  ",
         "hyper", 
      "click", 
      "automated", 
      "smart", 
      "abandoned",
     "rich", 
     "support", 
      "lead", 
      "loyalty",
      "conversion",
        ];

        // agar providers ya uska child ho → open
        if (providerIds.includes(currentId)) {
          setOpenMenu("third");
        } 
        // warna → close
        else {
          setOpenMenu(null);
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  toc.forEach((item) => {
    const el = document.getElementById(item.id);
    if (el) observer.observe(el);

    item.children?.forEach((child) => {
      const childEl = document.getElementById(child.id);
      if (childEl) observer.observe(childEl);
    });
  });

  return () => observer.disconnect();
}, []);




const toc = [
  { id: "first", label: "1. Introduction" },
  { id: "second", label: "2. At a Glance" },
  

  

  {
    id: "reason-1",
    label: "3. Reason #1:",
   
  },

  { id: "reason-2", label: "4. Reason #2" },
  { id: "reason-3", label: "5. Reason #3" },
  { id: "reason-4", label: "6. Reason #4" },
  { id: "reason-5", label: "7. Reason #5" },
  { id: "third", label: "8. How Qmize Helps You" },
  { id: "fourth", label: "9. FAQs" },
  
];


  return (
    <>  

     <Helmet>

       <meta charSet="utf-8" />
        <title>WhatsApp Message Not Delivered? 5 Common Reasons & How to Fix Them (2026 Guide)</title>
        <meta
          name="description"
          content="Whatsapp messaage not delivered ? I will take you to the plaform that enhance your experience."
        />
        <link rel="canonical" href="https://qmize.com/blog/whatsapp-message-not-delivered" />

      </Helmet>


      <Navbar1 />
      <Navbar2 />

      {/* ROOT WRAPPER */}
     <section className="relative w-full min-h-screen bg-gradient-to-br from-white via-emerald-50 to-emerald-100/40">


  {/* --------------------------- */}
  {/* BACKGROUND GRID + PARTICLES */}
  {/* --------------------------- */}
  <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#23a55a20_1px,transparent_1px),linear-gradient(#23a55a20_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>

  {/* Floating SVG shapes */}
  <svg className="absolute top-12 left-5 w-28 sm:w-40 opacity-40 animate-spin-slow" viewBox="0 0 100 100">
    <rect x="10" y="10" width="80" height="80" rx="20" fill="#2ecc7055" />
  </svg>

  <svg className="absolute bottom-20 right-5 w-40 sm:w-52 opacity-30 animate-pulse-slow" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="50" stroke="#2ecc7080" strokeWidth="6" fill="none" />
  </svg>

  {/* Glow orbs */}
  <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-300/30 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200/25 blur-[130px] rounded-full"></div>

  {/* --------------------------- */}
  {/* MAIN GRID LAYOUT */}
  {/* --------------------------- */}
  <div className="relative max-w-8xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">


      {/* -------------------------------- */}
      {/* LEFT TOC — Sticky only on desktop */}
      {/* -------------------------------- */}
      {/* LEFT SIDEBAR */}
<div className="hidden md:block md:col-span-3 sticky top-28 self-start">
  <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-emerald-100 shadow-lg">

    <h3 className="text-lg font-bold text-emerald-700 mb-4">
      📑 Table of Contents
    </h3>

   <ul className="space-y-3">
      {toc.map((item) => (
        <li key={item.id}>
          {/* MAIN ITEM */}
          <div
            onClick={() => scrollToSection(item.id)}
            className={`cursor-pointer font-medium transition flex items-center
              ${activeSection === item.id ? "text-emerald-600" : "text-gray-700"}
            `}
          >
            <span className="mr-2">▸</span>
            {item.label}
          </div>

          {/* SUB MENU */}
          {item.children && openMenu === item.id && (
            <ul className="mt-2 ml-5 space-y-2 border-l-2 border-emerald-200 pl-4">
              {item.children.map((child) => (
                <li
                  key={child.id}
                  onClick={() => scrollToSection(child.id)}
                  className={`cursor-pointer text-sm transition
                    ${
                      activeSection === child.id
                        ? "text-emerald-600 font-semibold"
                        : "text-gray-600"
                    }
                  `}
                >
                  {child.label}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
</div>




      {/* --------------------------- */}
      {/* MIDDLE CONTENT */}
      {/* --------------------------- */}
      <main className="col-span-12 md:col-span-6 space-y-8 animate-fadeIn">

        <div className="flex items-center gap-4 mb-2 sm:mb-4">
          <p className="text-gray-600 text-xs sm:text-sm">Share:</p>
          <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-emerald-600 cursor-pointer transition" />
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-emerald-600 cursor-pointer transition" />
          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-emerald-600 cursor-pointer transition" />
          <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-emerald-600 cursor-pointer transition" />
        </div>

       <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
WhatsApp Message Not Delivered? 5 Common Reasons & How to Fix Them (2026 Guide)

</h1>

{/* AUTHOR SECTION */}
<div className="mt-4 mb-3 flex items-center gap-4 rounded-xl">
  {/* Avatar */}
  <div className="w-8 h-8 text-xs rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
    MA
  </div>

  {/* Author Info */}
  <div>
    <p className="text-sm font-semibold text-gray-900">
      Md. Ahmed
    </p>
    <p className="text-xs text-gray-600">
      AI Analyst & Content Writer • SaaS, WhatsApp API, Automation
    </p>
  </div>
</div>

{/* META INFO */}
<p className="text-gray-500 text-xs sm:text-sm">
  Updated on 06 Jan 2026 • 18 min read
</p>


<img
    src={ontop}
    alt="Whatsapp message not delivered ?"
    className="mt-2 mb-4 rounded-xl"
  />
<section id="first" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Seeing a Single Grey Tick on WhatsApp?
  </h2>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    Broadcasts failing? Messages delayed or marked “undelivered”?
  </p>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    You’re not alone.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    Whether you’re using the WhatsApp Business App or the WhatsApp Business API,
    delivery failures can silently damage your sales, customer trust, and
    response rates.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    At <strong>Qmize</strong>, we help businesses diagnose and fix WhatsApp
    delivery issues every day.
  </p>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    In this guide, we break down the <strong>5 most common reasons</strong>
    WhatsApp messages fail to deliver - and exactly how to fix them, especially
    for WhatsApp API users in India.
  </p>
</section>


      <section id="second" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    At a Glance: Why WhatsApp Messages Don’t Get Delivered
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    Here are the top reasons behind the “WhatsApp message not delivered”
    single tick problem:
  </p>

  <ol className="list-decimal pl-5 space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>
      The phone number is invalid, inactive, or not on WhatsApp
    </li>
    <li>
      The user blocked you or never gave WhatsApp opt-in
    </li>
    <li>
      You’re using unofficial or risky WhatsApp tools
    </li>
    <li>
      Your WhatsApp API template is rejected or policy-violating
    </li>
    <li>
      Your broadcast exceeded WhatsApp messaging limits
    </li>
  </ol>

  <p className="text-gray-700 leading-relaxed font-medium text-[15px] sm:text-base">
    Let’s break each one down.
  </p>
</section>


<section id="reason-1" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Reason #1: The Phone Number Is Invalid or Not on WhatsApp
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    This is the most common technical reason, especially in bulk campaigns.
  </p>

  {/* Typical Signs */}
  <h3 className="font-semibold text-gray-800 mb-2">
    Typical signs
  </h3>
  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Message stuck on one grey tick</li>
    <li>• “Undelivered” status in reports</li>
    <li>• API errors like <em>unregistered user</em> or <em>invalid number</em></li>
  </ul>

  {/* Why it happens */}
  <h3 className="font-semibold text-gray-800 mb-2">
    Why it happens
  </h3>
  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Wrong digit entered during signup</li>
    <li>• User changed their number</li>
    <li>• Old or unclean contact database</li>
    <li>• Landline or VoIP numbers mistakenly added</li>
  </ul>

  {/* How to fix it */}
  <h3 className="font-semibold text-gray-800 mb-2">
    How to fix it
  </h3>

  <p className="text-gray-700 mb-2 text-[15px] sm:text-base font-medium">
    For individual chats
  </p>
  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Verify country code + number</li>
    <li>• Confirm WhatsApp number via call, SMS, or email</li>
  </ul>

  <p className="text-gray-700 mb-2 text-[15px] sm:text-base font-medium">
    For businesses
  </p>
  <ul className="space-y-2 text-gray-700 mb-6 text-[15px] sm:text-base">
    <li>• Use verified opt-in forms (OTP or double confirmation)</li>
    <li>• Clean contact lists regularly</li>
    <li>• Sync WhatsApp with CRM so only valid numbers enter your system</li>
  </ul>

  {/* Qmize Tip */}
  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      👉 Qmize’s WhatsApp API integrations automatically filter invalid numbers
      before campaigns are sent.
    </p>
  </div>
</section>



<section id="reason-2" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Reason #2: The User Has Blocked You or Never Opted In
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    WhatsApp prioritizes user consent. If users don’t recognize or trust your
    brand, delivery suffers fast.
  </p>

  {/* Typical Signs */}
  <h3 className="font-semibold text-gray-800 mb-2">
    Typical signs
  </h3>
  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Messages never move past one tick for specific users</li>
    <li>• Delivery rate drops for certain segments</li>
    <li>• WhatsApp reduces your quality rating or limits</li>
  </ul>

  {/* Why it happens */}
  <h3 className="font-semibold text-gray-800 mb-2">
    Why it happens
  </h3>
  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Messaging without explicit opt-in</li>
    <li>• Too many promotions</li>
    <li>• Spammy or irrelevant content</li>
    <li>• User doesn’t recognize your brand</li>
  </ul>

  {/* How to fix it */}
  <h3 className="font-semibold text-gray-800 mb-2">
    How to fix it
  </h3>

  <p className="text-gray-700 mb-2 text-[15px] sm:text-base font-medium">
    Best practices for businesses
  </p>
  <ul className="space-y-2 text-gray-700 mb-6 text-[15px] sm:text-base">
    <li>• Always collect explicit WhatsApp opt-in</li>
    <li>• Clearly explain what users will receive</li>
    <li>• Include a simple opt-out (e.g., “Reply STOP”)</li>
    <li>
      • Send value-first messages (order updates, support, useful alerts)
    </li>
  </ul>

  {/* Qmize Tip */}
  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      Qmize helps businesses design opt-in-safe WhatsApp flows that protect
      delivery and brand reputation.
    </p>
  </div>
</section>






<section id="reason-3" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Reason #3: Using Unofficial WhatsApp Marketing Tools (High Risk)
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    This is a major cause of delivery failures and number bans.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    If you’re using:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Unofficial bulk senders</li>
    <li>• Browser automation tools</li>
    <li>• Shared WhatsApp Web logins</li>
    <li>• Multiple agents on one WhatsApp Business App</li>
  </ul>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base font-medium">
    You’re at serious risk.
  </p>

  {/* Common symptoms */}
  <h3 className="font-semibold text-gray-800 mb-2">
    Common symptoms
  </h3>
  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Random message failures</li>
    <li>• Frequent logout issues</li>
    <li>• Temporary or permanent number bans</li>
    <li>• Unreliable campaign performance</li>
  </ul>

  {/* Why this happens */}
  <h3 className="font-semibold text-gray-800 mb-2">
    Why this happens
  </h3>
  <ul className="space-y-2 text-gray-700 mb-6 text-[15px] sm:text-base">
    <li>• These tools violate WhatsApp’s policies</li>
    <li>• Aggressive sending triggers spam detection</li>
    <li>• No official API support or guarantees</li>
  </ul>

  {/* The only safe fix */}
  <h3 className="font-semibold text-gray-800 mb-2">
    The only safe fix
  </h3>
  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    Move to the official WhatsApp Business API through a verified provider
    like <strong>Qmize</strong>.
  </p>

  {/* Qmize benefits */}
  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <ul className="space-y-2 text-emerald-900 font-medium text-[15px] sm:text-base">
      <li>• Your number stays safe</li>
      <li>• Delivery is stable</li>
      <li>• Campaigns are compliant and scalable</li>
    </ul>
  </div>
</section>



<section id="reason-4" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Reason #4: Your WhatsApp API Message Template Is Rejected or Risky
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    If you’re using the WhatsApp Business API, templates are mandatory for:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Marketing messages</li>
    <li>• Notifications outside the 24-hour window</li>
  </ul>

  {/* Warning signs */}
  <h3 className="font-semibold text-gray-800 mb-2">
    Warning signs
  </h3>
  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Certain campaigns always fail</li>
    <li>• Template quality warnings</li>
    <li>• “Failed” status despite valid numbers</li>
  </ul>

  {/* Why it happens */}
  <h3 className="font-semibold text-gray-800 mb-2">
    Why it happens
  </h3>
  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Spammy or misleading language</li>
    <li>• Disallowed categories (gambling, adult, illegal products)</li>
    <li>• Changing meaning after approval</li>
    <li>• Messaging users without proper opt-in</li>
  </ul>

  {/* How to fix it */}
  <h3 className="font-semibold text-gray-800 mb-2">
    How to fix it
  </h3>
  <ul className="space-y-2 text-gray-700 mb-6 text-[15px] sm:text-base">
    <li>• Use clear, honest language</li>
    <li>• Match templates exactly to approved intent</li>
    <li>• Monitor template quality ratings</li>
    <li>• Replace poor-performing templates early</li>
  </ul>

  {/* Examples */}
  <div className="grid sm:grid-cols-2 gap-4 mb-6">
    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
      <p className="font-semibold text-emerald-800 mb-2">
        ✅ Good example
      </p>
      <p className="text-gray-700 text-[14px] sm:text-sm">
        “Hi {`{{name}}`}, your order {`{{order_id}}`} has been shipped.
        Track here: {`{{link}}`}”
      </p>
    </div>

    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <p className="font-semibold text-red-700 mb-2">
        ⚠️ Risky example
      </p>
      <p className="text-gray-700 text-[14px] sm:text-sm">
        “Congratulations! You’ve WON a surprise gift. Click now!!!”
      </p>
    </div>
  </div>

  {/* Qmize Tip */}
  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      Qmize actively monitors template health so issues are fixed before
      delivery drops.
    </p>
  </div>
</section>




<section id="reason-5" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Reason #5: Your Broadcast Exceeded WhatsApp Limits (API Users)
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    WhatsApp enforces strict anti-spam limits.
  </p>

  {/* A) Tier limit exceeded */}
  <h3 className="font-semibold text-gray-800 mb-2">
    A. Tier limit exceeded
  </h3>

  <p className="text-gray-700 mb-2 text-[15px] sm:text-base">
    Example: You’re allowed 10,000 users/day but send to 11,000.
  </p>

  <p className="text-gray-700 mb-3 text-[15px] sm:text-base font-medium">
    Result:
  </p>
  <p className="text-gray-700 mb-4 text-[15px] sm:text-base">
    Messages beyond quota fail.
  </p>

  <p className="font-medium text-gray-700 mb-2 text-[15px] sm:text-base">
    Fix
  </p>
  <ul className="space-y-2 text-gray-700 mb-6 text-[15px] sm:text-base">
    <li>• Check remaining quota before campaigns</li>
    <li>• Split large broadcasts</li>
    <li>• Upgrade your messaging tier through Qmize</li>
  </ul>

  {/* B) Per-user frequency limits */}
  <h3 className="font-semibold text-gray-800 mb-2">
    B. Per-user frequency limits (“Unhealthy Activity”)
  </h3>

  <p className="text-gray-700 mb-2 text-[15px] sm:text-base">
    If users:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Haven’t replied recently</li>
    <li>• Rarely engage with business messages</li>
  </ul>

  <p className="text-gray-700 mb-4 text-[15px] sm:text-base">
    WhatsApp may block delivery for 24–48 hours.
  </p>

  <p className="font-medium text-gray-700 mb-2 text-[15px] sm:text-base">
    Fix
  </p>
  <ul className="space-y-2 text-gray-700 mb-6 text-[15px] sm:text-base">
    <li>• Wait before retrying</li>
    <li>• Focus on engaged users</li>
    <li>
      • Warm up cold users with helpful content instead of promotions
    </li>
  </ul>

  {/* Qmize Tip */}
  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      Qmize provides delivery analytics & segmentation so you send smarter —
      not louder.
    </p>
  </div>
</section>





<section id="third" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    How Qmize Helps You Prevent WhatsApp Delivery Issues
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    Qmize is built on the official WhatsApp Business API and helps businesses
    maintain high delivery rates through:
  </p>

  <ul className="space-y-2 text-gray-700 mb-6 text-[15px] sm:text-base">
    <li>✅ Official API onboarding (no bans, no shortcuts)</li>
    <li>✅ Template quality monitoring</li>
    <li>✅ Broadcast quota alerts</li>
    <li>✅ Detailed delivery analytics</li>
    <li>✅ Opt-in & compliance guidance</li>
  </ul>

  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      We don’t just send messages - we protect your brand trust and conversions.
    </p>
  </div>
</section>



<section id="fourth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-6">
    FAQs: WhatsApp Message Not Delivered
  </h2>

  <div className="space-y-6">

    {/* FAQ 1 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        Why is my WhatsApp message not delivered even if the user is online?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        This usually means the user blocked your number, never opted in, or the
        number is inactive on WhatsApp. Online status doesn’t override
        restrictions.
      </p>
    </div>

    {/* FAQ 2 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        Why is my WhatsApp message stuck on one tick?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        One tick means WhatsApp received the message but couldn’t deliver it to
        the user. Common causes include blocks, inactive numbers, or unofficial
        tools.
      </p>
    </div>

    {/* FAQ 3 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        Why do WhatsApp Business API messages fail?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Common reasons include unapproved templates, exceeded limits, missing
        opt-in, or policy violations.
      </p>
    </div>

    {/* FAQ 4 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        How do I fix WhatsApp API delivery errors?
      </h3>
      <ul className="space-y-1 text-gray-700 text-[15px] sm:text-base">
        <li>• Use approved templates</li>
        <li>• Stay within limits</li>
        <li>• Ensure opt-in</li>
        <li>• Avoid spammy language</li>
        <li>• Use the official WhatsApp Business API via Qmize</li>
      </ul>
    </div>

    {/* FAQ 5 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        How can I improve WhatsApp message delivery rates?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Use verified opt-in, send relevant content, segment users, monitor
        template health, and rely on official API infrastructure like Qmize.
      </p>
    </div>

  </div>
</section>


<section id="fifth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Final Thoughts: Delivery Issues Are Fixable
  </h2>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    WhatsApp delivery failures are rarely random.
  </p>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    They’re usually signals - about data quality, consent, compliance, or
    tooling.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    With the right setup, WhatsApp becomes your most reliable communication
    channel.
  </p>

  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      👉 If you’re facing delivery issues or planning to scale safely, Qmize
      helps you build a clean, compliant, high-delivery WhatsApp system.
    </p>
  </div>
</section>














        






































































































        <div className="mt-10 rounded-xl bg-emerald-100 px-6 py-5">
  <h3 className="text-lg font-bold text-gray-900 mb-2">
    Md. Ahmed
  </h3>

  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
    With strong expertise in AI-driven content writing and data-backed analysis,
    <strong> Md. Ahmed</strong> specializes in creating high-quality content
    around Artificial Intelligence, SaaS platforms, WhatsApp Business API, and
    automation technologies.
  </p>
</div>


      </main>

      {/* --------------------------- */}
      {/* RIGHT SIDE IMAGE — Sticky + Parallax */}
      {/* --------------------------- */}
     {/* RIGHT STICKY IMAGE COLUMN */}
<div className="hidden md:block md:col-span-3 sticky top-20 self-start">

  {/* PARALLAX GOES INSIDE */}
  <div
    className="relative rounded-2xl overflow-hidden shadow-xl border border-emerald-200 bg-white/70 backdrop-blur-xl transition-transform duration-300"
  >
    
    {/* Parallax applied ONLY to image */}
    <img
      src={sideImage}
      alt="SignUp for WhatsApp Business API Service of Qmize"
      className="w-full h-[32rem] object-cover"
      
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/40 flex flex-col justify-end p-6">

      <h3 className="text-white text-xl font-bold drop-shadow-lg">
        Start using <span className="text-emerald-300">Qmize</span> WhatsApp Business API
      </h3>

      <p className="text-gray-200 text-sm mt-1 mb-4">
        Automate, broadcast & grow your business conversations.
      </p>

       <a href="https://apihub.msg24x7.com/register" ><button className=" cursor-pointer
        px-5 py-2.5 
        bg-gradient-to-r from-emerald-400 to-emerald-600 
        text-white font-semibold rounded-xl
        shadow-lg shadow-emerald-600/30
        hover:scale-[1.06] transition
      ">
        Get Started →
      </button></a>

    </div>
  </div>

</div>


    </div>
  </div>

  {/* --------------------------- */}
  {/* RECENT POSTS */}
  {/* --------------------------- */}
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 pb-20">
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Recent Posts</h3>

    <Link to="/blog/christmas-whatsapp-marketing-strategy-2025"><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      {[
        {
          img: christmasImage,
          title: "Christmas WhatsApp Marketing Strategy 2025",
        },
        {
          img: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
          title: "Top Automation Strategies for 2025",
        },
        {
          img: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
          title: "Boost Customer Engagement With AI",
        },  
      ].map((post, i) => (
        <div
          key={i}
          className="rounded-2xl bg-white p-4 sm:p-5 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="h-40 rounded-xl mb-4 overflow-hidden">
            <img
              src={post.img}
              className="w-full h-full object-cover"
              alt={post.title}
            />
          </div>

          <h4 className="font-bold text-gray-900 text-lg">{post.title}</h4>
          <p className="text-gray-600 text-sm mt-2">
            Short description of the blog post…
          </p>
        </div>
      ))}

    </div></Link>
  </div>

</section>


      {/* --------------------------- */}
      {/* CUSTOM ANIMATIONS */}
      {/* --------------------------- */}
      <style>{`
        .animate-spin-slow { animation: spin 18s linear infinite; }
        .animate-pulse-slow { animation: pulse 6s ease-in-out infinite; }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: .35; transform: scale(1); }
          50% { opacity: .7; transform: scale(1.08); }
        }

        .animate-section {
          animation: fadeUp 0.8s ease-out both;
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn { animation: fadeIn 1.2s ease-out; }
        .animate-fadeInUp { animation: fadeUp 1s ease-out; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>



        <Footer/>

    </>
  );
}
