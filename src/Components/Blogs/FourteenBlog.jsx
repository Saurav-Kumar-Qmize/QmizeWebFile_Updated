import { useState,useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";

import { Helmet } from "react-helmet";
import ontop from "../../assets/Images/sendbulksms.jpeg"






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
  { id: "second", label: "2. Quick Summary" },
  

  

  {
    id: "third",
    label: "3. What Are Bulk WhatsApp Messages?",
   
  },

  { id: "fourth", label: "4. Ways to Send Bulk WhatsApp Messages in 2026" },
  { id: "fifth", label: "5. How to Send Bulk WhatsApp Messages for Free" },
  { id: "sixth", label: "7. Limitations of Free Broadcasts" },
  { id: "seventh", label: "8. Sending Bulk WhatsApp Messages Using WhatsApp Business API" },
  { id: "eighth", label: "9. What the WhatsApp Business API Enables" },
  { id: "ninth", label: "10. How Bulk Campaigns Work with Qmize (API Flow)" },
  { id: "tenth", label: "11. FAQs" },
  
];


  return (
    <>  

     <Helmet>

       <meta charSet="utf-8" />
        <title>How to Send Bulk WhatsApp Messages in 2026 (Free & Scalable Methods)</title>
        <meta
          name="description"
          content="Learn how to build a WhatsApp ecommerce store using the official WhatsApp Business API. Qmize helps you automate, scale & sell smarter in 2026."
        />
        <link rel="canonical" href="https://qmize.com/blog/how-to-send-bulk-sms" />

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
How to Send Bulk WhatsApp Messages in 2026 (Free & Scalable Methods)

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


        {/* INTRO */}
  <section id="first" className="scroll-mt-28 animate-section">
  <img
    src={ontop}
    alt="How to send bulk sms in 2026"
    className="mt-2 mb-4 rounded-xl"
  />
  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    You’ve launched a new offer, updated your pricing, or announced a
    limited-time campaign.
  </p>

  <p className="text-gray-800 font-medium mb-4 text-[15px] sm:text-base">
    Now comes the real challenge:
  </p>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    How do you inform hundreds, or thousands, of customers without messaging
    each one manually?
  </p>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    Sending WhatsApp messages one by one doesn’t scale. For growing businesses,
    it’s inefficient, slow, and impossible to manage consistently.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    That’s where bulk WhatsApp messaging comes in.
  </p>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    In this guide, <strong>Qmize</strong> explains:
  </p>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base">
    <li>• Free and paid ways to send bulk WhatsApp messages</li>
    <li>• When the WhatsApp Business App is enough</li>
    <li>• When you must upgrade to the official WhatsApp Business API</li>
    <li>• How to stay compliant and avoid bans in 2026</li>
  </ul>
</section>





<section id="second" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    TL;DR - Quick Summary
  </h2>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base">
    <li>
      • WhatsApp Broadcast (Business App) lets you message up to 256 contacts for free
    </li>
    <li>
      • WhatsApp Web offers the same broadcast features with easier typing
    </li>
    <li>
      • The WhatsApp Business API enables large-scale, automated, and scheduled messaging
    </li>
    <li>
      • New API accounts start with 1,000 daily messages, scaling automatically with good quality
    </li>
    <li>
      • Opt-in, relevance, and compliance are critical to protect your sender reputation
    </li>
    <li>
      • Free methods work for small businesses; API is essential for growth
    </li>
  </ul>
</section>





      <section id="third" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    What Are Bulk WhatsApp Messages?
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    Bulk WhatsApp messages allow businesses to send one message to multiple
    contacts at once, without creating a group.
  </p>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    Each recipient:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Receives the message as a private 1-to-1 chat</li>
    <li>• Can reply individually</li>
    <li>• Never sees other recipients</li>
  </ul>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    This makes bulk messaging both personal and scalable, which is why it’s
    widely used for marketing, updates, and alerts.
  </p>
</section>



<section id="fourth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Ways to Send Bulk WhatsApp Messages in 2026
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    Businesses can send bulk WhatsApp messages using three primary methods,
    depending on their scale and needs:
  </p>

  <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-[15px] sm:text-base mb-4">
    <li>
      <strong>WhatsApp Business App (Free)</strong> — Broadcast lists (up to 256 contacts)
    </li>
    <li>
      <strong>WhatsApp Business API (Paid)</strong> — Large-scale, automated messaging
    </li>
    <li>
      <strong>API Platforms like Qmize</strong> — Simplify API usage with dashboards,
      automation & analytics
    </li>
  </ol>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    Each method suits a different growth stage.
  </p>
</section>




<section id="fifth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    How to Send Bulk WhatsApp Messages for Free
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    If you’re a small business or local brand, WhatsApp’s free tools may be
    enough, for now.
  </p>

  {/* Method 1 */}
  <h3 className="font-semibold text-gray-800 mb-2">
    Method 1: Broadcast Lists (WhatsApp Business App)
  </h3>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    Broadcast lists allow you to send a single message to up to 256 contacts at once.
  </p>

  <p className="text-gray-700 mb-2 text-[15px] sm:text-base font-medium">
    How to create a broadcast list:
  </p>

  <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-[15px] sm:text-base mb-4">
    <li>Open the WhatsApp Business App</li>
    <li>Tap the three dots (top-right)</li>
    <li>Select <strong>New Broadcast</strong></li>
    <li>Choose up to 256 contacts</li>
    <li>Type and send your message</li>
  </ol>

  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-6">
    <p className="text-yellow-800 text-[15px] sm:text-base">
      ⚠️ Messages are delivered only if the recipient has saved your number and opted in.
    </p>
  </div>

  {/* Method 2 */}
  <h3 className="font-semibold text-gray-800 mb-2">
    Method 2: Using WhatsApp Web
  </h3>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    WhatsApp Web offers the same broadcast functionality with better typing convenience.
  </p>

  <p className="text-gray-700 mb-2 text-[15px] sm:text-base font-medium">
    Steps:
  </p>

  <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-[15px] sm:text-base mb-4">
    <li>Log in to <strong>web.whatsapp.com</strong></li>
    <li>Open the menu</li>
    <li>Select <strong>New Broadcast</strong></li>
    <li>Add contacts and send</li>
  </ol>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    The 256-contact limit still applies, but composing longer messages is easier.
  </p>
</section>



<section id="sixth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Limitations of Free Broadcasts
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    While free broadcasts are useful, they have strict limits:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Max 256 contacts per list</li>
    <li>• No scheduling</li>
    <li>• No automation</li>
    <li>• No campaign analytics</li>
    <li>• Contacts must save your number</li>
  </ul>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    Once your audience grows, these limits quickly become blockers.
  </p>
</section>





<section id="seventh" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Sending Bulk WhatsApp Messages Using WhatsApp Business API
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    For businesses handling hundreds or thousands of customers, the WhatsApp
    Business API is the only sustainable option.
  </p>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    The API is designed for:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• High-volume messaging</li>
    <li>• Automation</li>
    <li>• Team collaboration</li>
    <li>• Analytics & CRM integration</li>
  </ul>

  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      👉 Access is available only through official providers like Qmize.
    </p>
  </div>
</section>




<section id="eighth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    What the WhatsApp Business API Enables
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    With Qmize’s WhatsApp Business API, businesses can:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Send messages to thousands of users daily</li>
    <li>• Schedule campaigns in advance</li>
    <li>• Use approved message templates</li>
    <li>• Personalize messages dynamically</li>
    <li>• Sync chats with CRM systems</li>
    <li>• Track delivery, reads, clicks & replies</li>
  </ul>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    This goes far beyond what the WhatsApp app allows.
  </p>
</section>



<section id="ninth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    How Bulk Campaigns Work with Qmize (API Flow)
  </h2>

  {/* Step 1 */}
  <div className="mb-6">
    <h3 className="font-semibold text-gray-800 mb-2">
      1. Upload & Segment Contacts
    </h3>
    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mb-2">
      Upload contacts via CSV and segment by:
    </p>
    <ul className="space-y-1 text-gray-700 text-[15px] sm:text-base mb-2">
      <li>• Location</li>
      <li>• Purchase history</li>
      <li>• Interest</li>
      <li>• Engagement level</li>
    </ul>
    <p className="text-gray-700 text-[15px] sm:text-base">
      Targeted campaigns always outperform blanket messages.
    </p>
  </div>

  {/* Step 2 */}
  <div className="mb-6">
    <h3 className="font-semibold text-gray-800 mb-2">
      2. Create Approved Message Templates
    </h3>
    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mb-2">
      Templates are required for:
    </p>
    <ul className="space-y-1 text-gray-700 text-[15px] sm:text-base mb-2">
      <li>• Marketing campaigns</li>
      <li>• Notifications outside the 24-hour window</li>
    </ul>
    <p className="text-gray-700 text-[15px] sm:text-base">
      Qmize helps ensure templates are policy-safe and approved quickly.
    </p>
  </div>

  {/* Step 3 */}
  <div className="mb-6">
    <h3 className="font-semibold text-gray-800 mb-2">
      3. Personalize Messages
    </h3>
    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mb-2">
      Use dynamic variables like:
    </p>
    <ul className="space-y-1 text-gray-700 text-[15px] sm:text-base mb-2">
      <li>• {`{{Name}}`}</li>
      <li>• {`{{City}}`}</li>
      <li>• {`{{Order ID}}`}</li>
    </ul>
    <p className="text-gray-700 italic text-[15px] sm:text-base">
      Example: “Hi {`{{Name}}`}, exclusive offers for customers in
      {`{{City}}`} this weekend 🎉”
    </p>
  </div>

  {/* Step 4 */}
  <div className="mb-6">
    <h3 className="font-semibold text-gray-800 mb-2">
      4. Schedule & Send
    </h3>
    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
      Choose the best time to send based on customer behavior — no late-night
      spam, no missed opportunities.
    </p>
  </div>

  {/* Step 5 */}
  <div>
    <h3 className="font-semibold text-gray-800 mb-2">
      5. Track Campaign Performance
    </h3>
    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mb-2">
      Qmize provides visibility into:
    </p>
    <ul className="space-y-1 text-gray-700 text-[15px] sm:text-base mb-2">
      <li>• Delivery rate</li>
      <li>• Read rate</li>
      <li>• Response rate</li>
      <li>• Click performance</li>
    </ul>
    <p className="text-gray-700 text-[15px] sm:text-base">
      This data helps refine future campaigns.
    </p>
  </div>
</section>



<section id="tenth" className="scroll-mt-28 animate-section">
  {/* FAQs */}
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-6">
    FAQs: Bulk WhatsApp Messaging
  </h2>

  <div className="space-y-6 mb-10">
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        Can I send bulk messages without saving contacts?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Yes, with the WhatsApp Business API via Qmize, provided users have opted in.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        Is bulk messaging allowed by WhatsApp?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Yes, when done through official channels with user consent.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        How many messages can I send daily with the API?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Starts at 1,000 users/day and scales automatically.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        How often should I send promotional messages?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        2-4 times per month is ideal for most businesses.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        Is the WhatsApp Business App completely free?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Yes, but with strict limitations.
      </p>
    </div>
  </div>

  {/* Final Thoughts */}
  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg">
    <h2 className="text-lg sm:text-xl font-bold text-emerald-800 mb-3">
      🚀 Final Thoughts
    </h2>

    <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
      Bulk WhatsApp messaging in 2026 isn’t about sending more messages — it’s
      about sending the right messages, the right way.
    </p>

    <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
      Free tools help you start.
    </p>

    <p className="text-gray-700 font-medium text-[15px] sm:text-base">
      But to scale safely, the official WhatsApp Business API via Qmize is
      non-negotiable.
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
