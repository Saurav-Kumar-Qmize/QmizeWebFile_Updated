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
import whatsapp41 from "../../assets/Images/whatsapp-auto-reply-samples.jpeg";
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
  { id: "second", label: "2. What is a WhatsApp Auto Reply Message?" },
  

  

  {
    id: "third",
    label: "3. Benefits of WhatsApp Auto Reply Messages",
   
  },

  { id: "fourth", label: "4. Best Auto Reply WhatsApp Message Samples for Business" },
  { id: "fifth", label: "5. Best Practices for WhatsApp Auto Reply Messages" },
  { id: "sixth", label: "6. Automate WhatsApp Responses with Qmize" },
  { id: "seventh", label: "7. Conclusion" },
//   { id: "eighth", label: "8. Common WhatsApp Campaign Mistakes" },
//   { id: "ninth", label: "9. How Qmize Helps Businesses Run Successful WhatsApp Campaigns" },
//   { id: "tenth", label: "10. Conclusion" },
  
];


  return (
    <>  

     <Helmet>

       <meta charSet="utf-8" />
        <title>50+ Auto Reply WhatsApp Message Samples for Business (2026)</title>
        <meta
          name="description"
          content="Discover 50+ professional auto reply WhatsApp message samples for customer support, sales, holidays, after-hours, orders, payments, and more. Copy and customize for your business."
        />
        <link rel="canonical" href="https://qmize.com/blog/auto-reply-whatsapp-message-sample" />
        

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
50+ Auto Reply WhatsApp Message Samples for Every Business Need

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
  Updated on 13 June 2026 • 18 min read
</p>


        {/* INTRO :-- 50+ Auto Reply WhatsApp Message Samples for Every Business Need*/}
  <section id="first" className="scroll-mt-28 animate-section">
  <img
    src={whatsapp41}
    alt="Top auto reply WhatsApp message examples"
    className="mt-2 mb-4 rounded-xl"
  />
  <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">
 WhatsApp has become one of the most important communication channels for businesses. Customers expect quick responses when they send a message, regardless of the time of day. However, replying instantly to every inquiry is not always possible.
  </p>
<p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base">That's where WhatsApp auto reply messages help. Businesses can automatically respond to customer messages, acknowledge inquiries, provide useful information, and improve customer satisfaction without manual intervention.</p>
 
  <p className="text-gray-800 font-medium mb-4 text-[15px] sm:text-base">
Using the 
 <Link to="https://qmize.com/blog/whatsapp-business-api"
        target="_blank"
  rel="noopener noreferrer"
   className="text-blue-600 underline hover:text-blue-800"
   >{"  "}
 WhatsApp Business API {"  "}</Link>through  
 <Link to="https://qmize.com"
        target="_blank"
  rel="noopener noreferrer"
   className="text-blue-600 underline hover:text-blue-800"
   >{"  "} Qmize </Link> allows businesses to automate customer communication, generate leads, improve support, and boost conversions.
  </p>
 <p className="text-gray-800 leading-relaxed mb-4 text-[15px] sm:text-base">This guide includes 50+ auto reply WhatsApp message samples, you can use immediately for your business.</p>


</section>

{/* What is a WhatsApp Auto Reply Message? */}
<section id="second" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
 What is a WhatsApp Auto Reply Message?
  </h2>
  <p className="mb-4 text-gray-700">
    A WhatsApp auto reply message is an automated response sent when a customer contacts your business on WhatsApp.
  </p>

  <p className="mb-4 text-gray-700">
    These messages can be used for:
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>Greeting customers</li>
    <li>After-hours responses</li>
    <li>Customer support</li>
    <li>Lead generation</li>
    <li>Appointment confirmations</li>
    <li>Order updates</li>
    <li>Payment confirmations</li>
    <li>Holiday notifications</li>
    <li>Frequently asked questions</li>
  </ul>
  </section>


{/*  Benefits of WhatsApp Auto Reply Messages*/}
<section id="third" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
   Benefits of WhatsApp Auto Reply Messages
  </h2>
 <div className="space-y-6 text-gray-700 leading-relaxed">

    {/* Benefit 1 */}
    <div>
      <h3 className="font-semibold text-lg text-gray-900">
        Improve Customer Experience
      </h3>
      <p>
        Customers receive immediate acknowledgment of their messages.
      </p>
    </div>

    {/* Benefit 2 */}
    <div>
      <h3 className="font-semibold text-lg text-gray-900">
        Save Time
      </h3>
      <p>
        Reduce repetitive manual responses.
      </p>
    </div>

    {/* Benefit 3 */}
    <div>
      <h3 className="font-semibold text-lg text-gray-900">
        Increase Sales Opportunities
      </h3>
      <p>
        Capture leads even when your team is unavailable.
      </p>
    </div>

    {/* Benefit 4 */}
    <div>
      <h3 className="font-semibold text-lg text-gray-900">
        Maintain Professional Communication
      </h3>
      <p>
        Provide consistent responses across all customer interactions.
      </p>
    </div>

    {/* Benefit 5 */}
    <div>
      <h3 className="font-semibold text-lg text-gray-900">
        24/7 Availability
      </h3>
      <p>
        Stay responsive outside business hours.
      </p>
    </div>

  </div>

</section>




{/* Best Auto Reply WhatsApp Message Samples for Business */}
      <section id="fourth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
  Best Auto Reply WhatsApp Message Samples for Business
  </h2>
 <div className="space-y-8 text-gray-700 leading-relaxed">

    <p>
      Here are 50+ best WhatsApp auto reply message examples; use them for customer engagement, lead capture, customer support, etc.
    </p>

    {/* Reusable Block */}
    {[
      {
        title: "Welcome Auto Reply WhatsApp Message Samples",
        items: [
          "Hello 👋 Thank you for contacting us. Our team will get back to you shortly.",
          "Welcome to [Business Name]. We're happy to assist you today. Please share your query.",
          "Thank you for reaching out. One of our representatives will respond within a few minutes.",
          "Hi there! Thanks for messaging us. How can we help you today?",
          "Welcome! Your message has been received successfully. We will respond as soon as possible."
        ]
      },
      {
        title: "After-Hours Auto Reply Message Samples",
        items: [
          "Thank you for contacting us. Our office is currently closed. We will respond during business hours.",
          "We're currently offline. Your message is important to us, and we'll reply when we return.",
          "Thanks for reaching out. Our support team is available from 9 AM to 6 PM. We'll respond soon.",
          "We are unavailable at the moment. Please leave your details, and we'll contact you shortly.",
          "Thank you for your message. We will get back to you on the next business day."
        ]
      },
      {
        title: "Customer Support Auto Reply Messages",
        items: [
          "We've received your support request. Our team is reviewing it and will contact you soon.",
          "Thank you for contacting support. Your issue is important to us.",
          "We've successfully received your complaint and are investigating the matter.",
          "A support executive will assist you shortly. Thank you for your patience.",
          "Your request has been logged. We will update you as soon as possible."
        ]
      },
      {
        title: "Lead Generation Auto Reply Messages",
        items: [
          "Thank you for your interest. Please share your name and requirement so we can assist you better.",
          "We're excited to connect with you. Please tell us more about your business needs.",
          "Thanks for reaching out. Our sales team will contact you shortly.",
          "We appreciate your inquiry. Please share your company name and contact details.",
          "Thank you for your interest in our services. A specialist will contact you soon."
        ]
      },
      {
        title: "WhatsApp Business API Inquiry Messages",
        items: [
          "Thank you for your interest in WhatsApp Business API. Our experts will guide you through the setup process.",
          "Looking for WhatsApp automation? We'll help you choose the right solution.",
          "Thank you for contacting Qmize. A WhatsApp API specialist will reach out shortly.",
          "Please share your business requirements so we can recommend the best WhatsApp solution.",
          "We're happy to assist with WhatsApp Business API onboarding and pricing information."
        ]
      },
      {
        title: "Order Confirmation Auto Reply Messages",
        items: [
          "Thank you for your order. Your purchase has been confirmed successfully.",
          "Your order is being processed. We will notify you once it is shipped.",
          "Order received! Thank you for choosing us.",
          "We've successfully received your order request.",
          "Thank you for shopping with us. Order details will be shared shortly."
        ]
      },
      {
        title: "Payment Confirmation Messages",
        items: [
          "Your payment has been received successfully. Thank you.",
          "Thank you for completing your payment. Your transaction is confirmed.",
          "Payment received. We are now processing your request.",
          "Your invoice has been marked as paid successfully.",
          "Thank you. We have successfully received your payment."
        ]
      },
      {
        title: "Appointment Booking Auto Reply Messages",
        items: [
          "Your appointment request has been received.",
          "Thank you for booking with us. We will confirm your appointment shortly.",
          "Your appointment is currently under review.",
          "Booking request received successfully.",
          "We look forward to meeting you. Appointment confirmation will be shared soon."
        ]
      },
      {
        title: "Holiday Auto Reply Messages",
        items: [
          "Thank you for contacting us. Our office is closed for the holiday season.",
          "We're currently unavailable due to a public holiday.",
          "Happy Holidays! Our team will respond after the holiday break.",
          "Our office is closed today. We'll reply once business resumes.",
          "Thank you for your patience during the holiday period."
        ]
      },
      {
        title: "E-commerce Auto Reply Messages",
        items: [
          "Thank you for visiting our store. How can we assist you today?",
          "Your product inquiry has been received.",
          "Thanks for reaching out. Our product specialist will assist you shortly.",
          "Need help choosing a product? Tell us your requirements.",
          "We're happy to help with orders, shipping, and product information."
        ]
      },
      {
        title: "Advanced WhatsApp Auto Reply Templates",
        items: [
          "Hi {{name}}, thank you for contacting us. Your request has been received, and our team will respond shortly.",
          "Hello {{name}}, thank you for your inquiry regarding {{service}}. We'll get back to you soon.",
          "Hi {{name}}, your support ticket #{{ticket_id}} has been created successfully.",
          "Thank you {{name}}. Your order #{{order_id}} is currently being processed.",
          "Hello {{name}}, thank you for choosing us. A dedicated representative will contact you shortly."
        ]
      }
    ].map((section, index) => (
      <div key={index}>
        <h3 className="font-bold text-lg text-gray-900 mb-2">
          {section.title}
        </h3>
        <ul className="list-decimal pl-6 space-y-1">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}

  </div>

 
</section>


{/* Best Practices for WhatsApp Auto Reply Messages*/}
<section id="fifth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-4">
Best Practices for WhatsApp Auto Reply Messages
  </h2>


  <p className="mb-4 text-gray-700">
    To achieve better customer engagement:
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>Keep messages short and clear.</li>
    <li>Personalize messages using customer names.</li>
    <li>Set realistic response expectations.</li>
    <li>Include business hours.</li>
    <li>Add helpful links when necessary.</li>
    <li>Use WhatsApp Business API for advanced automation.</li>
    <li>Regularly update your templates.</li>
  </ul>
</section>


{/* Automate WhatsApp Responses with Qmize */}
<section id="sixth" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-6">
   Automate WhatsApp Responses with Qmize
  </h2>

 <p className="mb-4 text-gray-700">
    Qmize, the best WhatsApp marketing platform, helps businesses automate customer communication through WhatsApp Business API solutions.
  </p>

  <p className="mb-4 text-gray-700">
    With Qmize platform, you can:
  </p>

  <ul className="list-disc pl-6 space-y-1 text-gray-700">
    <li>Create automated WhatsApp replies</li>
    <li>Send bulk WhatsApp campaigns</li>
    <li>Automate customer support</li>
    <li>Build chatbot workflows</li>
    <li>Track message performance</li>
    <li>Improve customer engagement</li>
  </ul>

  <p className="mt-4 text-gray-700">
    Whether you're a startup, eCommerce brand, healthcare provider, educational institute, or enterprise business, Qmize enables seamless
 <Link to="https://qmize.com/blog/whatsapp-automation"
        target="_blank"
  rel="noopener noreferrer"
   className="text-blue-600 underline hover:text-blue-800"
   >{"  "}
    WhatsApp automation{"  "} </Link> at scale
  </p>
</section>


{/*  Conclusion */}
<section id="seventh" className="scroll-mt-28 animate-section">
  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-6">
    Conclusion
  </h2>
 <p className="mb-4 text-gray-700">
    Auto reply WhatsApp messages help businesses provide faster responses, improve customer satisfaction, and maintain professional communication around the clock.
  </p>

  <p className="text-gray-700">
    The 50+ examples shared above can be customized based on your industry and customer journey. When combined with WhatsApp Business API automation from Qmize, these messages can significantly improve customer engagement and operational efficiency.
  </p>
 
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