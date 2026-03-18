import { useState,useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";

import { Helmet } from "react-helmet";
import ontop from "../../assets/Images/whatsapp-ecommerce-guide.jpeg"






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
  { id: "intro", label: "1. Introduction" },
  { id: "second", label: "2. Why a WhatsApp Ecommerce Store Converts Better Than Websites" },
  

  

  {
    id: "third",
    label: "3. Why the WhatsApp Business API Is Mandatory",
   
  },

  { id: "fourth", label: "4. Comparison:" },
  { id: "fifth", label: "5. Platform Positioning" },
  { id: "sixth", label: "7. Strategic Advantages" },
  { id: "seventh", label: "8. SEO Insight:" },
  { id: "eighth", label: "9. Final Verdict:" },
  { id: "ninth", label: "10. FAQs" },
  
];


  return (
    <>  

     <Helmet>

       <meta charSet="utf-8" />
        <title>WhatsApp Ecommerce Store 2026 Guide | Official WhatsApp API by Qmize</title>
        <meta
          name="description"
          content="Learn how to build a WhatsApp ecommerce store using the official WhatsApp Business API. Qmize helps you automate, scale & sell smarter in 2026."
        />
        <link rel="canonical" href="https://qmize.com/blog/whatsapp-ecommerce-store-guide" />

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
WhatsApp Ecommerce Store in 2026: Why Qmize Is the Smart Choice for Scalable Sales

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
      <section id="intro" className="scroll-mt-28 animate-section">
  {/* Heading */}
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    Introduction
  </h2>
  <img
    src={ontop}
    alt="Whatsapp ecommerce store guide 2026"
    className="mt-2 mb-4 rounded-xl"
  />

  {/* Highlight Block */}
  <div className="bg-white border border-emerald-100 rounded-2xl shadow-sm p-6 mb-4">
    <h3 className="text-lg sm:text-xl font-bold text-emerald-700 mb-3">
      The Shift Is Real: WhatsApp Is Becoming the Primary Sales Channel
    </h3>

    <p className="text-gray-700 leading-relaxed mb-3">
      By 2026, customers will no longer tolerate delays, emails, or complicated
      checkout flows.
    </p>

    <p className="text-gray-700 leading-relaxed mb-4">
      They expect instant replies, instant catalogs, and instant clarity - all
      inside WhatsApp.
    </p>

    <p className="text-gray-700 leading-relaxed mb-3">
      A modern WhatsApp ecommerce store eliminates friction by combining:
    </p>

    <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 mb-4">
      <li>• Live chat</li>
      <li>• Product catalogs</li>
      <li>• Order flows</li>
      <li>• Payments</li>
      <li>• CRM sync</li>
    </ul>

    <div className="bg-emerald-50 border-l-4 border-emerald-600 p-3 rounded">
      <p className="text-emerald-900 font-medium text-sm sm:text-base">
        At <strong>Qmize</strong>, we help businesses convert WhatsApp from a
        support tool into a full-scale ecommerce platform.
      </p>
    </div>
  </div>

  {/* Image */}
  

  
</section>



<section id="second" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    Why a WhatsApp Ecommerce Store Converts Better Than Websites
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    Traditional ecommerce websites suffer from:
  </p>

  <ul className="space-y-2 text-gray-700 mb-6">
    <li>• Drop-offs</li>
    <li>• Cart abandonment</li>
    <li>• Delayed support</li>
    <li>• Low trust</li>
  </ul>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    A WhatsApp ecommerce solution solves this by enabling:
  </p>

  <ul className="space-y-2 text-gray-700 mb-6">
    <li>• Real-time conversations</li>
    <li>• Human + automation hybrid selling</li>
    <li>• Verified business identity</li>
    <li>• Faster decision-making</li>
  </ul>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    Businesses using WhatsApp Business API with Qmize report:
  </p>

  <ul className="space-y-2 text-gray-700">
    <li>• Faster lead qualification</li>
    <li>• Higher intent conversations</li>
    <li>• Shorter sales cycles</li>
  </ul>
</section>




<section id="third" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    Why the WhatsApp Business API Is Mandatory (Not Optional)
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    Using the WhatsApp Business app limits growth.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    With the WhatsApp Business API, Qmize enables:
  </p>

  <ul className="space-y-2 text-gray-700 mb-6">
    <li>• Unlimited agent access</li>
    <li>• Automation & chatbots</li>
    <li>• WhatsApp Flows</li>
    <li>• CRM & ERP integrations</li>
    <li>• High-volume messaging with compliance</li>
  </ul>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    If you’re serious about building a WhatsApp online store, the API is the foundation.
  </p>
</section>





<section id="fourth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Comparison: Qmize vs WATI vs Zoko vs Interakt (India-Focused)
  </h2>

  <p className="text-gray-700 leading-relaxed mb-6 text-[15px] sm:text-base">
    Feature Comparison Table
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border border-emerald-100 rounded-xl overflow-hidden text-sm sm:text-base">
      <thead className="bg-emerald-50">
        <tr>
          <th className="text-left p-3 font-semibold text-emerald-800">Feature</th>
          <th className="p-3 font-semibold text-emerald-800">Qmize</th>
          <th className="p-3 font-semibold text-emerald-800">WATI</th>
          <th className="p-3 font-semibold text-emerald-800">Zoko</th>
          <th className="p-3 font-semibold text-emerald-800">Interakt</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-emerald-100 bg-white">
        <tr>
          <td className="p-3 font-medium text-gray-700">
            WhatsApp Business API (India)
          </td>
          <td className="p-3 text-center">✅ Official</td>
          <td className="p-3 text-center">✅</td>
          <td className="p-3 text-center">✅</td>
          <td className="p-3 text-center">✅</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            WhatsApp Ecommerce Store
          </td>
          <td className="p-3 text-center">✅ Advanced</td>
          <td className="p-3 text-center">⚠️ Limited</td>
          <td className="p-3 text-center">⚠️ Basic</td>
          <td className="p-3 text-center">⚠️ Basic</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            WhatsApp Flows Support
          </td>
          <td className="p-3 text-center">✅ Full</td>
          <td className="p-3 text-center">❌</td>
          <td className="p-3 text-center">⚠️ Partial</td>
          <td className="p-3 text-center">❌</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            Multi-Agent Smart Routing
          </td>
          <td className="p-3 text-center">✅ Yes</td>
          <td className="p-3 text-center">⚠️ Basic</td>
          <td className="p-3 text-center">⚠️ Basic</td>
          <td className="p-3 text-center">❌</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            CRM / Airtable Integration
          </td>
          <td className="p-3 text-center">✅ Flexible</td>
          <td className="p-3 text-center">⚠️ Limited</td>
          <td className="p-3 text-center">❌</td>
          <td className="p-3 text-center">❌</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            Blue Tick Support
          </td>
          <td className="p-3 text-center">✅ Assisted</td>
          <td className="p-3 text-center">⚠️ Paid</td>
          <td className="p-3 text-center">⚠️ Paid</td>
          <td className="p-3 text-center">⚠️ Paid</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            Pricing Transparency (INR)
          </td>
          <td className="p-3 text-center">✅ Clear</td>
          <td className="p-3 text-center">❌ Hidden</td>
          <td className="p-3 text-center">❌ USD based</td>
          <td className="p-3 text-center">⚠️ Limited</td>
        </tr>

        <tr className="bg-white">
          <td className="p-3 font-semibold text-gray-800">Best For</td>
          <td className="p-3 text-center font-medium">
            Growing & Enterprise
          </td>
          <td className="p-3 text-center">SMBs</td>
          <td className="p-3 text-center">Shopify-only</td>
          <td className="p-3 text-center">Small sellers</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>





<section id="fifth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Platform Positioning (Honest Breakdown)
  </h2>

  <div className="overflow-x-auto mb-6">
    <table className="w-full border border-emerald-100 rounded-xl overflow-hidden text-sm sm:text-base">
      <thead className="bg-emerald-50">
        <tr>
          <th className="text-left p-3 font-semibold text-emerald-800">
            Platform
          </th>
          <th className="text-left p-3 font-semibold text-emerald-800">
            Best For
          </th>
          <th className="text-left p-3 font-semibold text-emerald-800">
            Limitation
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-emerald-100 bg-white">
        <tr>
          <td className="p-3 font-medium text-gray-700">Qmize</td>
          <td className="p-3 text-gray-700">Scalable Indian businesses</td>
          <td className="p-3 text-gray-700">
            None for growth-focused brands
          </td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">WATI</td>
          <td className="p-3 text-gray-700">Small support teams</td>
          <td className="p-3 text-gray-700">
            Limited ecommerce logic
          </td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">Zoko</td>
          <td className="p-3 text-gray-700">Shopify beginners</td>
          <td className="p-3 text-gray-700">
            Not flexible outside Shopify
          </td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">Interakt</td>
          <td className="p-3 text-gray-700">Very small businesses</td>
          <td className="p-3 text-gray-700">
            Weak automation & reporting
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      Qmize sits in the sweet spot - not too simple, not too complex.
    </p>
  </div>
</section>






<section id="sixth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Strategic Advantages of Qmize’s WhatsApp Ecommerce Platform
  </h2>

  {/* Advantage 1 */}
  <div className="mb-5">
    <h3 className="font-semibold text-gray-800 mb-1">
      1. Native Product Catalogs Inside WhatsApp
    </h3>
    <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
      Customers browse, select, and order without leaving chat.
    </p>
  </div>

  {/* Advantage 2 */}
  <div className="mb-5">
    <h3 className="font-semibold text-gray-800 mb-1">
      2. WhatsApp Flows for Custom Orders
    </h3>
    <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed mb-2">
      Perfect for:
    </p>
    <ul className="space-y-1 text-gray-700 text-[15px] sm:text-base">
      <li>• B2B pricing</li>
      <li>• Custom quantities</li>
      <li>• Lead qualification</li>
    </ul>
  </div>

  {/* Advantage 3 */}
  <div className="mb-5">
    <h3 className="font-semibold text-gray-800 mb-1">
      3. Speed-to-Lead Automation
    </h3>
    <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
      Instant replies even outside business hours.
    </p>
  </div>

  {/* Advantage 4 */}
  <div className="mb-2">
    <h3 className="font-semibold text-gray-800 mb-1">
      4. Enterprise-Level Data Sync
    </h3>
    <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
      Every chat connects to your CRM - no data loss.
    </p>
  </div>
</section>




<section id="seventh" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    SEO Insight: Why “WhatsApp Ecommerce Store” Is a High-Intent Keyword
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    People searching for:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• WhatsApp ecommerce store</li>
    <li>• WhatsApp online store</li>
    <li>• WhatsApp ecommerce solution India</li>
  </ul>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    👉 Are ready to buy, not just explore.
  </p>

  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      This makes WhatsApp ecommerce one of the highest ROI digital channels for 2026.
    </p>
  </div>
</section>





<section id="eighth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Final Verdict: Why Businesses Are Choosing Qmize in 2026
  </h2>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    The future of ecommerce is:
  </p>

  <ul className="space-y-2 text-gray-700 mb-6 text-[15px] sm:text-base">
    <li>• Conversational</li>
    <li>• Instant</li>
    <li>• Trust-based</li>
    <li>• Mobile-first</li>
  </ul>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    Qmize helps you build a WhatsApp ecommerce store that is:
  </p>

  <ul className="space-y-2 text-gray-700 mb-6 text-[15px] sm:text-base">
    <li>• Official</li>
    <li>• Scalable</li>
    <li>• Automated</li>
    <li>• ROI-focused</li>
  </ul>

  <p className="text-gray-800 font-medium mb-8 text-[15px] sm:text-base">
    Not just another WhatsApp tool - but a sales system.
  </p>

  {/* CTA BLOCK */}
 
</section>





<section id="ninth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-6">
    FAQs: WhatsApp Ecommerce Store with Qmize
  </h2>

  <div className="space-y-6">

    {/* FAQ 1 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        ❓ What is a WhatsApp ecommerce store?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        A WhatsApp ecommerce store allows customers to browse products, place
        orders, and get support directly inside WhatsApp using the WhatsApp
        Business API.
      </p>
    </div>

    {/* FAQ 2 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        ❓ Is WhatsApp ecommerce legal and official in India?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Yes. Qmize provides official WhatsApp Business API onboarding compliant
        with Meta policies and Indian regulations.
      </p>
    </div>

    {/* FAQ 3 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        ❓ Can I integrate payments in WhatsApp?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Yes. Payment links, UPI flows, and order confirmation automation are
        supported.
      </p>
    </div>

    {/* FAQ 4 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        ❓ Is Qmize better than WATI or Interakt?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        If you want scalability, ecommerce logic, automation, and pricing
        transparency, Qmize is the better long-term choice.
      </p>
    </div>

    {/* FAQ 5 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        ❓ How long does WhatsApp API activation take?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        With Qmize, onboarding usually completes within 3-7 working days,
        depending on Meta verification.
      </p>
    </div>

  </div>
</section>



 <div className="bg-gradient-to-br from-emerald-200 to-emerald-300 text-black rounded-2xl p-6 sm:p-8">
    <h3 className="text-lg sm:text-xl font-bold mb-3">
      Call to Action 🚀
    </h3>

    <p className="leading-relaxed mb-4 text-sm sm:text-base">
      Your customers are already on WhatsApp.  
      <br />
      Your competitors are already moving.
    </p>

    <ul className="space-y-2 mb-6 text-sm sm:text-base">
      <li>👉 Build your WhatsApp Ecommerce Store with Qmize</li>
      <li>👉 Get official WhatsApp Business API onboarding</li>
      <li>👉 Future-proof your sales for 2026</li>
    </ul>

    <p className="font-semibold mb-4 text-sm sm:text-base">
      Talk to Qmize today and turn conversations into conversions.
    </p>

    <button className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition">
      Talk to Qmize Today
    </button>
  </div>

































































        






































































































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
