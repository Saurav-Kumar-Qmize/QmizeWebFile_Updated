
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
import whatsapp55 from "../../assets/Images/whatsapp55.jpg";
import whatsapp_QRCode from "../../assets/Images/whatsapp_QRCode.jpg";



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
  { id: "second", label: "2. What Is a WhatsApp Business Web QR Code?" },
  { id: "third", label: "3. Benefits of WhatsApp Business Web QR Code" },
  { id: "fourth", label: "4. How to Scan the WhatsApp Business Web QR Code" },
  { id: "fifth", label: "5. Why Use WhatsApp Business Web?" },
  { id: "sixth", label: "6. How Businesses Can Use WhatsApp Business Web" },
  { id: "seventh", label: "7. WhatsApp Web QR Code vs WhatsApp Business API" },
  { id: "eighth", label: "8. How Qmize Can Help Businesses Scale WhatsApp Communication" },
  { id: "ninth", label: "9. Common WhatsApp Web QR Code Problems and Solutions" },
  { id: "tenth", label: "10. How to Log Out of WhatsApp Web Remotely" },
  { id: "eleventh", label: "11. WhatsApp Web QR Code Security Tips" },
  { id: "twelfth", label: "12. Can You Use WhatsApp Web Without Your Phone?" },
  { id: "thirteenth", label: "13. How Many Devices Can You Link to WhatsApp?" },
  { id: "fourteenth", label: "14. Can WhatsApp Web Be Used for Bulk Messaging?" },
  { id: "fifteenth", label: "15. WhatsApp Web QR Code for Business: Best Use Cases" },
  { id: "sixteenth", label: "16. WhatsApp Web QR Code: Quick Summary" },
  { id: "seventeenth", label: "17. Final Thoughts" },
  { id: "eighteenth", label: "18. Frequently Asked Questions" },
];


  return (
    <>  

     <Helmet>

       <meta charSet="utf-8" />
        <title>WhatsApp Business Web QR Code Guide: How to Scan & Use It

</title>
        <meta
          name="description"
          content=" Learn how to scan and use the WhatsApp Business Web QR Code, link WhatsApp to your computer, fix QR code issues, and securely manage business chats.
"
        />
        <link rel="canonical" href=" https://qmize.com/blog/whatsapp-business-web-qr-code-guide" />
        

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
        <div>

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
          WhatsApp Business Web QR Code Guide: How to Scan, Link & Use WhatsApp on Your Computer
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
          Updated on 24 August 2026 • 18 min read
        </p>

        {/* SECTION 1: INTRODUCTION */}
        <section id="first" className="scroll-mt-28 animate-section">
          <img
            src={whatsapp55}
            alt="WhatsApp Business Web QR Code Guide"
            className="mt-2 mb-4 rounded-xl w-full"
          />

          <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
            Managing customer conversations from a smartphone can become difficult when your business receives a large number of WhatsApp messages. <span className="font-semibold text-black-700">WhatsApp Business Web</span> makes communication easier by allowing you to access your WhatsApp Business account from a desktop or laptop.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
        The <span className="font-semibold text-black-700">WhatsApp Business Web QR code</span> is used to securely link your mobile WhatsApp Business account with your computer. Once connected, you can read and reply to customer messages, share documents and media, manage chats, and handle business conversations from a larger screen.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
            This guide explains what a WhatsApp Web QR code is, how to scan it, how to use WhatsApp Business Web, common QR-code problems, security tips, and how businesses can use WhatsApp alongside the <span className="font-semibold text-black-700">WhatsApp Business API</span> for advanced customer communication.
          </p>
        </section>

        {/* SECTION 2: WHAT IS A WHATSAPP BUSINESS WEB QR CODE */}
        <section id="second" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            What Is a WhatsApp Business Web QR Code?
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            A <span className="font-semibold text-black-700">WhatsApp Business Web QR code</span> is a temporary code displayed when you open WhatsApp Web in a desktop browser. You scan this code using the <span className="font-semibold text-black-700">Linked Devices</span> option inside the WhatsApp or WhatsApp Business mobile application.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            After successful verification, your account is linked to the computer and your conversations become accessible through the browser.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-800 space-y-2">
            <p className="font-semibold text-gray-900">The basic process is:</p>
            <p className="text-gray-700 text-xs sm:text-sm">
              Open WhatsApp Web → Display QR code → Open WhatsApp Business → Linked Devices → Link a Device → Scan QR code → Start messaging
            </p>
            <p className="text-xs text-gray-500 italic mt-2">
              WhatsApp Web is particularly useful for businesses because employees can respond to customers using a full-size keyboard instead of typing every message on a phone.
            </p>
          </div>
        </section>

        {/* SECTION 3: BENEFITS OF WHATSAPP BUSINESS WEB QR CODE */}
        <section id="third" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            Benefits of WhatsApp Business Web QR Code
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            Using a WhatsApp Business Web QR code makes it easier for businesses to manage customer conversations from a computer. Instead of relying only on a smartphone, teams can access WhatsApp through a desktop browser and handle everyday communication more efficiently.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] sm:text-base">
            <li><span className="font-semibold text-gray-900">1. Faster Customer Communication:</span> Typing on a computer keyboard is generally faster than typing long replies on a smartphone. Businesses can respond to customer questions, send quotations, and share product information more efficiently.</li>
            <li><span className="font-semibold text-gray-900">2. Easy Access to Business Chats:</span> WhatsApp Business Web brings your conversations to a larger screen, making it easier to search chats, review previous messages, and manage ongoing customer discussions.</li>
            <li><span className="font-semibold text-gray-900">3. Convenient File Sharing:</span> Businesses can quickly share PDFs, product catalogs, images, invoices, presentations, and other documents directly from their computer.</li>
            <li><span className="font-semibold text-gray-900">4. Better Team Productivity:</span> Employees who work primarily on desktops can handle WhatsApp conversations without constantly switching between their phone and computer.</li>
            <li><span className="font-semibold text-gray-900">5. Easy Lead Follow-Up:</span> Sales teams can use WhatsApp Web to follow up with prospects, answer inquiries, share product details, and move conversations toward a purchase.</li>
            <li><span className="font-semibold text-gray-900">6. Supports Remote Work:</span> Linked WhatsApp devices allow teams to access business conversations from their computers, making customer communication more convenient for remote and hybrid teams.</li>
            <li><span className="font-semibold text-gray-900">7. Simple Setup:</span> No complicated installation is required. Businesses can open WhatsApp Web, scan the QR code using WhatsApp Business, and start managing conversations.</li>
            <li><span className="font-semibold text-gray-900">8. Better Customer Support:</span> A desktop interface can make it easier for support teams to handle customer questions, order-related queries, service requests, and follow-ups.</li>
          </ul>
        </section>

        {/* SECTION 4: HOW TO SCAN THE WHATSAPP BUSINESS WEB QR CODE */}
        <section id="fourth" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            How to Scan the WhatsApp Business Web QR Code
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            Linking your WhatsApp Business account to your computer only takes a few steps.
          </p>
          <div className="space-y-4 text-gray-700 text-[15px] sm:text-base">
            <h3 className="font-semibold text-gray-900 text-base">Step 1: Open WhatsApp Web</h3>
            <p className="text-gray-700">Open a browser such as Chrome, Microsoft Edge, Firefox, Safari, or another supported browser on your computer.</p>
            <p className="text-gray-700">Go to: <Link to="https://web.whatsapp.com/" className="text-blue-600 underline hover:text-blue-800">WhatsApp Web (https://web.whatsapp.com/)</Link></p>
            <p className="text-gray-700">A QR code will appear on the screen.</p>

            <img
            src={whatsapp_QRCode}
            alt="WhatsApp Business Web QR Code "
            className="mt-2 mb-4 rounded-xl w-full"
          />

            <h3 className="font-semibold text-gray-900 text-base">Step 2: Open WhatsApp Business on Your Phone</h3>
            <p className="text-gray-700">Open the WhatsApp Business app on your smartphone.</p>

            <p className="font-semibold text-gray-900">For Android:</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Open WhatsApp Business.</li>
              <li>Tap the three-dot menu.</li>
              <li>Select <span className="font-semibold text-black-700">Linked Devices</span>.</li>
              <li>Tap <span className="font-semibold text-black-700">Link a Device</span>.</li>
            </ol>

            <p className="font-semibold text-gray-900">For iPhone:</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Open WhatsApp Business.</li>
              <li>Open Settings.</li>
              <li>Select <span className="font-semibold text-black-700">Linked Devices</span>.</li>
              <li>Tap <span className="font-semibold text-black-700">Link a Device</span>.</li>
            </ol>

            <h3 className="font-semibold text-gray-900 text-base">Step 3: Scan the QR Code</h3>
            <p className="text-gray-700">Your phone will open the QR-code scanner.</p>
            <p className="text-gray-700">Point your phone's camera toward the QR code displayed on your computer screen.</p>
            <p className="text-gray-700">Keep the phone steady until WhatsApp recognizes the code.</p>

            <h3 className="font-semibold text-gray-900 text-base">Step 4: Start Using WhatsApp Business Web</h3>
            <p className="text-gray-700">After successful verification, your conversations will load in the browser.</p>
            <p className="text-gray-700">You can now:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Read customer messages</li>
              <li>Reply to conversations</li>
              <li>Send images and documents</li>
              <li>Share videos and files</li>
              <li>Search chats</li>
              <li>Manage conversations</li>
              <li>Send voice messages</li>
              <li>Access business chats from your computer</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              The QR code is primarily used to establish the linked-device session. It is not a permanent login code.
            </p>
          </div>
        </section>

        {/* SECTION 5: WHY USE WHATSAPP BUSINESS WEB? */}
        <section id="fifth" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            Why Use WhatsApp Business Web?
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            {" "}<Link to="https://qmize.com/blog/whatsapp-business-web" className="text-blue-600 underline hover:text-blue-800">
              WhatsApp Business Web
            </Link>{" "}can make everyday customer communication faster and more convenient.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] sm:text-base">
            <li><strong>1. Faster Typing:</strong> A desktop keyboard is much more comfortable for writing detailed customer responses, quotations, product information, and support messages.</li>
            <li><strong>2. Easier Customer Support:</strong> Teams can respond to incoming customer queries from a larger screen and manage conversations without constantly switching between a computer and smartphone.</li>
            <li><strong>3. Convenient File Sharing:</strong> Businesses can quickly upload documents, product images, brochures, invoices, and other files stored on their computers.</li>
            <li><strong>4. Better Multitasking:</strong> You can keep WhatsApp Web open while working on spreadsheets, CRM systems, websites, or other business applications.</li>
            <li><strong>5. Easier Conversation Management:</strong> Searching through conversations and locating specific customer messages can be more convenient on a desktop screen.</li>
            <li><strong>6. Useful for Small Businesses:</strong> For businesses with a limited number of customer conversations, WhatsApp Business Web can provide a simple way to manage communication without adopting a complex system.</li>
          </ul>
        </section>

        {/* SECTION 6: HOW BUSINESSES CAN USE WHATSAPP BUSINESS WEB */}
        <section id="sixth" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            How Businesses Can Use WhatsApp Business Web
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            WhatsApp Business Web is useful across different stages of the customer journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs sm:text-sm">
              <h5 className="font-semibold text-gray-900 mb-1">Customer Support</h5>
              <p className="text-gray-700">Businesses can use WhatsApp to answer questions about products, pricing, delivery, availability, and services.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs sm:text-sm">
              <h5 className="font-semibold text-gray-900 mb-1">Lead Follow-Up</h5>
              <p className="text-gray-700">Sales teams can use WhatsApp conversations to follow up with prospects who have shown interest in a product or service.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs sm:text-sm">
              <h5 className="font-semibold text-gray-900 mb-1">Order Management</h5>
              <p className="text-gray-700">E-commerce businesses can communicate order details, delivery updates, and customer queries through WhatsApp.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs sm:text-sm">
              <h5 className="font-semibold text-gray-900 mb-1">Appointment Communication</h5>
              <p className="text-gray-700">Clinics, salons, consultants, educational institutions, and service businesses can communicate appointment-related information through WhatsApp.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs sm:text-sm sm:col-span-2">
              <h5 className="font-semibold text-gray-900 mb-1">Product Sharing</h5>
              <p className="text-gray-700">Businesses can share product images, catalogs, brochures, specifications, and other information directly with customers.</p>
            </div>
          </div>
        </section>

        {/* SECTION 7: WHATSAPP WEB QR CODE VS WHATSAPP BUSINESS API */}
        <section id="seventh" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            WhatsApp Web QR Code vs WhatsApp Business API
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            These two solutions are often confused, but they are designed for different requirements.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
           {" "}<Link to="https://qmize.com/blog/whatsapp-business-web" className="text-blue-600 underline hover:text-blue-800">
              WhatsApp Business Web
            </Link>{" "}is mainly a desktop interface for managing an existing WhatsApp account.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
           {" "}<Link to="https://qmize.com/whatsapp-business-api" className="text-blue-600 underline hover:text-blue-800">
              WhatsApp Business API
            </Link>{" "}is designed for businesses that need scalable communication, automation, integrations, and team-based workflows.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-black-700 border-collapse border border-black-200 mt-2">
              <thead>
                <tr className="bg-emerald-50 text-emerald-900 border-b border-black-200">
                  <th className="p-2 border-r border-black-200 font-bold">Requirement</th>
                  <th className="p-2 border-r border-black-200 font-bold">WhatsApp Business Web</th>
                  <th className="p-2 font-bold">WhatsApp Business API</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black-200">
                  <td className="p-2 border-r border-black-200 font-semibold">Desktop chat</td>
                  <td className="p-2 border-r border-black-200">Yes</td>
                  <td className="p-2">Yes, through a provider/platform</td>
                </tr>
                <tr className="border-b border-black-200 bg-gray-50">
                  <td className="p-2 border-r border-black-200 font-semibold">QR-code login</td>
                  <td className="p-2 border-r border-black-200">Yes</td>
                  <td className="p-2">Not the primary connection method</td>
                </tr>
                <tr className="border-b border-black-200">
                  <td className="p-2 border-r border-black-200 font-semibold">Automation</td>
                  <td className="p-2 border-r border-black-200">Limited</td>
                  <td className="p-2">Yes</td>
                </tr>
                <tr className="border-b border-black-200 bg-gray-50">
                  <td className="p-2 border-r border-black-200 font-semibold">Chatbot</td>
                  <td className="p-2 border-r border-black-200">Limited</td>
                  <td className="p-2">Yes</td>
                </tr>
                <tr className="border-b border-black-200">
                  <td className="p-2 border-r border-black-200 font-semibold">Multiple agents</td>
                  <td className="p-2 border-r border-black-200">Limited</td>
                  <td className="p-2">Yes, with shared inbox solutions</td>
                </tr>
                <tr className="border-b border-black-200 bg-gray-50">
                  <td className="p-2 border-r border-black-200 font-semibold">CRM integration</td>
                  <td className="p-2 border-r border-black-200">Limited</td>
                  <td className="p-2">Yes</td>
                </tr>
                <tr className="border-b border-black-200">
                  <td className="p-2 border-r border-black-200 font-semibold">Bulk campaign management</td>
                  <td className="p-2 border-r border-black-200">Not designed for this</td>
                  <td className="p-2">Yes, subject to WhatsApp policies</td>
                </tr>
                <tr className="border-b border-black-200 bg-gray-50">
                  <td className="p-2 border-r border-black-200 font-semibold">Analytics</td>
                  <td className="p-2 border-r border-black-200">Basic</td>
                  <td className="p-2">Advanced options available</td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black-200 font-semibold">Large-scale customer communication</td>
                  <td className="p-2 border-r border-black-200">Not ideal</td>
                  <td className="p-2">Designed for scalability</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-[15px] sm:text-base mt-2">
            If your business only needs to answer customers from a computer, WhatsApp Business Web may be sufficient. If you want automated customer journeys, team inboxes, chatbot workflows, API integrations, or scalable messaging, a WhatsApp Business API platform is more appropriate.
          </p>
        </section>

        {/* SECTION 8: HOW QMIZE CAN HELP BUSINESSES SCALE */}
        <section id="eighth" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            How Qmize Can Help Businesses Scale WhatsApp Communication
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            For businesses that have outgrown manual WhatsApp conversations, {" "}<Link to="https://qmize.com/whatsapp-business-api" className="text-blue-600 underline hover:text-blue-800">
              Qmize
            </Link>{" "}provides WhatsApp Business API solutions designed for business communication and automation.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            With a {" "}<Link to="https://qmize.com/whatsapp-business-api" className="text-blue-600 underline hover:text-blue-800">
              WhatsApp Business API
            </Link>{" "}platform, businesses can build more structured communication workflows instead of relying entirely on manual replies.
          </p>
          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 text-sm space-y-2">
            <h4 className="font-bold text-emerald-900 text-base">Depending on your requirements, you can use WhatsApp for:</h4>
            <ul className="list-disc pl-5 space-y-1 text-emerald-800">
              <li>Customer support</li>
              <li>Lead generation</li>
              <li>Automated notifications</li>
              <li>Marketing campaigns</li>
              <li>WhatsApp chatbots</li>
              <li>Sales follow-ups</li>
              <li>Customer engagement</li>
              <li>Business integrations</li>
              <li>Team-based customer communication</li>
            </ul>
          </div>
          <p className="text-gray-700 text-[15px] sm:text-base">
            {" "}<Link to="https://qmize.com/whatsapp-business-web" className="text-blue-600 underline hover:text-blue-800">
              WhatsApp Business Web
            </Link>{" "}is useful for everyday conversations, while a {" "}<Link to="https://qmize.com/whatsapp-business-api" className="text-blue-600 underline hover:text-blue-800">
              WhatsApp Business API
            </Link>{" "}solution can help businesses build a scalable communication system.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            <Link to="https://qmize.com/whatsapp-business-api" className="text-blue-600 underline hover:text-blue-800">Explore Qmize WhatsApp Business API</Link>
          </p>
        </section>

        {/* SECTION 9: COMMON PROBLEMS AND SOLUTIONS */}
        <section id="ninth" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            Common WhatsApp Web QR Code Problems and Solutions
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            Sometimes the QR code may not scan or the linked session may not work correctly. Here are common issues and possible solutions.
          </p>

          <div className="space-y-3 text-sm">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-1">QR Code Is Not Scanning</h4>
              <p className="text-gray-700">If your phone cannot recognize the QR code:</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Clean your phone camera lens.</li>
                <li>Increase your computer's screen brightness.</li>
                <li>Move your phone slightly closer or farther away.</li>
                <li>Refresh WhatsApp Web.</li>
                <li>Make sure WhatsApp Business is updated.</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-1">QR Code Has Expired</h4>
              <p className="text-gray-700">WhatsApp Web may refresh the QR code periodically.</p>
              <p className="text-gray-700">If the displayed code has expired, simply refresh the page and scan the newly generated QR code.</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-1">WhatsApp Web Is Not Loading</h4>
              <p className="text-gray-700">Check your internet connection and try another browser.</p>
              <p className="text-gray-700">You can also clear browser cache or open WhatsApp Web in a private/incognito window to determine whether a browser extension is causing the problem.</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-1">Linked Device Keeps Disconnecting</h4>
              <p className="text-gray-700">Open WhatsApp Business on your phone and check Settings → Linked Devices.</p>
              <p className="text-gray-700">If the computer is no longer listed, link it again using the new QR code.</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-1">Phone and Computer Are Not Connecting</h4>
              <p className="text-gray-700">Check that both devices have a reliable internet connection. Also make sure that your WhatsApp Business application is updated to the latest available version.</p>
            </div>
          </div>
        </section>

        {/* SECTION 10: HOW TO LOG OUT REMOTELY */}
        <section id="tenth" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            How to Log Out of WhatsApp Web Remotely
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            If you used WhatsApp Web on another computer and forgot to log out, you can remove the linked session from your phone.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base font-semibold">
            Open WhatsApp Business and go to:
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            Settings → Linked Devices → Select the device → Log Out
          </p>
          <p className="text-sm text-gray-600 italic">
            This is especially important when using WhatsApp Web on a shared, office, public, or temporary computer.
          </p>
        </section>

        {/* SECTION 11: SECURITY TIPS */}
        <section id="eleventh" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            WhatsApp Web QR Code Security Tips
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            Your WhatsApp Web QR code should be treated as sensitive login information.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            Follow these security practices:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 text-[15px] sm:text-base">
            <li>Never scan an unknown QR code. Only scan codes displayed on the official WhatsApp Web website when linking your own device.</li>
            <li>Check Linked Devices regularly. Remove devices you no longer recognize or use.</li>
            <li>Log out from shared computers. Do not leave business conversations open on public or shared systems.</li>
            <li>Keep WhatsApp updated. Install updates from official app stores.</li>
            <li>Protect your phone. Use a screen lock and other available security features.</li>
            <li>Enable two-step verification. This adds another layer of protection to your WhatsApp account.</li>
            <li>Do not share screenshots of sensitive login information.</li>
          </ol>
        </section>

        {/* SECTION 12: CAN YOU USE WHATSAPP WEB WITHOUT YOUR PHONE? */}
        <section id="twelfth" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            Can You Use WhatsApp Web Without Your Phone?
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            Yes, WhatsApp's multi-device functionality allows linked devices to continue working even when the primary phone is not continuously connected to the internet.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            However, you still need the mobile WhatsApp account to initially link the computer.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            This makes WhatsApp Web more practical for businesses where employees spend most of their working hours on desktop computers.
          </p>
        </section>

        {/* SECTION 13: HOW MANY DEVICES CAN YOU LINK? */}
        <section id="thirteenth" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            How Many Devices Can You Link to WhatsApp?
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            WhatsApp supports multiple linked devices, allowing users to access their account from additional devices without repeatedly logging in.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            The exact device and feature limits can change as WhatsApp updates its multi-device functionality, so businesses should check WhatsApp's current documentation when planning a large-scale deployment.
          </p>
        </section>

        {/* SECTION 14: CAN WHATSAPP WEB BE USED FOR BULK MESSAGING? */}
        <section id="fourteenth" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            Can WhatsApp Web Be Used for Bulk Messaging?
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            WhatsApp Web itself is not a dedicated bulk messaging platform.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            If your business needs to communicate with many opted-in customers, use an appropriate WhatsApp Business API solution and follow WhatsApp's messaging policies, template requirements, and consent rules.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            Avoid using unofficial browser extensions or unauthorized automation tools to send large volumes of messages. Such practices can create account and compliance risks.
          </p>
        </section>

        {/* SECTION 15: BEST USE CASES FOR BUSINESS */}
        <section id="fifteenth" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            WhatsApp Web QR Code for Business: Best Use Cases
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
            A WhatsApp Business Web QR code works particularly well for businesses that need straightforward desktop access to customer conversations.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            Some common use cases include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] sm:text-base">
            <li><strong>Retail:</strong> Answer product questions and share product information.</li>
            <li><strong>Real Estate:</strong> Follow up with property leads and send brochures.</li>
            <li><strong>Education:</strong> Respond to student and parent inquiries.</li>
            <li><strong>Healthcare:</strong> Handle general appointment communication.</li>
            <li><strong>Travel:</strong> Respond to booking and itinerary questions.</li>
            <li><strong>E-commerce:</strong> Support customers with orders and delivery queries.</li>
            <li><strong>Service Businesses:</strong> Manage inquiries, quotations, and follow-ups.</li>
          </ul>
          <p className="text-gray-700 text-[15px] sm:text-base">
            For larger teams, however, businesses may benefit from moving from basic WhatsApp Web usage to a shared inbox and WhatsApp Business API setup.
          </p>
        </section>

        {/* SECTION 16: QUICK SUMMARY */}
        <section id="sixteenth" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            WhatsApp Web QR Code: Quick Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-gray-700 border-collapse border border-black-700 mt-2">
              <thead>
                <tr className="bg-emerald-50 text-emerald-900 border-b border-r-black-700">
                  <th className="p-2 border-r border-black-200 font-bold">Question</th>
                  <th className="p-2 font-bold">Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black-200">
                  <td className="p-2 border-r border-black-200 font-semibold">What is WhatsApp Web QR code?</td>
                  <td className="p-2">A QR code used to link WhatsApp to a computer</td>
                </tr>
                <tr className="border-b border-black-200 bg-gray-50">
                  <td className="p-2 border-r border-black-200 font-semibold">Where can I find it?</td>
                  <td className="p-2">On the official WhatsApp Web website</td>
                </tr>
                <tr className="border-b border-black-200">
                  <td className="p-2 border-r border-black-200 font-semibold">How do I scan it?</td>
                  <td className="p-2">WhatsApp Business → Linked Devices → Link a Device</td>
                </tr>
                <tr className="border-b border-black-200 bg-gray-50">
                  <td className="p-2 border-r border-black-200 font-semibold">Can I use WhatsApp Business on a PC?</td>
                  <td className="p-2">Yes</td>
                </tr>
                <tr className="border-b border-black-200">
                  <td className="p-2 border-r border-black-200 font-semibold">Can I access chats from a browser?</td>
                  <td className="p-2">Yes</td>
                </tr>
                <tr className="border-b border-black-200 bg-gray-50">
                  <td className="p-2 border-r border-black-200 font-semibold">Can I share files?</td>
                  <td className="p-2">Yes</td>
                </tr>
                <tr className="border-b border-black-200">
                  <td className="p-2 border-r border-black-200 font-semibold">Can I use WhatsApp Web for automation?</td>
                  <td className="p-2">Not as a full automation platform</td>
                </tr>
                <tr className="border-b border-black-200 bg-gray-50">
                  <td className="p-2 border-r border-black-200 font-semibold">Is WhatsApp Business API different?</td>
                  <td className="p-2">Yes</td>
                </tr>
                <tr className="border-b border-black-200">
                  <td className="p-2 border-r border-black-200 font-semibold">Can I log out remotely?</td>
                  <td className="p-2">Yes, through Linked Devices</td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-black-200 font-semibold">Is WhatsApp Web suitable for large-scale messaging?</td>
                  <td className="p-2">No, use an appropriate API-based solution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 17: FINAL THOUGHTS */}
        <section id="seventeenth" className="scroll-mt-28 animate-section space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
            Final Thoughts
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base">
           <span className="font-semibold text-black">The WhatsApp Business Web QR code</span> provides a simple way to move business conversations from a smartphone to a computer. With a larger screen, physical keyboard, convenient file sharing, and easier multitasking, it can significantly improve day-to-day customer communication.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            For small businesses with manageable conversation volumes, WhatsApp Business Web can be an effective solution. However, businesses handling large numbers of customers may need more than a browser-based interface.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            That is where the {" "}<Link to="https://qmize.com/whatsapp-business-api" className="text-blue-600 underline hover:text-blue-800">
              WhatsApp Business API
            </Link>{" "}becomes valuable. With automation, chatbots, integrations, team-based workflows, and scalable messaging capabilities, businesses can build a more organized WhatsApp communication strategy.
          </p>
          <p className="text-gray-700 text-[15px] sm:text-base">
            For businesses looking to move beyond basic WhatsApp Web and create a scalable customer communication system, Qmize can help you get started with WhatsApp Business API solutions.
          </p>
        </section>

        {/* SECTION 18: FREQUENTLY ASKED QUESTIONS */}
        <section id="eighteenth" className="scroll-mt-28 animate-section space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="border rounded-lg p-4 bg-white group">
              <summary className="font-semibold cursor-pointer text-gray-800">
                What is a WhatsApp Business Web QR code?
              </summary>
              <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                It is a QR code displayed on WhatsApp Web that allows you to link your WhatsApp Business account to a desktop or laptop.
              </p>
            </details>

            <details className="border rounded-lg p-4 bg-white group">
              <summary className="font-semibold cursor-pointer text-gray-800">
                How do I scan the WhatsApp Business Web QR code?
              </summary>
              <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Open WhatsApp Web on your computer, open WhatsApp Business on your phone, go to Linked Devices → Link a Device, and scan the QR code displayed on your computer.
              </p>
            </details>

            <details className="border rounded-lg p-4 bg-white group">
              <summary className="font-semibold cursor-pointer text-gray-800">
                Why is my WhatsApp Web QR code not scanning?
              </summary>
              <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Check your camera, internet connection, screen brightness, and WhatsApp Business version. Refresh WhatsApp Web and try scanning the newly generated QR code.
              </p>
            </details>

            <details className="border rounded-lg p-4 bg-white group">
              <summary className="font-semibold cursor-pointer text-gray-800">
                Can I use WhatsApp Business Web on multiple computers?
              </summary>
              <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                WhatsApp supports multiple linked devices, subject to the current device limits and account features. You can manage connected sessions from Linked Devices.
              </p>
            </details>

            <details className="border rounded-lg p-4 bg-white group">
              <summary className="font-semibold cursor-pointer text-gray-800">
                Can I use WhatsApp Web without keeping my phone connected?
              </summary>
              <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Multi-device support allows linked devices to continue working without the primary phone remaining continuously online.
              </p>
            </details>

            <details className="border rounded-lg p-4 bg-white group">
              <summary className="font-semibold cursor-pointer text-gray-800">
                Is WhatsApp Web free?
              </summary>
              <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                WhatsApp Web itself does not charge a separate fee for using the web interface. Normal WhatsApp Business messaging and any applicable business/API charges are separate considerations.
              </p>
            </details>

            <details className="border rounded-lg p-4 bg-white group">
              <summary className="font-semibold cursor-pointer text-gray-800">
                Is WhatsApp Web safe for businesses?
              </summary>
              <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                It can be used securely when you link devices through the official WhatsApp interface, keep your account protected, and regularly review linked devices.
              </p>
            </details>

            <details className="border rounded-lg p-4 bg-white group">
              <summary className="font-semibold cursor-pointer text-gray-800">
                What is the difference between WhatsApp QR code and WhatsApp Web QR code?
              </summary>
              <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                A  <span className="font-semibold text-black">WhatsApp Web QR code</span> is used to link your WhatsApp account to a computer. A <span className="font-semibold text-black">WhatsApp business QR code</span> can instead be created for customers to scan and start a conversation with your business.
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


        <div className="mt-10 px-6 py-5">
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
    className="relative overflow-hidden transition-transform duration-300"
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
          className="transition-all duration-300"
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