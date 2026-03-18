import React from 'react'
import {Link } from "react-router-dom"
import {
  Zap,
  ShieldCheck,
  Code2,
  Target,
  BarChart3,
  Wallet
} from "lucide-react";

import { ArrowRight, PhoneCall, Rocket } from "lucide-react";
import {
  CheckCircle,
  
  
  
  IndianRupee,
  Headphones,
  Code,
  Clock,
  Layers,
  Globe,
  Lock,
} from "lucide-react";
import {
  MessageSquareText,
 
  Globe2,
  Users,
} from "lucide-react";
import smsapi from "../../assets/Images/sms-api-image.webp";
import bulksmsposter from "../../assets/Images/bulksms_image.png"

const BulkSmsServices = () => {


    const features = [
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "Ultra-Fast Delivery",
      text: "Send messages instantly across India with high TPS and 99% uptime.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      title: "Secure & DLT-Compliant",
      text: "Fully verified, DLT-compliant gateway approved under TRAI guidelines.",
    },
    {
      icon: <Code2 className="w-8 h-8 text-green-600" />,
      title: "Developer-Friendly APIs",
      text: "Easy REST APIs to integrate SMS into apps, CRMs, ERPs & workflows.",
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Targeted Messaging",
      text: "Send SMS based on customer segments, location & user behavior.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Detailed Reports",
      text: "Track delivery, clicks & real-time analytics in a unified dashboard.",
    },
    {
      icon: <Wallet className="w-8 h-8 text-green-600" />,
      title: "Affordable Pricing",
      text: "Flexible plans without hidden fees - best ROI in the industry.",
    },
  ];


  return (




    <>






    
    
    <section className="relative w-full overflow-hidden py-16 px-6 bg-gradient-to-br from-white via-green-50 to-green-100">

  {/* Background Sand Texture */}
  <div className="absolute inset-0 opacity-[0.08] pointer-events-none
    bg-[radial-gradient(#000_1px,transparent_1px)]
    [background-size:26px_26px]" />

  {/* Glow Orbs */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-300/30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/40 blur-3xl rounded-full"></div>

  <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-6 animate-fadeUp">

      <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-200 text-green-800 rounded-full">
        BULK SMS SERVICES
      </span>

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
      Reliable Bulk SMS Service 
        <span className="block text-green-600">Provider in India</span>
      </h1>

      <p className="text-gray-600 text-base md:text-md leading-relaxed max-w-md">
       Qmize empowers businesses with fast, secure, and reliable bulk SMS services in India, delivering promotional, transactional, and OTP messages through a powerful SMS gateway API that drives engagement and real results
      </p>

      

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 pt-4">
        <a href='https://wa.me/9031011559' target='_blank'><button className="cursor-pointer px-4 py-1 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition">
          Get SMS Pricing
        </button></a>

         <a href='https://wa.me/9031011559' target='_blank'><button className="cursor-pointer px-4 py-1 rounded-xl border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition">
          Talk to an Expert
        </button></a>
      </div>

    </div>

    

      
        <img
        src={bulksmsposter}
        alt='Bulk SMS Service Provider'
        className='w-full h-80 md:h-[400px] object-contain'
        />
      
   </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(25px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp {
      animation: fadeUp 1s ease forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fadeIn {
      animation: fadeIn 1.2s ease forwards;
    }
  `}</style>

</section>









<section className="relative w-full py-10 sm:py-16 bg-gradient-to-br from-white via-emerald-50 to-emerald-100/40 overflow-hidden">

      {/* Soft squared background pattern */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#22c55e20_1px,transparent_1px),linear-gradient(#22c55e20_1px,transparent_1px)] bg-[size:26px_26px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Leading Bulk SMS Services in India for
            <span className="text-green-600"> Every Business</span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Qmize helps businesses communicate faster, smarter, and more
            effectively through powerful SMS technology built for scale,
            security, and speed.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left content */}
          <div className="space-y-5">
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              As a trusted <strong>bulk SMS service provider in India</strong>,
              Qmize enables brands to reach customers instantly with
              high-delivery rates, secure infrastructure, and easy-to-use tools.
            </p>

            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              Whether the goal is <strong>marketing campaigns</strong>,
              <strong> alerts</strong>, <strong>OTP verification</strong>, or
              <strong> transactional messaging</strong>, Qmize delivers
              scalable bulk SMS services in India that grow with your business.
            </p>

            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              Customer communication plays a key role in business success. Qmize offers enterprise-grade bulk SMS service solutions designed for startups, SMEs, and large enterprises across India. With direct operator routes and intelligent delivery systems, messages reach users within seconds.
            </p>

           
          </div>

          {/* Right feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {[
              {
                icon: <Zap />,
                title: "Instant Delivery",
                desc: "Messages delivered within seconds using direct operator routes.",
              },
              {
                icon: <ShieldCheck />,
                title: "Secure Infrastructure",
                desc: "Enterprise-grade security with high uptime and compliance.",
              },
              {
                icon: <MessageSquareText />,
                title: "Multiple SMS Use Cases",
                desc: "Promotional, transactional, alerts, and OTP messaging.",
              },
              {
                icon: <BarChart3 />,
                title: "Real-Time Tracking",
                desc: "Monitor delivery status and performance instantly.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/80 backdrop-blur-xl border border-emerald-100 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>







     <section className="relative w-full py-16 px-6 bg-white overflow-hidden">

  {/* --- BACKGROUND PATTERN (SOFT SQUARE GRID) --- */}
  <div className="absolute inset-0 opacity-[0.06] pointer-events-none 
    bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)]
    bg-[size:26px_26px]">
  </div>

  {/* --- HEADING --- */}
  <div className="relative z-10 text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
     Types of SMS <span className="text-green-600">Offered by Qmize</span>
    </h2>
    <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
      Qmize supports multiple SMS formats to meet diverse business needs.
    </p>
  </div>

  {/* --- CARD GRID --- */}
  <div className="relative z-10 max-w-6xl mx-auto grid
    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    {/* CARD COMPONENT */}
    {[
      {
        title: "Transactional SMS",
        desc:
          "Used for order updates, account alerts, and important notifications. These messages are delivered 24/7 with priority routing.",
        link: "/transactional-sms",
        icon: (
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor"
            strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 8l9-6 9 6v8l-9 6-9-6V8z" />
            <path d="M12 16V8" />
          </svg>
        ),
      },

      {
        title: "Promotional SMS",
        desc:
          "Best for marketing offers, discounts, and brand awareness campaigns. Reach thousands of customers instantly with targeted promotions.",
        link: "/promotional-sms",
        icon: (
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor"
            strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 11h18M3 7h18M3 15h18" />
          </svg>
        ),
      },

      {
        title: "OTP SMS",
        desc:
          "Highly secure one-time password messages for user verification, login authentication, and payment confirmation.",
        link: "/otp-sms-service-provider",
        icon: (
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor"
            strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 11c.6 0 1 .4 1 1v6a1 1 0 0 1-2 0v-6c0-.6.4-1 1-1z" />
            <path d="M7 11h10" />
            <path d="M5 7l1.5-3h11L19 7" />
          </svg>
        ),
      },
    ].map((item, i) => (
      <div
        key={i}
        className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-xl
          border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          hover:border-green-300 hover:shadow-[0_15px_40px_rgba(16,185,129,0.25)]
          hover:-translate-y-2 transition-all duration-500"
      >
        {/* Icon */}
        <div className="mb-6 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center 
            group-hover:bg-green-200 transition-all duration-500">
            {item.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm text-center leading-relaxed mb-5">
          {item.desc}
        </p>

        {/* Button */}
        <div className="text-center">
         <Link
         to={item.link}
        
            className="inline-block px-5 py-2 rounded-full text-sm font-semibold
              bg-green-600 text-white group-hover:bg-green-700 transition-all duration-300"
           >
            Learn More →
          </Link>
        </div>
      </div>
    ))}

  </div>
</section>







    <section className="relative w-full py-16 sm:py-16 bg-white overflow-hidden">

      {/* Light squared background pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#22c55e20_1px,transparent_1px),linear-gradient(#22c55e20_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* ---------------- WHY CHOOSE QMIZE ---------------- */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Choose <span className="text-emerald-600">Qmize?</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Qmize stands out as the <strong>best bulk SMS service provider in India</strong> by
            focusing on performance, simplicity, and customer support.
          </p>
        </div>

        {/* Why Choose Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <Zap />,
              text: "High delivery rate with direct operator connections",
            },
            {
              icon: <Globe />,
              text: "Instant message delivery across all Indian networks",
            },
            {
              icon: <BarChart3 />,
              text: "User-friendly dashboard with detailed analytics",
            },
            {
              icon: <ShieldCheck />,
              text: "Secure and DLT-compliant messaging platform",
            },
            {
              icon: <IndianRupee />,
              text: "Affordable pricing without hidden costs",
            },
            {
              icon: <Headphones />,
              text: "Dedicated support team for technical & campaign assistance",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl bg-white border border-emerald-100 p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            Businesses trust Qmize because every message matters
          </p>
        </div>

        {/* ---------------- FEATURES SECTION ---------------- */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Powerful Features of
            <span className="text-emerald-600"> Qmize Bulk SMS Platform</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Qmize is built to offer flexibility, speed, and complete control
            over your messaging campaigns.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Code />,
              title: "Advanced SMS Gateway API",
              desc: "Seamless integration with your apps, CRM, or platforms.",
            },
            {
              icon: <BarChart3 />,
              title: "Real-Time Delivery Reports",
              desc: "Track performance with live delivery and analytics.",
            },
            {
              icon: <Layers />,
              title: "Sender ID & Template Management",
              desc: "Manage DLT templates and sender IDs effortlessly.",
            },
            {
              icon: <Globe />,
              title: "Unicode & Regional Language Support",
              desc: "Send SMS in Hindi and regional Indian languages.",
            },
            {
              icon: <Clock />,
              title: "Campaign Scheduling & Automation",
              desc: "Plan, automate, and optimize SMS campaigns.",
            },
            {
              icon: <Zap />,
              title: "High-Throughput Infrastructure",
              desc: "Handle bulk messaging with speed and reliability.",
            },
            {
              icon: <Lock />,
              title: "Secure OTP & Authentication SMS",
              desc: "Reliable OTP delivery for verification workflows.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-14 text-center">
          <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto">
            All features are designed to simplify communication while
            maximizing reach, reliability, and performance.
          </p>
        </div>
      </div>
    </section>











   

















    <section className="relative w-full py-16 px-6 bg-gradient-to-b from-white via-green-50 to-white overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:26px_26px] pointer-events-none" />

      {/* Glow ORBS */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/40 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Why Choose Our{" "}
          <span className="text-green-600">Bulk SMS Platform?</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          A powerful SMS infrastructure built for speed, security, and growth.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="
              group relative p-8 rounded-2xl 
              bg-white/70 backdrop-blur-xl border border-green-100
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              hover:shadow-[0_20px_50px_rgba(56,189,248,0.25)]
              transition-all duration-500
              hover:-translate-y-2
            "
          >
            {/* Floating Icon */}
            <div className="mb-5 animate-float">
              {item.icon}
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}

      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) }
          50% { transform: translateY(-8px) }
          100% { transform: translateY(0) }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

    </section>








    <section className="relative w-full py-16 px-6 bg-gradient-to-b from-white via-green-50/60 to-white overflow-hidden">

  {/* Background Dotted Pattern */}
  <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"></div>

  {/* Soft Glow Orbs */}
  <div className="absolute -top-20 left-0 w-72 h-72 bg-green-300/30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200/40 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="relative z-10 text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      Bulk SMS <span className="text-green-600">Use Cases</span>
    </h2>
    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
      Powerful messaging solutions tailored for every industry and business model.
    </p>
  </div>

  {/* CONTENT SECTION — UNIQUE LINE-STYLE MODULES */}
  <div className="relative z-10 max-w-5xl mx-auto space-y-12">

    {[
      {
        title: "E-commerce",
        text: "Order confirmations, delivery updates, COD reminders, and return alerts.",
        icon: "🛒",
      },
      {
        title: "Fintech & Banking",
        text: "Transaction alerts, OTP authentication, payment reminders.",
        icon: "🏦",
      },
      {
        title: "Education",
        text: "Fee reminders, holiday notices, exam notifications, class updates.",
        icon: "🎓",
      },
      {
        title: "Healthcare",
        text: "Appointment reminders, prescription alerts, health updates.",
        icon: "🏥",
      },
      {
        title: "Travel & Hospitality",
        text: "Booking confirmations, flight updates, hotel reminders.",
        icon: "✈️",
      },
      {
        title: "Retail & FMCG",
        text: "Promotional offers, coupons, festival campaigns and flash sales.",
        icon: "🛍️",
      },
    ].map((useCase, index) => (
      <div 
        key={index}
        className={`relative grid md:grid-cols-7 gap-6 items-start md:items-center
          ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
      >
        {/* Vertical Line Indicator */}
        <div className="absolute left-1/2 md:left-0 top-0 md:top-auto md:bottom-0 
          md:h-full h-1 w-full md:w-1 
          bg-gradient-to-b from-green-400/60 to-green-200/60 rounded-full md:rounded-none"></div>

        {/* Icon */}
        <div
          className="relative md:col-span-1 flex justify-center md:justify-start 
          text-5xl md:text-6xl animate-bounce-slow"
        >
          {useCase.icon}
        </div>

        {/* Text Content */}
        <div className="relative md:col-span-6 bg-white/70 backdrop-blur-xl 
          border border-green-100 p-6 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.06)]
          hover:shadow-[0_18px_40px_rgba(56,189,248,0.25)] hover:-translate-y-1 
          transition-all duration-500"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            {useCase.title}
          </h3>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            {useCase.text}
          </p>
        </div>
      </div>
    ))}

  </div>

  {/* Animations */}
  <style>{`
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    .animate-bounce-slow {
      animation: bounce-slow 3s ease-in-out infinite;
    }
  `}</style>

</section>











    <section className="relative w-full py-16 px-6 bg-gradient-to-b from-white via-green-50/60 to-white overflow-hidden">

  {/* BACKGROUND PATTERN */}
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none
    bg-[radial-gradient(#000_1px,transparent_1px)]
    [background-size:22px_22px]" />

  {/* SOFT BLUE GLOW */}
  <div className="absolute -top-20 left-10 w-72 h-72 bg-green-300/30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200/40 blur-3xl rounded-full"></div>

  {/* HEADING */}
  <div className="relative text-center z-10 mb-14">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      How <span className="text-green-600">Bulk SMS</span> Helps Your Business
    </h2>
    <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
      Fast, reliable, and result-driven communication that grows with your business.
    </p>
  </div>

  {/* MAIN CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

    {/* LEFT SIDE – FLOWING LIST */}
    <div className="space-y-10">

      {[
        {
          title: "Instant Customer Reach",
          text: "SMS has a 98% open rate — ensuring your message is read instantly.",
          icon: "⚡"
        },
        {
          title: "High Conversion",
          text: "Promotional SMS delivers strong engagement and higher response rates.",
          icon: "📈"
        },
        {
          title: "Cost-Effective Marketing",
          text: "Reach thousands at extremely low cost compared to other channels.",
          icon: "💰"
        },
        {
          title: "Builds Brand Trust",
          text: "Transactional & OTP messages build reliability and customer loyalty.",
          icon: "🔒"
        },
        {
          title: "Scales With Your Business",
          text: "Send 1,000 or 1 million SMS - the system expands with your growth.",
          icon: "🚀"
        }
      ].map((item, i) => (
        <div
          key={i}
          className="group relative pl-14 transition-all duration-500 hover:pl-16"
        >
          {/* ICON CIRCLE */}
          <div className="absolute left-0 top-1 w-10 h-10 rounded-full 
            bg-green-100 text-green-700 flex items-center justify-center 
            text-xl shadow-sm group-hover:scale-110 group-hover:bg-green-200
            transition-all duration-300">
            {item.icon}
          </div>

          {/* TITLE + TEXT */}
          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed mt-1">{item.text}</p>
        </div>
      ))}

    </div>

    {/* RIGHT SIDE – ANIMATED INFO GRAPHIC */}
    <div className="relative flex justify-center">

      {/* Animated floating circle */}
      <div className="absolute w-52 h-52 bg-green-200/40 blur-2xl rounded-full animate-pulse"></div>

      <div className="relative w-full max-w-sm p-8 rounded-3xl 
        bg-white/70 backdrop-blur-xl border border-green-100
        shadow-[0_20px_60px_rgba(56,189,248,0.25)]
        animate-floatingSlow">

        <h3 className="text-center text-2xl font-extrabold text-green-700 mb-4">
          Why Businesses Love SMS
        </h3>

        <ul className="space-y-3 text-gray-700 text-base">
          <li>✔ 98% open rates</li>
          <li>✔ Works on every device</li>
          <li>✔ No internet required</li>
          <li>✔ Best for urgent alerts</li>
          <li>✔ Trusted by all industries</li>
        </ul>

      </div>

    </div>

  </div>


  {/* ANIMATIONS */}
  <style>{`
    @keyframes floatingSlow {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
    .animate-floatingSlow {
      animation: floatingSlow 6s ease-in-out infinite;
    }
  `}</style>

</section>












        <section className="relative w-full py-16 px-6 bg-gradient-to-b from-white via-green-50 to-white overflow-hidden">

  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none 
      bg-[radial-gradient(circle,rgba(0,0,0,0.5)_1px,transparent_1px)]
      [background-size:26px_26px]" />

  {/* Glow Orbs */}
  <div className="absolute -top-32 left-10 w-80 h-80 bg-green-300/30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 blur-3xl rounded-full"></div>

  <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* --------------------------------------------- */}
    {/*  LEFT SECTION - SMS API INTEGRATION DETAILS   */}
    {/* --------------------------------------------- */}

    <div className="space-y-6">

      <span className="inline-block px-6 py-2 text-xs font-bold rounded-full 
        bg-green-200 text-green-700 tracking-wide">
        SMS API INTEGRATION
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        SMS Gateway API for 
        <span className="block text-green-600">Developers & Enterprises</span>
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
     Qmize offers a robust SMS Gateway API that integrates easily with websites, mobile apps, CRMs, and ERP systems. Developers can automate messaging workflows, send OTPs, and manage high-volume traffic effortlessly.
      </p>

      {/* Animated List */}
      <ul className="space-y-3 text-gray-700 text-[15px] md:text-base leading-relaxed">
        {[
          "REST API support",
          "Fast API response time",
          "Easy documentation",
          "Scalable for high-volume messaging"
          
        ].map((item, i) => (
          <li 
            key={i} 
            className="flex items-center gap-3 animate-fadeUp"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-4 font-semibold text-green-700 text-sm md:text-base">
        Ideal for businesses that need automated and reliable SMS communication.
      </p>
    </div>

    {/* --------------------------------------------- */}
    {/* RIGHT SIDE – IMAGE / ILLUSTRATION PLACEHOLDER */}
    {/* --------------------------------------------- */}

    <div className="relative group">

      {/* Floating Back Layer */}
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-200/60 via-white to-green-200/60 
        blur-[2px] shadow-[0_40px_90px_rgba(56,189,248,0.25)]"></div>

      {/* Image Placeholder */}
      <div className="relative rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl 
        border border-white/40 shadow-xl transition-all duration-700 
        group-hover:scale-[1.03]">

        <div className="flex items-center justify-center w-full h-72 sm:h-96 
          bg-gradient-to-br from-green-100 to-blue-100 text-blue-600 font-semibold tracking-wide">
          <img
          src={smsapi}
          alt='SMS Gateway API Providers'
          
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    </div>

  </div>


  {/* ===================================================== */}
  {/*               WHO USES OUR SERVICES SECTION           */}
  {/* ===================================================== */}

  <div className="relative max-w-6xl mx-auto mt-24">

    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
      Industries That Trust  <span className="text-green-600">Qmize</span>
    </h3>

    <div className="flex flex-wrap justify-center gap-4 md:gap-6">

      {[
        "E-commerce & Retail",
        "Banking & Finance",
        "Education & EdTech",
        "Healthcare",
        "Logistics & Transportation",
        "Real Estate",
        "IT & SaaS Companies"
      ].map((item, i) => (
        <div
          key={i}
          className="px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl 
            border border-green-100 shadow-md 
            hover:shadow-lg hover:-translate-y-1 transition-all duration-500
            animate-fadeUp text-sm md:text-base font-medium text-gray-800"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {item}
        </div>
      ))}

    </div>

  </div>

  {/* ANIMATIONS */}
  <style>{`
    @keyframes fadeUp {
      from {opacity: 0; transform: translateY(20px);}
      to {opacity: 1; transform: translateY(0);}
    }
    .animate-fadeUp {
      animation: fadeUp 0.9s ease forwards;
    }
  `}</style>

</section>








     <section className="relative w-full py-16 sm:py-16 overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-emerald-100/40">

      {/* Light square background pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#22c55e20_1px,transparent_1px),linear-gradient(#22c55e20_1px,transparent_1px)] bg-[size:26px_26px] pointer-events-none" />

      {/* Glow accents */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-300/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200/30 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Get Started with <span className="text-emerald-600">Qmize</span> Today
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-700 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          Take customer communication to the next level with Qmize - a trusted
          <strong> bulk SMS service provider in India</strong> built for speed,
          scale, and long-term success.
        </p>

        {/* Highlight line */}
        <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
          <Rocket className="w-4 h-4" />
          Start Sending Bulk SMS in Minutes
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Create an account, choose a plan, and launch your SMS campaigns instantly.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Primary CTA */}
          <a
            href="https://wa.me/9031011559" target='_blank'
            className="
              inline-flex items-center gap-2
              px-7 py-3 rounded-xl
              bg-gradient-to-r from-emerald-500 to-emerald-600
              text-white font-semibold
              shadow-lg shadow-emerald-500/30
              hover:scale-[1.05] hover:shadow-xl
              transition-all duration-300
            "
          >
            Sign Up Now
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA */}
          <a
             href="https://wa.me/9031011559" target='_blank'
            className="
              inline-flex items-center gap-2
              px-7 py-3 rounded-xl
              bg-white/80 backdrop-blur
              border border-emerald-200
              text-emerald-700 font-semibold
              hover:bg-white hover:shadow-md
              transition-all duration-300
            "
          >
            Request a Free Demo
          </a>

          {/* Tertiary CTA */}
          <a
            href="https://wa.me/9031011559" target='_blank'
            className="
              inline-flex items-center gap-2
              px-7 py-3 rounded-xl
              text-gray-700 font-medium
              hover:text-emerald-600
              transition
            "
          >
            <PhoneCall className="w-4 h-4" />
            Talk to Our SMS Experts
          </a>

        </div>
      </div>
    </section>

















        



    
    
    
    
    
    </>
  )
}

export default BulkSmsServices