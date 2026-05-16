import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";

import { Helmet } from "react-helmet";

import Footer from "../Common/Footer";
import { Link } from "react-router-dom";
import christmasImage from "../../assets/Images/christmas_offer_blog.webp";
import bannerImage32 from "../../assets/Images/whatsapp_description_32.jpeg";
import whatsapp33 from "../../assets/Images/whatsapp33.jpeg";
import whatsapp34 from "../../assets/Images/blog34post.jpeg";
import promotional from "../../assets/Images/promotionalchatbot.jpeg";
import transactional from "../../assets/Images/transactiontempchatbot.jpeg";
import otp from "../../assets/Images/otpauthchatbot.jpeg";
import support from "../../assets/Images/custsupptempl.jpeg";
import { p, s } from "framer-motion/client";
const ThirtyFourBlog = () => {
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
            "third",
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
      { rootMargin: "-30% 0px -60% 0px" },
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
    {
      id: "first",
      label:
        "1. WhatsApp Message Template: A Complete Guide for High-Converting Campaigns",
    },

    {
      id: "second",
      label: "2. What is a WhatsApp Message Template?",
    },

    {
      id: "third",
      label: "3. Why WhatsApp Message Templates Matter",
    },

    {
      id: "fourth",
      label: "4. Types of WhatsApp Message Templates",
    },

    {
      id: "fifth",
      label: "5. High-Converting WhatsApp Marketing Message Templates",
    },

    {
      id: "sixth",
      label: "6. Best Practices for WhatsApp Message Templates",
    },

    {
      id: "seventh",
      label: "7. WhatsApp Template Message Format",
    },

    {
      id: "eighth",
      label: "8. How to Create WhatsApp Message Templates",
    },
    {
        id: "ninth",
        label: "9. Benefits of Using WhatsApp Marketing Message Templates",
    },
    {
      id: "tenth",
      label: "10. How Qmize Helps You",
    },
    {
      id: "eleventh",
      label: "11. Final Thoughts",
    }

  
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
           WhatsApp Message Template: Best WhatsApp Marketing Message Templates 2026

        </title>
        <meta
          name="description"
          content="Discover high-converting WhatsApp message templates for marketing, promotions, and automation. Boost engagement with proven WhatsApp marketing message templates."
        />
        <link
          rel="canonical"
          href="https://qmize.com/blog/whatsapp-message-templates"
        />
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
        <svg
          className="absolute top-12 left-5 w-28 sm:w-40 opacity-40 animate-spin-slow"
          viewBox="0 0 100 100"
        >
          <rect x="10" y="10" width="80" height="80" rx="20" fill="#2ecc7055" />
        </svg>

        <svg
          className="absolute bottom-20 right-5 w-40 sm:w-52 opacity-30 animate-pulse-slow"
          viewBox="0 0 120 120"
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="#2ecc7080"
            strokeWidth="6"
            fill="none"
          />
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
                <h3 className="text-md font-bold text-emerald-700 mb-4">
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

              <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                WhatsApp Business Description: Guide, 100 Examples
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
                    Md. Suhail Ahmed
                  </p>
                  <p className="text-xs text-gray-600">
                    SEO Expert Cum - Content Writer • SaaS, WhatsApp API,
                    Automation
                  </p>
                </div>
              </div>

              {/* META INFO */}
              <p className="text-gray-500 text-xs sm:text-sm">
                Updated on 16 May 2026 • 28 min read
              </p>

              <section  className="w-full py-5 ">
                <div className="max-w-4xl mx-auto ">
                  {/* WhatsApp Message Template: A Complete Guide for High-Converting Campaigns */}
                  <section id="first">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                     WhatsApp Message Template: A Complete Guide for High-Converting Campaigns
                      </h2>

                      <div className="space-y-6 text-md leading-relaxed text-gray-800 mb-3">
                       <p>
                        Businesses are increasingly using WhatsApp to connect with customers in real time. 
                        But sending random messages won’t get results. 
                        That's where  <span className="font-bold">  WhatsApp message templates </span>come in 
                        with structured, pre-approved messages designed for
                         marketing, notifications, and customer engagement.
                       </p>

                      <p>
                      If you are looking to improve your outreach,
                       conversions, and automation, this guide will
                        walk you through everything along with the powerful
                     <span className="font-bold">  WhatsApp marketing message templates </span>you can 
                         start using right away. 
                      </p>

                       
                      </div>
                      {/* Image after intro */}
                      <div className="mb-8">
                        <img
                          src={whatsapp34}
                          alt="WhatsApp Message Template"
                          className="rounded-xl shadow-md w-full"
                        />
                      </div>
                    </div>
                  </section>

                
                {/* What is a WhatsApp Message Template */}
<section id="second" >
  <div className="max-w-4xl mx-auto mb-8">

    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      What is a WhatsApp Message Template?
    </h2>

    <div className="space-y-6 text-gray-700">

      <div>
        <p className="text-sm mb-2">
          A <span className="font-bold">WhatsApp message template</span> is a pre-approved message format used in the <Link to="/whatsapp-business-api">{"   "}WhatsApp Business API{"  "}</Link> to send notifications or marketing messages to users who have opted in.
        </p>
      </div>

      <div>
        <p className="text-sm mb-2">
          These templates are required when:
        </p>

        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Messaging users outside the 24-hour window</li>
          <li>Sending bulk campaigns</li>
          <li>Automating communication (OTP, alerts, reminders, etc.)</li>
        </ul>
      </div>

    </div>

  </div>
</section>

                {/* Why WhatsApp Message Templates Matter */}
<section id="third" >
  <div className="max-w-4xl mx-auto mb-8">

    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Why WhatsApp Message Templates Matter
    </h2>

    <div className="space-y-6 text-gray-700">

      <div>
        <p className="text-sm mb-2">
          Using the right <span className="font-bold">WhatsApp marketing message template</span> can:
        </p>

        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Increase open rates (up to 98%)</li>
          <li>Improve customer engagement</li>
          <li>Ensure compliance with WhatsApp policies</li>
          <li>Enable automation at scale</li>
          <li>Boost conversions and ROI</li>
        </ul>
      </div>

    </div>

  </div>
</section>

               {/* Types of WhatsApp Message Templates */}
<section id="fourth">
  <div className="max-w-4xl mx-auto mb-8">

    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Types of WhatsApp Message Templates
    </h2>

    <div className="space-y-14 text-gray-700">

      {/* 1. Promotional */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        
        <div>
          <img
            src={promotional}
            alt="Promotional Template"
            className="rounded-xl shadow-md w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2">
            1. Promotional Templates (Marketing)
          </h3>
          <p className="text-sm mb-3">
            Promotional WhatsApp templates are used to promote offers, discounts, or new launches.
          </p>

          <div className="bg-gray-100 p-4 rounded-md text-sm whitespace-pre-line">
            <p className="mb-1 font-medium">Example:</p>
🎉 Exclusive Offer Just for You!
Get 20% OFF on your next purchase.
Use code: SAVE20
Shop now: [Link]
          </div>
        </div>
      </div>

      {/* 2. Transactional */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2">
            2. Transactional Templates
          </h3>
          <p className="text-sm mb-3">
            Transactional WhatsApp templates are used for order confirmations, invoices, or alerts.
          </p>

          <div className="bg-gray-100 p-4 rounded-md text-sm whitespace-pre-line">
            <p className="mb-1 font-medium">Example:</p>
✅ Your order #12345 has been confirmed!
Expected delivery: 3-5 days
Track here: [Link]
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img
            src={transactional}
            alt="Transactional Template"
            className="rounded-xl shadow-md w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. OTP */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        
        <div>
          <img
            src={otp}
            alt="OTP Template"
            className="rounded-xl shadow-md w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2">
            3. OTP & Authentication Templates
          </h3>
          <p className="text-sm mb-3">
            OTP & Authentication WhatsApp Templates are used for login verification.
          </p>

          <div className="bg-gray-100 p-4 rounded-md text-sm whitespace-pre-line">
            <p className="mb-1 font-medium">Example:</p>
🔐 Your OTP is 458921
Do not share this code with anyone.
          </div>
        </div>
      </div>

      {/* 4. Customer Support */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2">
            4. Customer Support Templates
          </h3>
          <p className="text-sm mb-3">
            Used for follow-ups or issue resolution.
          </p>

          <div className="bg-gray-100 p-4 rounded-md text-sm whitespace-pre-line">
            <p className="mb-1 font-medium">Example:</p>
Hi {"{{name}}"}, your request has been resolved.
Need further help? Reply here anytime!
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img
            src={support}
            alt="Customer Support Template"
            className="rounded-xl shadow-md w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>

{/* High-Converting WhatsApp Marketing Message Templates  */}
 <section id="fifth">
  <div className="max-w-4xl mx-auto mb-8 px-4">

    <h2 className="text-3xl font-bold text-emerald-700 mb-6">
      High-Converting WhatsApp Marketing Message Templates
    </h2>

<p className="my-2">Here are some ready-to-use <span className="font-bold">WhatsApp marketing message templates</span>:</p>
    <div className="flex flex-col gap-8 text-gray-700">

      {/* Flash Sale */}
      <div>
        <h3 className="font-semibold mb-2">🔥 Flash Sale Template</h3>
        <div className="text-sm pl-4 font-bold">
⚡ Flash Sale Alert!
Limited time offer — up to 50% OFF
Hurry before it ends!
👉 Shop Now: [Link]
        </div>
      </div>

      {/* Abandoned Cart */}
      <div>
        <h3 className="font-semibold mb-2">🛒 Abandoned Cart Template</h3>
        <div className="text-sm pl-4 ">
Hey {"{{name}}"}, you left items in your cart 🛒
Complete your purchase now and get 10% OFF!
👉 Checkout: [Link]
        </div>
      </div>

      {/* Festival Offer */}
      <div>
        <h3 className="font-semibold mb-2">🎁 Festival Offer Template</h3>
        <div className="text-sm pl-4">
🎉 Celebrate this season with amazing deals!
Enjoy exclusive discounts just for you 💝
👉 Explore Now: [Link]
        </div>
      </div>

      {/* Product Launch */}
      <div>
        <h3 className="font-semibold mb-2">📢 New Product Launch Template</h3>
        <div className="text-sm pl-4">
Check out our latest product now
Be the first to try it
👉 View Here: [Link]
        </div>
      </div>

      {/* Re-engagement */}
      <div className="md:col-span-2">
        <h3 className="font-semibold mb-2">💬 Re-Engagement Template</h3>
        <div className="text-sm pl-4">
We miss you, {"{{name}}"}! ❤️
Come back and enjoy a special offer just for you
👉 Claim Now: [Link]
        </div>
      </div>

    </div>

  </div>
</section>

{/* Best Practices for WhatsApp Message Templates*/}
<section id="sixth">
  <div className="max-w-4xl mx-auto mb-8 px-4">

    <h2 className="text-3xl font-bold text-emerald-700 mb-6">
      Best Practices for WhatsApp Message Templates
    </h2>

    <p className="text-gray-700 text-sm mb-4">
      To get the best results:
    </p>

    <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
      <li>✔ Keep messages short and clear</li>
      <li>✔ Personalize using variables like {"{{name}}"}</li>
      <li>✔ Add a strong CTA (Call-to-Action)</li>
      <li>✔ Avoid spammy language</li>
      <li>✔ Use emojis wisely for better engagement</li>
      <li>✔ Ensure user opt-in before sending messages</li>
    </ul>

  </div>
</section>

{/* WhatsApp Template Message Format */}
<section id="seventh">
  <div className="max-w-4xl mx-auto mb-8 px-4">

    <h2 className="text-3xl font-bold text-emerald-700 mb-6">
      WhatsApp Template Message Format
    </h2>

    <p className="text-gray-700 text-sm mb-4">
      A standard WhatsApp template includes:
    </p>

    <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
      <li>
        <span className="font-bold">Header (optional)</span> – Image, video, or text
      </li>
      <li>
        <span className="font-bold">Body</span> – Main message content
      </li>
      <li>
        <span className="font-bold">Footer (optional)</span> – Additional info
      </li>
      <li>
        <span className="font-bold">CTA Buttons</span> – Links or quick replies
      </li>
    </ul>

  </div>
</section>

{/*How to Create WhatsApp Message Templates  */}
<section id="eighth">
  <div className="max-w-4xl mx-auto mb-8 px-4">

    <h2 className="text-3xl font-bold text-emerald-700 mb-6">
      How to Create WhatsApp Message Templates
    </h2>

    <p className="text-gray-700 text-sm mb-4">
      Follow these simple steps to create WhatsApp message templates:
    </p>

    <ol className="list-decimal pl-5 space-y-3 text-gray-700 text-sm leading-relaxed">
      <li>
        Sign up for <Link href="https://qmize.com/whatsapp-business-api/" target="_blank" rel="noopener noreferrer">WhatsApp Business API</Link> via a provider like <Link href="https://qmize.com/" target="_blank" rel="noopener noreferrer">Qmize</Link>
      </li>
      <li>
        Create a message template
      </li>
      <li>
        Submit the template for approval
      </li>
      <li>
        Once approved, use it in your campaigns
      </li>
      <li>
        Track performance and optimize for better results
      </li>
    </ol>

  </div>
</section>

                  {/*  Benefits of Using WhatsApp Marketing Message Templates */}
<section id="ninth">
  <div className="max-w-4xl mx-auto mb-8 px-4">

    <h2 className="text-3xl font-bold text-emerald-700 mb-6">
      Benefits of Using WhatsApp Marketing Message Templates
    </h2>

    <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
      <li>🚀 Faster campaign execution</li>
      <li>🤖 Automation with chatbots</li>
      <li>📈 Higher engagement rates</li>
      <li>💬 Direct customer interaction</li>
      <li>🔄 Easy scalability</li>
    </ul>

  </div>
</section>


  {/* How Qmize Helps You*/}
               <section id="tenth">
  <div className="max-w-4xl mx-auto mb-8 px-4">

    <h2 className="text-3xl font-bold text-emerald-700 mb-6">
      How Qmize Helps You
    </h2>

    <p className="text-gray-700 text-sm mb-4">
      With <span className="font-bold">Qmize WhatsApp business platform </span>, you can:
    </p>

    <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
      <li>
        Create and manage WhatsApp message templates for marketing (Promotional), Transactional and OTP
      </li>
      <li>Run bulk WhatsApp campaigns</li>
      <li>Automate workflows with chatbots</li>
      <li>Track campaign analytics</li>
      <li>Integrate CRM systems</li>
    </ul>

  </div>
</section>

                  {/*   Final Thoughts*/}
                  <section id="eleventh">
  <div className="max-w-4xl mx-auto mb-8 px-4">

    <h2 className="text-3xl font-bold text-emerald-700 mb-6">
      Final Thoughts
    </h2>

    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
      A well-crafted <span className="font-bold">WhatsApp message template</span> is the backbone of successful messaging campaigns. Whether you're sending promotions, alerts, or reminders, using optimized <span className="font-bold">WhatsApp marketing message templates</span> ensures better engagement and higher conversions.
    </p>

    <p className="text-gray-700 text-sm leading-relaxed">
      If you are serious about scaling your business communication, now is the time to leverage WhatsApp templates effectively.
    </p>

  </div>
</section>

                </div>
              </section>

              <div className="mt-10 rounded-xl bg-emerald-100 px-6 py-5">
                <h3 className="text-md font-bold text-gray-900 mb-2">
                  Md. Suhail Ahmed
                </h3>

                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  With strong expertise in AI-driven content writing and
                  data-backed analysis,
                  <strong> Md. Ahmed</strong> specializes in creating
                  high-quality content around Artificial Intelligence, SaaS
                  platforms, WhatsApp Business API, and automation technologies.
                </p>
              </div>
            </main>

            {/* --------------------------- */}
            {/* RIGHT SIDE IMAGE — Sticky + Parallax */}
            {/* --------------------------- */}
            {/* RIGHT STICKY IMAGE COLUMN */}
            <div className="hidden md:block md:col-span-3 sticky top-20 self-start">
              {/* PARALLAX GOES INSIDE */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-emerald-200 bg-white/70 backdrop-blur-xl transition-transform duration-300">
                {/* Parallax applied ONLY to image */}
                <img
                  src={sideImage}
                  alt="SignUp for WhatsApp Business API Service of Qmize"
                  className="w-full h-[32rem] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/40 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold drop-shadow-lg">
                    Start using <span className="text-emerald-300">Qmize</span>{" "}
                    WhatsApp Business API
                  </h3>

                  <p className="text-gray-200 text-sm mt-1 mb-4">
                    Automate, broadcast & grow your business conversations.
                  </p>

                  <a href="https://apihub.msg24x7.com/register">
                    <button
                      className=" cursor-pointer
        px-5 py-2.5 
        bg-gradient-to-r from-emerald-400 to-emerald-600 
        text-white font-semibold rounded-xl
        shadow-lg shadow-emerald-600/30
        hover:scale-[1.06] transition
      "
                    >
                      Get Started →
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------- */}
        {/* RECENT POSTS */}
        {/* --------------------------- */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 pb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Recent Posts
          </h3>

          <Link to="/blog/christmas-whatsapp-marketing-strategy-2025">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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

                  <h4 className="font-bold text-gray-900 text-md">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    Short description of the blog post…
                  </p>
                </div>
              ))}
            </div>
          </Link>
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

      <Footer />
    </>
  );
};

export default ThirtyFourBlog;

