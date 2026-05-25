
import React, { useState, useEffect } from "react";
import Navbar1 from "../Common/Navbar1";
import Navbar2 from "../Common/Navbar2";
import Footer from "../Common/Footer";
import { BsWhatsapp } from "react-icons/bs";
import WhatsAppQR from "../../assets/Images/WhatsAppQR.png";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import whyQR from "../../assets/Images/whyQR.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import whatsappbusinessapiuae from "../../assets/Images/Whats-busi-api-uae.jpeg";
import FormContact from "../Common/FormContact";


import {
  FaBolt, FaUserAlt,
  FaCommentDots,
  FaUserCheck,
  FaChartLine,
  FaQrcode,
  FaMobileAlt,
  FaPhoneAlt, FaDownload,
  FaPlus, FaMinus,
  FaCogs,
  FaRobot,
  FaChartBar,
  FaLayerGroup,
  FaMoneyBillWave,
  FaUniversity,
  FaHospital,
  FaFacebookF,
  FaWpforms,
  FaTags,
  FaServer
} from "react-icons/fa";

import {
  FaBoxOpen,
  FaStore,
  FaIdCard,
  FaBullhorn,
  FaGlobe,
  FaShareAlt,
} from "react-icons/fa";
import {
  FaHeadset,
  FaBullseye,
  FaShoppingCart,
  FaClock,
  FaUsers,
  FaSmile,
  FaPlug,
  FaExchangeAlt,
  FaCheckCircle, FaRocket
} from "react-icons/fa";
import { MdIntegrationInstructions, MdOutlineTravelExplore, MdOutlineVerified, MdSupportAgent, MdVerified } from "react-icons/md";
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineTrendingUp } from "react-icons/hi";



const faqs = [
  {
    q: "What is WhatsApp Business API?",
    a: "WhatsApp Business API is a messaging solution for medium and large businesses to communicate with customers at scale using automation and integrations.",
  },
  {
    q: "How much does WhatsApp API cost in UAE?",
    a: "WhatsApp API pricing in UAE depends on conversation type, message volume, and platform fees. Qmize offers flexible and customized pricing plans.",
  },
  {
    q: "Can I send bulk messages using WhatsApp API?",
    a: "Yes, you can send broadcast messages using pre-approved message templates through WhatsApp Business API.",
  },
  {
    q: "Is WhatsApp API suitable for small businesses?",
    a: "Yes, WhatsApp API can be used by startups and growing businesses. Qmize provides scalable solutions tailored to business needs.",
  },
  {
    q: "How long does it take to get started?",
    a: "The setup process typically takes 2 to 5 days depending on business verification and approval requirements.",
  },
  {
    q: "Is WhatsApp Business API free to use?",
    a: "No, WhatsApp Business API is not free. It uses a conversation-based pricing model along with platform or provider fees depending on usage",
  },
  {
    q: "How do I get WhatsApp Business API in UAE?",
    a: "To get WhatsApp Business API in UAE, you need to apply through an official provider like Qmize, verify your business, and get approval from WhatsApp",
  },
  {
    q: "How can I send 5000 WhatsApp messages at once?",
    a: "You can send bulk messages using WhatsApp Business API by using approved message templates and broadcast features, ensuring compliance with WhatsApp policies.",
  },
  {
    q: "What does the WhatsApp Business API do?",
    a: "WhatsApp Business API enables businesses to automate messaging, send notifications, manage customer conversations, and integrate with CRM and other systems for better engagement.",
  }
];

