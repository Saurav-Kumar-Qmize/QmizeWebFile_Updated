import { useState,useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";

import { Helmet } from "react-helmet";
import ontop from "../../assets/Images/whatsappchecklist.jpeg"
import Footer from "../Common/Footer";
import {Link} from "react-router-dom";
import christmasImage from "../../assets/Images/christmas_offer_blog.webp";

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
  { id: "first", label: "1. In Brief" },
  { id: "second", label: "2. Define the Role of Whatsapp" },
  

  

  {
    id: "third",
    label: "3. Get your whatsapp account ready",
   
  },

  { id: "fourth", label: "4. Build a Reliable Technical Architecture" },
  { id: "fifth", label: "5. Integrate Core Business" },
  { id: "sixth", label: "6. Test Everything before going live" },
  { id: "seventh", label: "7. Monitor , Review and Maintain" },
  { id: "eighth", label: "8. Why this checklist helps you Avoid" },
  { id: "ninth", label: "9. Why use Qmize for Whatsapp API Integration" },
  
];
  return (

    <>

    <Helmet>
    
           <meta charSet="utf-8" />
            <title>The Ultimate WhatsApp API Integration Checklist for Growing Businesses (2026) | Qmize</title>
            <meta
              name="description"
              content="Discover 5 powerful WhatsApp Business Account features that help sales teams boost conversions, automate chats, and scale faster with Qmize."
            />
            <link rel="canonical" href="https://qmize.com/blog/the-ultimate-whatsapp-api-integration-checklist" />
    
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
The Ultimate WhatsApp API Integration Checklist for Growing Businesses (2026)

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
  Updated on 10 Feb 2026 • 15 min read
</p>


        {/* INTRO */}
<section className="w-full py-5 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

            {/* Header */}
        {/* <div className="text-left mb-8">
          <h1 className="text-2xl font-medium text-black mb-2">
            The Ultimate WhatsApp API Integration Checklist for Growing Businesses (2026)
          </h1>
        </div> */}

        {/* summery */}
        <section id="first">
            <div className="max-w-4xl mx-auto px-6 mb-7">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4">
            Too Long? Read This First
        </h2>

        <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
            WhatsApp API should be treated as core infrastructure, not a quick plugin
            </li>
            <li>
            Meta approvals, account quality, and messaging limits directly impact scale
            </li>
            <li>
            Poor architecture leads to delays, broken automation, and lost message context
            </li>
            <li>
            Integrations should be driven by business intent, not just tools
            </li>
            <li>
            Continuous testing and monitoring help prevent failures as message volume grows
            </li>
        </ul>
        </div>
        </section>


        {/* Why Most WhatsApp API Integrations Fail Over Time */}
        <section>
            <div className="max-w-4xl mx-auto px-6 mb-7">
        {/* <h2 className="text-2xl font-bold text-emerald-600 mb-4">
            Too Long? Read This First
        </h2> */}
            {/* Image */}
          <div className="w-full h-full mb-8">
            <img
              src={ontop}
              alt="WhatsApp Verification"
              className="w-full h-full object-cover rounded-2xl shadow-lg shadow-blue-300"
            />
          </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
            Most WhatsApp API integrations don’t fail immediately. They fail gradually.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
            As businesses grow, reply times increase, agents duplicate responses,
            automation breaks, and customer context is lost between ads, CRM, support,
            and orders. This usually happens when WhatsApp is added quickly without
            proper system design.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
            Growing businesses often integrate WhatsApp to move fast, but skip architecture.
             When volume increases, they are forced to rebuild workflows live, impacting customers and teams.
            </p>

            <p className="text-gray-700 leading-relaxed">
            This checklist helps you design WhatsApp API integration the right way 
            from day one, so it scales smoothly with your business.
            </p>
        </div>
        </section>



        {/* Define the Role of WhatsApp in Your Business */}
        <section id="second">
            <div className='max-w-4xl mx-auto px-6'>
                <h2 className="text-2xl font-bold text-emerald-600 mb-4">
            Step 1: Define the Role of WhatsApp in Your Business
        </h2>

        <p className="text-gray-600 mb-4 leading-relaxed">
            Before integrating anything, clearly define what WhatsApp should handle.
        </p>

        <p className="text-gray-600 mb-4 leading-relaxed">
            For most growing businesses, WhatsApp plays multiple roles:
        </p>

        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
            <li>First-response channel for new leads</li>
            <li>Ongoing customer support inbox</li>
            <li>Transactional updates such as orders, payments, and appointments</li>
        </ul>

        <p className="text-gray-600 mb-3 leading-relaxed">
            Next, decide the following:
        </p>

        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
            <li>What conversations should be automated</li>
            <li>What needs human agents</li>
            <li>•	Which system owns customer context</li>
        </ul>

        <p className="text-gray-600 leading-relaxed font-medium mb-6">
            👉 Most businesses start with CRM, then ecommerce, followed by marketing automation, payments, or scheduling tools.
        </p>

            </div>
        </section>

        {/* Get Your WhatsApp Account Ready */}
        <section id="third">
            <div className="max-w-4xl mx-auto px-6" >
                <h2 className="text-2xl font-bold text-emerald-600 mb-4">
                Step 2: Get Your WhatsApp Account Ready
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
                Your WhatsApp API setup is only as strong as your Meta account foundation.
            </p>

            <p className="text-gray-600 mb-3 leading-relaxed">
                Before integrating via Qmize, ensure you have:
            </p>

            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                <li>Verified Meta Business Manager</li>
                <li>A phone number not used on the WhatsApp consumer app</li>
                <li>Display name that matches your brand and website</li>
                <li>Complete business profile (logo, category, description)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Messaging Limits Matter
            </h3>

            <p className="text-gray-600 mb-3 leading-relaxed">
                Meta does not grant high messaging limits upfront. Limits increase based on:
            </p>

            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                <li>User engagement</li>
                <li>Message quality</li>
                <li>Low block and report rates</li>
            </ul>

            <p className="text-gray-600 mb-4 leading-relaxed">
               Poor engagement or frequent blocks reduce limits, becoming a hidden growth bottleneck later.
            </p>

            <p className="text-gray-600 leading-relaxed font-medium mb-6">
                That’s why account readiness is as important as integrations.
            </p>
            </div>
        </section>


        {/* Build a Reliable Technical Architecture */}
        <section id="fourth">
            <div className='max-w-4xl mx-auto px-6'>
                <h2 className="text-2xl font-bold text-emerald-600 mb-6">
            Step 3: Build a Reliable Technical Architecture
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-lg mb-8">
            Behind every WhatsApp API integration are three core components:
            </p>

            {/* Table */}
            <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="px-6 py-3 text-gray-700 font-semibold">Component</th>
                    <th className="px-6 py-3 text-gray-700 font-semibold">Purpose</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 text-gray-800">Webhooks</td>
                    <td className="px-6 py-4 text-gray-800">Receive incoming messages & delivery updates</td>
                </tr>
                <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 text-gray-800">Message sender</td>
                    <td className="px-6 py-4 text-gray-800">Send templates and replies</td>
                </tr>
                <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 text-gray-800">Data layer</td>
                    <td className="px-6 py-4 text-gray-800">Store message IDs & customer context</td>
                </tr>
                </tbody>
            </table>
            </div>

            {/* Checklist */}
            <p className="text-gray-700 text-lg mb-4">Before going live:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Separate test and production environments</li>
            <li>Log message IDs and delivery statuses</li>
            <li>Ensure webhook reliability and retries</li>
            </ul>

            <p className="text-gray-700 text-lg mt-6 mb-7">
            A clean architecture prevents failures when traffic spikes.
            </p>
            </div>
        </section>

        {/* Integrate Core Business Systems */}
        <section id="fifth">
            <div className='max-w-4xl mx-auto px-6 mb-5'>
                <h2 className="text-2xl font-bold text-emerald-600 mb-6">
            Step 4: Integrate Core Business Systems
            </h2>

            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            CRM Integrations
            </h3>

            
            <p className="text-gray-700 text-lg mb-6">
            CRM integration ensures WhatsApp conversations never lose context. With Qmize, businesses connect WhatsApp to CRMs so that:
            </p>

            
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>New WhatsApp chats create or update leads</li>
            <li>Agents see CRM data inside conversations</li>
            <li>CRM actions trigger WhatsApp follow-ups</li>
            </ul>

            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Supported use cases:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Sales qualification</li>
            <li>Lead lifecycle automation</li>
            <li>Support ownership</li>
            </ul>

             <h2 className="text-2xl font-bold text-emerald-600 mb-6">
        Ecommerce Integrations
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg mb-6">
        Ecommerce is where WhatsApp delivers maximum value. When integrated properly, WhatsApp can handle:
        </p>

        {/* Use Cases */}
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Order confirmations and shipping updates</li>
        <li>COD verification</li>
        <li>Abandoned cart recovery</li>
        <li>Pre- and post-purchase support</li>
        </ul>

        {/* Best Practices */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Key best practices:
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Always reference correct order details</li>
        <li>Test checkout and payment flows end-to-end</li>
        <li>Keep conversations tied to real purchases</li>
        </ul>

        <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            Marketing Automation Integrations
        </h2>

        <p className="text-gray-700 mb-4">
            WhatsApp works best when it supports existing campaigns, not replaces them.
            With automation tools:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Email clicks can trigger WhatsApp messages</li>
            <li>Lifecycle stage changes can start follow-ups</li>
            <li>Retargeting becomes more personal and timely</li>
        </ul>

        <p className="text-gray-700 mt-4">
            This keeps messaging consistent across channels.
        </p>

         <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            Payment &amp; Invoice Integrations
        </h2>

        <p className="text-gray-700 mb-4">
            Payments often cause drop-offs when they move outside chat.
            With proper integration:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Payment links or invoices are sent directly on WhatsApp</li>
            <li>Customers complete payments without switching channels</li>
            <li>Teams track payment status inside conversations</li>
        </ul>

        <p className="text-gray-700 mt-4">
            Result: faster closures, fewer follow-ups.
        </p>

         <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            Productivity Integrations
        </h2>

        <p className="text-gray-700 mb-4">
            For simpler operations, WhatsApp can integrate with everyday tools:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Google Sheets for bulk messaging and personalization</li>
            <li>Calendars for appointment reminders and rescheduling</li>
        </ul>

        <p className="text-gray-700 mt-4">
            These are ideal for small teams, campaigns, and service-based businesses.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            Automation Platforms (Event-Based Messaging)
        </h2>

        <p className="text-gray-700 mb-4">
            Automation platforms help WhatsApp react instantly to events like:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Form submissions</li>
            <li>Sign-ups</li>
            <li>Purchases</li>
            <li>Status changes</li>
        </ul>

        <p className="text-gray-700 mt-4">
            Instead of building custom logic, WhatsApp messages are triggered automatically
            based on defined conditions.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            Fallback &amp; Multi-Channel Setup
        </h2>

        <p className="text-gray-700 mb-4">
            For critical messages (OTPs, alerts, payments), WhatsApp alone is not enough.
            Best practices include:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>SMS fallback if WhatsApp delivery fails</li>
            <li>Rules to avoid duplicate messages</li>
            <li>Consistent content across channels</li>
        </ul>

        <p className="text-gray-700 mt-4">
            This ensures important messages always reach customers.
        </p>

            </div>
        </section>


        {/* Test Everything Before Going Live */}
        <section id="sixth">
             <div className="max-w-4xl mx-auto px-6 mb-5">
            <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            Step 5: Test Everything Before Going Live
        </h2>

        <p className="text-gray-700 mb-4">
            Never test on real customers. Before launch:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Simulate lead flow from ads</li>
            <li>Test CRM updates and agent routing</li>
            <li>Complete payment flows</li>
            <li>Trigger automation edge cases</li>
        </ul>

        <p className="text-gray-700 mt-4">
            If something feels unclear during testing, it will break at scale.
        </p>

       
    </div>
        </section>


        {/* Monitor, Review, and Maintain */}
        <section id="seventh">
            <div className="max-w-4xl mx-auto px-6 mb-5">
        <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            Step 6: Monitor, Review, and Maintain
        </h2>

        <p className="text-gray-700 mb-4">
            WhatsApp integration is not “set and forget”. You should regularly monitor:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Message delivery and failures</li>
            <li>Opt-out and block rates</li>
            <li>Webhook health</li>
            <li>Template performance</li>
        </ul>

        <p className="text-gray-700 mt-4">
            Over time:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Review templates and timing</li>
            <li>Audit integrations as tools evolve</li>
            <li>Adjust workflows as volume grows</li>
        </ul>

        <p className="text-gray-700 mt-4">
            Early detection prevents expensive rebuilds later.
        </p>

         <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            What This Checklist Helps You Avoid
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Broken automation at high volume</li>
            <li>Lost customer context</li>
            <li>Reduced messaging limits</li>
            <li>Live workflow rebuilds</li>
            <li>Poor customer experience</li>
        </ul>

        <p className="text-gray-700 mt-4">
            With the right foundation, WhatsApp becomes a reliable growth system,
            not a fragile tool.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            Why Use Qmize for WhatsApp API Integration?
        </h2>

        <p className="text-gray-700 mb-4">
            Qmize helps growing businesses:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Set up WhatsApp Business API correctly</li>
            <li>Design scalable integration architecture</li>
            <li>Connect CRM, ecommerce, automation, and payments</li>
            <li>Stay compliant with Meta policies</li>
            <li>Scale messaging safely and efficiently</li>
        </ul>

        <p className="text-gray-700 mt-4">
            If you’re planning to integrate WhatsApp API, or already facing scaling issues,
            Qmize helps you fix it before it breaks.
        </p>

        <hr className="my-8 border-gray-200" />

        <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            🚀 Ready to Build a Scalable WhatsApp System?
        </h2>

        <p className="text-gray-700">
            Talk to the Qmize team and get a clear roadmap tailored to your business needs.
        </p>
        </div>
        </section>
    

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
  )
}

export default WhatsAppAPI
























