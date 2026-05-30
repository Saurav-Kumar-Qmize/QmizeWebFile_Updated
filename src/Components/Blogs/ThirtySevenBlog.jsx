import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";
import whatischatbot from "../../assets/Images/whatischatbot.jpg";
import { Helmet } from "react-helmet";

import Footer from "../Common/Footer";
import { Link } from "react-router-dom";
import christmasImage from "../../assets/Images/christmas_offer_blog.webp";
import bannerImage32 from "../../assets/Images/whatsapp_description_32.jpeg";
import whatsapp37 from "../../assets/Images/whats-busi-app.jpeg";
 
const ThirtySevenBlog = () => {
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
            "third",
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
        "1. WhatsApp Business App: Complete Guide for Business",
    },

    {
      id: "second",
      label: "2. What is WhatsApp Business App?",
    },

    {
      id: "third",
      label: "3. How to Download WhatsApp Business App on Android and iPhone",
       children: [
      {
        id: "third-1",
        label: "3.1 Download WhatsApp Business App on Android (apk)",
      },
      {
        id: "third-2",
        label: "3.2 Download WhatsApp Business App on iPhone (iOS)",
      },
    ],
    },

    {
      id: "fourth",
      label: "4. Requirements for Installing WhatsApp Business",
    },

    {
      id: "fifth",
      label: "5. Key Features of WhatsApp Business App",
    },

    {
      id: "sixth",
      label: "6. WhatsApp Business App vs WhatsApp Business API",
    },

    {
      id: "seventh",
      label: "7. Common Download Issues and Fixes",
    },
    {
        id: "eighth",
        label: "8. Final Thoughts"
    }

    
  
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
           WhatsApp Business App: Complete Guide for Business 2026

        </title>
        <meta
          name="description"
          content=": Learn what WhatsApp Business app is and how to download and install the app on Android and iPhone devices. Step-by-step guide with setup instructions and features."
        />
        <link
          rel="canonical"
          href= "https://qmize.com/blog/whatsapp-business-app"
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
                        onClick={() => {
                          scrollToSection(item.id);
                          if (item.children) {
      setOpenMenu(openMenu === item.id ? null : item.id);
    }
  }

                        }
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
                WhatsApp Business App: Complete Guide for Business
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
                Updated on 30 May 2026 • 28 min read
              </p>

              <section  className="w-full py-1 ">
                <div className="max-w-4xl mx-auto ">
                  {/* WhatsApp Business App: Complete Guide for Business*/}
                  <section id="first">
                    <div className="max-w-4xl mx-auto mb-3">
                    
           <div className="space-y-5 text-md leading-relaxed text-gray-800 mb-3">
                        <p className=" text-emerald-700 text-xl font-bold">Introduction</p>
                          {/* Image after intro */}
                      <div className="mb-8">
                        <img
                          src={whatsapp37}
                          alt="WhatsApp Business App download and installation on Android and iPhone devices"
                          className="rounded-xl shadow-md w-full"
                        />
                      </div>
                   <p>If you want to grow your business and 
                    communicate with customers professionally, 
                    the WhatsApp Business app is one of the 
                    best tools to start with. It helps small
                     businesses create a professional profile, 
                     automate replies, share catalogs, 
                     and manage customer conversations easily.</p>

                      <p>
                In this guide, you will know everything about
                 WhatsApp Business app: what WhatsApp Business 
                 app is, how to download and install it, and
                  a step-by-step guide with setup instructions 
                  and features.
                      </p>


  
                       
                      </div>
                
                      
                     
                    </div>
                  </section>

                  {/*What is WhatsApp Business App?*/}
                 <section id="second">
  <div className="max-w-4xl mx-auto mb-5">

    {/* HEADING */}
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
     What is WhatsApp Business App?
    </h2>

    {/* CONTENT */}
    <div className="space-y-4 text-md leading-relaxed text-gray-800">

      <p>
       WhatsApp Business app is a free messaging platform designed for small businesses. It allows companies to:
      </p>

      <ol className="list-decimal pl-6 space-y-2">
        <li>
          	Create a verified business profile
        </li>
        <li>
          	Add business hours, address, and website
        </li>
        <li>
          	Send quick replies and automated messages
        </li>
        <li>
          	Showcase products using catalogs
        </li>
        <li>
          	Communicate with customers on WhatsApp professionally
        </li>
   
      </ol>
