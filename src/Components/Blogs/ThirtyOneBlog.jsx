import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";

import { Helmet } from "react-helmet";

import Footer from "../Common/Footer";
import { Link } from "react-router-dom";
import christmasImage from "../../assets/Images/christmas_offer_blog.webp";
import bannerImage30 from "../../assets/Images/whatsapp-description-30.jpg";
import bannerImage31 from "../../assets/Images/whatsapp_description_31.jpeg";

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
        "1. WhatsApp Blue Tick: Complete Guide to Get Verified on WhatsApp Business",
    },

    {
      id: "second",
      label: "2. What is WhatsApp Blue Tick?",
    },

    {
      id: "third",
      label: "3. WhatsApp Blue Tick Vs Green Tick",
    },

    {
      id: "fourth",
      label: "4. Benefits of WhatsApp Blue Tick",
    },

    {
      id: "fifth",
      label: "5. Eligibility Criteria for WhatsApp Blue Tick",
    },

    {
      id: "sixth",
      label: "6. How to Get Blue Tick on WhatsApp Business",
    },

    {
      id: "seventh",
      label: "7. How to Get Verified Tick on WhatsApp Faster",
    },

    {
      id: "eighth",
      label: "8. WhatsApp Blue Tick Subscription Plan (Pricing Table)",
    },

    {
      id: "ninth",
      label: "9. Common Reasons for Rejection",
    },

    {
      id: "tenth",
      label: "10. Tips to Increase Approval Chances",
    },

    {
      id: "eleventh",
      label: "11. Why Choose Qmize for WhatsApp Blue Tick?",
    },

    {
      id: "twelfth",
      label: "12. Conclusion",
    },
    {
        id: "thirteenth",
        label: "13. FAQs About WhatsApp Blue Tick"
    }
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
            WhatsApp Blue Tick: How to Get Verified Tick on WhatsApp Business
        </title>
        <meta
          name="description"
          content="Learn how to get WhatsApp Blue Tick. Complete guide on eligibility, pricing, and steps to get verified tick on WhatsApp Business."
        />
        <link
          rel="canonical"
          href="https://Qmize.com/blog/whatsapp-blue-tick"
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
                WhatsApp Business Description: Guide, 100 Examples
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
                Updated on 16 Apr 2026 • 28 min read
              </p>

              <section className="w-full py-5 ">
                <div className="max-w-4xl mx-auto ">
                  {/*  WhatsApp Blue Tick: Complete Guide to Get Verified on WhatsApp Business */}
                  <section id="first">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                       WhatsApp Blue Tick: Complete Guide to Get Verified on WhatsApp Business
                      </h2>

                      <div className="space-y-6 text-md leading-relaxed text-gray-800 mb-3">
                        <p >
                     When customers interact with any businesses on WhatsApp, they look for authenticity. 
                      A verified badge <br/>(blue tick) next {"    "}to your
                      business name on WhatsApp instantly signals the trust, authenticity, 
                      and credibility .<br/> The {"   "} <span className="font-bold"> {"  "} WhatsApp Blue Tick {"  "} </span>is 
                      one of the most powerful features for businesses looking to stand out and build customer confidence on the platform.</p>
                      <p> This guide covers everything that you need to know about the 
                        <span className="font-bold"> WhatsApp Blue Tick </span>, including how to get blue tick on 
                       {"  "}  <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/blog/whatsapp-business"
                              >
                                <span className="text-blue-500 hover:underline">
                                  WhatsApp Business
                                </span>
                              </Link>{"  "},
                         WhatsApp blue tick eligibility requirements, benefits of WhatsApp blue tick, and WhatsApp blue tick pricing. </p> 

                   

                      </div>
                      {/* Image after intro */}
                      <div className="mb-8">
                        <img
                          src={bannerImage31}
                          alt="WhatsApp api integration"
                          className="rounded-xl shadow-md w-full"
                        />
                      </div>
                    </div>
                  </section>

                  {/* What is WhatsApp Blue Tick? */}
                  <section id="second">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                        What is WhatsApp Blue Tick?
                      </h2>

                      <div className="space-y-4 text-md leading-relaxed text-gray-800">
                        <p>
                      <span className="font-bold"> The WhatsApp Blue Tick </span> is a verification badge 
                       that appears next to a business name, confirming 
                       that the account is officially verified by WhatsApp.
                         
                        </p>

                        <p>It is commonly associated with the {"  "} <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://qmize.com/whatsapp-business-api"
                              >
                                <span className="text-blue-500 hover:underline">
                                {"   "}  WhatsApp Business API {"  "}
                                </span>
                              </Link> {"  "}
                             and is also known as:</p>

                        <ul className="list-disc pl-6 space-y-1">
                          <li>
                           WhatsApp Business Blue Tick 

                          </li>
                          <li>	WhatsApp Green Tick (older term)</li>
                          <li>
                        	Verified Tick on WhatsApp 
                          </li>
                       
                        </ul>

                      
                      </div>
                    </div>
                  </section>

                  {/*   WhatsApp Blue Tick Vs Green Tick */}
                  <section id="third">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                      WhatsApp Blue Tick Vs Green Tick

                      </h2>

                      <div className="space-y-4 text-md leading-relaxed text-gray-800">
                        <p>
                         There is often confusion between these two terms, 
                         but they essentially refer to the same thing.
                        </p>

                        {/* Table */}
                        <div className="overflow-x-auto">
                          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                            <thead className="bg-emerald-100 text-gray-900">
                              <tr>
                                <th className="text-left px-4 py-2 border">
                                  Feature
                                </th>
                                <th className="text-left px-4 py-2 border">
                                  WhatsApp Blue Tick
                                </th>
                                <th className="text-left px-4 py-2 border">
                                  WhatsApp Green Tick
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              <tr>
                                <td className="px-4 py-2 border font-semibold">
                                  Status
                                </td>
                                <td className="px-4 py-2 border">
                                  Current terminology
                                </td>
                                <td className="px-4 py-2 border">
                                  Older terminnology
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 border font-semibold">
                                  Visibility
                                </td>
                                <td className="px-4 py-2 border">
                                  Next to business name
                                </td>
                                <td className="px-4 py-2 border">
                                  Same
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 border font-semibold">
                                  Purpose
                                </td>
                                <td className="px-4 py-2 border">
                                  Verification badge
                                </td>
                                <td className="px-4 py-2 border">
                                  Same
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 border font-semibold">
                                  Platform
                                </td>
                                <td className="px-4 py-2 border">
                                WhatsApp Business API
                                </td>
                                <td className="px-4 py-2 border">
                                 WhatsApp Business API
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <p>
                          Both represent an {"  "}<span className="font-bold"> Official Business Account (OBA). </span>
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Benefits of WhatsApp Blue Tick */}
                  <section id="fourth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                        Benefits of WhatsApp Blue Tick
                      </h2>

                      <div className="space-y-4 text-md leading-relaxed text-gray-800">
                       

                        <ol className="list-decimal pl-6 space-y-2 ">
                          <li>
                        <span className="text-xl font-semibold text-gray-900 mb-1">   Builds Instant Trust </span>
                           <p>Customers are more likely to interact with verified businesses.</p>
                          </li>
                          <li>
                    <span className="text-xl font-semibold text-gray-900 mb-1">   Displays Business Name Automatically </span>
                    <p>Your brand name appears even if users haven’t saved your number.</p>
                          </li>
                          <li>
                         <span className="text-xl font-semibold text-gray-900 mb-1">    Higher Engagement </span>
                          <p>Verified accounts usually see better response rates.</p>
                          </li>
                          <li>
                             <span className="text-xl font-semibold text-gray-900 mb-1">     Prevents Fake Accounts </span>
                             <p>Protects your brand from impersonation.</p>
                          </li>
                          <li>
                             <span className="text-xl font-semibold text-gray-900 mb-1">     Boosts Conversions </span>
                             <p>Trust leads to more sales and stronger customer relationships.</p>
                          </li>
                        </ol>

             
                      </div>
                    </div>
                  </section>

                  {/* Eligibility Criteria for WhatsApp Blue Tick */}
                  <section id="fifth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                     Eligibility Criteria for WhatsApp Blue Tick
                      </h2>

                      <div className="space-y-4 text-md leading-relaxed text-gray-800">
                        <p>
                       To get a { " "} <span className="font-bold"> {"  "}  WhatsApp Business Blue Tick </span>, your business must meet the following:

                        </p>
                        <ol className="list-disc pl-6 space-y-1">
                            <li> Must use WhatsApp Business API </li>
                            <li> Business should be well-known or notable </li>
                            <li> Verified Facebook Business Manager account </li>
                            <li> Strong online presence (website, media coverage, social media) </li>
                            <li> Compliance with WhatsApp policies </li>
                        </ol>

                      </div>
                    </div>
                  </section>

                  {/* How to Get Blue Tick on WhatsApp Business */}
                  <section id="sixth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                        How to Get Blue Tick on WhatsApp Business
                      </h2>
                <p className="mb-2">Follow these steps:</p>
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">  
                        Step 1: Apply for  <Link
                              target="_blank"
                              rel="noopener noreferrer"
                              to="https://qmize.com/whatsapp-business-api"
                            >
                              <span className="text-blue-500 hover:underline">
                                WhatsApp Business API
                              </span>
                            </Link> 
                        </h3>
                        <p>Choose a reliable provider like {"  "}<Link
                              target="_blank"
                              rel="noopener noreferrer"
                              to="https://qmize.com/"
                            >
                              <span className="text-blue-500 hover:underline">
                              {" "}  Qmize
                              </span>
                            </Link> .</p>
                </div>

                <div>
                 <h3 className="text-xl font-semibold text-gray-900 mb-1">
                     Step 2: Complete Business Verification 
                     </h3>   
                     <p>Submit your documents via Facebook Business Manager</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        Step 3: Strengthen Your Brand Presence
                        </h3>
                        <p>Ensure your business has:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li> Website</li>
                            <li> Media mentions </li>
                            <li> Active social channels </li>
                        </ul>
                </div>

            <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Step 4: Apply for Official Business Account
                    </h3>
                    <p>Request verification through your provider.</p>
                    </div>    
 
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Step 5: Wait for Approval
                    </h3>
                    <p>WhatsApp reviews your request before granting the badge.</p>
                </div>       
                    </div>
                  </section>

                  {/* How to Get Verified Tick on WhatsApp Faster */}
                  <section id="seventh">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                       How to Get Verified Tick on WhatsApp Faster
                      </h2>
                 <p className="mb-2">While approval isn’t guaranteed, you can follow these tips that help you get verified on WhatsApp:</p>
                     <ul className="list-disc pl-6 space-y-1">
                        <li> Build strong online authority </li>
                        <li> Get your business featured in news or PR articles </li> 
                        <li> Maintain consistent branding of your business</li>
                        <li>  Avoid spam or policy violations </li>
                        <li> Work with an experienced API provider </li>

                     </ul>
                    </div>
                  </section>

                  {/* WhatsApp Blue Tick Subscription Plan (Pricing Table) */}
                  <section id="eighth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                        WhatsApp Blue Tick Subscription Plan (Pricing Table)

                      </h2>
                      <p className="mb-4"> {" "} The {" "} <span className="font-bold"> WhatsApp Blue Tick </span> is free, 
                      but you need WhatsApp Business API access, which involves costs.</p>

                      <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                            <thead className="bg-emerald-100 text-gray-900">
                           <tr>
                         <th className="text-left px-4 py-2 border">
                                  Plan Type
                                </th>
                                <th className="text-left px-4 py-2 border">
                                  Features
                                </th>
                                <th className="text-left px-4 py-2 border">
                                  Estimated Price
                                </th>
                           </tr>
                            </thead>
                             <tbody className="bg-white">
                              <tr>
                             <td className="px-4 py-2 border font-semibold">
                                  Basic Plan
                                </td>
                                <td className="px-4 py-2 border">
                                  API access, limited features
                                </td>
                                <td className="px-4 py-2 border">
                                  ₹2,000 – ₹5,000/month
                                </td>
                              </tr>
                                   <tr>
                             <td className="px-4 py-2 border font-semibold">
                                  Growth Plan
                                </td>
                                <td className="px-4 py-2 border">
                                  API + chatbot automation
                                </td>
                                <td className="px-4 py-2 border">
                                 ₹5,000 – ₹15,000/month
                                </td>
                              </tr>
                                     <tr>
                             <td className="px-4 py-2 border font-semibold">
                                  Pro Plan
                                </td>
                                <td className="px-4 py-2 border">
                                 Advanced automation + integrations
                                </td>
                                <td className="px-4 py-2 border">
                                 ₹15,000 – ₹50,000/month
                                </td>
                              </tr>
                                      <tr>
                             <td className="px-4 py-2 border font-semibold">
                                  Enterprise Plan
                                </td>
                                <td className="px-4 py-2 border">
                                 Custom solutions & support
                                </td>
                                <td className="px-4 py-2 border">
                                Custom Pricing
                                </td>
                              </tr>
                              </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  {/*Common Reasons for Rejection */}
                  <section id="ninth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                      Common Reasons for Rejection
                      </h2>

                   <ul className="list-disc pl-6 space-y-1">
                     <li>  Low brand visibility </li>
                     <li> 	No media presence </li>
                     <li> 	Incomplete verification </li>
                     <li> 	Policy violations </li>
                     <li> 	Spam-like messaging behavior </li>
                   </ul>
                    </div>
                  </section>

                  {/* Tips to Increase Approval Chances*/}
                  <section id="tenth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                        Tips to Increase Approval Chances

                      </h2>

                        <ul className="list-disc pl-6 space-y-1">
                     <li>   	Get your brand mentioned on trusted websites </li>
                     <li> 		Maintain a professional website  </li>
                     <li> 		Use consistent business details everywhere  </li>
                     <li> 		Verify your business properly  </li>
                     <li> 		Build credibility before applying  </li>
                   </ul>
                    </div>
                  </section>

                  {/* Why Choose Qmize for WhatsApp Blue Tick? */}
                  <section id="eleventh">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                       Why Choose Qmize for WhatsApp Blue Tick?

                      </h2>
                       <p> {" "} <Link
                              target="_blank"
                              rel="noopener noreferrer"
                              to="https://qmize.com/"
                            >
                              <span className="text-blue-500 hover:underline">
                                Qmize
                              </span>
                            </Link> {"   "} helps businesses simplify the verification process and scale communication.</p>
                            <p className="font-bold mt-3 text-lg">Key Benefits:</p>

                                <ul className="list-disc pl-6 space-y-1">
                     <li>   		Easy API integration  </li>
                     <li> 			Expert support for blue tick approval </li>
                     <li> 			Bulk messaging solutions  </li>
                     <li> 			Automation and chatbot tools   </li>
                     <li> 			Reliable onboarding process  </li>
                   </ul>
                    </div>
                  </section>

            {/* Conclusion */}
             <section id="twelfth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                        Conclusion
                      </h2>

                      <div className="space-y-4 text-md leading-relaxed text-gray-800">
                        <p>
                        The {"  "} {"  "}  <span className="font-semibold">WhatsApp Blue Tick</span>  is a powerful trust signal that can significantly impact customer engagement and brand perception. While it requires effort and eligibility, the long-term benefits make it a valuable asset for any business using WhatsApp.

                        </p>

          
                      </div>
                    </div>
                  </section>
                  {/* FAQs About WhatsApp Blue Tick */}
                  <section id="thirteenth">
                    <div className="max-w-4xl mx-auto mb-5">
                      <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
                        FAQs About WhatsApp Blue Tick
                      </h2>

                      <div className="space-y-4 text-md leading-relaxed text-gray-800">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            1. What is WhatsApp Blue Tick?
                          </h3>
                          <p>
                             It is a verification badge that confirms a business account is authentic and 
                             officially approved by WhatsApp.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                           2. How to get blue tick on WhatsApp business?
                          </h3>
                          <p>
                     You need WhatsApp Business API access, verified business details, 
                     and must apply for an Official Business Account.

                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                           3. What is WhatsApp blue tick price?
                          </h3>
                          <p>
                           The blue tick is free, but API services may involve monthly costs depending on the provider.
                          </p>
                        </div>

                      
                      </div>
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

export default WhatsAppAPI;
