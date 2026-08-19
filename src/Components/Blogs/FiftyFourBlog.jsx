
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
import whatsapp54 from "../../assets/Images/whatsapp54.jpeg";



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
  { id: "second", label: "2.How Does a WhatsApp Chatbot Work?" },
  { 
    id: "third", 
    label: "3.10 WhatsApp Chatbot Examples for Businesses",
    children: [
      { id: "faq", label: "1. WhatsApp FAQ Chatbot" },
      { id: "lead-generation", label: "2. WhatsApp Lead Generation Chatbot" },
      { id: "ecommerce", label: "3. WhatsApp E-commerce Chatbot" },
      { id: "customer-support", label: "4. WhatsApp Customer Support Chatbot" },
      { id: "appointment-booking", label: "5. WhatsApp Appointment Booking Chatbot" },
      { id: "order-tracking", label: "6. WhatsApp Order Tracking Chatbot" },
      { id: "banking-finance", label: "7. WhatsApp Banking and Financial Services Chatbot" },
      { id: "education", label: "8. WhatsApp Education Chatbot" },
      { id: "marketing", label: "9. WhatsApp Marketing Chatbot" },
      { id: "restaurant", label: "10. WhatsApp Restaurant Chatbot" },
    ]
  },
  { id: "fourth", label: "4. WhatsApp Chatbot Example: Complete Customer Journey" },
  { id: "fifth", label: "5. Key Features of a WhatsApp Chatbot" },
  { id: "sixth", label: "6. WhatsApp Chatbot vs Traditional Customer Support" },
  { id: "seventh", label: "7. Benefits of Using a WhatsApp Chatbot" },
  { id: "eighth", label: "8. How to Create a WhatsApp Chatbot" },
  { id: "ninth", label: "9. Why Businesses Should Use WhatsApp Chatbots" },
  { id: "tenth", label: "10. Frequently Asked Questions" },
];


  return (
    <>  

     <Helmet>

       <meta charSet="utf-8" />
        <title>WhatsApp Chatbot Example: 10 Use Cases for Businesses
</title>
        <meta
          name="description"
          content=" Explore 10 WhatsApp chatbot examples for businesses, including customer support, lead generation, sales, bookings, order tracking, marketing, and more.
"
        />
        <link rel="canonical" href=" https://qmize.com/blog/whatsapp-chatbot-example" />
        

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
         WhatsApp Chatbot Examples: 10 Ways Businesses Can Automate Customer Conversations


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
          Updated on 19 August 2026 • 18 min read
        </p>

        {/* SECTION 1: INTRODUCTION */}
      <section id="first" className="scroll-mt-28 animate-section">
  <img
    src={whatsapp54}
    alt="WhatsApp Chatbot Examples"
    className="mt-2 mb-4 rounded-xl w-full"
  />

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    WhatsApp has become one of the most effective channels for businesses to communicate with customers. From answering frequently asked questions to helping customers place orders, 
    {" "}<Link to="https://qmize.com/blog/whatsapp-chatbot" className="text-blue-600 underline hover:text-blue-800">
              WhatsApp chatbots
            </Link>{" "} can automate conversations and provide instant support without requiring a customer service team to respond to every message manually.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    A WhatsApp chatbot works through predefined conversation flows, automation rules, integrations, or AI to understand customer queries and provide relevant responses. Businesses can use chatbots for sales, customer support, lead generation, bookings, payments, order tracking, and many other use cases.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    This guide covers practical WhatsApp chatbot examples that businesses can use to improve customer engagement and automate repetitive conversations.
  </p>
</section>

{/* SECTION 2: WHAT IS & HOW IT WORKS */}
<section id="second" className="scroll-mt-28 animate-section space-y-6">
  <div className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
      What Is a WhatsApp Chatbot?
    </h2>
    <p className="text-gray-700 text-[15px] sm:text-base">
       A {" "}<Link to="https://qmize.com/blog/whatsapp-chatbot" className="text-blue-600 underline hover:text-blue-800">
              WhatsApp chatbots
            </Link>{" "} is an automated software system that communicates with customers through WhatsApp. It can respond to messages, provide information, collect customer details, guide users through options, and trigger specific actions based on their responses.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-800 space-y-2">
      <p className="font-semibold text-gray-900">Example Interaction:</p>
      <p><strong>Customer:</strong> "Hi"</p>
      <p><strong>Chatbot:</strong> "Hi! Welcome to ABC Store. How can we help you today?"</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Browse Products</li>
        <li>Track Order</li>
        <li>Talk to Support</li>
        <li>Check Offers</li>
      </ul>
      <p className="text-xs text-gray-500 italic mt-2">
        The customer can select an option and continue the conversation without waiting for a human agent. Businesses can build WhatsApp chatbots using the WhatsApp Business Platform and a WhatsApp Business API provider such as Qmize.
      </p>
    </div>
  </div>

  <div className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-2">
      How Does a WhatsApp Chatbot Work?
    </h2>
    <ol className="list-decimal pl-6 space-y-2 text-gray-700 text-[15px] sm:text-base">
      <li>Customer sends a message through WhatsApp.</li>
      <li>Chatbot receives the message through the WhatsApp Business Platform.</li>
      <li>Automation identifies the intent or selected option.</li>
      <li>Chatbot sends an automated response.</li>
      <li>Customer continues the conversation by selecting an option or entering information.</li>
      <li>The chatbot completes an action or transfers the conversation to a human agent when required.</li>
    </ol>
    <p className="text-sm text-gray-600 italic pt-2">
      With AI-powered chatbots, the system can understand more natural customer questions instead of relying only on fixed buttons or keywords.
    </p>
  </div>
</section>

{/* SECTION 3: 10 USE CASES */}
<section id="third" className="scroll-mt-28 animate-section space-y-8">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    10 WhatsApp Chatbot Examples for Businesses
  </h2>

  {/* 1. FAQ Chatbot */}
  <div id="faq-chatbot" className="space-y-4">
    <h3 className="text-lg sm:text-xl font-bold text-gray-900">1. WhatsApp FAQ Chatbot</h3>
    <p className="text-gray-700 text-[15px] sm:text-base">
      One of the most common <span className="font-semibold text-black">WhatsApp chatbot examples</span> is a
       {" "}<Link to="https://qmize.com/blog/faq-chatbot/" className="text-blue-600 underline hover:text-blue-800">
              FAQ chatbots
            </Link>{" "} . Instead of answering repetitive questions about pricing, delivery, or business hours manually, a chatbot provides instant responses.
    </p>
    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 text-sm space-y-1">
      <p><strong>Customer:</strong> What are your delivery charges?</p>
      <p><strong>Chatbot:</strong> Delivery is free for orders above ₹999. For orders below ₹999, a delivery fee of ₹49 applies.</p>
      <p><strong>Customer:</strong> How long does delivery take?</p>
      <p><strong>Chatbot:</strong> Orders are usually delivered within 3–5 business days.</p>
    </div>
    <p className="text-sm font-medium text-emerald-800">
      <span className="font-bold">Best For:</span> E-commerce, service providers, educational institutions, healthcare, travel, and local businesses.
    </p>
  </div>

  {/* 2. Lead Generation */}
  <div id="lead-generation" className="space-y-4">
    <h3 className="text-lg sm:text-xl font-bold text-gray-900">2. WhatsApp Lead Generation Chatbot</h3>
    <p className="text-gray-700 text-[15px] sm:text-base">
      Automatically collect details from prospective buyers and qualify leads through short interactive conversations directly in WhatsApp instead of long forms.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
      <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
        <h5 className="font-semibold text-emerald-800 text-sm mb-1">Key Benefits</h5>
        <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
          <li>Captures leads 24/7</li>
          <li>Reduces manual data collection</li>
          <li>Qualifies prospects automatically</li>
          <li>Helps sales teams prioritize leads</li>
          <li>Improves response speed</li>
        </ul>
      </div>
      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs sm:text-sm">
        <h5 className="font-semibold text-gray-900 mb-1">Example Flow</h5>
        <p><strong>Chatbot:</strong> Which service are you looking for? (SEO / Google Ads / Meta Ads)</p>
        <p><strong>Customer:</strong> SEO</p>
        <p><strong>Chatbot:</strong> Great! What is your monthly marketing budget?</p>
      </div>
    </div>
  </div>

  {/* 3. E-commerce Chatbot */}
  <div id="ecommerce-chatbot" className="space-y-4">
    <h3 className="text-lg sm:text-xl font-bold text-gray-900">3. WhatsApp E-commerce Chatbot</h3>
    <p className="text-gray-700 text-[15px] sm:text-base">
      E-commerce businesses can use WhatsApp chatbots to help customers discover products and complete purchases. A chatbot can display product categories, provide product information, answer questions, share catalogs, and guide customers toward checkout.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2">
      <p className="font-semibold text-gray-900">Example</p>
      <p><strong>Customer:</strong> I need running shoes.</p>
      <p><strong>Chatbot:</strong> Sure! Which type are you looking for?</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Men's Running Shoes</li>
        <li>Women's Running Shoes</li>
        <li>Trail Running Shoes</li>
        <li>Sports Shoes</li>
      </ul>
      <p className="text-xs text-gray-600 italic">
        After the customer selects a category, the chatbot can display relevant products with images, descriptions, prices, and purchase options.
      </p>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">E-commerce chatbot use cases</h4>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
        <li>Product discovery</li>
        <li>Product recommendations</li>
        <li>Catalog browsing</li>
        <li>Order placement</li>
        <li>Cart reminders</li>
        <li>Discount notifications</li>
        <li>Order tracking</li>
      </ul>
    </div>
    <p className="text-gray-700 text-[15px] sm:text-base">
      This creates a conversational shopping experience directly inside WhatsApp.
    </p>
  </div>

  {/* 4. Customer Support Chatbot */}
  <div id="support-chatbot" className="space-y-4">
    <h3 className="text-lg sm:text-xl font-bold text-gray-900">4. WhatsApp Customer Support Chatbot</h3>
    <p className="text-gray-700 text-[15px] sm:text-base">
      A WhatsApp chatbot can provide first-level customer support around the clock.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2">
      <p className="font-semibold text-gray-900">Example (Telecom Support Menu)</p>
      <p><strong>Chatbot:</strong> How can we help you?</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Check Data Balance</li>
        <li>Recharge Account</li>
        <li>Report Network Issue</li>
        <li>View Current Plan</li>
        <li>Talk to an Agent</li>
      </ul>
      <p className="text-xs text-gray-600 italic">
        The chatbot handles routine requests automatically. If a customer has a complex problem, the conversation can be transferred to a human support agent.
      </p>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Why businesses use support chatbots</h4>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
        <li>Faster responses</li>
        <li>24/7 availability</li>
        <li>Lower support workload</li>
        <li>Consistent answers</li>
        <li>Better customer experience</li>
      </ul>
    </div>
  </div>

  {/* 5. Appointment Booking */}
  <div id="appointment-booking" className="space-y-4">
    <h3 className="text-lg sm:text-xl font-bold text-gray-900">5. WhatsApp Appointment Booking Chatbot</h3>
    <p className="text-gray-700 text-[15px] sm:text-base">
      Appointment-based businesses can use WhatsApp chatbots to schedule appointments automatically. This is particularly useful for clinics, salons, consultants, repair services, fitness centers, and professional service providers.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2">
      <p className="font-semibold text-gray-900">Example</p>
      <p><strong>Customer:</strong> I want to book an appointment.</p>
      <p><strong>Chatbot:</strong> Sure. Please select a service.</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Consultation</li>
        <li>Follow-up</li>
        <li>General Enquiry</li>
      </ul>
      <p><strong>Customer:</strong> Consultation</p>
      <p><strong>Chatbot:</strong> Please select a preferred date.</p>
      <p className="text-xs text-gray-600 italic">
        The chatbot can then display available time slots and confirm the appointment.
      </p>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Additional features</h4>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
        <li>Appointment confirmation</li>
        <li>Automated reminders</li>
        <li>Rescheduling</li>
        <li>Cancellation</li>
        <li>Calendar integration</li>
        <li>Follow-up messages</li>
      </ul>
    </div>
    <p className="text-gray-700 text-[15px] sm:text-base">
      This reduces phone calls and manual appointment management.
    </p>
  </div>

  {/* 6. Order Tracking Chatbot */}
  <div id="order-tracking" className="space-y-4">
    <h3 className="text-lg sm:text-xl font-bold text-gray-900">6. WhatsApp Order Tracking Chatbot</h3>
    <p className="text-gray-700 text-[15px] sm:text-base">
      Customers frequently ask businesses questions such as "Where is my order?" or "When will my package arrive?" A WhatsApp chatbot can automate these queries by connecting with an order management or logistics system.
    </p>
    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 text-sm space-y-1">
      <p className="font-semibold text-emerald-900 mb-1">Example</p>
      <p><strong>Customer:</strong> Track my order.</p>
      <p><strong>Chatbot:</strong> Please enter your order number.</p>
      <p><strong>Customer:</strong> QM12345</p>
      <p><strong>Chatbot:</strong> Your order #QM12345 has been shipped and is expected to arrive on August 18.</p>
      <p className="text-xs text-emerald-800 italic pt-1">
        The chatbot can also provide tracking links and delivery updates.
      </p>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Best for</h4>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
        <li>E-commerce stores</li>
        <li>Food delivery businesses</li>
        <li>Logistics companies</li>
        <li>Courier services</li>
        <li>Retail businesses</li>
      </ul>
    </div>
  </div>

  {/* 7. Banking & Finance */}
  <div id="banking-finance" className="space-y-4">
    <h3 className="text-lg sm:text-xl font-bold text-gray-900">7. WhatsApp Banking and Financial Services Chatbot</h3>
    <p className="text-gray-700 text-[15px] sm:text-base">
      Financial institutions and fintech businesses can use WhatsApp chatbots for basic customer services.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2">
      <p className="font-semibold text-gray-900">Example</p>
      <p><strong>Chatbot:</strong> Welcome to ABC Finance. Please select an option:</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Check Account Information</li>
        <li>Loan Enquiry</li>
        <li>EMI Information</li>
        <li>Find Branch</li>
        <li>Contact Support</li>
      </ul>
      <p className="text-xs text-gray-600 italic">
        The chatbot can answer general questions, collect enquiry details, and direct customers to secure channels for sensitive transactions.
      </p>
    </div>
    <p className="text-gray-700 text-[15px] sm:text-base">
      Businesses operating in financial services should implement appropriate security, privacy, authentication, and regulatory controls.
    </p>
  </div>

  {/* 8. Education Chatbot */}
  <div id="education-chatbot" className="space-y-4">
    <h3 className="text-lg sm:text-xl font-bold text-gray-900">8. WhatsApp Education Chatbot</h3>
    <p className="text-gray-700 text-[15px] sm:text-base">
      Schools, colleges, coaching institutes, and online education companies can use WhatsApp chatbots to communicate with students and parents.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2">
      <p className="font-semibold text-gray-900">Example</p>
      <p><strong>Student:</strong> I want information about the MBA course.</p>
      <p><strong>Chatbot:</strong> Here are the available options:</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Course Details</li>
        <li>Eligibility</li>
        <li>Fees</li>
        <li>Admission Process</li>
        <li>Download Brochure</li>
        <li>Speak to Counsellor</li>
      </ul>
      <p className="text-xs text-gray-600 italic">
        The chatbot can also help with admission enquiries, course recommendations, class schedules, reminders, and application updates.
      </p>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Education chatbot use cases</h4>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
        <li>Admission enquiries</li>
        <li>Course information</li>
        <li>Fee information</li>
        <li>Exam reminders</li>
        <li>Class notifications</li>
        <li>Lead qualification</li>
        <li>Student support</li>
      </ul>
    </div>
  </div>

  {/* 9. Marketing Chatbot */}
  <div id="marketing-chatbot" className="space-y-4">
    <h3 className="text-lg sm:text-xl font-bold text-gray-900">9. WhatsApp Marketing Chatbot</h3>
    <p className="text-gray-700 text-[15px] sm:text-base">
      WhatsApp chatbots can also support marketing campaigns by turning customer interactions into two-way conversations.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2">
      <p className="font-semibold text-gray-900">Example</p>
      <p><strong>Business:</strong> Get 20% off on selected products this weekend. Want to see the latest offers?</p>
      <p><strong>Customer:</strong> Yes</p>
      <p><strong>Chatbot:</strong> Great! Which category interests you?</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Electronics</li>
        <li>Fashion</li>
        <li>Home & Kitchen</li>
        <li>All Offers</li>
      </ul>
      <p className="text-xs text-gray-600 italic">
        Instead of sending customers to a generic webpage, the chatbot can guide them through a personalized conversation.
      </p>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Marketing chatbot use cases</h4>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
        <li>Promotional campaigns</li>
        <li>Product launches</li>
        <li>Personalized offers</li>
        <li>Customer surveys</li>
        <li>Lead generation</li>
        <li>Campaign follow-ups</li>
        <li>Click-to-WhatsApp Ads</li>
      </ul>
    </div>
    <p className="text-gray-700 text-[15px] sm:text-base">
      Businesses should follow WhatsApp and applicable marketing-consent requirements when sending promotional messages.
    </p>
  </div>

  {/* 10. Restaurant Chatbot */}
  <div id="restaurant-chatbot" className="space-y-4">
    <h3 className="text-lg sm:text-xl font-bold text-gray-900">10. WhatsApp Restaurant Chatbot</h3>
    <p className="text-gray-700 text-[15px] sm:text-base">
      Restaurants can use WhatsApp chatbots to automate menu enquiries, table reservations, food orders, and customer support.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2">
      <p className="font-semibold text-gray-900">Example</p>
      <p><strong>Customer:</strong> Show me the menu.</p>
      <p><strong>Chatbot:</strong> What would you like to explore?</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Starters</li>
        <li>Main Course</li>
        <li>Desserts</li>
        <li>Beverages</li>
        <li>Today's Offers</li>
      </ul>
      <p className="text-xs text-gray-600 italic">
        The chatbot can then share menu items and guide customers through ordering.
      </p>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Restaurant chatbot use cases</h4>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base">
        <li>Menu sharing</li>
        <li>Table reservations</li>
        <li>Food ordering</li>
        <li>Delivery enquiries</li>
        <li>Order status</li>
        <li>Offers and promotions</li>
        <li>Customer feedback</li>
      </ul>
    </div>
  </div>
</section>


<section id="fourth" className="scroll-mt-28 animate-section space-y-6">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    WhatsApp Chatbot Example: Complete Customer Journey
  </h2>
  <p className="text-gray-700 text-[15px] sm:text-base">
    Here is an example of how a business can use a chatbot to handle a customer from the first message through purchase.
  </p>

  <div className="space-y-4">
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2">
      <p className="font-semibold text-gray-900">Step 1: Greeting</p>
      <p><strong>Customer:</strong> Hi</p>
      <p><strong>Chatbot:</strong> Welcome to Qmize! How can we help you?</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>WhatsApp Business API</li>
        <li>Bulk SMS</li>
        <li>Digital Marketing</li>
        <li>Talk to Sales</li>
      </ul>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2">
      <p className="font-semibold text-gray-900">Step 2: Customer selects a service</p>
      <p><strong>Customer:</strong> WhatsApp Business API</p>
      <p><strong>Chatbot:</strong> WhatsApp Business API helps businesses manage customer conversations, automate messaging, generate leads, and provide customer support on WhatsApp.</p>
      <p className="text-gray-700 font-medium pt-1">Would you like to:</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>See Features</li>
        <li>Check Pricing</li>
        <li>Book a Demo</li>
        <li>Talk to an Expert</li>
      </ul>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2">
      <p className="font-semibold text-gray-900">Step 3: Lead qualification</p>
      <p><strong>Customer:</strong> Book a Demo</p>
      <p><strong>Chatbot:</strong> Please provide your name.</p>
      <p><strong>Customer:</strong> Rahul</p>
      <p><strong>Chatbot:</strong> Please provide your business email.</p>
      <p><strong>Customer:</strong> rahul@example.com</p>
      <p><strong>Chatbot:</strong> What type of business do you operate?</p>
      <p className="text-xs text-gray-600 italic pt-1">
        The chatbot can collect the required information and send the qualified lead to the sales team.
      </p>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2">
      <p className="font-semibold text-gray-900">Step 4: Human handover</p>
      <p><strong>Chatbot:</strong> Thanks, Rahul. A sales specialist will contact you shortly. Would you like to continue chatting with our support team?</p>
    </div>
  </div>

  <p className="text-gray-700 text-[15px] sm:text-base pt-2">
    This combination of automation and human support creates a smoother customer journey.
  </p>
</section>

<section id="fifth" className="scroll-mt-28 animate-section space-y-8">
  {/* Key Features of a WhatsApp Chatbot */}
  <div className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-emerald-700">
      Key Features of a WhatsApp Chatbot
    </h2>
    <p className="text-gray-700 text-[15px] sm:text-base">
      When choosing a WhatsApp chatbot platform, look for features that support both automation and business growth.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">1. No-Code Chatbot Builder</h3>
        <p className="text-gray-700 text-xs sm:text-sm">
          A visual chatbot builder allows businesses to create automated conversation flows without extensive programming.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">2. Automated Replies</h3>
        <p className="text-gray-700 text-xs sm:text-sm">
          Chatbots can instantly respond to frequently asked questions and common customer requests.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">3. Interactive Buttons</h3>
        <p className="text-gray-700 text-xs sm:text-sm">
          Buttons and lists make it easier for customers to navigate conversations.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">4. Shared Team Inbox</h3>
        <p className="text-gray-700 text-xs sm:text-sm">
          A shared inbox allows multiple agents to manage customer conversations from one place.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">5. CRM Integration</h3>
        <p className="text-gray-700 text-xs sm:text-sm">
          Integration with CRM systems helps businesses synchronize customer information and sales activities.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">6. AI-Powered Conversations</h3>
        <p className="text-gray-700 text-xs sm:text-sm">
          AI can help chatbots understand natural-language questions and provide more flexible responses.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">7. Human Handover</h3>
        <p className="text-gray-700 text-xs sm:text-sm">
          When automation is not enough, customers should be able to connect with a human agent.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">8. Analytics</h3>
        <p className="text-gray-700 text-xs sm:text-sm">
          Analytics can help businesses monitor conversations, leads, response rates, and chatbot performance.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">9. Broadcast and Campaign Support</h3>
        <p className="text-gray-700 text-xs sm:text-sm">
          Businesses can combine chatbot automation with WhatsApp marketing campaigns to engage customers at scale, subject to WhatsApp policies and user consent.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">10. Workflow Automation</h3>
        <p className="text-gray-700 text-xs sm:text-sm">
          Advanced platforms can trigger actions based on customer responses, events, or data from connected systems.
        </p>
      </div>
    </div>
  </div>

  {/* How to Create a WhatsApp Chatbot */}
 
</section>


{/* SECTION 4: COMPARISON TABLE */}
<section id="sixth" className="scroll-mt-28 animate-section space-y-6">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    WhatsApp Chatbot vs Traditional Customer Support
  </h2>
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300">
      <thead className="bg-green-100">
        <tr>
          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Feature</th>
          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">WhatsApp Chatbot</th>
          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Traditional Support</th>
        </tr>
      </thead>
      <tbody className="text-gray-700 text-[15px] sm:text-base">
        <tr>
          <td className="border border-gray-300 px-4 py-3 font-semibold">Availability</td>
          <td className="border border-gray-300 px-4 py-3">24/7</td>
          <td className="border border-gray-300 px-4 py-3">Usually limited by working hours</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3 font-semibold">Response speed</td>
          <td className="border border-gray-300 px-4 py-3">Instant</td>
          <td className="border border-gray-300 px-4 py-3">Depends on agent availability</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3 font-semibold">Repetitive queries</td>
          <td className="border border-gray-300 px-4 py-3">Automated</td>
          <td className="border border-gray-300 px-4 py-3">Handled manually</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3 font-semibold">Scalability</td>
          <td className="border border-gray-300 px-4 py-3">High</td>
          <td className="border border-gray-300 px-4 py-3">Requires additional staff</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3 font-semibold">Lead qualification</td>
          <td className="border border-gray-300 px-4 py-3">Automated</td>
          <td className="border border-gray-300 px-4 py-3">Manual</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3 font-semibold">Human interaction</td>
          <td className="border border-gray-300 px-4 py-3">Available when needed</td>
          <td className="border border-gray-300 px-4 py-3">Primary method</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3 font-semibold">Data collection</td>
          <td className="border border-gray-300 px-4 py-3">Automated</td>
          <td className="border border-gray-300 px-4 py-3">Often manual</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

{/* SECTION 5: HOW TO CREATE, BENEFITS & FAQ */}
<section id="seventh" className="scroll-mt-28 animate-section space-y-8">

     {/* Benefits of Using a WhatsApp Chatbot */}
  <div className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-emerald-700">
      Benefits of Using a WhatsApp Chatbot
    </h2>
    <div className="grid grid-cols-1 gap-4">
      <div className="space-y-1">
        <h3 className="font-semibold text-gray-900 text-base">Faster Customer Responses</h3>
        <p className="text-gray-700 text-sm">
          Customers do not have to wait for a support representative to answer simple questions.
        </p>
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-gray-900 text-base">24/7 Customer Engagement</h3>
        <p className="text-gray-700 text-sm">
          A chatbot can continue responding outside normal business hours.
        </p>
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-gray-900 text-base">Lower Operational Workload</h3>
        <p className="text-gray-700 text-sm">
          Automating repetitive queries allows employees to focus on more important tasks.
        </p>
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-gray-900 text-base">Better Lead Management</h3>
        <p className="text-gray-700 text-sm">
          Chatbots can collect and qualify customer information before passing leads to sales teams.
        </p>
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-gray-900 text-base">Improved Customer Experience</h3>
        <p className="text-gray-700 text-sm">
          Interactive conversations can make it easier for customers to find information and complete actions.
        </p>
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-gray-900 text-base">Higher Scalability</h3>
        <p className="text-gray-700 text-sm">
          Businesses can handle a larger number of conversations without increasing their support team at the same rate.
        </p>
      </div>
    </div>
  </div>
  </section>

  <section id="eighth" className="scroll-mt-28 animate-section space-y-8">
  {/* How to Create a WhatsApp Chatbot */}
  <div className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-emerald-700">
      How to Create a WhatsApp Chatbot
    </h2>
    <ol className="list-decimal pl-6 space-y-2 text-gray-700 text-[15px] sm:text-base">
      <li><strong>Define Your Objective:</strong> Identify key goals (Support, Leads, Booking, Tracking).</li>
      <li><strong>Map the Conversation:</strong> Outline user greetings, menu paths, and agent handover logic.</li>
      <li><strong>Choose a WhatsApp Business API Platform:</strong> Select a provider like Qmize.</li>
      <li><strong>Create Automation Flows:</strong> Design conversations using a no-code visual builder.</li>
      <li><strong>Connect Business Systems:</strong> Integrate your CRM, e-commerce, or booking software.</li>
      <li><strong>Test & Refine:</strong> Run tests on sample interactions and optimize using analytics.</li>
    </ol>
  </div>
  </section>




<section id="ninth" className="scroll-mt-28 animate-section space-y-8">
{/* Why Businesses Should Use WhatsApp Chatbots */}
  <div className="space-y-4 pt-4">
    <h2 className="text-xl sm:text-2xl font-bold text-emerald-700">
      Why Businesses Should Use WhatsApp Chatbots
    </h2>
    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
      WhatsApp chatbots can turn a simple messaging channel into an automated customer engagement platform. Businesses can use them to answer questions, generate leads, sell products, schedule appointments, track orders, and provide customer support.
    </p>
    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
      The most effective chatbot strategy combines automation with human support. Simple and repetitive requests can be handled automatically, while complicated conversations can be transferred to trained agents.
    </p>
    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
      For businesses looking to implement WhatsApp automation, Qmize provides solutions for WhatsApp Business API, chatbot automation, bulk messaging, and digital marketing. A well-designed WhatsApp chatbot can help businesses respond faster, improve customer engagement, and manage conversations more efficiently.
    </p>
  </div>
</section>

{/* SECTION: FREQUENTLY ASKED QUESTIONS */}
<section id="tenth" className="scroll-mt-28 animate-section space-y-6">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-6">
    Frequently Asked Questions
  </h2>

  <div className="space-y-4">
    <details className="border rounded-lg p-4 bg-white group">
      <summary className="font-semibold cursor-pointer text-gray-800">
        What is a WhatsApp chatbot?
      </summary>
      <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
        A WhatsApp chatbot is an automated system that communicates with customers through WhatsApp. It can answer questions, collect information, provide support, generate leads, and automate business processes.
      </p>
    </details>

    <details className="border rounded-lg p-4 bg-white group">
      <summary className="font-semibold cursor-pointer text-gray-800">
        What are some WhatsApp chatbot examples?
      </summary>
      <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Common examples include FAQ chatbots, customer support chatbots, lead generation chatbots, e-commerce chatbots, appointment booking chatbots, order tracking chatbots, education chatbots, marketing chatbots, and restaurant chatbots.
      </p>
    </details>

    <details className="border rounded-lg p-4 bg-white group">
      <summary className="font-semibold cursor-pointer text-gray-800">
        Can a WhatsApp chatbot generate leads?
      </summary>
      <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Yes. A WhatsApp chatbot can collect customer details, ask qualification questions, identify customer requirements, and send qualified leads to a sales team.
      </p>
    </details>

    <details className="border rounded-lg p-4 bg-white group">
      <summary className="font-semibold cursor-pointer text-gray-800">
        Can WhatsApp chatbots handle customer support?
      </summary>
      <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Yes. Chatbots can handle common support questions and repetitive requests. More complex conversations can be transferred to human agents.
      </p>
    </details>

    <details className="border rounded-lg p-4 bg-white group">
      <summary className="font-semibold cursor-pointer text-gray-800">
        Can a WhatsApp chatbot be connected to a CRM?
      </summary>
      <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Yes. Depending on the platform and integration capabilities, a WhatsApp chatbot can connect with CRM systems and other business applications to synchronize customer information and automate workflows.
      </p>
    </details>

    <details className="border rounded-lg p-4 bg-white group">
      <summary className="font-semibold cursor-pointer text-gray-800">
        Is a WhatsApp chatbot available 24/7?
      </summary>
      <p className="mt-2 text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Yes. Automated WhatsApp chatbots can respond to customers around the clock, even when a business's support team is offline.
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