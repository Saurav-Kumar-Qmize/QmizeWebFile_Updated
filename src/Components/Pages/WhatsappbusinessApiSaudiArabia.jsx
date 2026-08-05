import React, { useState, useEffect } from "react";
import Navbar1 from "../Common/Navbar1";
import Navbar2 from "../Common/Navbar2";
import Footer from "../Common/Footer";
import { BsWhatsapp } from "react-icons/bs";
import WhatsAppQR from "../../assets/Images/WhatsAppQR.png";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import whyQR from "../../assets/Images/whyQR.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import whatsappApiSaudiArabia from "../../assets/Images/WhatsappApiSaudiArabia.jpeg";
import FormContact from "../Common/FormContact";

import {
  FaBolt,
  FaUserAlt,
  FaCommentDots,
  FaUserCheck,
  FaChartLine,
  FaQrcode,
  FaMobileAlt,
  FaPhoneAlt,
  FaDownload,
  FaPlus,
  FaMinus,
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
  FaServer,
  FaBuilding,
  FaTruck,
  FaCar,
  FaPlane,
  FaGraduationCap,
  FaBriefcase,
  FaCheck,
  FaCheckDouble,
  FaRegCheckCircle,
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
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

import {
  MdIntegrationInstructions,
  MdOutlineTravelExplore,
  MdOutlineVerified,
  MdSupportAgent,
  MdVerified,
} from "react-icons/md";

import {
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
  HiOutlineTrendingUp,
} from "react-icons/hi";

const faqs = [
  {
    q: "What is the WhatsApp Business API?",
    a: "The WhatsApp Business API is an official business messaging solution from Meta that enables medium and large businesses to communicate with customers at scale through automation, chatbots, and integrations.",
  },
  {
    q: "Is WhatsApp Business API available in Saudi Arabia?",
    a: "Yes. Businesses in Saudi Arabia can use the official WhatsApp Business API through an authorized provider like Qmize to automate customer communication and marketing.",
  },
  {
    q: "How long does setup take?",
    a: "Most businesses can get started within a few business days after Meta verification and onboarding.",
  },
  {
    q: "Can I integrate WhatsApp with my CRM?",
    a: "Yes. Qmize supports integration with popular CRMs, eCommerce platforms, ERP systems, and custom applications.",
  },
  {
    q: "Is WhatsApp Business API secure?",
    a: "Yes. Messages are protected with WhatsApp's end-to-end encryption where applicable and follow Meta's security and compliance standards.",
  },
  {
    q: "Can I send promotional messages?",
    a: "Yes. Businesses can send promotional campaigns to customers who have opted in, using approved WhatsApp message templates.",
  },
];

const platformFeatures = [
  "Official WhatsApp Business API",
  "AI Chatbot Builder",
  "WhatsApp Broadcast",
  "Shared Team Inbox",
  "CRM Integration",
  "API Integration",
  "Automation Workflows",
  "WhatsApp Catalog",
  "Click-to-WhatsApp Ads Integration",
  "Analytics Dashboard",
  "Multi-Agent Support",
  "Rich Media Messaging",
  "Interactive Buttons",
  "Template Management",
  "Customer Segmentation",
];

const benefitsList = [
  "Increase customer response rates",
  "Reduce support costs",
  "Automate repetitive conversations",
  "Improve customer satisfaction",
  "Boost sales conversions",
  "Faster lead nurturing",
  "Higher marketing ROI",
  "Secure business messaging",
  "Personalized customer experiences",
  "Scalable communication for growing businesses",
];

const WhatsappbusinessApiSaudiArabia = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
          <title>
            WhatsApp Business API Provider in Saudi Arabia - Qmize
          </title>
          <meta
            name="description"
            content="Looking for the best WhatsApp Business API provider in Saudi Arabia? Qmize offers the official WhatsApp Business API platform with AI chatbots, automation, CRM integrations, broadcasts, and enterprise messaging"
          />
          <meta
            name="keywords"
            content="WhatsApp Business API provider in Saudi Arabia, WhatsApp API Saudi Arabia, WhatsApp Business API Saudi Arabia, WhatsApp Business API Platform, WhatsApp API Riyadh, WhatsApp API Jeddah, Meta WhatsApp Business API Saudi Arabia, WhatsApp Chatbot Saudi Arabia"
          />
          <meta name="geo.region" content="SA" />
          <meta name="geo.country" content="Saudi Arabia" />
          <meta name="geo.placename" content="Riyadh" />
          <link
            rel="alternate"
            hreflang="en-sa"
            href="https://qmize.com/whatsapp-business-api-saudi-arabia"
          />
          <link rel="alternate" hreflang="x-default" href="https://qmize.com" />
          <link
            rel="canonical"
            href="https://qmize.com/whatsapp-business-api-saudi-arabia"
          />
        </Helmet>

        {/* HERO SECTION */}
        <section className="w-full bg-gradient-to-br from-green-50 via-white to-green-100 py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* LEFT SIDE - TEXT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
                WhatsApp Business API Provider in Saudi Arabia
              </h1>

              <h2 className="text-lg sm:text-xl font-semibold text-green-700">
                Empower Your Business with the Official WhatsApp Business API Platform
              </h2>

              <p className="text-sm sm:text-base text-black/80 leading-relaxed max-w-xl">
                Scale customer communication with Saudi Arabia's trusted WhatsApp Business API provider. Qmize helps businesses automate conversations, send notifications, engage customers, and increase sales through a secure, Meta-compliant WhatsApp Business API platform built for enterprises of every size.
              </p>

              {/* HIGHLIGHT BADGES */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full text-xs sm:text-sm text-black/80 font-medium">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600 shrink-0" /> Official API
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600 shrink-0" /> AI Chatbots
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600 shrink-0" /> Bulk Broadcasts
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600 shrink-0" /> CRM Integrations
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600 shrink-0" /> Shared Inbox
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600 shrink-0" /> 99.9% Delivery
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                <a
                  href="https://qmize.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition duration-300 text-center"
                >
                  Get API Access
                </a>
                <a
                  href="https://qmize.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium px-6 py-3 rounded-xl transition duration-300 text-center"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="transform transition duration-300 hover:scale-105">
                <img
                  src={whatsappApiSaudiArabia}
                  alt="WhatsApp Business API Saudi Arabia"
                  className="w-[380px] sm:w-[420px] lg:w-[480px] xl:w-[520px] object-contain rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED PLATFORM SECTION */}
        <section className="w-full py-12 sm:py-16 px-4 bg-gradient-to-br from-white via-green-50 to-white">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
              Trusted WhatsApp Business API Platform for Businesses in{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Saudi Arabia
              </span>
            </h2>

            <p className="text-sm sm:text-base text-black/80 leading-relaxed max-w-3xl">
              Looking for a reliable WhatsApp Business API provider in Saudi Arabia? Qmize enables businesses across <span className="font-semibold text-black">Riyadh, Jeddah, Dammam, Mecca, Medina, Khobar</span>, and other Saudi cities to automate customer communication on the world's most popular messaging platform.
            </p>

            <p className="text-sm sm:text-base text-black/80 leading-relaxed max-w-3xl">
              Whether you're a startup, SME, eCommerce business, healthcare provider, bank, educational institution, travel agency, or enterprise, our WhatsApp Business API Saudi Arabia solution helps you deliver personalized conversations, automate support, improve customer satisfaction, and drive higher conversions—all from one powerful platform.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE QMIZE - FEATURE CARDS */}
        <section className="w-full py-12 sm:py-16 px-4 bg-gradient-to-br from-green-50 via-white to-green-100">
          <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
                Why Choose Qmize?
              </h2>
              <p className="text-base sm:text-lg font-semibold text-green-700 mt-2">
                The Complete WhatsApp Business API Platform for Saudi Businesses
              </p>
              <p className="text-sm sm:text-base text-black/80 leading-relaxed max-w-3xl mt-2">
                Qmize offers everything you need to communicate with customers efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
              <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all">
                <MdVerified className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-black text-lg mb-2">Official Meta API</h4>
                <p className="text-sm text-black/70">
                  Get direct access to the official WhatsApp Business API with enterprise-grade security and compliance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all">
                <FaBolt className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-black text-lg mb-2">No Setup Complexity</h4>
                <p className="text-sm text-black/70">
                  Launch your WhatsApp Business account quickly with expert onboarding and technical assistance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all">
                <FaRobot className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-black text-lg mb-2">AI-Powered Chatbots</h4>
                <p className="text-sm text-black/70">
                  Automate FAQs, lead qualification, appointment booking, order tracking, and customer support 24/7.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all">
                <FaBullhorn className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-black text-lg mb-2">Broadcast Campaigns</h4>
                <p className="text-sm text-black/70">
                  Send promotional campaigns, product launches, offers, reminders, and updates to thousands of opted-in customers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all">
                <FaUsers className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-black text-lg mb-2">Shared Team Inbox</h4>
                <p className="text-sm text-black/70">
                  Allow multiple support and sales agents to manage customer conversations from one dashboard.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all">
                <MdIntegrationInstructions className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-black text-lg mb-2">CRM Integration</h4>
                <p className="text-sm text-black/70">
                  Connect your favorite CRM, ERP, Shopify, WooCommerce, Salesforce, HubSpot, Zoho, and other business systems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all">
                <FaChartBar className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-black text-lg mb-2">Analytics & Reporting</h4>
                <p className="text-sm text-black/70">
                  Track message delivery, response rates, customer engagement, campaign performance, and agent productivity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all">
                <FaServer className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-black text-lg mb-2">Enterprise Security</h4>
                <p className="text-sm text-black/70">
                  Protect customer data with secure infrastructure, encryption, and Meta-approved messaging standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT CAN YOU DO - CAPABILITIES */}
        <section className="w-full py-12 sm:py-16 px-4 bg-gradient-to-br from-white via-green-50 to-white">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                What Can You Do with WhatsApp Business API?
              </h2>
              <p className="text-sm sm:text-base text-black/80 max-w-2xl mt-2">
                Businesses across Saudi Arabia use our platform to automate customer communication.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
              <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                <FaHeadset className="text-green-600 text-2xl mb-2" />
                <h4 className="font-bold text-base text-black mb-1">Customer Support</h4>
                <p className="text-xs sm:text-sm text-black/70">
                  Provide instant replies, automate FAQs, reduce waiting times, and improve customer satisfaction.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                <FaRocket className="text-green-600 text-2xl mb-2" />
                <h4 className="font-bold text-base text-black mb-1">Sales Automation</h4>
                <p className="text-xs sm:text-sm text-black/70">
                  Convert website visitors into customers through interactive WhatsApp conversations.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                <FaBullhorn className="text-green-600 text-2xl mb-2" />
                <h4 className="font-bold text-base text-black mb-1">Marketing Campaigns</h4>
                <p className="text-xs sm:text-sm text-black/70">
                  Send personalized promotional campaigns, seasonal offers, product launches, and discounts.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                <FaBoxOpen className="text-green-600 text-2xl mb-2" />
                <h4 className="font-bold text-base text-black mb-1">Order Notifications</h4>
                <p className="text-xs sm:text-sm text-black/70">
                  Automatically notify customers about orders, invoices, shipping updates, OTPs, and delivery status.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                <FaClock className="text-green-600 text-2xl mb-2" />
                <h4 className="font-bold text-base text-black mb-1">Appointment Booking</h4>
                <p className="text-xs sm:text-sm text-black/70">
                  Allow customers to book appointments through WhatsApp without phone calls.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                <FaUserCheck className="text-green-600 text-2xl mb-2" />
                <h4 className="font-bold text-base text-black mb-1">Lead Qualification</h4>
                <p className="text-xs sm:text-sm text-black/70">
                  Capture, qualify, and nurture leads automatically using AI-powered workflows.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                <FaMoneyBillWave className="text-green-600 text-2xl mb-2" />
                <h4 className="font-bold text-base text-black mb-1">Payment Reminders</h4>
                <p className="text-xs sm:text-sm text-black/70">
                  Send payment confirmations and invoice reminders directly on WhatsApp.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                <FaSmile className="text-green-600 text-2xl mb-2" />
                <h4 className="font-bold text-base text-black mb-1">Customer Feedback</h4>
                <p className="text-xs sm:text-sm text-black/70">
                  Collect reviews, surveys, ratings, and feedback automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES SERVED */}
        <section className="w-full py-12 sm:py-16 px-4 bg-gradient-to-br from-green-50 via-white to-green-100">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                Industries We Serve in Saudi Arabia
              </h2>
              <p className="text-sm sm:text-base text-black/80 max-w-2xl mt-2">
                Our WhatsApp Business API Platform supports businesses across multiple industries.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full text-left">
              <div className="bg-white border p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <FaShoppingCart className="text-green-600 text-xl shrink-0" />
                <span className="font-semibold text-sm text-black">Retail & eCommerce</span>
              </div>
              <div className="bg-white border p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <FaHospital className="text-green-600 text-xl shrink-0" />
                <span className="font-semibold text-sm text-black">Healthcare</span>
              </div>
              <div className="bg-white border p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <FaUniversity className="text-green-600 text-xl shrink-0" />
                <span className="font-semibold text-sm text-black">Banking & Financial Services</span>
              </div>
              <div className="bg-white border p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <FaBriefcase className="text-green-600 text-xl shrink-0" />
                <span className="font-semibold text-sm text-black">Insurance</span>
              </div>
              <div className="bg-white border p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <HiOutlineAcademicCap className="text-green-600 text-xl shrink-0" />
                <span className="font-semibold text-sm text-black">Education</span>
              </div>
              <div className="bg-white border p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <FaBuilding className="text-green-600 text-xl shrink-0" />
                <span className="font-semibold text-sm text-black">Real Estate</span>
              </div>
              <div className="bg-white border p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <FaStore className="text-green-600 text-xl shrink-0" />
                <span className="font-semibold text-sm text-black">Hospitality</span>
              </div>
              <div className="bg-white border p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <FaStore className="text-green-600 text-xl shrink-0" />
                <span className="font-semibold text-sm text-black">Restaurants</span>
              </div>
              <div className="bg-white border p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <FaTruck className="text-green-600 text-xl shrink-0" />
                <span className="font-semibold text-sm text-black">Logistics</span>
              </div>
              <div className="bg-white border p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <FaCar className="text-green-600 text-xl shrink-0" />
                <span className="font-semibold text-sm text-black">Automotive</span>
              </div>
              <div className="bg-white border p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <FaGlobe className="text-green-600 text-xl shrink-0" />
                <span className="font-semibold text-sm text-black">Government Services</span>
              </div>
              <div className="bg-white border p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <MdOutlineTravelExplore className="text-green-600 text-xl shrink-0" />
                <span className="font-semibold text-sm text-black">Travel & Tourism</span>
              </div>
              <div className="bg-white border p-4 rounded-xl flex items-center gap-3 shadow-sm sm:col-span-2 lg:col-span-2">
                <FaCogs className="text-green-600 text-xl shrink-0" />
                <span className="font-semibold text-sm text-black">Manufacturing & Professional Services</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES TABLE LIST */}
        <section className="w-full py-12 sm:py-16 px-4 bg-gradient-to-br from-white via-green-50 to-white">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              Features of Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                WhatsApp Business API Platform
              </span>
            </h2>

            <div className="w-full bg-white border rounded-2xl shadow-md overflow-hidden">
              <div className="bg-green-600 text-white font-bold py-3 px-6 flex justify-between items-center text-left">
                <span>Feature</span>
                <span>Included</span>
              </div>
              <div className="divide-y divide-gray-100">
                {platformFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="py-3 px-6 flex justify-between items-center text-left hover:bg-green-50/50 transition-colors"
                  >
                    <span className="font-medium text-black/80 text-sm sm:text-base">
                      {feature}
                    </span>
                    <span className="text-green-600 font-bold">✅</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="w-full py-12 sm:py-16 px-4 bg-gradient-to-br from-green-50 via-white to-green-100">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                Benefits of Using WhatsApp Business API in Saudi Arabia
              </h2>
              <p className="text-sm sm:text-base text-black/80 max-w-2xl mt-2">
                Businesses using WhatsApp API in Saudi Arabia experience measurable improvements in customer engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-4xl text-left">
              {benefitsList.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl border shadow-sm"
                >
                  <FaRegCheckCircle className="text-green-600 text-xl shrink-0" />
                  <span className="text-sm font-semibold text-black/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES DETAIL */}
        <section className="w-full py-12 sm:py-16 px-4 bg-gradient-to-br from-white via-green-50 to-white">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              Detailed Use Cases
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <FaShoppingCart className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg text-black mb-2">Retail & eCommerce</h4>
                <p className="text-sm text-black/70">
                  Automate order confirmations, abandoned cart reminders, product recommendations, and delivery updates.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <FaHospital className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg text-black mb-2">Healthcare</h4>
                <p className="text-sm text-black/70">
                  Appointment reminders, prescription notifications, patient support, and teleconsultation scheduling.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <FaBuilding className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg text-black mb-2">Real Estate</h4>
                <p className="text-sm text-black/70">
                  Generate leads, schedule property visits, share brochures, and follow up automatically.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <HiOutlineAcademicCap className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg text-black mb-2">Education</h4>
                <p className="text-sm text-black/70">
                  Admission inquiries, fee reminders, class schedules, and student support.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <FaUniversity className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg text-black mb-2">Banking</h4>
                <p className="text-sm text-black/70">
                  OTP verification, transaction alerts, account notifications, and customer assistance.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <MdOutlineTravelExplore className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg text-black mb-2">Travel</h4>
                <p className="text-sm text-black/70">
                  Booking confirmations, itinerary updates, visa notifications, and customer support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="w-full py-12 sm:py-16 px-4 bg-gradient-to-br from-green-50 via-white to-green-100">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                How It Works
              </h2>
              <p className="text-sm sm:text-base text-black/70 mt-2">
                Follow 5 simple steps to scale your messaging with Qmize.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full text-center">
              <div className="bg-white border p-5 rounded-2xl shadow-sm flex flex-col items-center">
                <div className="w-10 h-10 bg-green-600 text-white font-bold rounded-full flex items-center justify-center mb-3">
                  1
                </div>
                <h4 className="font-bold text-sm text-black mb-1">Step 1</h4>
                <p className="text-xs text-black/70">Book a free consultation with our WhatsApp experts.</p>
              </div>

              <div className="bg-white border p-5 rounded-2xl shadow-sm flex flex-col items-center">
                <div className="w-10 h-10 bg-green-600 text-white font-bold rounded-full flex items-center justify-center mb-3">
                  2
                </div>
                <h4 className="font-bold text-sm text-black mb-1">Step 2</h4>
                <p className="text-xs text-black/70">Verify your Meta Business Account.</p>
              </div>

              <div className="bg-white border p-5 rounded-2xl shadow-sm flex flex-col items-center">
                <div className="w-10 h-10 bg-green-600 text-white font-bold rounded-full flex items-center justify-center mb-3">
                  3
                </div>
                <h4 className="font-bold text-sm text-black mb-1">Step 3</h4>
                <p className="text-xs text-black/70">Activate your WhatsApp Business API.</p>
              </div>

              <div className="bg-white border p-5 rounded-2xl shadow-sm flex flex-col items-center">
                <div className="w-10 h-10 bg-green-600 text-white font-bold rounded-full flex items-center justify-center mb-3">
                  4
                </div>
                <h4 className="font-bold text-sm text-black mb-1">Step 4</h4>
                <p className="text-xs text-black/70">Integrate with your CRM or business software.</p>
              </div>

              <div className="bg-white border p-5 rounded-2xl shadow-sm flex flex-col items-center sm:col-span-3 lg:col-span-1">
                <div className="w-10 h-10 bg-green-600 text-white font-bold rounded-full flex items-center justify-center mb-3">
                  5
                </div>
                <h4 className="font-bold text-sm text-black mb-1">Step 5</h4>
                <p className="text-xs text-black/70">Start automating customer conversations and campaigns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY BUSINESSES IN SAUDI ARABIA CHOOSE QMIZE */}
        <section className="w-full py-12 sm:py-16 px-4 bg-gradient-to-br from-white via-green-50 to-white">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              Why Businesses in Saudi Arabia Choose{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Qmize
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <MdVerified className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg">Official WhatsApp Business API Platform</h4>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaBolt className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg">Fast onboarding</h4>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaGlobe className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg">Localized business messaging solutions</h4>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaServer className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg">Enterprise-grade reliability</h4>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaRobot className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg">AI-powered automation</h4>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaTags className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg">Transparent pricing</h4>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaHeadset className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg">Dedicated customer support</h4>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaPlug className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg">Easy integrations</h4>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left">
                <FaChartLine className="text-green-600 text-3xl mb-3" />
                <h4 className="font-bold text-lg">High message delivery rates & scalability</h4>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="w-full py-12 sm:py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Ready to Grow Your Business with WhatsApp Business API in Saudi Arabia?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-3xl leading-relaxed">
              Transform customer communication with Qmize's enterprise-grade WhatsApp Business API Platform. Automate support, increase sales, engage customers faster, and scale your business with the official WhatsApp Business API.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="https://qmize.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-all text-center"
              >
                Start Free Trial <FaRocket />
              </a>

              <a
                href="https://qmize.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-green-600 transition-all text-center"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="w-full py-12 sm:py-20 px-4 bg-gradient-to-br from-white via-green-50 to-green-100">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md border border-green-100 rounded-xl shadow-sm overflow-hidden transition duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left text-black font-semibold"
                  >
                    <span className="text-sm sm:text-base">{item.q}</span>
                    <span className="text-green-600 text-sm">
                      {openIndex === index ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    </span>
                  </button>

                  <div
                    className={`px-5 overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-40 pb-4" : "max-h-0"
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

        <FormContact />
        <Footer />
      </div>
    </>
  );
};

export default WhatsappbusinessApiSaudiArabia;