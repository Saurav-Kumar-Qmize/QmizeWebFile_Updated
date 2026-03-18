import { useState,useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";

import { Helmet } from "react-helmet";
import ontop from "../../assets/Images/whatsapp-auto-reply.jpeg"






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
  { id: "first", label: "1. WhatsApp Auto Reply" },
  { id: "second", label: "2. What Is WhatsApp Auto Reply?" },
  

  

  {
    id: "third",
    label: "3. Benefits of Using WhatsApp Auto Reply with Qmize",
   
  },

  { id: "fourth", label: "4. WhatsApp Business App Auto Reply (For Small Businesses)" },
  { id: "fifth", label: "5. (For Medium & Large Businesses)" },
  { id: "sixth", label: "7. How to Set Auto Reply in WhatsApp Business App" },
  { id: "seventh", label: "8. How to Set Auto Reply Using WhatsApp Business API" },
  { id: "eighth", label: "9. Examples of WhatsApp Auto Reply Messages" },
  { id: "ninth", label: "10. Comparison Table" },
  { id: "tenth", label: "10. FAQs" },
  
  
];


  return (
    <>  

     <Helmet>

       <meta charSet="utf-8" />
        <title>WhatsApp Auto Reply for Business | Automate Customer Support with Qmize</title>
        <meta
          name="description"
          content="Boost customer engagement with WhatsApp Auto Reply using Qmize. Automate replies, reduce response time, integrate CRM, and scale your business with WhatsApp Business API."
        />
        <link rel="canonical" href="https://qmize.com/blog/whatsapp-auto-reply" />

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
WhatsApp Auto Reply: Boost Your Business Communication with Qmize

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
  Updated on 07 Jan 2026 • 18 min read
</p>


        {/* INTRO */}
      <section id="first" className="scroll-mt-28 animate-section">
  <h1 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-4">
    WhatsApp Auto Reply
  </h1>
  <img
    src={ontop}
    alt="Whatsapp Auto Reply"
    className="mt-2 mb-4 rounded-xl"
  />

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    In today’s fast-paced digital business environment, customers expect instant
    responses. With more than <strong>3 billion active users</strong>, WhatsApp
    has become one of the most powerful communication channels for businesses.
    However, managing hundreds or thousands of customer messages manually is no
    longer practical.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    This is where <strong>WhatsApp Auto Reply</strong> plays a crucial role.
  </p>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    With <strong>Qmize</strong>, businesses can automate WhatsApp responses,
    ensure 24/7 availability, reduce workload on support teams, and deliver a
    consistent customer experience. Whether you are a startup, a growing
    business, or an enterprise, Qmize helps you automate smarter and grow faster
    using the <strong>WhatsApp Business API</strong>.
  </p>
</section>




<section id="second" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    What Is WhatsApp Auto Reply?
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    A WhatsApp auto reply is an automated message that is instantly sent when a
    customer messages your business. It works like a virtual assistant,
    ensuring no message goes unanswered, even outside business hours.
  </p>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    Using <strong>Qmize’s WhatsApp Business API</strong>, businesses can create:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Greeting messages</li>
    <li>• Away messages</li>
    <li>• FAQ-based replies</li>
    <li>• Keyword-triggered responses</li>
    <li>• AI chatbot conversations</li>
  </ul>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    Unlike manual replies, WhatsApp automatic replies save time, improve
    response speed, and increase customer satisfaction.
  </p>
</section>




<section id="third" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Benefits of Using WhatsApp Auto Reply with Qmize
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    Implementing WhatsApp auto reply through <strong>Qmize</strong> offers
    multiple advantages:
  </p>

  <div className="space-y-4 text-gray-700 text-[15px] sm:text-base">
    <div>
      <p className="font-semibold text-gray-800">🔹 24/7 Customer Availability</p>
      <p>
        Never miss a lead or customer query, even after office hours.
      </p>
    </div>

    <div>
      <p className="font-semibold text-gray-800">🔹 Faster Response Time</p>
      <p>
        Instant replies improve customer trust and reduce drop-offs.
      </p>
    </div>

    <div>
      <p className="font-semibold text-gray-800">
        🔹 Improved Customer Experience
      </p>
      <p>
        Consistent, accurate, and timely responses keep customers engaged.
      </p>
    </div>

    <div>
      <p className="font-semibold text-gray-800">
        🔹 Lead Qualification & Sales Automation
      </p>
      <p>
        Automatically capture leads, ask qualifying questions, and route hot
        leads to sales teams.
      </p>
    </div>

    <div>
      <p className="font-semibold text-gray-800">
        🔹 Scalability for Growing Businesses
      </p>
      <p>
        Handle thousands of conversations simultaneously with WhatsApp Business
        API.
      </p>
    </div>

    <div>
      <p className="font-semibold text-gray-800">🔹 Cost Efficiency</p>
      <p>
        Reduce dependency on large support teams by automating repetitive
        queries.
      </p>
    </div>
  </div>

  <p className="text-gray-700 leading-relaxed mt-6 text-[15px] sm:text-base">
    Qmize combines automation, analytics, and CRM integrations into one powerful
    platform.
  </p>
</section>




<section id="fourth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    WhatsApp Business App Auto Reply (For Small Businesses)
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    The WhatsApp Business App is suitable for very small businesses.
  </p>

  <p className="text-gray-700 font-medium mb-2 text-[15px] sm:text-base">
    Features:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Greeting messages</li>
    <li>• Away messages</li>
    <li>• Manual quick replies</li>
  </ul>

  <p className="text-gray-700 font-medium mb-2 text-[15px] sm:text-base">
    Limitations:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• No chatbot automation</li>
    <li>• Limited customization</li>
    <li>• Broadcast limit of 256 contacts</li>
    <li>• Not scalable</li>
  </ul>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    If your business receives high message volume, the app will quickly become
    restrictive.
  </p>
</section>





<section id="fifth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    WhatsApp Business API Auto Reply (For Medium & Large Businesses)
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    For serious automation and growth, the WhatsApp Business API via
    <strong> Qmize</strong> is the best solution.
  </p>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    With Qmize, you can:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Create keyword-based auto replies</li>
    <li>• Build AI chatbots for customer support & sales</li>
    <li>• Integrate CRM & ERP systems</li>
    <li>• Send bulk WhatsApp campaigns</li>
    <li>• Track delivery, read rates, and conversions</li>
    <li>• Manage multiple agents from one dashboard</li>
  </ul>

  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      Qmize removes technical complexity and provides a ready-to-use automation
      platform.
    </p>
  </div>
</section>





<section id="sixth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    How to Set Auto Reply in WhatsApp Business App
  </h2>

  <ol className="list-decimal pl-5 space-y-3 text-gray-700 text-[15px] sm:text-base mb-4">
    <li>Open the WhatsApp Business App</li>
    <li>Go to <strong>Settings → Business Tools</strong></li>
    <li>
      Choose:
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Greeting Message</li>
        <li>Away Message</li>
        <li>Quick Replies</li>
      </ul>
    </li>
    <li>Write your auto reply message</li>
    <li>Set schedule and recipients</li>
    <li>Save and activate</li>
  </ol>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    This setup is simple but limited in automation.
  </p>
</section>



<section id="seventh" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    How to Set Auto Reply Using WhatsApp Business API with Qmize
  </h2>

  <ol className="list-decimal pl-5 space-y-3 text-gray-700 text-[15px] sm:text-base mb-4">
    <li>Get WhatsApp Business API access through <strong>Qmize</strong></li>
    <li>Verify your business number</li>
    <li>Create WhatsApp message templates</li>
    <li>
      Set automation triggers
      <span className="block text-sm text-gray-600 mt-1">
        (keywords, time, user actions)
      </span>
    </li>
    <li>Connect CRM or chatbot (optional)</li>
    <li>Test, launch, and optimize using analytics</li>
  </ol>

  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      Qmize handles onboarding, approvals, setup, and automation — no developer
      needed.
    </p>
  </div>
</section>




<section id="eighth" className="scroll-mt-28 animate-section">
  {/* Examples */}
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Examples of WhatsApp Auto Reply Messages
  </h2>

  <div className="space-y-4 mb-8 text-[15px] sm:text-base">
    <div className="bg-gray-50 border border-emerald-100 p-4 rounded-lg">
      <p className="font-semibold text-gray-800 mb-1">Greeting Message</p>
      <p className="text-gray-700">
        “Hi 👋 Welcome to Qmize! How can we help you today?”
      </p>
    </div>

    <div className="bg-gray-50 border border-emerald-100 p-4 rounded-lg">
      <p className="font-semibold text-gray-800 mb-1">Away Message</p>
      <p className="text-gray-700">
        “Thanks for contacting us. Our team will respond within 24 hours.”
      </p>
    </div>

    <div className="bg-gray-50 border border-emerald-100 p-4 rounded-lg">
      <p className="font-semibold text-gray-800 mb-1">FAQ Auto Reply</p>
      <p className="text-gray-700">
        “For pricing details, please visit:
        <span className="text-emerald-600 ml-1 break-all">
          https://qmize.com/whatsapp-business-api
        </span>”
      </p>
    </div>

    <div className="bg-gray-50 border border-emerald-100 p-4 rounded-lg">
      <p className="font-semibold text-gray-800 mb-1">Lead Capture Message</p>
      <p className="text-gray-700">
        “Please share your business name and requirement, and our expert will
        connect with you shortly.”
      </p>
    </div>
  </div>

  {/* Best Practices */}
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Best Practices for WhatsApp Auto Replies
  </h2>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base mb-4">
    <li>• Personalize messages using customer data</li>
    <li>• Keep messages short and clear</li>
    <li>• Set proper expectations for response time</li>
    <li>• Add CTA links (website, catalogue, booking)</li>
    <li>• Monitor analytics regularly</li>
    <li>• Follow WhatsApp policy & opt-out rules</li>
  </ul>

  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      Qmize provides built-in tools to apply all these best practices easily.
    </p>
  </div>
</section>



      <section id="ninth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Comparison Table: Qmize vs Other WhatsApp API Providers
  </h2>

  <div className="overflow-x-auto mb-6">
    <table className="w-full border border-emerald-100 rounded-xl overflow-hidden text-sm sm:text-base">
      <thead className="bg-emerald-50">
        <tr>
          <th className="p-3 text-left font-semibold text-emerald-800">
            Feature
          </th>
          <th className="p-3 font-semibold text-emerald-800">Qmize</th>
          <th className="p-3 font-semibold text-emerald-800">WATI</th>
          <th className="p-3 font-semibold text-emerald-800">Zoko</th>
          <th className="p-3 font-semibold text-emerald-800">Interakt</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-emerald-100 bg-white">
        <tr>
          <td className="p-3 font-medium text-gray-700">
            WhatsApp Business API
          </td>
          <td className="p-3 text-center">✅</td>
          <td className="p-3 text-center">✅</td>
          <td className="p-3 text-center">✅</td>
          <td className="p-3 text-center">✅</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            Advanced Auto Replies
          </td>
          <td className="p-3 text-center font-semibold text-emerald-700">
            ✅
          </td>
          <td className="p-3 text-center">⚠️ Limited</td>
          <td className="p-3 text-center">⚠️ Limited</td>
          <td className="p-3 text-center">⚠️ Limited</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            AI Chatbot Support
          </td>
          <td className="p-3 text-center font-semibold text-emerald-700">
            ✅
          </td>
          <td className="p-3 text-center">❌</td>
          <td className="p-3 text-center">❌</td>
          <td className="p-3 text-center">❌</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            CRM Integration
          </td>
          <td className="p-3 text-center font-semibold text-emerald-700">
            ✅
          </td>
          <td className="p-3 text-center">⚠️</td>
          <td className="p-3 text-center">⚠️</td>
          <td className="p-3 text-center">⚠️</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            Bulk WhatsApp Campaigns
          </td>
          <td className="p-3 text-center">✅</td>
          <td className="p-3 text-center">✅</td>
          <td className="p-3 text-center">✅</td>
          <td className="p-3 text-center">✅</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            Automation Triggers
          </td>
          <td className="p-3 text-center font-semibold text-emerald-700">
            ✅
          </td>
          <td className="p-3 text-center">❌</td>
          <td className="p-3 text-center">❌</td>
          <td className="p-3 text-center">❌</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            Indian Business Focus
          </td>
          <td className="p-3 text-center font-semibold text-emerald-700">
            ✅
          </td>
          <td className="p-3 text-center">✅</td>
          <td className="p-3 text-center">⚠️</td>
          <td className="p-3 text-center">⚠️</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            Pricing Transparency
          </td>
          <td className="p-3 text-center font-semibold text-emerald-700">
            ✅
          </td>
          <td className="p-3 text-center">⚠️</td>
          <td className="p-3 text-center">⚠️</td>
          <td className="p-3 text-center">⚠️</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            Dedicated Support
          </td>
          <td className="p-3 text-center font-semibold text-emerald-700">
            ✅
          </td>
          <td className="p-3 text-center">⚠️</td>
          <td className="p-3 text-center">⚠️</td>
          <td className="p-3 text-center">⚠️</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      👉 Qmize stands out with deeper automation, chatbot support, and better
      scalability.
    </p>
  </div>
</section>



<section id="tenth" className="scroll-mt-28 animate-section">
  {/* Conclusion */}
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Conclusion: Why Choose Qmize for WhatsApp Auto Reply?
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    If you want faster responses, better customer experience, and automated
    growth, WhatsApp Auto Reply with <strong>Qmize</strong> is the ideal solution.
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Start small with automation</li>
    <li>• Scale effortlessly with WhatsApp API</li>
    <li>• Convert chats into customers</li>
    <li>• Reduce support costs</li>
  </ul>

  <p className="text-gray-700 leading-relaxed mb-6 text-[15px] sm:text-base">
    Qmize is built for Indian businesses that want results, reliability, and ROI.
  </p>

  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg mb-10">
    <p className="text-emerald-900 font-semibold text-[15px] sm:text-base">
      🚀 Get started with Qmize today and transform your WhatsApp communication
      into a revenue engine.
    </p>
  </div>

  {/* FAQs */}
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    FAQ – WhatsApp Auto Reply with Qmize
  </h2>

  <div className="space-y-4 text-gray-700 text-[15px] sm:text-base">
    <div>
      <p className="font-semibold text-gray-800">
        Can I create different auto replies for different customers?
      </p>
      <p>
        Yes. Qmize allows segmentation and keyword-based automation.
      </p>
    </div>

    <div>
      <p className="font-semibold text-gray-800">
        Do auto replies work outside business hours?
      </p>
      <p>
        Yes, Qmize supports 24/7 automated responses.
      </p>
    </div>

    <div>
      <p className="font-semibold text-gray-800">
        Can I send auto replies in multiple languages?
      </p>
      <p>
        Absolutely. Qmize supports multilingual automation.
      </p>
    </div>

    <div>
      <p className="font-semibold text-gray-800">
        Will auto replies block manual agent responses?
      </p>
      <p>
        No. Agents can take over conversations anytime.
      </p>
    </div>

    <div>
      <p className="font-semibold text-gray-800">
        Can I track auto reply performance?
      </p>
      <p>
        Yes. Qmize provides analytics for delivery, reads, and engagement.
      </p>
    </div>

    <div>
      <p className="font-semibold text-gray-800">
        What is a good WhatsApp auto reply message?
      </p>
      <p>
        A short, clear message that acknowledges the user and sets expectations.
      </p>
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
