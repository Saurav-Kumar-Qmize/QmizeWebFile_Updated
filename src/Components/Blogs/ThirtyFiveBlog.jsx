import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";
import whatischatbot from "../../assets/Images/whatischatbot.jpg";
import { Helmet } from "react-helmet";

import Footer from "../Common/Footer";
import { Link } from "react-router-dom";
import christmasImage from "../../assets/Images/christmas_offer_blog.webp";
import bannerImage32 from "../../assets/Images/whatsapp_description_32.jpeg";
import whatsapp33 from "../../assets/Images/whatsapp33.jpeg";
import whatsapp35 from "../../assets/Images/blogpostchatbot.jpg";
 
const ThirtyFiveBlog = () => {
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
        "1. WhatsApp Chatbot: Complete Guide for Businesses in 2026",
    },

    {
      id: "second",
      label: "2. What is a WhatsApp Chatbot?",
    },

    {
      id: "third",
      label: "3. How Does a WhatsApp Chatbot Work?",
    },

    {
      id: "fourth",
      label: "4. Benefits of Using a WhatsApp Chatbot",
    },

    {
      id: "fifth",
      label: "5. WhatsApp Chatbot vs WhatsApp Business App",
    },

    {
      id: "sixth",
      label: "6. Key Features of a WhatsApp Chatbot",
    },

    {
      id: "seventh",
      label: "7. Types of WhatsApp Chatbots",
    },

    {
      id: "eighth",
      label: "8. WhatsApp Chatbot Use Cases",
    },
    {
        id: "ninth",
        label: "9. How to Create a WhatsApp Chatbot",
    },
    {
      id: "tenth",
      label: "10. Best Practices for WhatsApp Chatbots",
    },
    {
    id: "eleventh",
    label: "11. WhatsApp Chatbot Pricing",
    },
    {
      id: "twelfth",
      label: "12. Why Businesses Prefer WhatsApp Chatbots",
    },
    {
      id: "thirteenth",
      label: "13. WhatsApp Chatbot for Customer Support",
    },
    {
      id: "fourteenth",
      label: "14. AI-Powered WhatsApp Chatbots",
    },
    {
      id: "fifteenth",
      label: "15. Future of WhatsApp Chatbots",
    },
    {
      id: "sixteenth",
      label: "16. Choose Qmize for WhatsApp Chatbot Solutions?",
    },
    {
      id: "seventeenth",
      label: "17. Conclusion",
    },
    {
      id: "eighteenth",
      label: "18. FAQs About WhatsApp Chatbot"
    }

  
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
            WhatsApp Chatbot: Benefits, Features, Pricing & Setup Guide 2026

        </title>
        <meta
          name="description"
          content=": Learn everything about WhatsApp chatbot solutions including features, benefits, pricing, use cases, and how to create a WhatsApp chatbot for your business in 2026."
        />
        <link
          rel="canonical"
          href=": https://qmize.com/blog/whatsapp-chatbot"
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
                  {/* WhatsApp Chatbot: Complete Guide for Businesses in 2026 */}
                  <section id="first">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                      WhatsApp Chatbot: Complete Guide for Businesses in 2026
                      </h2>

                  {/* Image after intro */}
                      <div className="mb-8">
                        <img
                          src={whatsapp35}
                          alt="customer engagement platform"
                          className="rounded-xl shadow-md w-full"
                        />
                      </div>
                      <div className="space-y-5 text-md leading-relaxed text-gray-800 mb-3">
                        <p className="text-black text-xl font-bold">Introduction</p>
                       <p>
                        A WhatsApp chatbot is becoming 
                        one of the most powerful tools
                         for customer communication, 
                         support, lead generation, and
                          sales automation. Businesses of
                           all sizes are now using WhatsApp
                            chatbots to provide instant
                             responses, automate customer 
                             interactions, and improve 
                             engagement on the world’s most 
                             popular messaging platform
                       </p>

                      <p>
                       <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://www.whatsapp.com/"
                              >
                                <span className="text-blue-500 hover:underline">
                                  WhatsApp  {"   "}
                                </span>
                              </Link> {"  "} has billions of active users 
                      around the world and it provides
                       businesses a direct and personal 
                       way to connect with their customers.
                    A chatbot can
                  automate these conversations 
                  24/7 without the need for a human 
                  agent to be present for every interaction.
                      </p>
