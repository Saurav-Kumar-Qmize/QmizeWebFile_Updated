import { useState,useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";

import { Helmet } from "react-helmet";
import ontop from "../../assets/Images/broadcastvsgroup.jpeg"






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
  { id: "second", label: "2. Quick Summary" },
  

  

  {
    id: "third",
    label: "3. What Is a WhatsApp Broadcast?",
   
  },

  { id: "fourth", label: "4. How to Create a WhatsApp Broadcast" },
  { id: "fifth", label: "5. How Businesses Use WhatsApp Broadcast Effectively" },
  { id: "sixth", label: "7. What Is a WhatsApp Group?" },
  { id: "seventh", label: "8. How to Create a WhatsApp Group" },
  { id: "eighth", label: "9. Business Use Cases for WhatsApp Groups" },
  { id: "ninth", label: "10. Key Differences" },
  { id: "tenth", label: "11. FAQs" },
  
];


  return (
    <>  

     <Helmet>

       <meta charSet="utf-8" />
        <title>WhatsApp Broadcast vs WhatsApp Group: What’s the Right Choice for Businesses?</title>
        <meta
          name="description"
          content="Learn how to build a WhatsApp ecommerce store using the official WhatsApp Business API. Qmize helps you automate, scale & sell smarter in 2026."
        />
        <link rel="canonical" href="https://qmize.com/blog/whatsapp-broadcast-vs-whatsapp-group" />

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
WhatsApp Broadcast vs WhatsApp Group: What’s the Right Choice for Businesses?

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
    alt="Whatsapp Broadcast VS Whatsapp Group"
    className="mt-2 mb-4 rounded-xl"
  />

  {/* Highlight Block */}
  <div className="bg-white border border-emerald-100 rounded-2xl shadow-sm p-6 mb-4">
  {/* NEW INTRO CONTENT */}
  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    As WhatsApp becomes a core communication channel for businesses, many teams
    struggle with one common question:
  </p>

  <p className="text-gray-700 leading-relaxed mb-3 font-medium text-[15px] sm:text-base">
    Should we use WhatsApp Broadcast or WhatsApp Group for customer communication?
  </p>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    While both features look similar on the surface, they serve very different
    business purposes. Choosing the wrong one can lead to poor engagement,
    privacy issues, or even WhatsApp policy risks.
  </p>

  <p className="text-gray-700 leading-relaxed mb-6 text-[15px] sm:text-base">
    In this guide, <strong>Qmize</strong> breaks down the key differences between
    WhatsApp Broadcast and WhatsApp Groups, explains when to use each, and shows
    how businesses can scale broadcasts safely using the official WhatsApp
    Business API.
  </p>

 

  
</div>


  {/* Image */}
  

  
</section>



<section id="second" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    TL;DR – Quick Summary
  </h2>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base">
    <li>
      • WhatsApp Broadcast is best for one-way communication like updates,
      offers, and alerts
    </li>
    <li>
      • WhatsApp Groups are ideal for two-way discussions, feedback, and
      collaboration
    </li>
    <li>
      • Broadcasts protect customer privacy; groups don’t
    </li>
    <li>
      • For large audiences, the WhatsApp Business API (via Qmize) is the safest
      way to scale broadcasts
    </li>
    <li>
      • Knowing when to use which improves engagement, compliance, and
      efficiency
    </li>
  </ul>
</section>



<section id="third" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    What Is a WhatsApp Broadcast?
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    A WhatsApp Broadcast allows businesses to send the same message to multiple
    contacts at once, while keeping each conversation private and individual.
  </p>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    Recipients:
  </p>

  <ul className="space-y-2 text-gray-700 mb-6 text-[15px] sm:text-base">
    <li>• Do not see other recipients</li>
    <li>• Receive the message as a personal chat</li>
    <li>• Reply privately to the business</li>
  </ul>

  <h3 className="font-semibold text-gray-800 mb-2">
    When Broadcasts Are Ideal
  </h3>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    Broadcasts work best for:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Promotional offers</li>
    <li>• Order or delivery updates</li>
    <li>• Event invitations</li>
    <li>• Service alerts</li>
    <li>• Announcements</li>
  </ul>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    For example, an e-commerce brand can notify customers about a weekend sale
    without creating noisy group conversations.
  </p>
</section>



<section id="fourth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    How to Create a WhatsApp Broadcast (Business App)
  </h2>

  <ol className="list-decimal pl-5 space-y-3 text-gray-700 text-[15px] sm:text-base mb-4">
    <li>Open the WhatsApp Business App</li>
    <li>Go to the <strong>Chats</strong> tab</li>
    <li>
      Open the menu
      <ul className="list-disc pl-5 mt-1 space-y-1">
        <li>Android: Tap three dots</li>
        <li>iPhone: Settings → Broadcast Lists</li>
      </ul>
    </li>
    <li>Select <strong>New Broadcast</strong></li>
    <li>Choose contacts</li>
  </ol>

  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-4">
    <p className="text-yellow-800 text-[15px] sm:text-base">
      ⚠️ Only contacts who saved your number will receive broadcast messages.
    </p>
  </div>

  <ol start={6} className="list-decimal pl-5 space-y-3 text-gray-700 text-[15px] sm:text-base mb-4">
    <li>Create the list and send your message</li>
  </ol>

  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      📌 Limit: 256 contacts per broadcast list
    </p>
  </div>
</section>




<section id="fifth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    How Businesses Use WhatsApp Broadcast Effectively
  </h2>

  {/* 1 */}
  <div className="mb-6">
    <h3 className="font-semibold text-gray-800 mb-2">
      1. Reach Customers at Scale
    </h3>
    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mb-2">
      Send updates to hundreds of contacts in seconds without managing individual chats.
    </p>
    <p className="text-gray-700 text-[15px] sm:text-base">
      <strong>Example:</strong> A retail store announces a flash sale to loyal customers instantly.
    </p>
  </div>

  {/* 2 */}
  <div className="mb-6">
    <h3 className="font-semibold text-gray-800 mb-2">
      2. Maintain Privacy & Professionalism
    </h3>
    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mb-2">
      Each customer receives a private message, ideal for sensitive or transactional communication.
    </p>
    <p className="text-gray-700 text-[15px] sm:text-base">
      <strong>Example:</strong> A clinic sends appointment reminders securely.
    </p>
  </div>

  {/* 3 */}
  <div className="mb-6">
    <h3 className="font-semibold text-gray-800 mb-2">
      3. Save Time with Automation
    </h3>
    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mb-2">
      Using templates and automation (via WhatsApp API) reduces manual effort.
    </p>
    <p className="text-gray-700 text-[15px] sm:text-base">
      <strong>Example:</strong> An education platform sends class reminders automatically.
    </p>
  </div>

  {/* 4 */}
  <div className="mb-6">
    <h3 className="font-semibold text-gray-800 mb-2">
      4. Improve Engagement with Personalization
    </h3>
    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mb-2">
      With the WhatsApp Business API, broadcasts can include:
    </p>
    <ul className="space-y-1 text-gray-700 text-[15px] sm:text-base mb-2">
      <li>• Name variables</li>
      <li>• Order IDs</li>
      <li>• Personalized CTAs</li>
    </ul>
    <p className="text-gray-700 text-[15px] sm:text-base">
      <strong>Example:</strong> A travel agency sends trip updates tailored to each customer.
    </p>
  </div>

  {/* 5 */}
  <div>
    <h3 className="font-semibold text-gray-800 mb-2">
      5. Scale with WhatsApp Business API (via Qmize)
    </h3>
    <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mb-2">
      While the app limits broadcasts, Qmize’s WhatsApp Business API allows you to:
    </p>
    <ul className="space-y-1 text-gray-700 text-[15px] sm:text-base">
      <li>• Message thousands of users daily</li>
      <li>• Stay compliant with Meta policies</li>
      <li>• Track delivery & engagement analytics</li>
    </ul>
  </div>
</section>


<section id="sixth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    What Is a WhatsApp Group?
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
    A WhatsApp Group is a shared chat where all members can see and reply to
    messages.
  </p>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    Groups are best suited for:
  </p>

  <ul className="space-y-2 text-gray-700 mb-4 text-[15px] sm:text-base">
    <li>• Team collaboration</li>
    <li>• Community discussions</li>
    <li>• Customer forums</li>
    <li>• Internal coordination</li>
  </ul>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    Everyone in the group can view participant details and conversations.
  </p>
</section>




<section id="seventh" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    How to Create a WhatsApp Group
  </h2>

  <ol className="list-decimal pl-5 space-y-3 text-gray-700 text-[15px] sm:text-base">
    <li>Open the WhatsApp Business App</li>
    <li>Go to <strong>Chats</strong></li>
    <li>Tap <strong>New Group</strong></li>
    <li>Add participants (up to <strong>1024 members</strong>)</li>
    <li>Set the group name and photo</li>
    <li>Create the group</li>
  </ol>
</section>




<section id="eighth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    Business Use Cases for WhatsApp Groups
  </h2>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base mb-4">
    <li>• Internal team discussions</li>
    <li>• Training or project coordination</li>
    <li>• Customer communities</li>
    <li>• Feedback and brainstorming</li>
  </ul>

  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
    Groups encourage interaction but require active moderation.
  </p>
</section>




<section id="ninth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    WhatsApp Broadcast vs WhatsApp Group: Key Differences
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border border-emerald-100 rounded-xl overflow-hidden text-sm sm:text-base">
      <thead className="bg-emerald-50">
        <tr>
          <th className="text-left p-3 font-semibold text-emerald-800">
            Feature
          </th>
          <th className="p-3 font-semibold text-emerald-800">
            WhatsApp Broadcast
          </th>
          <th className="p-3 font-semibold text-emerald-800">
            WhatsApp Group
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-emerald-100 bg-white">
        <tr>
          <td className="p-3 font-medium text-gray-700">
            Communication Type
          </td>
          <td className="p-3 text-center">One-way</td>
          <td className="p-3 text-center">Two-way</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            Privacy
          </td>
          <td className="p-3 text-center">
            High (private messages)
          </td>
          <td className="p-3 text-center">
            Low (visible to all)
          </td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            Engagement
          </td>
          <td className="p-3 text-center">Limited</td>
          <td className="p-3 text-center">High</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            Best For
          </td>
          <td className="p-3 text-center">Updates & alerts</td>
          <td className="p-3 text-center">Discussions & collaboration</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            Contact Visibility
          </td>
          <td className="p-3 text-center">Hidden</td>
          <td className="p-3 text-center">Visible</td>
        </tr>

        <tr>
          <td className="p-3 font-medium text-gray-700">
            App Limit
          </td>
          <td className="p-3 text-center">256 contacts</td>
          <td className="p-3 text-center">1024 members</td>
        </tr>

        <tr className="bg-emerald-50/50">
          <td className="p-3 font-medium text-gray-700">
            API Scalability
          </td>
          <td className="p-3 text-center font-semibold text-emerald-700">
            ✅ Yes (Qmize API)
          </td>
          <td className="p-3 text-center">❌ Not scalable</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>




<section id="tenth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
    When Should Businesses Use WhatsApp Broadcast?
  </h2>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    Use Broadcasts when you need:
  </p>

  <ul className="space-y-2 text-gray-700 mb-6 text-[15px] sm:text-base">
    <li>• Fast communication</li>
    <li>• Controlled messaging</li>
    <li>• Privacy</li>
    <li>• No discussion clutter</li>
  </ul>

  <p className="text-gray-700 leading-relaxed mb-3 text-[15px] sm:text-base">
    Ideal for:
  </p>

  <ul className="space-y-2 text-gray-700 mb-6 text-[15px] sm:text-base">
    <li>• Marketing campaigns</li>
    <li>• Announcements</li>
    <li>• Transactional alerts</li>
    <li>• Newsletters</li>
  </ul>

  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
    <p className="text-emerald-900 font-medium text-[15px] sm:text-base">
      👉 For large audiences, Qmize’s WhatsApp Business API is the safest and
      most scalable solution.
    </p>
  </div>
</section>



<section id="eleventh" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-6">
    FAQs – WhatsApp Broadcast vs Group
  </h2>

  <div className="space-y-6">
    {/* FAQ 1 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        Can businesses use both?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Yes. Use broadcasts for updates and groups for interaction.
      </p>
    </div>

    {/* FAQ 2 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        Can recipients reply to broadcasts?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Yes, but replies come privately to the business.
      </p>
    </div>

    {/* FAQ 3 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        How can I send to more than 256 contacts?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Use the WhatsApp Business API via Qmize.
      </p>
    </div>

    {/* FAQ 4 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        Are groups safe for marketing?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Only if users have explicitly opted in. Otherwise, it may violate
        WhatsApp policies.
      </p>
    </div>

    {/* FAQ 5 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">
        Which is better for customer support?
      </h3>
      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        Groups for discussion-based support; broadcasts for service updates.
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
