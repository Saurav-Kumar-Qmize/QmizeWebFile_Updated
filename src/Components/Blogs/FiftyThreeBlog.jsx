
import Footer from "../Common/Footer";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";
import whatischatbot from "../../assets/Images/whatischatbot.jpg";
import { Helmet } from "react-helmet";
import christmasImage from "../../assets/Images/christmas_offer_blog.webp";
import whatsapp53 from "../../assets/Images/whatsapp53.jpeg";



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
  { id: "second", label: "2. Quick Comparison: WhatsApp Business API Providers in Saudi Arabia" },
  { 
    id: "third", 
    label: "3. Best WhatsApp Business API Providers in Saudi Arabia",
    children: [
      { id: "qmize", label: "1. Qmize" },
      { id: "taqnyat", label: "2. Taqnyat" },
      { id: "deewan", label: "3. Deewan" },
      { id: "wsla", label: "4. Wsla.io" },
      { id: "botsense", label: "5. Botsense" },
      { id: "aisensy", label: "6. AiSensy" },
      { id: "gmcsco", label: "7. GMCSCO" },
      { id: "autorply", label: "8. Autorply" },
      { id: "letsbot", label: "9. LetsBOT" },
      { id: "watily", label: "10. Watily" },
    ]
  },
  { id: "fourth", label: "4. How to Choose a WhatsApp Business API Provider in Saudi Arabia" },
  { id: "fifth", label: "5. Why Use WhatsApp Business API in Saudi Arabia?" },
  { id: "sixth", label: "6. Final Verdict" },
  { id: "seventh", label: "7. Frequently Asked Questions" },
];


  return (
    <>  

     <Helmet>

       <meta charSet="utf-8" />
        <title>10 Best WhatsApp Business API Providers in Saudi Arabia (2026)</title>
        <meta
          name="description"
          content=" Compare the 10 best WhatsApp Business API providers in Saudi Arabia. Explore pricing, features, pros, cons, features, and find the best BSP for your business."
        />
        <link rel="canonical" href=" https://qmize.com/blog/best-whatsapp-business-api-providers-in-saudi-arabia" />
        

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
          10 Best WhatsApp Business API Providers in Saudi Arabia (2026)
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
          Updated on 17 August 2026 • 18 min read
        </p>

        {/* SECTION 1: INTRODUCTION */}
        <section id="first" className="scroll-mt-28 animate-section">
          <img
            src={whatsapp53}
            alt="10 Best WhatsApp Business API Providers in Saudi Arabia"
            className="mt-2 mb-4 rounded-xl w-full"
          />

          <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
            Saudi Arabia has one of the highest WhatsApp adoption rates in the Middle East, making it an essential communication channel for businesses. Whether you operate an eCommerce store, healthcare clinic, real estate agency, financial institution, or educational organization, the <span className="font-bold">WhatsApp Business API</span> enables secure, scalable, and automated customer communication.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
            Choosing the right WhatsApp Business Solution Provider (BSP) is important because each platform offers different pricing, automation capabilities, CRM integrations, chatbot functionality, and local support.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
            This guide compares the <span className="font-bold">10 best WhatsApp Business API providers in Saudi Arabia</span> to help you select the right solution.
          </p>
        </section>

        {/* SECTION 2: QUICK COMPARISON */}
        <section id="second" className="scroll-mt-28 animate-section">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
            Quick Comparison: WhatsApp Business API Providers in Saudi Arabia
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-green-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Provider</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Best For</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">WhatsApp API</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Chatbot / AI</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Broadcast</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Team Inbox</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">CRM / API Integration</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-[15px] sm:text-base">
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Qmize</td>
                  <td className="border border-gray-300 px-4 py-3">Startups, SMEs & enterprises</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Taqnyat</td>
                  <td className="border border-gray-300 px-4 py-3">Saudi enterprises</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Limited</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Limited</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Deewan</td>
                  <td className="border border-gray-300 px-4 py-3">Large organizations</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Limited</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Limited</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Wsla.io</td>
                  <td className="border border-gray-300 px-4 py-3">SMEs</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Botsense</td>
                  <td className="border border-gray-300 px-4 py-3">AI automation</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">AiSensy</td>
                  <td className="border border-gray-300 px-4 py-3">WhatsApp marketing</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">GMCSCO</td>
                  <td className="border border-gray-300 px-4 py-3">Enterprise messaging</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Limited</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Limited</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Autorply</td>
                  <td className="border border-gray-300 px-4 py-3">Customer support</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Limited</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">LetsBOT</td>
                  <td className="border border-gray-300 px-4 py-3">AI & workflow automation</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Limited</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Watily</td>
                  <td className="border border-gray-300 px-4 py-3">Customer engagement</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3: TOP 10 PROVIDERS */}
        <section id="third" className="scroll-mt-28 animate-section space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
            Best WhatsApp Business API Providers in Saudi Arabia
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base mb-6">
            Here is a list of the 10 best WhatsApp Business API providers to help your businesses grow in Saudi Arabia.
          </p>

          {/* 1. Qmize */}
          <div id="qmize" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">1. Qmize</h3>
            <p className="text-gray-700 text-[15px] sm:text-base">
              Qmize is a best WhatsApp Business API provider in Saudi Arabia that helps businesses manage customer communication, marketing campaigns, support, and automation from one platform. It is suitable for companies that want to combine WhatsApp messaging with chatbots, team collaboration, and customer engagement.
            </p>
            <h4 className="font-semibold text-gray-900">Key Features:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
              <li>Official WhatsApp Business API</li>
              <li>AI-powered chatbot builder</li>
              <li>WhatsApp broadcast campaigns</li>
              <li>Shared team inbox</li>
              <li>CRM integrations</li>
              <li>WhatsApp automation</li>
              <li>Customer support automation</li>
              <li>Analytics and reporting</li>
              <li>API integration</li>
              <li>Free plan available (On Request)</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 text-sm mb-1">Pros</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Free plan available</li>
                  <li>Easy-to-use platform</li>
                  <li>WhatsApp automation</li>
                  <li>AI chatbot functionality</li>
                  <li>Shared team inbox</li>
                  <li>Suitable for businesses of different sizes</li>
                  <li>Affordable solution</li>
                </ul>
              </div>
              <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                <h5 className="font-semibold text-rose-800 text-sm mb-1">Cons</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Advanced enterprise customization may require consultation</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-medium text-emerald-800 pt-2">
              <span className="font-bold">Best For:</span> Startups, SMEs, and enterprises looking for an affordable WhatsApp Business API platform with automation and marketing capabilities.
            </p>
          </div>

          {/* 2. Taqnyat */}
          <div id="taqnyat" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">2. Taqnyat</h3>
            <p className="text-gray-700 text-[15px] sm:text-base">
              Taqnyat is a Saudi communication technology provider offering messaging and business communication solutions. Its local presence makes it an option for organizations looking for communication services with a Saudi market focus.
            </p>
            <h4 className="font-semibold text-gray-900">Key Features:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
              <li>WhatsApp Business API</li>
              <li>Business messaging</li>
              <li>SMS services</li>
              <li>OTP messaging</li>
              <li>Bulk messaging</li>
              <li>Communication APIs</li>
              <li>Local business support</li>
              <li>Enterprise messaging solutions</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 text-sm mb-1">Pros</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Saudi-based provider</li>
                  <li>Local market experience</li>
                  <li>Arabic-language support</li>
                  <li>Multiple communication services</li>
                  <li>Suitable for enterprises</li>
                </ul>
              </div>
              <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                <h5 className="font-semibold text-rose-800 text-sm mb-1">Cons</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>May not offer as many advanced automation features as specialized WhatsApp platforms</li>
                  <li>Smaller third-party integration ecosystem</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-medium text-emerald-800 pt-2">
              <span className="font-bold">Best For:</span> Saudi businesses and enterprises that prefer a local communication provider.
            </p>
          </div>

          {/* 3. Deewan */}
          <div id="deewan" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">3. Deewan</h3>
            <p className="text-gray-700 text-[15px] sm:text-base">
              Deewan provides business communication technology designed to help organizations improve customer and operational communications. Its solutions can be considered by businesses looking for WhatsApp-based engagement combined with enterprise communication capabilities.
            </p>
            <h4 className="font-semibold text-gray-900">Key Features:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
              <li>WhatsApp Business API</li>
              <li>Business messaging</li>
              <li>Customer communication</li>
              <li>Enterprise communication solutions</li>
              <li>Messaging automation</li>
              <li>API-based integration</li>
              <li>Business notifications</li>
              <li>Customer engagement</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 text-sm mb-1">Pros</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Enterprise-focused</li>
                  <li>Professional communication solutions</li>
                  <li>Suitable for larger organizations</li>
                  <li>Business integration capabilities</li>
                </ul>
              </div>
              <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                <h5 className="font-semibold text-rose-800 text-sm mb-1">Cons</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>May be less suitable for very small businesses</li>
                  <li>Advanced implementations may require technical assistance</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-medium text-emerald-800 pt-2">
              <span className="font-bold">Best For:</span> Large businesses, organizations, and enterprises requiring professional communication solutions.
            </p>
          </div>

          {/* 4. Wsla.io */}
          <div id="wsla" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">4. Wsla.io</h3>
            <p className="text-gray-700 text-[15px] sm:text-base">
              Wsla.io focuses on helping businesses manage WhatsApp communication and customer interactions. Its platform can help companies organize conversations and automate repetitive communication.
            </p>
            <h4 className="font-semibold text-gray-900">Key Features:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
              <li>WhatsApp Business API</li>
              <li>WhatsApp automation</li>
              <li>Chatbot functionality</li>
              <li>Broadcast messaging</li>
              <li>Customer conversation management</li>
              <li>Team inbox</li>
              <li>Campaign management</li>
              <li>Customer engagement tools</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 text-sm mb-1">Pros</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>User-friendly interface</li>
                  <li>Suitable for SMEs</li>
                  <li>Automation capabilities</li>
                  <li>Customer engagement features</li>
                  <li>Campaign management</li>
                </ul>
              </div>
              <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                <h5 className="font-semibold text-rose-800 text-sm mb-1">Cons</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Fewer enterprise-level integrations</li>
                  <li>Advanced analytics may be limited compared with larger platforms</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-medium text-emerald-800 pt-2">
              <span className="font-bold">Best For:</span> Small and medium-sized businesses looking for WhatsApp customer engagement and automation.
            </p>
          </div>

          {/* 5. Botsense */}
          <div id="botsense" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">5. Botsense</h3>
            <p className="text-gray-700 text-[15px] sm:text-base">
              Botsense focuses on conversational automation and AI-powered customer interactions. Businesses can use automated conversations to answer common questions, qualify leads, and reduce the workload of support teams.
            </p>
            <h4 className="font-semibold text-gray-900">Key Features:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
              <li>WhatsApp Business API</li>
              <li>AI chatbot</li>
              <li>Automated customer support</li>
              <li>Lead qualification</li>
              <li>FAQ automation</li>
              <li>Conversational workflows</li>
              <li>Customer engagement</li>
              <li>Business process automation</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 text-sm mb-1">Pros</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>AI-focused automation</li>
                  <li>Chatbot capabilities</li>
                  <li>Lead qualification</li>
                  <li>Automated customer support</li>
                  <li>Useful for repetitive customer queries</li>
                </ul>
              </div>
              <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                <h5 className="font-semibold text-rose-800 text-sm mb-1">Cons</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Marketing functionality may be less extensive than dedicated WhatsApp marketing platforms</li>
                  <li>Advanced automation may require setup and configuration</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-medium text-emerald-800 pt-2">
              <span className="font-bold">Best For:</span> Businesses that want AI-powered WhatsApp chatbots and customer support automation.
            </p>
          </div>

          {/* 6. AiSensy */}
          <div id="aisensy" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">6. AiSensy</h3>
            <p className="text-gray-700 text-[15px] sm:text-base">
              AiSensy is a WhatsApp Business API platform designed around marketing automation and customer engagement. Businesses can create campaigns, automate conversations, and connect WhatsApp with other business workflows.
            </p>
            <h4 className="font-semibold text-gray-900">Key Features:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
              <li>WhatsApp Business API</li>
              <li>Bulk WhatsApp campaigns</li>
              <li>No-code chatbot builder</li>
              <li>Broadcast messaging</li>
              <li>Automated notifications</li>
              <li>CRM integrations</li>
              <li>Campaign analytics</li>
              <li>Team inbox</li>
              <li>Click-to-WhatsApp campaigns</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 text-sm mb-1">Pros</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Strong WhatsApp marketing features</li>
                  <li>No-code chatbot</li>
                  <li>Campaign management</li>
                  <li>Multiple integrations</li>
                  <li>Easy-to-use dashboard</li>
                  <li>Suitable for marketing teams</li>
                </ul>
              </div>
              <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                <h5 className="font-semibold text-rose-800 text-sm mb-1">Cons</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Advanced features may require paid plans</li>
                  <li>Some businesses may need additional customization for complex workflows</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-medium text-emerald-800 pt-2">
              <span className="font-bold">Best For:</span> Businesses focused on WhatsApp marketing, bulk campaigns, and customer engagement.
            </p>
          </div>

          {/* 7. GMCSCO */}
          <div id="gmcsco" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">7. GMCSCO</h3>
            <p className="text-gray-700 text-[15px] sm:text-base">
              GMCSCO provides business communication solutions for organizations that require scalable messaging and customer communication capabilities.
            </p>
            <h4 className="font-semibold text-gray-900">Key Features:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
              <li>WhatsApp Business API</li>
              <li>Business messaging</li>
              <li>Customer communication</li>
              <li>API integration</li>
              <li>Enterprise messaging</li>
              <li>Notifications</li>
              <li>Communication automation</li>
              <li>Customer engagement</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 text-sm mb-1">Pros</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Enterprise-oriented</li>
                  <li>Scalable communication</li>
                  <li>Business messaging capabilities</li>
                  <li>Suitable for larger organizations</li>
                </ul>
              </div>
              <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                <h5 className="font-semibold text-rose-800 text-sm mb-1">Cons</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Limited information available about some advanced automation capabilities</li>
                  <li>May be less suitable for small businesses seeking a simple self-service platform</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-medium text-emerald-800 pt-2">
              <span className="font-bold">Best For:</span> Enterprises looking for business messaging and communication infrastructure.
            </p>
          </div>

          {/* 8. Autorply */}
          <div id="autorply" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">8. Autorply</h3>
            <p className="text-gray-700 text-[15px] sm:text-base">
              Autorply focuses on WhatsApp communication automation, helping businesses respond to customers faster and reduce repetitive manual work.
            </p>
            <h4 className="font-semibold text-gray-900">Key Features:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
              <li>WhatsApp Business API</li>
              <li>Automated replies</li>
              <li>Chatbot automation</li>
              <li>Customer support automation</li>
              <li>Shared inbox</li>
              <li>WhatsApp campaigns</li>
              <li>Conversation management</li>
              <li>Customer engagement</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 text-sm mb-1">Pros</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Easy customer support automation</li>
                  <li>Automated responses</li>
                  <li>Shared inbox functionality</li>
                  <li>Useful for repetitive queries</li>
                  <li>Simple communication management</li>
                </ul>
              </div>
              <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                <h5 className="font-semibold text-rose-800 text-sm mb-1">Cons</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Advanced reporting may be limited</li>
                  <li>Integration options may be fewer than larger platforms</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-medium text-emerald-800 pt-2">
              <span className="font-bold">Best For:</span> Businesses that want automated WhatsApp replies and customer support.
            </p>
          </div>

          {/* 9. LetsBOT */}
          <div id="letsbot" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">9. LetsBOT</h3>
            <p className="text-gray-700 text-[15px] sm:text-base">
              LetsBOT combines automation with conversational business solutions to help organizations improve customer interactions and streamline repetitive workflows.
            </p>
            <h4 className="font-semibold text-gray-900">Key Features:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
              <li>WhatsApp Business API</li>
              <li>AI automation</li>
              <li>Chatbot functionality</li>
              <li>Business workflow automation</li>
              <li>Customer engagement</li>
              <li>Automated responses</li>
              <li>Lead management</li>
              <li>Process automation</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 text-sm mb-1">Pros</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>AI-driven automation</li>
                  <li>Workflow capabilities</li>
                  <li>Chatbot support</li>
                  <li>Useful for business process automation</li>
                  <li>Can reduce repetitive manual tasks</li>
                </ul>
              </div>
              <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                <h5 className="font-semibold text-rose-800 text-sm mb-1">Cons</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>New users may need time to learn advanced workflows</li>
                  <li>Public documentation and resources may be more limited than established international platforms</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-medium text-emerald-800 pt-2">
              <span className="font-bold">Best For:</span> Businesses looking for AI-powered automation and business process optimization.
            </p>
          </div>

          {/* 10. Watily */}
          <div id="watily" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">10. Watily</h3>
            <p className="text-gray-700 text-[15px] sm:text-base">
              Watily provides WhatsApp-focused communication and engagement capabilities for businesses that want to manage conversations, automate responses, and communicate with customers through campaigns.
            </p>
            <h4 className="font-semibold text-gray-900">Key Features:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
              <li>WhatsApp Business API</li>
              <li>WhatsApp marketing</li>
              <li>Broadcast campaigns</li>
              <li>Chatbot automation</li>
              <li>Automated replies</li>
              <li>Customer engagement</li>
              <li>Conversation management</li>
              <li>Business notifications</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 text-sm mb-1">Pros</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>WhatsApp marketing capabilities</li>
                  <li>Chatbot support</li>
                  <li>Campaign management</li>
                  <li>Customer engagement tools</li>
                  <li>Suitable for growing businesses</li>
                </ul>
              </div>
              <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                <h5 className="font-semibold text-rose-800 text-sm mb-1">Cons</h5>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Enterprise integration options may be limited</li>
                  <li>Advanced reporting capabilities may vary by plan</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-medium text-emerald-800 pt-2">
              <span className="font-bold">Best For:</span> Growing businesses looking for WhatsApp marketing, automation, and customer engagement.
            </p>
          </div>
        </section>

        {/* SECTION 4: HOW TO CHOOSE */}
        <section id="fourth" className="scroll-mt-28 animate-section">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
            How to Choose a WhatsApp Business API Provider in Saudi Arabia
          </h2>

          <p className="mb-4 text-gray-700 text-[15px] sm:text-base">
            Before choosing a {" "}<Link to="https://qmize.com/whatsapp-business-api-saudi-arabia" className="text-blue-600 underline hover:text-blue-800">
              WhatsApp Business API provider  in Saudi Arabia
            </Link>{" "}
            , businesses should compare several factors:
          </p>

          <div className="space-y-4 text-gray-700 text-[15px] sm:text-base">
            <div>
              <h3 className="font-bold text-gray-900">1. WhatsApp API Access</h3>
              <p>Make sure the provider offers the official WhatsApp Business Platform rather than an unofficial solution.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">2. Automation</h3>
              <p>Look for chatbot builders, automated replies, workflow automation, and AI capabilities if you want to reduce manual support.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">3. Broadcast Messaging</h3>
              <p>Businesses running marketing campaigns should check whether the platform supports WhatsApp broadcasts and campaign management.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">4. CRM Integration</h3>
              <p>CRM integration is important for sales teams because it allows customer information and WhatsApp conversations to be managed together.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">5. Team Inbox</h3>
              <p>A shared inbox allows multiple employees to manage customer conversations from one WhatsApp Business account.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">6. Analytics</h3>
              <p>Campaign reports, delivery statistics, customer engagement data, and conversation analytics can help businesses measure performance.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">7. Pricing</h3>
              <p>Compare platform subscription fees, Meta messaging charges, setup fees, and additional charges before selecting a provider.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">8. Customer Support</h3>
              <p>Businesses operating in Saudi Arabia should consider providers that can provide responsive support and assistance with onboarding, verification, templates, and API setup.</p>
            </div>
          </div>
        </section>

        {/* SECTION 5: WHY USE WHATSAPP API */}
        <section id="fifth" className="scroll-mt-28 animate-section">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
            Why Use WhatsApp Business API in Saudi Arabia?
          </h2>

          <p className="mb-4 text-gray-700 text-[15px] sm:text-base">
            WhatsApp Business API in Saudi Arabia can help businesses to improve communication across the customer lifecycle.
          </p>

          <p className="mb-3 text-gray-700 font-semibold text-[15px] sm:text-base">
            Businesses can use it for:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] sm:text-base mb-4">
            <li>Lead generation</li>
            <li>Customer support</li>
            <li>Order confirmations</li>
            <li>Delivery updates</li>
            <li>Appointment reminders</li>
            <li>Payment notifications</li>
            <li>Marketing campaigns</li>
            <li>Product promotions</li>
            <li>Customer feedback</li>
            <li>Automated FAQs</li>
            <li>Sales follow-ups</li>
            <li>Booking confirmations</li>
          </ul>

          <p className="text-gray-700 text-[15px] sm:text-base">
            For businesses with large customer bases, automation can reduce response times while allowing customer service teams to manage multiple conversations efficiently.
          </p>
        </section>

        {/* SECTION 6: FINAL VERDICT */}
        <section id="sixth" className="scroll-mt-28 animate-section">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
            Final Verdict
          </h2>

          <p className="mb-4 text-gray-700 text-[15px] sm:text-base">
            The best WhatsApp Business API provider depends on the company's size, industry, automation requirements, and budget.
          </p>

          <p className="mb-4 text-gray-700 text-[15px] sm:text-base">
            <span className="font-bold">Qmize</span> is a strong all-around option for startups, SMEs, and enterprises looking for WhatsApp API, AI chatbots, broadcasts, shared inbox, CRM integration, automation, and a free plan.
          </p>

          <p className="mb-4 text-gray-700 text-[15px] sm:text-base">
            <span className="font-bold">Taqnyat</span> and <span className="font-bold">Deewan</span> can be considered by organizations prioritizing local and enterprise communication solutions. <span className="font-bold">AiSensy</span> is particularly suitable for WhatsApp marketing campaigns, while <span className="font-bold">Botsense</span> and <span className="font-bold">LetsBOT</span> are worth considering for businesses focused on AI automation.
          </p>

          <p className="text-gray-700 text-[15px] sm:text-base">
            Before making a decision, compare features, pricing, integrations, support, scalability, and WhatsApp API capabilities to find the provider that best matches your Saudi Arabian business requirements.
          </p>
        </section>

        {/* SECTION 7: FAQS */}
        <section id="seventh" className="scroll-mt-28 animate-section">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="border rounded-lg p-4 bg-white group">
              <summary className="font-semibold cursor-pointer text-gray-800">
                Which is the best WhatsApp Business API provider in Saudi Arabia?
              </summary>
              <p className="mt-2 text-gray-700 text-[15px] sm:text-base">
                Qmize is a strong choice for businesses seeking affordable pricing, automation features, CRM integrations, and a free plan. Enterprise organizations may also consider Taqnyat or Deewan depending on their compliance and infrastructure requirements.
              </p>
            </details>

            <details className="border rounded-lg p-4 bg-white group">
              <summary className="font-semibold cursor-pointer text-gray-800">
                Can Saudi businesses use the official WhatsApp Business API?
              </summary>
              <p className="mt-2 text-gray-700 text-[15px] sm:text-base">
                Yes. Businesses in Saudi Arabia can access the official WhatsApp Business API through authorized Meta Business Solution Providers (BSPs).
              </p>
            </details>

            <details className="border rounded-lg p-4 bg-white group">
              <summary className="font-semibold cursor-pointer text-gray-800">
                Is WhatsApp Business API free?
              </summary>
              <p className="mt-2 text-gray-700 text-[15px] sm:text-base">
                Meta charges conversation-based fees for API usage. Providers may also charge platform or subscription fees. Some providers, such as Qmize, offer a free plan to help businesses get started.
              </p>
            </details>

            <details className="border rounded-lg p-4 bg-white group">
              <summary className="font-semibold cursor-pointer text-gray-800">
                What industries benefit from WhatsApp Business API?
              </summary>
              <p className="mt-2 text-gray-700 text-[15px] sm:text-base">
                Retail, eCommerce, healthcare, banking, education, travel, logistics, hospitality, and real estate businesses commonly use WhatsApp Business API to automate customer communication and improve engagement.
              </p>
            </details>
          </div>
        </section>

<section className="scroll-mt-28 animate-section">
  <div className="bg-gradient-to-r from-emerald-600 to-green-500 rounded-2xl px-6 py-10 sm:px-10 sm:py-14 text-center shadow-lg">
    
    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
      Ready to automate your WhatsApp communication?
    </h2>

    <p className="text-white/90 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
      Get started with Qmize today and transform the way you engage with your customers using powerful WhatsApp automation.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      
      <a
        href="https://qmize.com/"
        className="bg-white text-emerald-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
      >
        Get Started 🚀
      </a>

      <a
         href="https://wa.me/919031011559?text=Hi%20Qmize%2C%20I%20want%20to%20book%20a%20demo"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition duration-300"
      >
        Book a Demo
      </a>

    </div>
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