const WhatsappbusinessApiUAE = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [countryCode, setCountryCode] = useState("91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [text, settext] = useState("");
  const [link, setLink] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
        <Helmet>
          <title>WhatsApp Business API in UAE | Best WhatsApp API Provider in UAE - Qmize</title>
             {/* <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script> */}
          <meta
            name="description"
            content="Looking for the best WhatsApp API provider in UAE? Qmize offers scalable WhatsApp Business API solutions with automation, pricing flexibility, and fast setup."
          />
          <meta
            name="keywords"
            content="WhatsApp Business API in UAE, WhatsApp API pricing in UAE, WhatsApp API service in UAE, WhatsApp Business Platform, WhatsApp API UAE provider, WhatsApp business API UAE"
          />
          <meta name="geo.region" content="AE" />
          <meta name="geo.country" content="UAE" />
          <meta name="geo.placename" content="Dubai" />
          <link rel="alternate" hreflang="en-ae" href="https://qmize.com/whatsapp-business-api-uae" />
          <link rel="alternate" hreflang="x-default" href="https://qmize.com" />

          <link rel="canonical" href="https://qmize.com/whatsapp-business-api-uae" />
        </Helmet>

        <section className="w-full bg-gradient-to-br from-green-50 via-white to-green-100 py-12 sm:py-12 lg:py-17 px-4">

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE - TEXT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-6">

              {/* HEADING */}
              <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
                WhatsApp Business API in UAE
              </h1>

              {/* DESCRIPTION */}
              <p className="text-sm sm:text-[15px] lg:text-md text-black/80 leading-relaxed max-w-xl">
                Boost your customer engagement with the most reliable <span>WhatsApp Business API in UAE </span>by Qmize. Automate conversations, send bulk WhatsApp messages, and deliver real-time support using the powerful <span className="font-bold">WhatsApp Business Platform </span>.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                <button
                  className="bg-green-600 hover:bg-green-700 text-white cursor-pointer px-6 py-3 rounded-xl shadow-md transition duration-300"
                >
                  Get Started Today
                </button>

                <button
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white cursor-pointer px-6 py-3 rounded-xl transition duration-300"
                >
                  Book Free Demo
                </button>

              </div>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="transform transition duration-300 hover:scale-105">
                <img
                  src={whatsappbusinessapiuae}
                  alt="Whats-busi-api-uae"
                  className="w-[380px] sm:w-[400px] lg:w-[460px] xl:w-[500px] object-contain"
                />
              </div>
            </div>

          </div>

        </section>

        <section className="w-full py-12 sm:py-12 px-4 
bg-gradient-to-br from-white via-green-50 to-white">

          <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">

            {/* HEADING */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
              Power Your Customer Communication with{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                WhatsApp Business API in UAE
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-[15px] lg:text-md text-black/80 leading-relaxed max-w-3xl">
              Looking for a reliable <span className="font-bold">WhatsApp Business API Provider in UAE </span>? Qmize helps businesses across the UAE unlock the full potential of the <span className="font-bold">WhatsApp Business Platform </span>  to automate conversations, boost engagement, and drive conversions.
            </p>

            <p className="text-sm sm:text-[15px] text-black/80 leading-relaxed max-w-2xl">
              WhatsApp Business API in UAE helps business from customer support to marketing automation, our solution is designed to help UAE businesses scale faster with seamless WhatsApp integration.
            </p>

          </div>

        </section>

        <section className="w-full py-12 px-4 bg-gradient-to-br from-green-50 via-white to-green-100">

          <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-10">

            {/* HEADING */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Qmize for WhatsApp Business API in UAE?
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-[15px] lg:text-md text-black/80 leading-relaxed max-w-3xl">
              Qmize is a trusted <span>WhatsApp Business API provider in UAE </span>that delivers powerful communication tools tailored for businesses of all sizes.
            </p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl w-full text-left">

              {/* Official Access */}
              <div className="flex items-start gap-3">
                <MdVerified className="text-green-600 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Official WhatsApp Business API Access</h4>
                  <p className="text-sm text-black/70">
                    Get verified access to the official WhatsApp Business Platform with full compliance.
                  </p>
                </div>
              </div>

              {/* Integration */}
              <div className="flex items-start gap-3">
                <FaCogs className="text-green-600 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Easy Integration</h4>
                  <p className="text-sm text-black/70">
                    Connect WhatsApp with your CRM, website, or chatbot without technical complexity.
                  </p>
                </div>
              </div>

              {/* Automation */}
              <div className="flex items-start gap-3">
                <FaRobot className="text-green-600 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Advanced Automation</h4>
                  <p className="text-sm text-black/70">
                    Automate responses, notifications, and campaigns to save time and improve efficiency.
                  </p>
                </div>
              </div>

              {/* Multi-agent */}
              <div className="flex items-start gap-3">
                <FaUsers className="text-green-600 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Multi-Agent Support</h4>
                  <p className="text-sm text-black/70">
                    Enable your team to manage conversations from a shared dashboard.
                  </p>
                </div>
              </div>

              {/* Scalability */}
              <div className="flex items-start gap-3 sm:col-span-2">
                <HiOutlineTrendingUp className="text-green-600 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Scalable for UAE Businesses</h4>
                  <p className="text-sm text-black/70">
                    Whether you're a startup or enterprise, Qmize scales with your business needs.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>

        <section className="w-full py-12 px-4 bg-gradient-to-br from-white via-green-50 to-white">

          <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-10">

            {/* HEADING */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              Features of Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                WhatsApp Business Platform
              </span>
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

              {/* Feature Card */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-left border">
                <FaRobot className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Automated Messaging & Chatbots</h4>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-left border">
                <FaBullhorn className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Broadcast Campaigns for Marketing</h4>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-left border">
                <FaHeadset className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Real-Time Customer Support</h4>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-left border">
                <MdIntegrationInstructions className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">CRM & API Integrations</h4>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-left border">
                <MdOutlineVerified className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Message Templates Approval</h4>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-left border">
                <FaChartBar className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Analytics & Reporting Dashboard</h4>
              </div>

            </div>

            {/* BOTTOM TEXT */}
            <p className="text-sm sm:text-[15px] text-black/80 max-w-3xl leading-relaxed">
              With Qmize, you get everything you need to succeed using the <span className="font-bold">WhatsApp Business Platform </span>in the UAE.
            </p>

          </div>

        </section>


        <section className="w-full py-12 px-4 bg-gradient-to-br from-green-50 via-white to-green-100">

          <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">

            {/* HEADING */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              WhatsApp API Pricing in UAE
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-[15px] text-black/80 max-w-3xl leading-relaxed">
              We offer transparent and flexible <span className="font-bold"> WhatsApp API pricing in UAE </span> to suit different business requirements.
            </p>

            {/* PRICING ITEMS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl text-left">

              <div className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border">
                <MdSupportAgent className="text-green-600 text-2xl mt-1" />
                <span className="text-sm text-black/80">Setup & onboarding support</span>
              </div>

              <div className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border">
                <FaMoneyBillWave className="text-green-600 text-2xl mt-1" />
                <span className="text-sm text-black/80">Conversation-based WhatsApp charges</span>
              </div>

              <div className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border">
                <FaLayerGroup className="text-green-600 text-2xl mt-1" />
                <span className="text-sm text-black/80">Platform usage fees</span>
              </div>

              <div className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border">
                <FaCogs className="text-green-600 text-2xl mt-1" />
                <span className="text-sm text-black/80">Custom integrations (optional)</span>
              </div>

            </div>

            {/* NOTE BOX */}
            <div className="bg-green-100 border border-green-200 rounded-xl p-5 max-w-3xl flex items-start gap-3 text-left">
              <HiOutlineLightBulb className="text-green-700 text-xl mt-1" />
              <p className="text-sm text-black/80">
                Pricing may vary based on message volume and use case (marketing, utility, authentication).
              </p>
            </div>

            {/* CTA */}
            <p className="text-sm sm:text-[15px] text-black/80 max-w-3xl">
              Contact Qmize today for a customized WhatsApp API pricing plan tailored to your business.
            </p>

          </div>

        </section>

        <section className="w-full py-12 px-4 bg-gradient-to-br from-white via-green-50 to-white">

          <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">

            {/* HEADING */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              Use Cases for{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                WhatsApp Business API in UAE
              </span>
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

              {/* E-commerce */}
              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaShoppingCart className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">E-commerce</h4>
                <p className="text-sm text-black/70">
                  Send order confirmations, delivery updates, and promotions.
                </p>
              </div>

              {/* Healthcare */}
              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaHospital className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Healthcare</h4>
                <p className="text-sm text-black/70">
                  Appointment reminders and patient communication.
                </p>
              </div>

              {/* Banking */}
              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaUniversity className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Banking & Finance</h4>
                <p className="text-sm text-black/70">
                  Secure OTPs, alerts, and customer support.
                </p>
              </div>

              {/* Travel */}
              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <MdOutlineTravelExplore className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Travel & Hospitality</h4>
                <p className="text-sm text-black/70">
                  Booking confirmations and customer assistance.
                </p>
              </div>

              {/* Education */}
              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left sm:col-span-2 lg:col-span-1">
                <HiOutlineAcademicCap className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Education</h4>
                <p className="text-sm text-black/70">
                  Student engagement and notifications.
                </p>
              </div>

            </div>

          </div>

        </section>


        <section className="w-full py-12 px-4 bg-gradient-to-br from-green-50 via-white to-green-100">

          <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-12">

            {/* HEADING */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                How to Get Started with{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  Qmize in UAE
                </span>
              </h2>
              <p className="text-sm sm:text-[15px] text-black/70 mt-3 max-w-2xl">
                Get started in just a few simple steps - our team handles everything from setup to go-live.
              </p>
            </div>

            {/* STEPS */}
            <div className="relative w-full max-w-4xl">

              {/* Vertical Line */}
              <div className="absolute left-4 sm:left-1/2 top-0 h-full w-1 bg-green-200 transform sm:-translate-x-1/2"></div>

              <div className="flex flex-col gap-10">

                {/* STEP 1 */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
                  <div className="z-10 bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                    <FaWpforms />
                  </div>
                  <div className="bg-white shadow-md rounded-xl p-5 border w-full sm:w-1/2">
                    <h4 className="font-semibold text-black">Share your business details</h4>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="flex flex-col sm:flex-row-reverse items-start sm:items-center gap-4 sm:gap-10">
                  <div className="z-10 bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                    <FaFacebookF />
                  </div>
                  <div className="bg-white shadow-md rounded-xl p-5 border w-full sm:w-1/2">
                    <h4 className="font-semibold text-black">Verify your Facebook Business Manager</h4>
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
                  <div className="z-10 bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                    <FaCheckCircle />
                  </div>
                  <div className="bg-white shadow-md rounded-xl p-5 border w-full sm:w-1/2">
                    <h4 className="font-semibold text-black">Get WhatsApp API approval</h4>
                  </div>
                </div>

                {/* STEP 4 */}
                <div className="flex flex-col sm:flex-row-reverse items-start sm:items-center gap-4 sm:gap-10">
                  <div className="z-10 bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                    <FaRocket />
                  </div>
                  <div className="bg-white shadow-md rounded-xl p-5 border w-full sm:w-1/2">
                    <h4 className="font-semibold text-black">Launch your messaging campaigns</h4>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        <section className="w-full py-12 px-4 bg-gradient-to-br from-white via-green-50 to-white">

          <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">

            {/* HEADING */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              Why UAE Businesses Trust{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Qmize
              </span>
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

              {/* Fast onboarding */}
              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaBolt className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Fast onboarding process</h4>
              </div>

              {/* Support */}
              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaHeadset className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Dedicated customer support</h4>
              </div>

              {/* Infrastructure */}
              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaServer className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Reliable API infrastructure</h4>
              </div>

              {/* Pricing */}
              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaTags className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Affordable pricing plans</h4>
              </div>

              {/* Results */}
              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left sm:col-span-2 lg:col-span-1">
                <FaChartLine className="text-green-600 text-3xl mb-4" />
                <h4 className="font-semibold text-lg">Proven results across industries</h4>
              </div>

            </div>

          </div>

        </section>

        <section className="w-full py-12 px-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white">

          <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">

            {/* HEADING */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Boost Engagement with WhatsApp Business API UAE
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-[15px] lg:text-md text-white/90 max-w-3xl leading-relaxed">
              Take your customer communication to the next level with Qmize. Whether you want to automate support or increase sales, our <span className="font-bold">WhatsApp API service in UAE </span> is built for performance.
            </p>

            {/* SUB TEXT */}
            <p className="text-lg font-semibold mt-2">
              Ready to grow your business with WhatsApp?
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">

              {/* Primary CTA */}
              <a
                href="https://qmize.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all"
              >
                Get Started Today <FaRocket />
              </a>

              {/* Secondary CTA */}
              <a
                href="https://qmize.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all"
              >
                Contact Qmize
              </a>

            </div>

          </div>

        </section>

        <section className="w-full py-12 sm:py-20 px-4 
    bg-gradient-to-br from-white via-green-50 to-green-100">

          <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">

            {/* HEADING */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center">
              Frequently Asked Questions{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                WhatsApp Business API UAE
              </span>
            </h2>

            {/* FAQ LIST */}
            <div className="w-full flex flex-col gap-4">

              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md border border-green-100 
              rounded-xl shadow-sm overflow-hidden transition duration-300"
                >

                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center 
                px-5 py-4 text-left text-black font-medium"
                  >
                    <span className="text-sm sm:text-base">{item.q}</span>

                    <span className="text-green-600 text-sm">
                      {openIndex === index ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`px-5 overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                      }`}
                  >
                    <p className="text-sm text-black/70 leading-relaxed">
                      {item.a}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>
           <FormContact/>   
        <Footer />
      </div>

    </>
  )
}

export default WhatsappbusinessApiUAE;