<p>Whether you run an eCommerce store,
   healthcare clinic, educational 
   institute, travel company, or 
   service business, a WhatsApp
    chatbot can simplify customer 
    communication and improve customer 
    experience.</p>

    <p>In this guide, you will learn what is a
       WhatsApp chatbot, how it works, 
       its benefits, use cases, features,
        pricing, and how to create one
         for your business.</p>
                       
                      </div>
                     
                    </div>
                  </section>

                  {/* What is a WhatsApp Chatbot?*/}
                  <section id="second">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                   What is a WhatsApp Chatbot?
                   </h2>

                      <div className="mb-8">
                        <img
                          src={whatischatbot}
                          alt="customer engagement platform"
                          className="rounded-xl shadow-md w-full"
                        />
                      </div>

                      <div className="space-y-4 text-md leading-relaxed text-gray-800">
                       <p>
                       A WhatsApp chatbot is an automated software application that communicates with users through WhatsApp.
                        It uses predefined workflows, AI, or conversational
                         automation to answer customer queries, collect
                          information, send updates, and perform tasks 
                          automatically
                       </p>
                       <p className="mb-3">The chatbot works through the
                        <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/whatsapp-business-api"
                              >
                                <span className="text-blue-500 hover:underline">
                                  {"   "}WhatsApp Business API {"   "}
                                </span>{"  "}</Link> and can handle multiple conversations simultaneously</p>
                 <p>Unlike manual customer support, a chatbot 
              can instantly respond to customers at any time of the day. Businesses use WhatsApp chatbots for:</p>    
                     <ul className="list-disc pl-6 space-y-1">
                         <li>	Customer support </li>
                         <li> 	Lead qualification </li>
                         <li> Order tracking </li>
                         <li> Appointment booking </li>
                         <li>Product recommendations</li>
                         <li>FAQ automation</li>
                         <li>Payment reminders</li>
                         <li>	Marketing campaigns</li>
                         <li>	Customer feedback collection</li>
                        </ul>

                 <p>A WhatsApp chatbot acts like a virtual assistant
                   that helps businesses save time while improving 
                   customer response speed.</p>      
                      </div>
                    </div>
                  </section>

                  {/* How Does a WhatsApp Chatbot Work? */}
                  <section id="third">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                       How Does a WhatsApp Chatbot Work?
                     </h2>
                <p className="mb-3 text-md ">A WhatsApp chatbot works by combining automation workflows with the
                               <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/whatsapp-business-api"
                              >
                                <span className="text-blue-500 hover:underline">
                                  {"   "}WhatsApp Business API {"   "}
                                </span>{"  "}</Link>.</p>
                                <p className="mt-2 mb-2">Here is a simple workflow:</p>
                    
                        <ol className="list-decimal pl-6 space-y-1 ">
                         <li>	A customer sends a message to your
                           <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/blog/whatsapp-business"
                              >
                                <span className="text-blue-500 hover:underline">
                               {"   "}   WhatsApp Business  {"   "}
                                </span>{"  "}</Link>
                                 number. </li>
                         <li> 	The chatbot receives the message.</li>
                         <li> 	The chatbot analyzes keywords, buttons, or customer intent. </li>
                         <li> 	It sends an automated response based on predefined logic.</li>
                         <li> 	 If needed, the chatbot transfers the conversation to a live agent. </li>
                        </ol>
                        <p className="my-2">Advanced AI-powered chatbots can understand natural language and provide more human-like conversations.</p>
                        <p className="mb-2">Businesses can create chatbot flows using:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>	Rule-based automation</li>
                          <li>	AI-powered conversation systems</li>
                          <li>	Keyword triggers</li>
                          <li>	Interactive buttons</li>
                          <li>	Quick replies</li>
                          <li>	WhatsApp Flows</li>
                        
                          </ul>
                    </div>
                  </section>

                  {/* Benefits of Using a WhatsApp Chatbot*/}
                  <section id="fourth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                     Benefits of Using a WhatsApp Chatbot
                      </h2>
                      <div className="space-y-4">

      {/* 1 */}
      <div className="">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          1. 24/7 Customer Support
        </h3>
        <p className="text-gray-600">
          Customers expect instant responses. A WhatsApp chatbot can reply immediately, even outside business hours. This improves customer satisfaction and reduces missed opportunities.
        </p>
      </div>

      {/* 2 */}
      <div className="">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          2. Faster Response Time
        </h3>
        <p className="text-gray-600">
          Instead of waiting for a support executive, customers get answers instantly. This helps businesses improve communication efficiency and reduce response delays.
        </p>
      </div>

      {/* 3 */}
      <div className="">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          3. Automates Repetitive Tasks
        </h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Order status updates</li>
          <li>FAQs</li>
          <li>Appointment confirmations</li>
          <li>Delivery tracking</li>
          <li>Return requests</li>
        </ul>
        <p className="text-gray-600 mt-2">
          Automation reduces manual workload for support teams.
        </p>
      </div>

      {/* 4 */}
      <div className="">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          4. Lead Generation and Qualification
        </h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Product interest</li>
          <li>Budget</li>
        </ul>
        <p className="text-gray-600 mt-2">
          This helps sales teams focus on high-quality leads.
        </p>
      </div>

      {/* 5 */}
      <div className="">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          5. Better Customer Engagement
        </h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Instant replies</li>
          <li>Interactive buttons</li>
          <li>Product catalogs</li>
          <li>Personalized recommendations</li>
        </ul>
        <p className="text-gray-600 mt-2">
          WhatsApp messages have very high open rates compared to emails.
        </p>
      </div>

      {/* 6 */}
      <div className="">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          6. Scalable Communication
        </h3>
        <p className="text-gray-600">
          Human agents can manage limited conversations at a time, but a chatbot can handle thousands of customer conversations simultaneously.
        </p>
      </div>

      {/* 7 */}
      <div className="">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          7. Cost Reduction
        </h3>
        <p className="text-gray-600">
          Automation reduces the need for large customer support teams, helping businesses lower operational costs while improving service quality.
        </p>
      </div>

    </div>
                    </div>
                  </section>

                  {/* WhatsApp Chatbot vs WhatsApp Business App*/}
                  <section id="fifth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                       
                        WhatsApp Chatbot vs WhatsApp Business App

                      </h2>
                     
                  
                     {/* Table */}
                        <div className="overflow-x-auto">
                          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                            <thead className="bg-emerald-100 text-gray-900">
                              <tr>
                                <th className="text-left px-4 py-2 border">
                                 Feature
                                </th>
                                <th className="text-left px-4 py-2 border">
                                 WhatsApp Business App
                                </th>
                                <th className="text-left px-4 py-2 border">
                                WhatsApp Chatbot
                                </th>
                             
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              <tr>
                                <td className="px-4 py-2 border font-semibold">
                                 Automation
                                </td>
                                <td className="px-4 py-2 border">
                               Limited
                                </td>
                                <td className="px-4 py-2 border">
                                 Advanced
                                </td>
                                
                              </tr>
                              <tr>
                                <td className="px-4 py-2 border font-semibold">
                               Multi-agent support
                                </td>
                                <td className="px-4 py-2 border">
                                 Limited
                                </td>
                                <td className="px-4 py-2 border">
                                  Yes
                                </td>
                              
                              </tr>
                              <tr>
                                <td className="px-4 py-2 border font-semibold">
                              AI integration
                                </td>
                                <td className="px-4 py-2 border">
                                  No
                                </td>
                                <td className="px-4 py-2 border">
                                  Yes
                                </td>
                                
                              </tr>
                              <tr>
                                <td className="px-4 py-2 border font-semibold">
                                 Bulk conversation handling
                                </td>
                                <td className="px-4 py-2 border">
                               No
                                </td>
                                <td className="px-4 py-2 border">
                                 Yes
                                </td>
                               
                              </tr>
                                <tr>
                                <td className="px-4 py-2 border font-semibold">
                               CRM integration
                                </td>
                                <td className="px-4 py-2 border">
                              Limited

                                </td>
                                <td className="px-4 py-2 border">
                                Yes

                                </td>
                               
                              </tr>
                                <tr>
                                <td className="px-4 py-2 border font-semibold">
                               API access
                                </td>
                                <td className="px-4 py-2 border">
                               No
                                </td>
                                <td className="px-4 py-2 border">
                                 Yes
                                </td>
                              
                              </tr>
                                <tr>
                                <td className="px-4 py-2 border font-semibold">
                                Advanced workflows
                                </td>
                                <td className="px-4 py-2 border">
                               No 
                                </td>
                                <td className="px-4 py-2 border">
                                 Yes 
                                </td>
                              
                              </tr>
                                <tr>
                                <td className="px-4 py-2 border font-semibold">
                                Suitable for large businesses
                                </td>
                                <td className="px-4 py-2 border">
                                 No 
                                </td>
                                <td className="px-4 py-2 border">
                                  Yes 
                                </td>
                             
                              </tr>
                             
                            </tbody>
                          </table>
  
                        </div>
                                                <p className="mt-2">The <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/blog/whatsapp-business"
                              >
                                <span className="text-blue-500 hover:underline">
                               {"   "}   WhatsApp Business  {"   "}
                                </span>{"  "}</Link>
                                 App is suitable for small businesses, while WhatsApp chatbots powered by the WhatsApp Business API are ideal for growing 
                                 and enterprise-level businesses
                                 </p>
                    </div>
                  </section>

                  {/* Key Features of a WhatsApp Chatbot*/}
                  <section id="sixth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                        Key Features of a WhatsApp Chatbot
                      </h2>
                     
                      <ul className="list-disc pl-6 space-y-4 text-gray-700">

      <li>
        <span className="font-semibold">Automated Replies</span>
        <p className="text-sm mt-1">
          Send instant responses to customer messages automatically.
        </p>
      </li>

      <li>
        <span className="font-semibold">Interactive Buttons</span>
        <p className="text-sm mt-1">
          Provide clickable options for customers to improve conversation flow.
        </p>
      </li>

      <li>
        <span className="font-semibold">AI-Based Conversations</span>
        <p className="text-sm mt-1">
          Advanced chatbots can understand customer intent and provide smart replies.
        </p>
      </li>

      <li>
        <span className="font-semibold">Multi-Agent Live Chat</span>
        <p className="text-sm mt-1">
          Transfer chats to human agents whenever necessary.
        </p>
      </li>

      <li>
        <span className="font-semibold">CRM Integration</span>
        <p className="text-sm mt-1">
          Connect with CRM tools to manage customer data and conversations.
        </p>
      </li>

      <li>
        <span className="font-semibold">Broadcast Messaging</span>
        <p className="text-sm mt-1">
          Send promotional updates, offers, and notifications.
        </p>
      </li>

      <li>
        <span className="font-semibold">Order Tracking</span>
        <p className="text-sm mt-1">
          Allow customers to track orders directly through WhatsApp.
        </p>
      </li>

      <li>
        <span className="font-semibold">Analytics and Reports</span>
        <p className="text-sm mt-1">
          Track chatbot performance, response times, and customer engagement.
        </p>
      </li>

      <li>
        <span className="font-semibold">Payment Integration</span>
        <p className="text-sm mt-1">
          Enable payments directly within WhatsApp conversations.
        </p>
      </li>

      <li>
        <span className="font-semibold">Multilingual Support</span>
        <p className="text-sm mt-1">
          Communicate with customers in different languages.
        </p>
      </li>

    </ul>
  
                    </div>
                  </section>

                  {/* Types of WhatsApp Chatbots */}
                  <section id="seventh">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                       Types of WhatsApp Chatbots
                      </h2>
          <div className="space-y-6 text-gray-700">

      {/* Rule-Based Chatbots */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Rule-Based Chatbots
        </h3>
        <p className="text-sm mb-2">
          These chatbots follow predefined workflows and responses.
        </p>
        <p className="text-sm mb-2">
          They are suitable for:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>FAQs</li>
          <li>Simple support queries</li>
          <li>Basic automation</li>
        </ul>
      </div>

      {/* AI-Powered Chatbots */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          AI-Powered Chatbots
        </h3>
        <p className="text-sm mb-2">
          AI chatbots use natural language processing and machine learning.
        </p>
        <p className="text-sm mb-2">
          They can understand customer intent and provide dynamic responses.
        </p>
        <p className="text-sm mb-2">
          AI-powered bots are ideal for:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Advanced customer support</li>
          <li>Conversational sales</li>
          <li>Personalized recommendations</li>
        </ul>
      </div>

      {/* Hybrid Chatbots */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Hybrid Chatbots
        </h3>
        <p className="text-sm">
          Hybrid chatbots combine rule-based workflows with AI features.
        </p>
        <p className="text-sm">
          They offer both structured automation and intelligent responses.
        </p>
      </div>

    </div>

                    </div>
                  </section>

  {/* WhatsApp Chatbot Use Cases */}
                  <section id="eighth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                     WhatsApp Chatbot Use Cases
                      </h2>
             <div className="space-y-6 text-gray-700">

      {/* eCommerce */}
      <div>
        <h3 className="font-semibold text-lg mb-2">eCommerce</h3>
        <p className="text-sm mb-2">
          Online stores use WhatsApp chatbots for:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Product recommendations</li>
          <li>Order confirmations</li>
          <li>Delivery updates</li>
          <li>Cart recovery</li>
          <li>Customer support</li>
        </ul>
      </div>

      {/* Healthcare */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Healthcare</h3>
        <p className="text-sm mb-2">
          Healthcare providers use chatbots for:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Appointment booking</li>
          <li>Prescription reminders</li>
          <li>Patient support</li>
          <li>Medical inquiries</li>
        </ul>
      </div>

      {/* Education */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Education</h3>
        <p className="text-sm mb-2">
          Educational institutes automate:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Student inquiries</li>
          <li>Admission support</li>
          <li>Fee reminders</li>
          <li>Class schedules</li>
        </ul>
      </div>

      {/* Real Estate */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Real Estate</h3>
        <p className="text-sm mb-2">
          Real estate businesses use WhatsApp chatbots for:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Property inquiries</li>
          <li>Lead qualification</li>
          <li>Site visit scheduling</li>
          <li>Follow-ups</li>
        </ul>
      </div>

      {/* Banking and Finance */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Banking and Finance</h3>
        <p className="text-sm mb-2">
          Banks and fintech companies automate:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Account inquiries</li>
          <li>Transaction updates</li>
          <li>EMI reminders</li>
          <li>Customer support</li>
        </ul>
      </div>

      {/* Travel and Hospitality */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Travel and Hospitality</h3>
        <p className="text-sm mb-2">
          Travel companies use chatbots for:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Booking confirmations</li>
          <li>Travel updates</li>
          <li>Hotel reservations</li>
          <li>Customer assistance</li>
        </ul>
      </div>

    </div>
                    </div>
                  </section>

 {/* How to Create a WhatsApp Chatbot */}
<section id="ninth" >
  <div className="max-w-4xl mx-auto mb-8">

    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      How to Create a WhatsApp Chatbot
    </h2>

    <p className="text-gray-700 mb-6">
      Follow these simple steps to create a WhatsApp Chatbot for business:
    </p>

    <div className="space-y-6 text-gray-700">

      {/* Step 1 */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Step 1: Get WhatsApp Business API Access
        </h3>
        <p className="text-sm">
          To create a professional WhatsApp chatbot, businesses need access to the  <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/whatsapp-business-api"
                              >
                                <span className="text-blue-500 hover:underline">
                                  {"   "}WhatsApp Business API {"   "}
                                </span>{"  "}</Link>.
        </p>
        <p className="text-sm">
          You can get API access through a verified <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            to="https://qmize.com/"
                          >
                            <span className="text-blue-500 hover:underline">
                              {"   "}WhatsApp Business Solution Provider {"   "}
                            </span>{"  "}</Link> like Qmize.
        </p>
      </div>

      {/* Step 2 */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Step 2: Verify Your Business
        </h3>
        <p className="text-sm mb-2">
          Businesses need:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Facebook Business Manager</li>
          <li>Verified business details</li>
          <li>Business phone number</li>
        </ul>
      </div>

      {/* Step 3 */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Step 3: Choose a Chatbot Platform
        </h3>
        <p className="text-sm mb-2">
          Select a platform that supports:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Automation workflows</li>
          <li>AI chatbot features</li>
          <li>CRM integration</li>
          <li>Multi-agent support</li>
        </ul>
      </div>

      {/* Step 4 */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Step 4: Design Chatbot Flow
        </h3>
        <p className="text-sm mb-2">
          Create conversation flows based on customer needs.
        </p>
        <p className="text-sm mb-2">
          Example:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Greeting message</li>
          <li>Main menu</li>
          <li>FAQs</li>
          <li>Support options</li>
          <li>Agent transfer</li>
        </ul>
      </div>

      {/* Step 5 */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Step 5: Integrate with CRM or Tools
        </h3>
        <p className="text-sm mb-2">
          Connect your chatbot with:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>CRM software</li>
          <li>eCommerce platforms</li>
          <li>Payment gateways</li>
          <li>Helpdesk systems</li>
        </ul>
      </div>

      {/* Step 6 */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Step 6: Test the Chatbot
        </h3>
        <p className="text-sm mb-2">
          Test all workflows before going live.
        </p>
        <p className="text-sm mb-2">
          Check:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Response accuracy</li>
          <li>Button functionality</li>
          <li><Link
                            target="_blank"
                            rel="noopener noreferrer"
                            to="https://qmize.com/blog/whatsapp-business-api-integration"
                          >
                            <span className="text-blue-500 hover:underline">
                              {"   "}API integration {"   "}
                            </span>{"  "}</Link></li>
          <li>Customer journey</li>
        </ul>
      </div>

      {/* Step 7 */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Step 7: Launch and Monitor
        </h3>
        <p className="text-sm">
          Once the chatbot is live, monitor performance regularly and optimize conversations.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Best Practices for WhatsApp Chatbots */}
<section id="tenth" >
  <div className="max-w-4xl mx-auto mb-8">

    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Best Practices for WhatsApp Chatbots
    </h2>

    <div className="space-y-6 text-gray-700">

      <div>
        <h3 className="font-semibold text-lg mb-2">
          Keep Conversations Simple
        </h3>
        <p className="text-sm">
          Avoid complicated conversation flows.
        </p>
        <p className="text-sm">
          Use clear and concise responses.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2">
          Use Quick Reply Buttons
        </h3>
        <p className="text-sm">
          Interactive buttons improve user experience and reduce typing effort.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2">
          Provide Human Support Option
        </h3>
        <p className="text-sm">
          Always give customers an option to connect with a live agent.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2">
          Personalize Messages
        </h3>
        <p className="text-sm">
          Use customer names and preferences whenever possible.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2">
          Avoid Spam
        </h3>
        <p className="text-sm">
          Do not send excessive promotional messages.
        </p>
        <p className="text-sm">
          Focus on valuable communication.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2">
          Optimize for Mobile Users
        </h3>
        <p className="text-sm">
         <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            to="https://www.whatsapp.com/"
                          >
                            <span className="text-blue-500 hover:underline">
                              {"   "}WhatsApp </span>{"  "}
                          </Link> is primarily mobile-based, so chatbot flows should be mobile-friendly.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2">
          Monitor Analytics
        </h3>
        <p className="text-sm">
          Track chatbot performance regularly to improve conversations and conversions.
        </p>
      </div>

    </div>

  </div>
</section>

{/* WhatsApp Chatbot Pricing */}
<section id="eleventh" >
  <div className="max-w-4xl mx-auto mb-8">

    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      WhatsApp Chatbot Pricing
    </h2>

    <div className="space-y-6 text-gray-700">

      <div>
        <p className="text-sm mb-2">
          WhatsApp chatbot pricing usually depends on:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>WhatsApp API provider</li>
          <li>Number of conversations</li>
          <li>Automation features</li>
          <li>AI capabilities</li>
          <li>CRM integrations</li>
          <li>Number of users</li>
        </ul>
      </div>

      <div>
        <p className="text-sm mb-2">
          Common pricing components include:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>WhatsApp conversation charges</li>
          <li>
            <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            to="https://qmize.com/"
                          >
                            <span className="text-blue-500 hover:underline">
                              {"   "}WhatsApp Business Platform </span>{"  "}
                          </Link> subscription fees</li>
          <li>Chatbot setup costs</li>
          <li>Custom development charges</li>
        </ul>
      </div>

      <div>
        <p className="text-sm">
          Businesses should choose a scalable solution that matches their communication needs.
        </p>
      </div>

    </div>

  </div>
</section>


{/* Why Businesses Prefer WhatsApp Chatbots */}
<section id="twelfth" >
  <div className="max-w-4xl mx-auto mb-8">

    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Why Businesses Prefer WhatsApp Chatbots
    </h2>

    <div className="space-y-6 text-gray-700">

      <div>
        <p className="text-sm mb-2">
          Businesses prefer WhatsApp chatbots because they offer:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>High engagement rates</li>
          <li>Faster customer support</li>
          <li>Better lead conversion</li>
          <li>Reduced operational costs</li>
          <li>Improved customer experience</li>
          <li>Automation at scale</li>
        </ul>
      </div>

      <div>
        <p className="text-sm">
          As customers increasingly prefer messaging over phone calls and emails, WhatsApp chatbots are becoming essential for modern businesses.
        </p>
      </div>

    </div>

  </div>
</section>

{/* WhatsApp Chatbot for Customer Support */}
<section id="thirteenth">
  <div className="max-w-4xl mx-auto mb-8">

    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      WhatsApp Chatbot for Customer Support
    </h2>

    <div className="space-y-6 text-gray-700">

      <div>
        <p className="text-sm mb-2">
          Customer support is one of the biggest use cases for WhatsApp chatbots.
        </p>
        <p className="text-sm mb-2">
          A chatbot can instantly resolve common queries of customer such as:
        </p>

        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Delivery status</li>
          <li>Refund policies</li>
          <li>Pricing details</li>
          <li>Account support</li>
          <li>Product information</li>
        </ul>
      </div>

      <div>
        <p className="text-sm">
          This reduces support ticket volume and improves customer satisfaction.
        </p>
      </div>

      <div>
        <p className="text-sm">
          Advanced chatbots can also detect customer frustration and transfer conversations to live agents.
        </p>
      </div>

    </div>

  </div>
</section>

{/* AI-Powered WhatsApp Chatbots */}
<section id="fourteenth" >
  <div className="max-w-4xl mx-auto mb-8">

    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      AI-Powered WhatsApp Chatbots
    </h2>

    <div className="space-y-6 text-gray-700">

      <div>
        <p className="text-sm mb-2">
          AI-powered WhatsApp chatbots are transforming business communication.
        </p>

        <p className="text-sm mb-2">
          These AI chatbots can:
        </p>

        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Understand customer intent</li>
          <li>Learn from conversations</li>
          <li>Provide intelligent recommendations</li>
          <li>Handle complex interactions</li>
          <li>Offer personalized experiences</li>
        </ul>
      </div>

      <div>
        <p className="text-sm">
          AI chatbots are especially useful for businesses with large customer bases and high conversation volumes.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Future of WhatsApp Chatbots */}
<section id="fifteenth">
  <div className="max-w-4xl mx-auto mb-10">

    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Future of WhatsApp Chatbots
    </h2>

    <div className="space-y-6 text-gray-700">

      <div>
        <p className="text-sm mb-2">
          The future of WhatsApp chatbots is driven by AI, automation, and conversational commerce.
        </p>

        <p className="text-sm mb-2">
          Upcoming trends include:
        </p>

        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>AI voice support</li>
          <li>Hyper-personalization</li>
          <li>Advanced conversational AI</li>
          <li>WhatsApp payment integration</li>
          <li>Omnichannel automation</li>
          <li>AI sales assistants</li>
        </ul>
      </div>

      <div>
        <p className="text-sm">
          Businesses adopting chatbot automation early will gain a competitive advantage in customer engagement.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Choose Qmize for WhatsApp Chatbot Solutions */}
<section id="sixteenth">
  <div className="max-w-4xl mx-auto mb-12">

    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Choose Qmize for WhatsApp Chatbot Solutions?
    </h2>

    <div className="space-y-6 text-gray-700">

      <div>
        <p className="text-sm mb-2">
          Qmize provides advanced WhatsApp chatbot solutions designed for businesses of all sizes.
        </p>

        <p className="text-sm mb-2">
          With Qmize, businesses can:
        </p>

        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Automate customer conversations</li>
          <li>Manage support efficiently</li>
          <li>Integrate CRM systems</li>
          <li>Send bulk WhatsApp messages</li>
          <li>Build AI-powered chatbot workflows</li>
          <li>Improve customer engagement</li>
        </ul>
      </div>

      <div>
        <p className="text-sm">
          Qmize helps businesses streamline communication using the official WhatsApp Business API.
        </p>
      </div>

    

    </div>

  </div>
</section>

{/* Conclusion */}
<section id="seventeenth" className="px-4 md:px-0">
  <div className="max-w-4xl mx-auto mb-16">

    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Conclusion
    </h2>

    <div className="space-y-6 text-gray-700">

      <div>
        <p className="text-sm">
          A WhatsApp chatbot is no longer just an optional business tool. It has become an essential communication solution for businesses looking to automate customer interactions, improve support, and increase engagement.
        </p>
      </div>

      <div>
        <p className="text-sm">
          From lead generation and customer support to sales automation and AI conversations, WhatsApp chatbots offer endless possibilities.
        </p>
      </div>

      <div>
        <p className="text-sm">
          Businesses that implement WhatsApp chatbot automation can improve efficiency, reduce response times, and deliver a better customer experience.
        </p>
      </div>

      <div>
        <p className="text-sm">
          If you are planning to automate customer communication, now is the perfect time to implement a WhatsApp chatbot solution for your business
        </p>
      </div>

    </div>

  </div>
</section>
                  {/* FAQs About WhatsApp Chatbot*/}
                  <section id="eighteenth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                      FAQs About WhatsApp Chatbot

                      </h2>

                      <div className="space-y-4 text-md leading-relaxed text-gray-800">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            1. What is a WhatsApp chatbot?

                          </h3>
                          <p>
                           A WhatsApp chatbot is an automated messaging system 
                           that communicates with customers on WhatsApp 
                           using predefined workflows or AI.

                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        2. Is WhatsApp chatbot free?

                          </h3>
                          <p>
                         WhatsApp chatbots usually require WhatsApp 
                         Business API access and platform charges.
                          Pricing depends on the provider and usage.

                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            3. Can a WhatsApp chatbot talk like a human?

                          </h3>
                          <p>
                           AI-powered WhatsApp chatbots can provide human-like conversations using natural language processing.

                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                           4. Do I need WhatsApp Business API for a chatbot?
                          </h3>
                          <p>
                          Yes, businesses generally need WhatsApp Business API access to build advanced WhatsApp chatbots.

                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                         5. Can small businesses use WhatsApp chatbots?

                          </h3>
                          <p>Yes, small businesses can use WhatsApp chatbots for support, lead generation, and customer engagement.</p>
                        
                        </div>
                           <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                         6. What industries use WhatsApp chatbots?

                          </h3>
                          <p>Industries such as eCommerce, healthcare, education, banking, travel, and real estate widely use WhatsApp chatbots.</p>
                        
                        </div>
                      </div>
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

export default ThirtyFiveBlog;
