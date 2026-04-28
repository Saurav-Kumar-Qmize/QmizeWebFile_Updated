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

const WhatsAppAPI = () => {
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
        "1. WhatsApp Business Web Login Issues and Fixes",
    },

    {
      id: "second",
      label: "2. What is WhatsApp Business Web?",
    },

    {
      id: "third",
      label: "3. How to Log in to WhatsApp Business Web",
    },

    {
      id: "fourth",
      label: "4. Common WhatsApp Business Web Login Issues and Fixes",
    },

    {
      id: "fifth",
      label: "5. Tips to Avoid WhatsApp Business Web Login Problems",
    },

    {
      id: "sixth",
      label: "6. When to Consider WhatsApp Business API",
    },

    {
      id: "seventh",
      label: "7. Conclusion",
    },

    {
      id: "eighth",
      label: "8. FAQs About WhatsApp Business Web Login",
    },

  
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
            WhatsApp Business Web Login Issues and Fixes | Complete Troubleshooting Guide

        </title>
        <meta
          name="description"
          content="Facing WhatsApp Business Web login issues? Learn how to fix QR code errors, connection problems, and syncing issues with this easy troubleshooting guide."
        />
        <link
          rel="canonical"
          href="https://qmize.com/blog/whatsapp-business-web-login-issues-fixes"
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
                Updated on 16 Apr 2026 • 28 min read
              </p>

              <section className="w-full py-5 ">
                <div className="max-w-4xl mx-auto ">
                  {/* WhatsApp Business Web Login Issues and Fixes */}
                  <section id="first">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                     WhatsApp Business Web Login Issues and Fixes
                      </h2>

                      <div className="space-y-6 text-md leading-relaxed text-gray-800 mb-3">
                        <p>
                          Many businesses rely on {"   "} <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/blog/whatsapp-business-web"
                              >
                                <span className="text-blue-500 hover:underline">
                                  WhatsApp Business Web {"   "}
                                </span>
                              </Link>
                              {"   "} to manage customer
                           conversations directly from their computers. It helps teams respond faster, 
                           manage multiple chats, and improve productivity.
                        </p>

                        <p>
                       However, sometimes users face <span className="font-bold"> WhatsApp Business Web login issues </span>,
                        such as QR code errors, connection problems, or syncing failures.
                         These problems can interrupt communication with customers.
                        </p>

                        <p>
                         In this guide, we’ll explore the <span className="font-bold"> common WhatsApp Business Web login
                          issues and their fixes </span> so you can quickly get back to managing your
                           business conversations.
                        </p>
                      </div>
                      {/* Image after intro */}
                      <div className="mb-8">
                        <img
                          src={bannerImage32}
                          alt="WhatsApp api integration"
                          className="rounded-xl shadow-md w-full"
                        />
                      </div>
                    </div>
                  </section>

                  {/* What is WhatsApp Business Web?*/}
                  <section id="second">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                   What is WhatsApp Business Web?
                   </h2>

                      <div className="space-y-4 text-md leading-relaxed text-gray-800">
                        <p>
                        <span className="font-bold"> WhatsApp Business Web </span> allows businesses to access their {"  "}
                        <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/blog/whatsapp-business"
                              >
                                <span className="text-blue-500 hover:underline">
                                  WhatsApp Business  {"   "}
                                </span>
                              </Link>{"  "} account through a web browser on a desktop 
                        or laptop.
                        </p>

                        <p>Instead of typing messages on a phone, you can manage chats on
                             your computer by logging in through the <span className="font-bold"> WhatsApp
                              Business Web login page </span> and scanning a QR code from your mobile device.</p>
                  <p className="mb-3">Key benefits include:</p>
                        <ul className="list-disc pl-6 space-y-1">
                         <li>	Easier typing on a full keyboard </li>
                         <li> 	Managing multiple chats quickly </li>
                         <li> 	Sharing files and documents from your computer </li>
                         <li> 	Improving customer support efficiency </li>
                        </ul>

                       
                      </div>
                    </div>
                  </section>

                  {/* How to Log in to WhatsApp Business Web */}
                  <section id="third">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                        How to Log in to WhatsApp Business Web

                      </h2>
                <p className="mb-3 text-md ">Follow these steps to log in:</p>
                      <div className="space-y-4 text-md leading-relaxed text-gray-800">
                         <div>
                          <h3 className="text-md  text-gray-900 mb-1">
                           <span className="font-bold"> Step 1: {" "} </span> {"   "} Open your browser and visit the WhatsApp Web page.
                          </h3>
                         
                        </div>
                           <div>
                          <h3 className="text-md  text-gray-900 mb-1">
                         <span className="font-bold">   Step 2: {" "} </span>  {"   "}  Open the <span className="font-bold"> WhatsApp Business app </span> on your phone.
                          </h3>
                         
                        </div>
                        <div>
                          <h3 className="text-md  text-gray-900 mb-1">
                         <span className="font-bold">   Step 3:{" "} </span>  {"   "}  Tap the <span className="font-bold"> three-dot menu </span> and select <span className="font-bold"> Linked Devices.</span>
                            </h3>  
                       </div>
                      <div>
                          <h3 className="text-md  text-gray-900 mb-1">
                         <span className="font-bold">   Step 4: {" "} </span>  {"   "} Tap <span className="font-bold"> Link a Device. </span>

                            </h3>  
                       </div>


                 <div>
                          <h3 className="text-md text-gray-900 mb-1">
                        <span className="font-bold">    Step 5: {" "} </span>  {"   "} Scan the QR code displayed on the desktop screen.

                            </h3>  
                       </div>
                       <p>Once scanned successfully, your chats will appear instantly on the browser.</p>
                       
                      </div>
                    </div>
                  </section>

                  {/* Common WhatsApp Business Web Login Issues and Fixes */}
                  <section id="fourth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                     Common WhatsApp Business Web Login Issues and Fixes
                      </h2>
                     <p className="mb-3"> Below are some of the most common login problems users face with
                     <span className="font-bold"> WhatsApp Business Web for PC </span> and how to fix them.</p>
                      <div className="space-y-4 text-md leading-relaxed text-gray-800">
                       

                        <ol className="list-decimal pl-6 space-y-2">
                     <div>    
                        <li className="text-xl font-bold"> QR Code Not Scanning </li> 
                        <p className="font-semibold">Possible Causes</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>	Poor internet connection </li>
                            <li> 	Dirty or damaged phone camera </li>
                            <li> 	Screen brightness too low </li>
                            <li>	QR code expired </li>
                        </ul>
                        <p className="font-semibold">Fix</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>	Refresh the <span className="font-bold"> WhatsApp Business Web login page </span> to generate a new QR code </li>
                            <li>	Clean your phone camera lens </li>
                            <li> 	Increase screen brightness </li>
                            <li>	Ensure both devices have stable internet </li>
                        </ul>
                      </div>
                     <div>     
                         <li className="text-xl font-bold"> WhatsApp Business Web Not Loading </li> 
                         <p>Sometimes the web page fails to load or gets stuck on a loading screen.</p>
                        <p className="font-semibold">Fix</p>
                         <ul className="list-disc pl-6 space-y-1">
                             <li>	Refresh the browser </li>
                             <li>	Clear browser cache and cookies </li>
                             <li>	Try a different browser (Chrome, Edge, Firefox)</li>
                             <li>	Disable browser extensions that may block scripts </li>
                         </ul>
                         </div>
                       <div>    
                       <li className="text-xl font-bold"> Phone Not Connecting to WhatsApp Web </li> 
                         <p>Even after scanning the QR code, the phone may fail to connect</p>
                         <p className="font-semibold">Fix</p>
                         <ul className="list-disc pl-6 space-y-1">
                    <li>	Ensure your phone has an active internet connection </li>
                    <li>	Turn off airplane mode </li>
                    <li> 	Restart the {"   "} <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/blog/whatsapp-business"
                              >
                                <span className="text-blue-500 hover:underline">
                                  WhatsApp Business  {"   "}
                                </span>
                              </Link> {"   "}app </li>
                    <li>	Update the app to the latest version </li>
                         </ul>
                        </div>
                       <div>   
                         <li className="text-xl font-bold"> WhatsApp Business Web Session Logged Out </li>
                         <p>Sometimes users get automatically logged out from <span className="font-bold"> WhatsApp Business Web for PC. </span></p>
                         <p className="font-semibold">Fix</p>
                         <ul className="list-disc pl-6 space-y-1">
                            <li> Re-scan the QR code to log in again </li>
                            <li> Keep your phone connected to the internet </li>
                            <li>	Avoid clearing browser data frequently </li>
                         </ul>
                          </div>
                     <div>    
                         <li className="text-xl font-bold"> Messages Not Syncing </li>
                          <p>Chats may not update in real time.</p>
                          <p className="font-semibold">Fix</p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>	Refresh the browser </li>
                            <li>	Check your phone’s internet connection </li>
                            <li>	Restart the WhatsApp Business app </li>
                            <li>	Log out and log in again </li>
                          </ul>
                           </div> 
                       <div> 
                           <li className="text-xl font-bold"> Browser Compatibility Issues </li> 
                           <p>Older browsers may cause login errors.</p>
                           <p className="font-semibold">Fix</p>
                           <p>Use updated versions of browsers such as:</p>
                           <ul className="list-disc pl-6 space-y-1">
                            <li>	Google Chrome </li>
                            <li>	Microsoft Edge </li>
                            <li>	Mozilla Firefox </li>
                            <li>	Safari </li>
                           </ul>
                           <p>Updating your browser often solves many <span className="font-bold"> WhatsApp Business Web login issues.</span></p>
                           </div>
                        </ol>

                      </div>
                    </div>
                  </section>

                  {/* Tips to Avoid WhatsApp Business Web Login Problems */}
                  <section id="fifth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                       
                         Tips to Avoid WhatsApp Business Web Login Problems
                      </h2>
                     <p className="mb-2">Follow these best practices:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>	Always keep the <span className="font-bold"> WhatsApp Business app updated </span> </li>
                        <li>	Maintain a stable internet connection </li>
                        <li>	Use a modern browser </li>
                        <li>	Avoid logging in on too many devices </li>
                        <li>	Clear browser cache periodically </li>
                    </ul>
                    <p className="mt-2">These simple steps help ensure smooth access to <span className="font-bold"> WhatsApp Business Web login.</span></p>
                    </div>
                  </section>

                  {/* When to Consider WhatsApp Business API*/}
                  <section id="sixth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                        When to Consider WhatsApp Business API
                      </h2>
                      <p>If your business manages <span className="font-bold"> high volumes of customer messages,</span> the standard WhatsApp Business Web may not be enough.</p>
                      <p>Businesses can upgrade to {"   "} <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/whatsapp-business-api"
                              >
                                <span className="text-blue-500 hover:underline">
                                  WhatsApp Business API {"   "}
                                </span>
                              </Link> {"  "} to unlock features like:</p>
                              <ul className="list-disc pl-6 space-y-1 mb-2">
                                <li>	Multi-agent chat management </li>
                                <li>	Automated responses </li>
                                <li>	CRM integration </li>
                                <li>	Bulk notifications </li>
                                <li>	Chatbots and automation </li>
                              </ul>
                     <p>Platforms like <span className="font-bold"> Qmize </span> help businesses integrate WhatsApp messaging with marketing and customer support systems.</p>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="seventh">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                        Conclusion
                      </h2>

                      <div className="space-y-4 text-md leading-relaxed text-gray-800">
                     <p>While 
                       {"   "} <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/blog/whatsapp-business-web"
                              >
                                {"  "}<span className="text-blue-500 hover:underline">
                                  WhatsApp Business Web {"   "}
                                </span>{"   "}
                              </Link> 
                              is a powerful tool for managing business communication, login issues can
                               occasionally disrupt workflows. Fortunately, most problems such as 
                               <span className="font-bold"> QR code errors, syncing issues, or browser problems </span>can be fixed quickly with simple troubleshooting steps.
                        </p>
                        <p>By following the fixes in this guide, businesses can ensure smooth access to 
                            <span className="font-bold"> WhatsApp Business Web for PC </span> and continue delivering fast customer support.
                            </p>
                            <p>If your business requires 
                                <span className="font-bold">advanced messaging automation and scalability,</span> 
                                upgrading to    <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/whatsapp-business-api"
                              >
                                <span className="text-blue-500 hover:underline">
                                  WhatsApp Business API {"   "}
                                </span>
                              </Link>  with    <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/"
                              >
                                <span className="text-blue-500 hover:underline">
                                  Qmize {"   "}
                                </span>
                              </Link>  can provide a more powerful communication solution.</p>
                      </div>
                    </div>
                  </section>


                  {/* FAQs About WhatsApp Business Web Login
 */}
                  <section id="eighth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                       FAQs About WhatsApp Business Web Login

                      </h2>

                      <div className="space-y-4 text-md leading-relaxed text-gray-800">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            1. Why can't I log in to WhatsApp Business Web?

                          </h3>
                          <p>
                           This may happen due to internet issues, expired QR codes, 
                           or browser problems.

                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        2. Does WhatsApp Business Web require my phone to be connected?

                          </h3>
                          <p>
                           Your phone must initially link the device, but newer 
                           multi-device features allow it to stay connected even 
                           if the phone goes offline temporarily.

                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            3. Can I use WhatsApp Business Web on multiple computers?

                          </h3>
                          <p>
                            Yes, WhatsApp allows linking multiple devices from the
                            <span className="font-bold"> Linked Devices </span> section.

                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                           4. Why does WhatsApp Business Web log me out automatically?
                          </h3>
                          <p>
                          It may happen if you clear browser data, log out
                           manually, or reconnect devices.

                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                         5. Is WhatsApp Business Web safe for business use?

                          </h3>
                          <p>Yes, it uses end-to-end encryption to protect messages.</p>
                        
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

export default WhatsAppAPI;