<p>It is different from the regular WhatsApp Messenger because it includes business-focused features.</p>
    </div>
  </div>
               </section>

                  {/*How to Download WhatsApp Business App on Android and iPhone */}
               <section id="third">
            <div className="max-w-6xl mx-auto mb-10 px-2">

    {/* HEADING */}
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
     How to Download WhatsApp Business App on Android and iPhone
    </h2>

<section id="third-1">
  <h3 className="text-xl font-semibold mb-3">
    Download WhatsApp Business App on Android (APK)
  </h3>

  <p className="mb-4">
    Follow these simple steps to install the WhatsApp Business app on your Android smartphone:
  </p>

  <div className="space-y-4">
    <div>
      <h4 className="font-medium font-bold">Step 1: Open the Google Play Store</h4>
      <p>Open the Google Play Store on your Android device.</p>
    </div>

    <div>
      <h4 className="font-medium font-bold">Step 2: Search for WhatsApp Business</h4>
      <p>Type “WhatsApp Business” in the search bar.</p>
    </div>

    <div>
      <h4 className="font-medium font-bold">Step 3: Select the Official App</h4>
      <p>
        Choose the official WhatsApp Business app developed by Meta Platforms.
      </p>
    </div>

    <div>
      <h4 className="font-medium font-bold">Step 4: Tap Install</h4>
      <p>
        Click the “Install” button and wait for the app to download.
      </p>
    </div>

    <div>
      <h4 className="font-medium font-bold">Step 5: Open and Set Up the App</h4>
      <p>After installation:</p>

      <ul className="list-disc pl-6 space-y-1">
        <li>Open the app</li>
        <li>Agree to terms and conditions</li>
        <li>Enter your business phone number</li>
        <li>Verify using OTP</li>
        <li>Add your business name and profile details</li>
      </ul>
    </div>
  </div>

  <p className="mt-4">
    Your WhatsApp Business account is now ready to use.
  </p>

  <p className="mt-2">
  If you are using simple WhatsApp messaging platform, 
  learn here <Link
  target="_blank"
  rel="noopener noreferrer"
  to="https://qmize.com/blog/how-to-convert-whatsapp-to-business-account"
   className="text-blue-600 underline hover:text-blue-800"
  > {"  "}how to convert WhatsApp to a business account {"  "}</Link>.
  </p>
</section>

<section id="third-2">
  <h3 className="text-xl font-semibold my-3">
    Download WhatsApp Business App on iPhone (iOS)
  </h3>

  <p className="mb-4">
    If you use an iPhone, follow these steps to download the WhatsApp Business app:
  </p>

  <div className="space-y-4">
    <div>
      <h4 className="font-medium">Step 1: Open the Apple App Store</h4>
      <p>Launch the App Store on your iPhone.</p>
    </div>

    <div>
      <h4 className="font-medium">Step 2: Search for WhatsApp Business</h4>
      <p>In the search bar, type “WhatsApp Business”.</p>
    </div>

    <div>
      <h4 className="font-medium">Step 3: Download the Official App</h4>
      <p>
        Select the official app from Meta Platforms and tap “Get”.
      </p>
    </div>

    <div>
      <h4 className="font-medium">Step 4: Install the Application</h4>
      <p>
        Authenticate with Face ID, Touch ID, or your Apple ID password if required.
      </p>
    </div>

    <div>
      <h4 className="font-medium">Step 5: Complete the Setup</h4>
      <p>Once installed:</p>

      <ul className="list-disc pl-6 space-y-1">
        <li>Open the app</li>
        <li>Verify your business number</li>
        <li>Add your business profile information</li>
        <li>Start chatting with customers</li>
      </ul>
    </div>
  </div>
