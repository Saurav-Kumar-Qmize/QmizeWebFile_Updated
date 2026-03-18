import { useRef,useState,useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";
import DigitalGrowth from "../../assets/Images/digital_growth_blog.webp";
import { Helmet } from "react-helmet";

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
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-30% 0px -60% 0px"
    }
  );

  toc.forEach((item) => {
    const el = document.getElementById(item.id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);




 const toc = [
  { id: "intro", label: "1. Qmize: Powering Business Growth" },
  { id: "understanding", label: "2. Understanding Qmize" },

  {
    id: "evolution",
    label: "3. Evolution of MSG24x7 to Qmize",
   
  },

  { id: "core", label: "4. Core Services" },
  { id: "workswith", label: "5. Who Qmize Works with" },
  { id: "why", label: "6. Why Business Choose Qmize" },
  { id: "future", label: "7. Future Vision" },
  { id: "conclusion", label: "8. Final Thoughts" },
];


  return (
    <>  

     <Helmet>

       <meta charSet="utf-8" />
        <title>Qmize: Powering Business Growth Through Smart Digital Marketing and IT Solutions</title>
        <meta
          name="description"
          content="Powering Business Growth Through Smart Digital Marketing and IT Solutions"
        />
        <link rel="canonical" href="https://qmize.com/blog/powering-business-growth-through-smart-digital-marketing-and-it-solutions" />

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
      <div
        onClick={() => scrollToSection(item.id)}
        className={`cursor-pointer font-medium transition flex items-center
          ${
            activeSection === item.id
              ? "text-emerald-600"
              : "text-gray-700 hover:text-emerald-500"
          }
        `}
      >
        <span className="mr-2">▸</span>
        {item.label}
      </div>
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
 Qmize: Powering Business Growth Through Smart Digital Marketing and IT Solutions

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
  Modified on 8 Jan 2026 • 22 min read
</p>




   <img
        src={DigitalGrowth}
        alt="Choosing the right growth partner with Qmize API Service"
        className="mt-2 mb-2 rounded-xl"
        />
        {/* INTRO */}
        <section id="intro" className="scroll-mt-28 animate-section">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
         In today’s fast-moving digital economy, businesses need more than just online visibility. They need speed, automation, reliable communication, and scalable systems that help them engage customers instantly and grow sustainably. This is where <Link to="/"><span className="font-semibold">Qmize </span></Link>stands out as a modern Digital Marketing cum IT Solutions Company designed for real business needs.
        Formerly known as MSG24x7 Communications, Qmize represents the evolution of a communication-first company into a technology-enabled growth partner for Indian businesses. Headquartered in Gaya, Bihar, Qmize works with startups, SMEs, and growing brands across India, helping them simplify communication, automate engagement, and drive measurable digital growth.
          </p>
        </section>


       



        <section id="understanding" className="scroll-mt-28 animate-section">

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    Understanding Qmize: More Than a Traditional Marketing Agency
  </h2>

  <p className="text-gray-700 mt-2 mb-4">
    Qmize is not a traditional digital marketing agency that focuses only on posts, ads, or creatives.
    Instead, it operates at the intersection of marketing, communication technology, and IT automation.
  </p>

  <p className="text-gray-900 mt-4 mb-2">
    The core belief at Qmize is simple:
  </p>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5 mb-4">
    <li>Marketing should be system-driven, not manual</li>
    <li>Customer communication should be instant, automated, and trackable</li>
    <li>Businesses should own their engagement channels</li>
    <li>Technology should simplify growth, not complicate it</li>
  </ul>

  <p className="text-gray-700 mt-2">
    By combining digital marketing strategies with communication platforms like WhatsApp, SMS, IVR,
    and API-based automation, Qmize helps businesses build long-term, scalable growth systems.
  </p>

</section>





<section id="evolution" className="scroll-mt-28 animate-section">

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    The Evolution from MSG24x7 Communications to Qmize
  </h2>

  <p className="text-gray-700 mt-2 mb-4">
    Qmize evolved from MSG24x7 Communications, a brand that initially focused on <Link to="/bulk-sms-services"><span className="font-semibold">bulk SMS</span></Link>
    and telecom-based communication services. Over time, the company observed a major
    shift in how businesses interact with customers.
  </p>

  <p className="text-gray-900 mt-4 mb-2">
    Customers no longer wanted just messages, they wanted:
  </p>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5 mb-4">
    <li>Conversations</li>
    <li>Automation</li>
    <li>Faster responses</li>
    <li>Integrated systems</li>
  </ul>

  <p className="text-gray-700 mt-2">
    To reflect this broader vision, the brand was restructured and rebranded as Qmize.
    The new identity represents smart communication, automation, and IT-backed marketing
    solutions built for modern businesses.
  </p>

</section>






  <section id="core" className="scroll-mt-28 animate-section">

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    Core Services Offered by Qmize
  </h2>

  <p className="text-gray-700 mt-2 mb-4">
    Qmize provides a complete ecosystem of services designed to improve customer
    engagement and operational efficiency.
  </p>

  {/* 1. WhatsApp Business API */}
  <h3 className="text-gray-900 mt-4 mb-2 font-semibold">
    1. WhatsApp Business API & Automation
  </h3>

  <p className="text-gray-700 mt-2 mb-3">
    WhatsApp has become the most powerful business communication channel in India.
    Qmize offers official <Link to="/whatsapp-business-api"> <span className="font-semibold">WhatsApp Business API</span> </Link> solutions that allow businesses
    to communicate at scale while staying compliant.
  </p>

  <p className="text-gray-900 mt-2 mb-2">
    Key offerings include:
  </p>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5 mb-4">
    <li>Official WhatsApp Business API onboarding</li>
    <li>Bulk WhatsApp messaging for campaigns and updates</li>
    <li>Automated chatbots and instant replies</li>
    <li>Customer support automation</li>
    <li>Alerts, notifications, and transactional messages</li>
  </ul>

  <p className="text-gray-700 mt-2 mb-4">
    These solutions help businesses reduce response time, improve customer
    satisfaction, and automate repetitive conversations.
  </p>

  {/* 2. SMS & Communication Technology */}
  <h3 className="text-gray-900 mt-4 mb-2 font-semibold">
    2. SMS & Communication Technology Solutions
  </h3>

  <p className="text-gray-700 mt-2 mb-3">
    Qmize continues to strengthen its foundation in telecom and messaging services
    by offering reliable and scalable communication tools.
  </p>

  <p className="text-gray-900 mt-2 mb-2">
    Services include:
  </p>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5 mb-4">
    <Link to="/promotional-sms"><li className="font-semibold">Promotional SMS</li></Link>
     <Link to="/transactional-sms"><li className="font-semibold">Transactional SMS</li></Link>
     <Link to="/otp-sms"><li className="font-semibold">OTP messaging</li></Link>
    <li>IVR systems</li>
    <li>Cloud telephony solutions</li>
  </ul>

  <p className="text-gray-700 mt-2 mb-4">
    These tools are ideal for businesses that require high delivery rates,
    security, and real-time communication with customers.
  </p>

  {/* 3. Digital Marketing */}
  <h3 className="text-gray-900 mt-4 mb-2 font-semibold">
    3. Digital Marketing Services
  </h3>

  <p className="text-gray-700 mt-2 mb-3">
    While communication is the backbone, Qmize also provides performance-focused
    digital marketing services to help businesses build visibility and generate leads.
  </p>

  <p className="text-gray-900 mt-2 mb-2">
    Digital marketing offerings include:
  </p>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5 mb-4">
    <li>Social media marketing</li>
    <li>Lead generation campaigns</li>
    <li>Online brand promotion</li>
    <li>Digital advertising support</li>
    <li>Business visibility solutions</li>
  </ul>

  <p className="text-gray-700 mt-2 mb-4">
    Unlike generic marketing services, Qmize aligns digital campaigns with
    automation and communication workflows, ensuring leads are followed up instantly.
  </p>

  {/* 4. IT & Automation */}
  <h3 className="text-gray-900 mt-4 mb-2 font-semibold">
    4. IT & Automation Solutions
  </h3>

  <p className="text-gray-700 mt-2 mb-3">
    One of the strongest pillars of Qmize is its IT and automation capability.
    The company helps businesses integrate systems and remove manual processes.
  </p>

  <p className="text-gray-900 mt-2 mb-2">
    Key IT services include:
  </p>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5 mb-4">
    <li>API-based integrations</li>
    <li>Automation workflows</li>
    <li>CRM and communication system integration</li>
    <li>Technical consulting and support</li>
  </ul>

  <p className="text-gray-700 mt-2">
    These solutions enable businesses to connect marketing, sales, and customer
    support into a single streamlined system.
  </p>

</section>


<section id="workswith" className="scroll-mt-28 animate-section">

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    Who Qmize Works With
  </h2>

  <p className="text-gray-700 mt-2 mb-4">
    Qmize is designed specifically for Indian businesses that want affordable
    yet scalable solutions.
  </p>

  <p className="text-gray-900 mt-4 mb-2">
    Primary target audience includes:
  </p>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5 mb-4">
    <li>Small and Medium Businesses (SMEs)</li>
    <li>Startups</li>
    <li>E-commerce businesses</li>
    <li>Educational institutions</li>
    <li>Service-based companies</li>
    <li>Local and regional brands</li>
  </ul>

  <p className="text-gray-700 mt-2">
    Qmize understands the challenges of growing businesses and builds solutions
    that are practical, reliable, and easy to implement.
  </p>

</section>






<section id="why" className="scroll-mt-28 animate-section">

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    Why Businesses Choose Qmize
  </h2>

  <p className="text-gray-700 mt-2 mb-4">
    There are several reasons why businesses prefer Qmize over traditional
    agencies or large CPaaS platforms.
  </p>

  <h3 className="text-gray-900 mt-4 mb-2 font-semibold">
    1. Technology-Driven Approach
  </h3>
  <p className="text-gray-700 mt-2 mb-3">
    Qmize focuses on systems, automation, and integrations rather than manual
    marketing efforts.
  </p>

  <h3 className="text-gray-900 mt-4 mb-2 font-semibold">
    2. Affordable and Scalable Solutions
  </h3>
  <p className="text-gray-700 mt-2 mb-3">
    The services are priced and structured to grow along with the business.
  </p>

  <h3 className="text-gray-900 mt-4 mb-2 font-semibold">
    3. One-Stop Growth Partner
  </h3>
  <p className="text-gray-700 mt-2 mb-3">
    From messaging to marketing to automation, everything is managed under one
    ecosystem.
  </p>

  <h3 className="text-gray-900 mt-4 mb-2 font-semibold">
    4. Business-Friendly Communication
  </h3>
  <p className="text-gray-700 mt-2 mb-3">
    The solutions are designed for real business use, not just technical experts.
  </p>

  <h3 className="text-gray-900 mt-4 mb-2 font-semibold">
    5. Reliable Indian Market Focus
  </h3>
  <p className="text-gray-700 mt-2 mb-4">
    Qmize understands Indian regulations, consumer behavior, and business needs
    better than global-only platforms.
  </p>

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    Competitive Positioning of Qmize
  </h2>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5 mb-4">
    <li>Traditional agencies focus mostly on creatives and ads</li>
    <li>Large CPaaS platforms are often complex and expensive</li>
  </ul>

  <p className="text-gray-700 mt-2 mb-4">
    Qmize fills the gap by offering affordable, practical, and scalable
    communication-driven marketing solutions tailored for Indian businesses.
  </p>

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    SEO and Content Strategy at Qmize
  </h2>

  <p className="text-gray-700 mt-2 mb-2">
    All the content created at Qmize, including blogs, website pages, and PR
    articles, is:
  </p>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5 mb-4">
    <li>100% original</li>
    <li>SEO-optimized</li>
    <li>Aligned with brand tone</li>
    <li>Free from exaggerated or misleading claims</li>
  </ul>

  <p className="text-gray-700 mt-2">
    The goal is not just ranking, but educating businesses and building long-term
    trust.
  </p>

</section>


<section id="future" className="scroll-mt-28 animate-section">

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    The Future Vision of Qmize
  </h2>

  <p className="text-gray-700 mt-2 mb-4">
    Qmize aims to help businesses:
  </p>

  <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5 mb-4">
    <li>Automate customer engagement</li>
    <li>Reduce manual work</li>
    <li>Improve communication efficiency</li>
    <li>Build scalable digital growth systems</li>
  </ul>

  <p className="text-gray-700 mt-2">
    By continuously improving its technology stack and service ecosystem, Qmize
    is committed to becoming a trusted digital communication and growth partner
    for businesses across India.
  </p>

</section>



  <section id="conclusion" className="scroll-mt-28 animate-section">

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    Final Thoughts
  </h2>

  <p className="text-gray-700 mt-2 mb-4">
    In a world where speed, automation, and customer experience define success,
    businesses need more than marketing, they need smart systems. Qmize delivers
    exactly that by combining digital marketing, communication technology, and
    IT automation into one powerful growth solution.
  </p>

  <p className="text-gray-700 mt-2">
    Whether you are a startup, SME, or growing brand, Qmize empowers you to
    communicate better, grow faster, and scale smarter.
  </p>

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
      alt="Signup for WhatsApp Business API Services of Qmize"
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
