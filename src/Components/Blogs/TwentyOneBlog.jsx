import { useState,useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
// import ontop from "../../assets/Images/whatsappverification.jpeg"
import Footer from "../Common/Footer";
import {Link} from "react-router-dom";
import christmasImage from "../../assets/Images/christmas_offer_blog.webp";
import ontop3 from "../../assets/Images/WhatsApp_Introduction_Message.jpeg";

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
 

  const messages = [
    "Hello [Name], this is [Your Name] from [Company Name]. Thank you for your interest. How may we assist you today?",
    "Hi [Name], we received your inquiry on our website. We’re happy to share more details about [service].",
    "Hello [Name], thank you for connecting with us. Would you like more information about our latest offers?",
    "Hi [Name], welcome to [Company Name]. We specialize in [service]. Can we schedule a quick discussion?",
    "Hello [Name], thanks for showing interest in our products. Would you like recommendations?",
    "Hi [Name], we noticed your interest in our services. Let us know your requirements.",
    "Hello [Name], we’re offering a special discount for new customers. Interested?",
    "Hi [Name], thank you for registering with us. We’ll guide you through the next steps.",
    "Hello [Name], we help businesses grow with proven strategies. Shall we connect?",
    "Hi [Name], welcome to our business family. We are excited to assist you.",
    "Hello [Name], would you like a free consultation to understand our services better?",
    "Hi [Name], thank you for subscribing to our WhatsApp updates. Stay tuned for exclusive offers.",
    "Hello [Name], we’ve launched a new product that might interest you. Would you like details?",
    "Hi [Name], we’re here to help you choose the best solution. Let us know your goals.",
    "Hello [Name], this is a quick follow-up regarding your inquiry.",
    "Hi [Name], we provide customized solutions tailored to your business needs.",
    "Hello [Name], thank you for your interest in our services. Can we share pricing details?",
    "Hi [Name], we’re happy to assist you with complete details and support.",
    "Hello [Name], let’s get started. Reply YES to continue.",
    "Hi [Name], thank you for connecting with us. How can we add value to your business?",
  ];


   const greetings = [
    "Hello 👋 Welcome to [Company Name]. Thank you for contacting us.",
    "Hi there! Thanks for messaging us. Our team will reply shortly.",
    "Welcome to [Company Name]. How can we help you today?",
    "Hello! We’re glad you reached out. Please share your query.",
    "Hi 👋 Thanks for contacting us. We are available from 9 AM to 6 PM.",
    "Welcome! Please select an option: 1. Sales 2. Support",
    "Thank you for your message. Our representative will respond soon.",
    "Hello and welcome! Let us know your requirements.",
    "Hi! We appreciate your interest. We’ll get back to you shortly.",
    "Welcome to [Company Name]. We’re excited to assist you.",
  ];





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
  { id: "first", label: "1. In brief" },
  { id: "second", label: "2. What Is a WhatsApp Introduction Message?" },
  

  

  {
    id: "third",
    label: "3. Why WhatsApp Introduction Messages Are Important for Business ",
   
  },

  { id: "fourth", label: "4. How to Write a High-Converting WhatsApp Introduction Message" },
  { id: "fifth", label: "5. What Is a WhatsApp Business Greeting Message?" },
  { id: "sixth", label: "6. WhatsApp Introduction Message vs WhatsApp Business Greeting Message" },
  { id: "seventh", label: "7. 20 Best WhatsApp Introduction Message Samples for Business " },
  { id: "eighth", label: "8. 10 Best WhatsApp Business Greeting Message Samples" },
  { id: "ninth", label: "9. Benefits of Using Qmize for WhatsApp Messaging" },
   { id: "tenth", label: "10. Final Thoughts " },
  
];