</section>

            </div>
           </section>

             {/*Requirements for Installing WhatsApp Business*/}
<section id="fourth">
  <div className="max-w-6xl mx-auto mb-10 px-2">

    {/* HEADING */}
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Requirements for Installing WhatsApp Business
    </h2>

    <p className="mb-4">
      Before downloading the WhatsApp Business app, make sure:
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>You have a stable internet connection</li>
      <li>Your phone has enough storage space</li>
      <li>Your device runs an updated Android or iOS version</li>
      <li>You have access to a valid phone number for verification</li>
    </ul>

  </div>
</section>

                  {/* Key Features of WhatsApp Business Appr?*/}
<section id="fifth">
  <div className="max-w-6xl mx-auto mb-10 px-2">
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Key Features of WhatsApp Business App
    </h2>

    <p className="mb-4">
      Some popular features include:
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>Business Profile</li>
      <li>Quick Replies</li>
      <li>Automated Greeting Messages</li>
      <li>Away Messages</li>
      <li>Product Catalog</li>
      <li>Labels for Chat Organization</li>
      <li>Broadcast Messaging</li>
    </ul>

    <p className="mt-4">
      These features help businesses improve customer communication and response time.
    </p>
  </div>
</section>


   {/*WhatsApp Business App vs WhatsApp Business API*/}
<section id="sixth">
  <div className="max-w-6xl mx-auto mb-10 px-2">
    
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      WhatsApp Business App vs WhatsApp Business API
    </h2>

    <p className="mb-4">
      The WhatsApp Business app is suitable for small businesses that manage chats manually.
    </p>

    <p className="mb-4">
      The <Link
       target="_blank"
    rel="noopener noreferrer"
    to="https://qmize.com/blog/whatsapp-business-api"
    className="text-blue-600 underline hover:text-blue-800"
      >{"  "}WhatsApp Business API {"  "}</Link>is a better option for medium and large businesses that need automation, CRM integration, chatbots, bulk messaging, and multi-agent support.
    </p>

    <p className="mb-4">
      Businesses often upgrade from the app to the API as customer conversations grow.
    </p>

  </div>
</section>

{/* Common Download Issues and Fixes */}
<section id="seventh">
  <div className="max-w-6xl mx-auto mb-10 px-2">
    
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Common Download Issues and Fixes
    </h2>

    <div className="space-y-6">

      {/* Issue 1 */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          App Not Downloading
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Check internet connection</li>
          <li>Restart your device</li>
          <li>Clear Play Store or App Store cache</li>
        </ul>
      </div>

      {/* Issue 2 */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Verification OTP Not Received
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Ensure your phone number is active</li>
          <li>Check SMS permissions</li>
          <li>Try voice call verification</li>
        </ul>
      </div>

      {/* Issue 3 */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Storage Full Error
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Delete unused apps or files</li>
          <li>Free up storage space before installation</li>
        </ul>
      </div>

    </div>

  </div>
</section>

{/* Final Thoughts*/}
<section id="eighth">
  <div className="max-w-6xl mx-auto mb-10 px-2">
    
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Final Thoughts
    </h2>

    <p className="mb-4">
      Downloading the WhatsApp Business app is quick and simple on both Android and iPhone devices. 
      It is a powerful tool for businesses looking to connect with customers, build trust, and improve communication.
    </p>

    <p>
      Whether you run a local shop, online store, or service business,<Link
       target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/blog/whatsapp-business"
                                className="text-blue-600 underline hover:text-blue-800"
      > {"  "}WhatsApp Business </Link>can help you manage 
      customer interactions more efficiently.
    </p>

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

export default ThirtySevenBlog;
