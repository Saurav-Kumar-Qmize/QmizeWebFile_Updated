import { useRef,useState,useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";
import QmizeBlog from "../../assets/Images/qmize-brand-image.webp";
import { Helmet } from "react-helmet";

import Footer from "../Common/Footer";
import {Link} from "react-router-dom";
import christmasImage from "../../assets/Images/christmas_offer_blog.webp";

export default function BlogLayout() {


const comparisonData = [
  {
    feature: "Marketing Strategy",
    agency: "✅ Yes",
    cpaas: "❌ No",
    qmize: "✅ Yes",
  },
  {
    feature: "WhatsApp Business API",
    agency: "❌ Limited",
    cpaas: "✅ Yes",
    qmize: "✅ Yes",
  },
  {
    feature: "Automation & Chatbots",
    agency: "❌ No",
    cpaas: "✅ Yes",
    qmize: "✅ Yes",
  },
  {
    feature: "IT & API Integration",
    agency: "❌ No",
    cpaas: "✅ Yes",
    qmize: "✅ Yes",
  },
  {
    feature: "Business-Friendly Setup",
    agency: "✅ Yes",
    cpaas: "❌ Complex",
    qmize: "✅ Yes",
  },
  {
    feature: "Indian SMB Focus",
    agency: "⚠️ Partial",
    cpaas: "⚠️ Partial",
    qmize: "✅ Strong",
  },
  {
    feature: "End-to-End Growth System",
    agency: "❌ No",
    cpaas: "❌ No",
    qmize: "✅ Yes",
  },
];




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
  { id: "intro", label: "1. Qmize vs Traditional Digital Agencies" },
  { id: "gamechanger", label: "2. Changing Landscape of Digital Growth" },

  {
    id: "threephase",
    label: "3. Understanding the Three Models",
   
  },

  { id: "template", label: "4. Comparisions" },
  { id: "conclusion", label: "5. Why Business Choose Qmize" },
  { id: "final", label: "6. Why Qmize Stands Out" }
];


  return (
    <>  

     <Helmet>

       <meta charSet="utf-8" />
        <title>Qmize vs Traditional Digital Agencies vs CPaaS Platforms</title>
        <meta
          name="description"
          content="Comparision of Qmize vs Traditional Digital Agencies vs CPaaS Platforms"
        />
        <link rel="canonical" href="https://qmize.com/blog/qmize-vs-traditional-digital-agencies-vs-cpaas-platforms" />

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
  Qmize vs Traditional Digital Agencies vs CPaaS Platforms: A Smart Comparison for Growing Businesses

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
  Modified on 04 Jan 2026 • 22 min read
</p>

        {/* INTRO */}
        <section id="intro" className="scroll-mt-28 animate-section">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
          Choosing the right digital growth partner is one of the most important decisions for any business today. With countless options available, from traditional digital marketing agencies to large CPaaS platforms and hybrid service providers, business owners often struggle to understand what truly fits their needs.
          This blog offers a clear and practical comparison between Qmize, traditional digital marketing agencies, and large CPaaS platforms, helping businesses make an informed decision based on technology, scalability, cost, and real-world usability.
          </p>
        </section>


        <img
        src={QmizeBlog}
        alt="Best WhatsApp Business API Services In India"
        className="mt-2 mb-2 rounded-xl"
        />

        {/* BENEFITS */}
        <section id="gamechanger" className="scroll-mt-28 animate-section">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">The Changing Landscape of Digital Growth
</h2>

          <p className="text-gray-900 mt-2 mb-2">Earlier, digital growth meant:</p>


          <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5">
            <li>Running social media ads</li>
            <li>Posting content regularly</li>
            <li>Sending occasional promotional messages</li>        
          </ul>
          <p className="text-gray-900 mt-4 mb-2">Today, businesses need much more:</p>


          <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5">
            <li>Instant customer communication</li>
            <li>Automation and chat-based engagement</li>
            <li>Integrated systems (CRM, WhatsApp, SMS, APIs)</li>        
            <li>Measurable and scalable growth</li>        
          </ul>


          <p className="text-gray-900 mt-2 mb-4">This shift has created a gap between old-style agencies and pure technology platforms. Qmize was built to fill this gap.</p>
        </section>




        <section id="threephase">

            <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">Understanding the Three Models
</h2>
          <h3 className="text-gray-900 mt-4 mb-2">Before comparing, let’s understand how each model works.</h3>
          <p className="text-gray-900 mt-4 mb-2 font-semibold">1. Traditional Digital Marketing Agencies</p>


           <p className="text-gray-900 mt-4 mb-2">These agencies primarily focus on:</p>

          <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5">
            <li>Social media marketing</li>
            <li>Paid advertising</li>
            <li>Content creation</li>        
            <li>Brand visibility</li>        
          </ul>

           <p className="text-gray-700 mt-2 mb-2">They are creative-driven and campaign-focused.</p>





           <p className="text-gray-900 mt-4 mb-2 font-semibold">2. Large CPaaS Platforms (Communication Platforms as a Service)</p>


           <p className="text-gray-900 mt-4 mb-2">CPaaS platforms offer:</p>

          <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5">
            <li>WhatsApp Business APIs</li>
            <li>SMS and OTP services</li>
            <li>Voice and IVR solutions</li>        
            <li>APIs for developers</li>        
          </ul>

           <p className="text-gray-700 mt-2 mb-2">They are technology-heavy and infrastructure-focused.</p>






           <p className="text-gray-900 mt-4 mb-2 font-semibold">3. Qmize - Digital Marketing cum IT Solutions Company</p>


           <p className="text-gray-900 mt-4 mb-2">Qmize combines:</p>

          <ul className="space-y-2 text-gray-700 text-[15px] sm:text-base list-decimal ml-5">
            <li>Communication platforms</li>
            <li>Automation systems</li>
            <li>Digital marketing strategies</li>        
            <li>IT integrations</li>        
          </ul>

           <p className="text-gray-700 mt-2 mb-2">It works as a technology-enabled growth partner, not just a service provider.</p>
          




        </section>




        <section id="template">

             <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">Comparison 1: Approach to Business Growth
</h2>

            <h3 className="text-gray-900 mt-4 mb-2">Traditional Agencies:</h3>

           <p className="text-gray-700 mt-2 mb-2">Focus on visibility and campaigns. Growth depends heavily on manual execution and constant follow-ups.</p>
            <h3 className="text-gray-900 mt-4 mb-2">CPaaS Platforms:</h3>

           <p className="text-gray-700 mt-2 mb-2">Provide tools and APIs but leave implementation, strategy, and execution to the business or developers.</p>
            <h3 className="text-gray-900 mt-4 mb-2">Qmize:</h3>

           <p className="text-gray-700 mt-2 mb-2">Builds complete growth systems from lead generation to automated communication and follow-ups ensuring businesses don’t just get tools, but results.</p>




            







            <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">Comparison 2: Communication & Automation Capabilities
</h2>

            <h3 className="text-gray-900 mt-4 mb-2">Traditional Agencies:</h3>

           <p className="text-gray-700 mt-2 mb-2">Limited or no automation. Communication often depends on third-party tools not integrated properly.</p>
            <h3 className="text-gray-900 mt-4 mb-2">CPaaS Platforms:</h3>

           <p className="text-gray-700 mt-2 mb-2"> Strong automation capabilities, but require technical knowledge and setup effort.</p>
            <h3 className="text-gray-900 mt-4 mb-2">Qmize:</h3>

           <p className="text-gray-700 mt-2 mb-2"> Offers ready-to-use WhatsApp automation, SMS workflows, chatbots, and alerts, designed specifically for business use without heavy technical dependency.</p>




      <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">Comparison 3: Ease of Use for Indian Businesses
</h2>

            <h3 className="text-gray-900 mt-4 mb-2">Traditional Agencies:</h3>

           <p className="text-gray-700 mt-2 mb-2"> Easy to communicate with, but limited in technology depth.</p>
            <h3 className="text-gray-900 mt-4 mb-2">CPaaS Platforms:</h3>

           <p className="text-gray-700 mt-2 mb-2"> Powerful but complex. Often designed for enterprises or developers, not SMBs.</p>
            <h3 className="text-gray-900 mt-4 mb-2">Qmize:</h3>

           <p className="text-gray-700 mt-2 mb-2"> Designed specifically for Indian SMEs, startups, and regional brands, balancing simplicity with advanced functionality.</p>


      <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">Comparison 4: Cost & Scalability
</h2>

            <h3 className="text-gray-900 mt-4 mb-2">Traditional Agencies:</h3>

           <p className="text-gray-700 mt-2 mb-2">  Monthly retainers increase as workload increases. Scaling means higher manpower costs.</p>
            <h3 className="text-gray-900 mt-4 mb-2">CPaaS Platforms:</h3>

           <p className="text-gray-700 mt-2 mb-2"> Pay-as-you-go, but costs increase with usage and technical customization.</p>
            <h3 className="text-gray-900 mt-4 mb-2">Qmize:</h3>

           <p className="text-gray-700 mt-2 mb-2">  Offers affordable, scalable solutions that grow with the business, combining cost control with automation efficiency.</p>




      <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">Comparison 5: Integration & IT Support
</h2>

            <h3 className="text-gray-900 mt-4 mb-2">Traditional Agencies:</h3>

           <p className="text-gray-700 mt-2 mb-2">Rarely handle API integrations or CRM workflows.</p>
            <h3 className="text-gray-900 mt-4 mb-2">CPaaS Platforms:</h3>

           <p className="text-gray-700 mt-2 mb-2"> Provide APIs but limited support for business-side implementation.</p>
            <h3 className="text-gray-900 mt-4 mb-2">Qmize:</h3>

           <p className="text-gray-700 mt-2 mb-2"> Provides API integrations, CRM connectivity, automation workflows, and technical consulting, ensuring systems actually work together.</p>









        </section>





        <section id="conclusion">


       
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-start mb-4">
          Why Businesses Choose <span className="text-emerald-600">Qmize</span>
        </h2>

        <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-emerald-600 text-white">
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 font-semibold">Traditional Agency</th>
                <th className="p-4 font-semibold">CPaaS Platform</th>
                <th className="p-4 font-semibold">Qmize</th>
              </tr>
            </thead>

            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-t ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="p-4 font-medium text-gray-800">
                    {row.feature}
                  </td>
                  <td className="p-4 text-center">{row.agency}</td>
                  <td className="p-4 text-center">{row.cpaas}</td>
                  <td className="p-4 text-center font-semibold text-emerald-600">
                    {row.qmize}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    









        </section>



        <section id="final" className="mt-5">

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    Why Qmize Stands Out in the Middle
  </h2>

  <p className="text-gray-700 mt-2 mb-4">
    Qmize intentionally positions itself between agencies and CPaaS platforms because businesses don’t need extremes, they need balance.
  </p>

  <p className="text-gray-700 mt-2 mb-2">
    Qmize delivers:
  </p>

  <ul className="list-disc pl-6 text-gray-700 mb-4">
    <li>Strategy like an agency</li>
    <li>Technology like a CPaaS platform</li>
    <li>Simplicity like a business partner</li>
  </ul>

  <p className="text-gray-700 mt-2 mb-2">
    This hybrid approach helps businesses:
  </p>

  <ul className="list-disc pl-6 text-gray-700 mb-6">
    <li>Reduce manual work</li>
    <li>Improve response times</li>
    <li>Automate customer engagement</li>
    <li>Scale without operational stress</li>
  </ul>

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    Ideal Use Case for Qmize
  </h2>

  <p className="text-gray-700 mt-2 mb-2">
    Qmize is ideal for businesses that:
  </p>

  <ul className="list-disc pl-6 text-gray-700 mb-6">
    <li>Want WhatsApp, SMS, and automation without technical headaches</li>
    <li>Need marketing aligned with communication systems</li>
    <li>Want measurable growth, not just visibility</li>
    <li>Prefer affordable and scalable solutions</li>
  </ul>

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    SEO Advantage of Choosing Qmize
  </h2>

  <p className="text-gray-700 mt-2 mb-2">
    From an SEO and content perspective, Qmize supports:
  </p>

  <ul className="list-disc pl-6 text-gray-700 mb-6">
    <li>Lead capture through automation</li>
    <li>Instant follow-ups via WhatsApp</li>
    <li>CRM-based tracking</li>
    <li>Conversion-focused digital campaigns</li>
  </ul>

  <p className="text-gray-700 mt-2 mb-6">
    This ensures traffic doesn’t just visit, but converts.
  </p>

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    Final Verdict: Which One Should You Choose?
  </h2>

  <ul className="list-disc pl-6 text-gray-700 mb-6">
    <li>Choose a traditional agency if you only need creatives and ads</li>
    <li>Choose a CPaaS platform if you have a technical team to build systems</li>
    <li>
      <span className="font-semibold text-emerald-700">
        Choose Qmize
      </span>{" "}
      if you want complete, ready-to-use growth solutions
    </li>
  </ul>

  <p className="text-gray-700 mt-2 mb-4">
    Qmize simplifies digital growth by combining communication technology, digital marketing, and IT automation into one powerful ecosystem.
  </p>

  <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 mb-3">
    Conclusion
  </h2>

  <p className="text-gray-700 mt-2">
    In today’s competitive market, growth is not about choosing between marketing or technology, it’s about choosing the right combination of both.
    Qmize offers that balance, making it a smart choice for businesses that want to grow faster, communicate better, and scale smarter.
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
      alt="Signup for WhatsApp Business API of Qmize"
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