const [showAllMessages, setShowAllMessages] = useState(false);
const [showAllGreetings, setShowAllGreetings] = useState(false);
  return (

    <>

    <Helmet>
    
           <meta charSet="utf-8" />
            <title> WhatsApp Introduction Message (2026) | Qmize</title>
            <meta
              name="description"
              content=""
            />
            <link rel="canonical" href="https://qmize.com/blog/whatsapp-verification-explained-steps-and-benefits" />
    
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

       <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
 WhatsApp Introduction Message: Best Samples, Greeting Messages & How to Send Them at Scale

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
  Updated on 07 Mar 2026 • 25 min read
</p>


  <section className="w-full py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto ">
        

              {/*WhatsApp Introduction Message: Best Samples, Greeting Messages & How to Send Them at Scale */}
         <section id="first" className="mb-10">
       
           <p className="text-gray-700 leading-7 sm:leading-8 mb-6 text-base sm:text-lg">
             A <b className="text-gray-950">WhatsApp introduction message</b> is the first message your business 
             sends to a new lead or customer on WhatsApp. It helps build trust, 
             increase engagement, and improve conversions from the very first interaction.
           </p>
       
           <div className="my-6 sm:my-8">
             <img
               className="w-full h-auto rounded-2xl border border-gray-200 shadow-md 
                           object-cover transition-transform duration-300 
                           hover:scale-[1.02]"
               src={ontop3}
               alt="RichCommunicationServices"
             />
           </div>
       
           <p className="text-gray-700 leading-7 sm:leading-8 mb-4 text-base sm:text-lg">
             With tools like WhatsApp Business API, businesses can automate and personalize introduction messages at scale.
           </p>
       
           <p className="text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
             Many businesses also use a <b className="text-gray-950">WhatsApp Business greeting message</b> to automatically welcome customers when 
             they message for the first time. When used strategically with the WhatsApp Business API, businesses can 
             automate, personalize, and scale communication efficiently.
           </p>
       
       
             <h2 className="text-xl sm:text-2xl font-semibold text-green-700 my-8">
                 In this complete guide, you’ll learn:
             </h2>
       
             <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
       
                 <li className="flex items-start gap-3">
                 <span className="text-green-600 mt-1">↬</span>
                 <span>What is a WhatsApp introduction message</span>
                 </li>
       
                 <li className="flex items-start gap-3">
                 <span className="text-green-600 mt-1">↬</span>
                 <span>Why WhatsApp Introduction Messages Are Important for Business</span>
                 </li>
       
                 <li className="flex items-start gap-3">
                 <span className="text-green-600 mt-1">↬</span>
                 <span>How to Write a High-Converting WhatsApp Introduction Message</span>
                 </li>
       
                 <li className="flex items-start gap-3">
                 <span className="text-green-600 mt-1">↬</span>
                 <span>What is a WhatsApp Business greeting message</span>
                 </li>
       
                 <li className="flex items-start gap-3">
                 <span className="text-green-600 mt-1">↬</span>
                 <span>WhatsApp introduction message vs greeting message</span>
                 </li>
       
                 <li className="flex items-start gap-3">
                 <span className="text-green-600 mt-1">↬</span>
                 <span>20 WhatsApp introduction message samples</span>
                 </li>
       
                 <li className="flex items-start gap-3">
                 <span className="text-green-600 mt-1">↬</span>
                 <span>10 WhatsApp Business greeting message samples</span>
                 </li>
       
                 <li className="flex items-start gap-3">
                 <span className="text-green-600 mt-1">↬</span>
                 <span>How to send WhatsApp messages at scale using Qmize</span>
                 </li>
       
                 <li className="flex items-start gap-3">
                 <span className="text-green-600 mt-1">↬</span>
                 <span>Benefits of Using Qmize for WhatsApp Messaging</span>
                 </li>
       
             </ul>
       
       
       
       
         </section>
             {/* What Is a WhatsApp Introduction Message? */}                 
           <section id="second" className="mb-12">

  <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-6">
    What Is a WhatsApp Introduction Message?
  </h2>

  <p className="text-gray-700 leading-7 sm:leading-8 mb-6 text-base sm:text-lg">
    A WhatsApp introduction message is the first communication your business sends after:
  </p>

  <ul className="space-y-3 text-gray-700 text-base sm:text-lg mb-6">

    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">➣</span>
      <span>A customer fills out a website form</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">➣</span>
      <span>A user clicks a WhatsApp ad</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">➣</span>
      <span>A lead registers for an event</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">➣</span>
      <span>Someone subscribes to updates</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">➣</span>
      <span>A customer makes an inquiry</span>
    </li>

  </ul>

  <p className="text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
    This message introduces your brand, explains why you're contacting them, and encourages a reply.
  </p>

</section>



         {/* Why WhatsApp Introduction Messages Are Important for Business */}
<section id="third" className="mb-12">

  <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-8">
    Why WhatsApp Introduction Messages Are Important for Business
  </h2>

  <div className="space-y-8">

    {/* Point 1 */}
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-green-600 mb-2">
        1. Creates a Strong First Impression
      </h3>
      <p className="text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
        Your first message sets the tone for future conversations.
      </p>
    </div>

    {/* Point 2 */}
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-green-600 mb-2">
        2. Builds Customer Trust
      </h3>
      <p className="text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
        When customers know who you are and why you’re messaging them, they are more likely to respond.
      </p>
    </div>

    {/* Point 3 */}
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-green-600 mb-2">
        3. Improves Response Rates
      </h3>
      <p className="text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
        Personalized introduction messages increase engagement significantly.
      </p>
    </div>

    {/* Point 4 */}
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-green-600 mb-2">
        4. Drives Sales and Conversions
      </h3>
      <p className="text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
        A clear call-to-action can turn a lead into a paying customer.
      </p>
    </div>

  </div>

</section>

         
         {/* How to Write a High-Converting WhatsApp Introduction Message */}
          <section id="fourth">
            <div className="max-w-4xl mx-auto px-5 mb-5">
             
  <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-6">
    How to Write a High-Converting WhatsApp Introduction Message
  </h2>

  <p className="text-gray-700 leading-7 sm:leading-8 mb-6 text-base sm:text-lg">
    To create a conversion-focused WhatsApp introduction message, follow these tips:
  </p>

  <ul className="space-y-3 text-gray-700 text-base sm:text-lg mb-6">

    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">✔</span>
      <span>Use the customer’s name</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">✔</span>
      <span>Clearly mention your business name</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">✔</span>
      <span>State how you got their contact</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">✔</span>
      <span>Keep the message short and clear</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">✔</span>
      <span>Add a simple call-to-action</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">✔</span>
      <span>Follow WhatsApp opt-in rules</span>
    </li>

  </ul>

  <p className="text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg font-medium">
    Avoid spam words while writing WhatsApp introduction message.
  </p>
            </div>
          </section>


       {/* What Is a WhatsApp Business Greeting Message? */}
          <section id="fifth">
            <div className="max-w-4xl mx-auto px-5 mb-5">
                
  <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-6">
    What Is a WhatsApp Business Greeting Message?
  </h2>

  <p className="text-gray-700 leading-7 sm:leading-8 mb-4 text-base sm:text-lg">
    A WhatsApp Business greeting message is an automated welcome message sent when a customer messages your business for the first time or after 14 days of inactivity.
  </p>

  <p className="text-gray-700 leading-7 sm:leading-8 mb-4 text-base sm:text-lg">
    It is commonly set up inside:
  </p>

  <ul className="space-y-3 text-gray-700 text-base sm:text-lg mb-6">
    <li className="flex items-start gap-3">
      <span className="text-blue-600 mt-1">•</span>
      <span>WhatsApp Business App</span>
    </li>
    <li className="flex items-start gap-3">
      <span className="text-blue-600 mt-1">•</span>
      <span>WhatsApp Business API platforms</span>
    </li>
  </ul>

  <p className="text-gray-700 leading-7 sm:leading-8 mb-6 text-base sm:text-lg">
    Unlike introduction messages, greeting messages are triggered automatically when a customer initiates the conversation.
  </p>

  {/* Example Box */}
  <div className="bg-gray-100 border border-gray-200 rounded-xl p-5 mb-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-3">
      Example of WhatsApp Business Greeting Message:
    </h3>

    <p className="text-gray-800 italic">
      “Hello 👋 Welcome to [Company Name]. Thank you for contacting us. Our team will respond shortly.”
    </p>
  </div>

  <p className="text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
    Greeting messages help acknowledge customers instantly, even outside business hours.
  </p>
            </div>
          </section>



         {/* WhatsApp Introduction Message vs WhatsApp Business Greeting Message */}
          <section id="sixth">
            <div className="max-w-4xl mx-auto px-5 mb-5">
               
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-10">
          WhatsApp Introduction Message vs WhatsApp Business Greeting Message
        </h2>

        {/* Table Wrapper */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border border-green-100">
          <table className="w-full text-left border-collapse">
            
            {/* Table Head */}
            <thead>
              <tr className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <th className="py-4 px-6 font-semibold">Feature</th>
                <th className="py-4 px-6 font-semibold">
                  WhatsApp Introduction Message
                </th>
                <th className="py-4 px-6 font-semibold">
                  WhatsApp Business Greeting Message
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white">
              <tr className="border-b hover:bg-green-50 transition">
                <td className="py-4 px-6 font-medium text-green-700">Trigger</td>
                <td className="py-4 px-6">
                  Sent by business to lead
                </td>
                <td className="py-4 px-6">
                  Triggered when customer messages
                </td>
              </tr>

              <tr className="border-b hover:bg-green-50 transition">
                <td className="py-4 px-6 font-medium text-green-700">Purpose</td>
                <td className="py-4 px-6">
                  Introduce services or offers
                </td>
                <td className="py-4 px-6">
                  Welcome and acknowledge message
                </td>
              </tr>

              <tr className="border-b hover:bg-green-50 transition">
                <td className="py-4 px-6 font-medium text-green-700">Automation</td>
                <td className="py-4 px-6">
                  Manual or automated
                </td>
                <td className="py-4 px-6">
                  Fully automated
                </td>
              </tr>

              <tr className="hover:bg-green-50 transition">
                <td className="py-4 px-6 font-medium text-green-700">Best For</td>
                <td className="py-4 px-6">
                  Marketing and sales outreach
                </td>
                <td className="py-4 px-6">
                  Customer support and engagement
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Description */}
        <p className="mt-8 text-gray-600 text-center leading-relaxed">
          Both are important for a complete WhatsApp marketing strategy.
          Introduction messages drive outreach and conversions, while greeting
          messages improve customer experience.
        </p>
            </div>
          </section>


         {/* 20 Best WhatsApp Introduction Message Samples for Business */}
          <section id="seventh">
            <div className="max-w-4xl mx-auto px-5 mb-5">
             
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
          20 Best WhatsApp Introduction Message Samples for Business
        </h2>

        <p className=" text-gray-600 mb-10">
          Here are high-converting WhatsApp introduction message examples you can customize for your business.
        </p>

        {/* Messages Grid */}
        <div className="grid md:grid-cols-1 gap-6">
          {/* {messages.map((msg, index) => ( */}
          {(showAllMessages ? messages : messages.slice(0,4)).map((msg, index) => (
            <div
              key={index}
              className="bg-white border border-green-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-start gap-3">
                
                {/* Number Badge */}
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold">
                  {index + 1}
                </div>

                {/* Message Text */}
                <p className="text-gray-700 leading-relaxed">
                  {msg}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
  <button
    onClick={() => setShowAllMessages(!showAllMessages)}
    className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
  >
    {showAllMessages ? "Show Less" : "Show More"}
  </button>
</div>
            </div>
          </section>


           {/* 10 Best WhatsApp Business Greeting Message Samples */}
          <section id="eighth">
           <div className="max-w-4xl mx-auto px-5 mb-5">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
          10 Best WhatsApp Business Greeting Message Samples
        </h2>

        <p className=" text-gray-600 mb-10">
          Ready-to-use WhatsApp Business greeting message examples to improve customer engagement and response time.
        </p>

        {/* Greeting Cards */}
        <div className="grid md:grid-cols-1 gap-6">
          {/* {greetings.map((msg, index) => ( */}
          {(showAllGreetings ? greetings : greetings.slice(0,4)).map((msg, index) => (
            <div
              key={index}
              className="relative bg-white border border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-t-2xl"></div>

              <div className="flex items-start gap-3">
                
                {/* Number Badge */}
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-semibold">
                  {index + 1}
                </div>

                {/* Message Text */}
                <p className="text-gray-700 leading-relaxed">
                  {msg}
                </p>
              </div>
            </div>
          ))}
              <div className="flex justify-center mt-6">
  <button
    onClick={() => setShowAllGreetings(!showAllGreetings)}
    className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
  >
    {showAllGreetings ? "Show Less" : "Show More"}
  </button>
</div>
        </div>
    

      </div>
          </section>



        {/* Benefits of Using Qmize for WhatsApp Messaging */}
          <section id="ninth">
            <div className="max-w-4xl mx-auto px-5 mb-5">
              {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
      Benefits of Using Qmize for WhatsApp Messaging
    </h2>

    <p className="text-gray-600 mb-10 leading-relaxed">
      Qmize helps businesses leverage the full power of WhatsApp messaging with
      secure, scalable, and performance-driven solutions.
    </p>

    {/* Benefits List */}
    <div className="space-y-8">

      {/* Benefit 1 */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold">
          1
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-800">
            Official API Access
          </h3>
          <p className="text-gray-700 mt-1">
            Send verified and compliant WhatsApp messages with official API integration.
          </p>
        </div>
      </div>

      {/* Benefit 2 */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold">
          2
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-800">
            Bulk Messaging with Personalization
          </h3>
          <p className="text-gray-700 mt-1">
            Reach thousands of leads with customized introduction messages tailored to each customer.
          </p>
        </div>
      </div>

      {/* Benefit 3 */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold">
          3
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-800">
            Automation
          </h3>
          <p className="text-gray-700 mt-1">
            Trigger greeting messages automatically when customers message your business.
          </p>
        </div>
      </div>

      {/* Benefit 4 */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold">
          4
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-800">
            Advanced Reporting
          </h3>
          <p className="text-gray-700 mt-1">
            Monitor delivery, response rates, and overall campaign performance with detailed analytics.
          </p>
        </div>
      </div>

      {/* Benefit 5 */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold">
          5
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-800">
            Scalable for All Businesses
          </h3>
          <p className="text-gray-700 mt-1">
            From startups to enterprises, Qmize helps streamline WhatsApp communication efficiently.
          </p>
        </div>
      </div>

    </div>

            </div>
          </section>

          {/* Final Thoughts */}
          <section id="tenth">
            <div className="max-w-4xl mx-auto px-5 mb-5">
           
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6">
      Final Thoughts
    </h2>

    {/* Content */}
    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
      
      <p>
        A strong WhatsApp introduction message helps generate leads and boost sales. 
        A well-configured WhatsApp Business greeting message improves customer 
        experience and engagement.
      </p>

      <p>
        Together, they form the foundation of a powerful WhatsApp marketing strategy.
      </p>

      <p>
        By using the WhatsApp Business API and Qmize’s WhatsApp Messaging Platform, 
        you can automate communication, personalize conversations, and scale your 
        outreach effectively.
      </p>

      <p className="font-semibold text-green-800 text-xl">
        Start optimizing your WhatsApp messages today and turn every new contact 
        into a loyal customer.
      </p>

    </div>
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