import { ArrowRight,  Zap ,Rocket} from "lucide-react";
import {
  Building2,
  CreditCard,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Truck
} from "lucide-react";
import transactional from "../../assets/Images/transactional-sms.png"
import { useState } from "react";
import {

  UserCheck,
  ShieldCheck,
  Code,
  Code2,
  Server,
  Workflow,
  
  
  Headset,
  Activity,

  IndianRupee,
  CheckCircle2,
  CheckCircle,
  PhoneCall,
  


  BadgeCheck,
  BarChart3,
  
  Layers,

  
  Lock,
  Bell,
  KeyRound,
  ServerCog
} from "lucide-react";
import { Plus, Minus } from "lucide-react";

export default function TransactionalSMS() {




    const industries = [
    {
      title: "Banking & Financial Services",
      icon: Building2,
      desc: "Secure alerts, OTPs, and transaction notifications."
    },
    {
      title: "Fintech & Payment Platforms",
      icon: CreditCard,
      desc: "Real-time payment confirmations and authentication messages."
    },
    {
      title: "E-commerce Businesses",
      icon: ShoppingCart,
      desc: "Order updates, delivery alerts, and account notifications."
    },
    {
      title: "Healthcare & Diagnostics",
      icon: Stethoscope,
      desc: "Appointment reminders, reports, and critical alerts."
    },
    {
      title: "EdTech Platforms",
      icon: GraduationCap,
      desc: "Login OTPs, class updates, and student notifications."
    },
    {
      title: "Logistics & SaaS Companies",
      icon: Truck,
      desc: "Shipment tracking, system alerts, and service updates."
    }
  ];


    
         const faqs = [
        {
          q: "What is a transactional SMS?",
          a: "A transactional SMS allows businesses to send critical messages like OTPs, alerts, and confirmations instantly, even during DND hours, in compliance with TRAI regulations",
        },
        {
          q: "Is DLT registration mandatory for transactional SMS?",
          a: "Yes, DLT registration is mandatory. Businesses must register their entity, sender ID, and message templates to send transactional SMS legally in India.",
        },
        {
          q: "Can transactional SMS be sent to DND numbers?",
          a: "Yes, transactional SMS messages are delivered 24/7, including to DND numbers, as they contain essential service-related information.",
        },
        {
          q: "How fast is transactional SMS delivery?",
          a: "Transactional SMS is delivered within seconds using a reliable transactional SMS gateway with optimized routing and direct operator connectivity."
        },
        {
          q: "What determines transactional SMS cost?",
          a: "Transactional SMS cost depends on message volume, delivery quality, routing, and business requirements. Pricing is usually volume-based with transparent rates",
        },
        {
          q: "Is transactional SMS secure?",
          a: "Yes, transactional SMS services use secure infrastructure, authentication methods, and compliant processes to protect message data and ensure safe delivery.",
        },
        {
          q: "Who should use transactional SMS services?",
          a: "Transactional SMS is ideal for banks, fintech companies, e-commerce platforms, healthcare providers, SaaS businesses, and any organization sending time-sensitive notifications.",
        },
       
        
      ];
    
      const [openIndex, setOpenIndex] = useState(null);
    
      const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
      };


    const pricingBenefits = [
    "Simple and clear pricing",
    "No hidden fees",
    "Volume-based discounts",
    "Custom plans for enterprise requirements",
  ];

    const apiFeatures = [
    {
      icon: Code2,
      title: "REST-Based API",
      desc: "Simple and standard REST architecture compatible with any programming language.",
    },
    {
      icon: Workflow,
      title: "Easy Integration",
      desc: "Integrates seamlessly with websites, mobile apps, CRMs, and backend platforms.",
    },
    {
      icon: Zap,
      title: "Low Latency Delivery",
      desc: "Optimized routing ensures fast message delivery with minimal delay.",
    },
    {
      icon: Server,
      title: "High Uptime",
      desc: "Enterprise-grade infrastructure designed for reliability and performance.",
    },
    {
      icon: Lock,
      title: "Secure Authentication",
      desc: "API keys and secure authentication mechanisms protect your data.",
    },
    {
      icon: ShieldCheck,
      title: "Automation Ready",
      desc: "Perfect for automated, real-time transactional messaging workflows.",
    },
  ];



     const steps = [
    {
      icon: UserCheck,
      title: "Sign Up & Business Verification",
      desc: "Create your Qmize account and complete business verification with required documents.",
    },
    {
      icon: ShieldCheck,
      title: "DLT Registration & Sender ID Approval",
      desc: "Register on the DLT platform and get your transactional sender ID approved.",
    },
    {
      icon: Code,
      title: "API Integration or Dashboard Access",
      desc: "Integrate the transactional SMS API or start sending messages via our web dashboard.",
    },
    {
      icon: Zap,
      title: "Trigger Messages Automatically",
      desc: "Send OTPs, alerts, and notifications directly from your system or application.",
    },
    {
      icon: BarChart3,
      title: "Track Delivery in Real Time",
      desc: "Monitor delivery status, reports, and performance with real-time analytics.",
    },
    {
      icon: Headset,
      title: "Dedicated Setup Assistance",
      desc: "Our experts assist you at every step to ensure smooth onboarding and delivery.",
    },
  ];





        const features = [
    {
      icon: Zap,
      title: "Instant Delivery",
      desc: "Transactional messages are delivered within seconds for OTPs, alerts, and confirmations.",
    },
    {
      icon: ShieldCheck,
      title: "DLT Compliant",
      desc: "Fully aligned with TRAI DLT regulations ensuring lawful and secure messaging.",
    },
    {
      icon: Activity,
      title: "High Reliability",
      desc: "Optimized routing and redundant infrastructure for maximum uptime.",
    },
    {
      icon: BadgeCheck,
      title: "Custom Sender ID",
      desc: "Build brand trust and recognition with approved sender IDs.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      desc: "Track message delivery, status, and performance instantly.",
    },
    {
      icon: Lock,
      title: "Secure SMS API",
      desc: "Enterprise-grade API built for safe and reliable integrations.",
    },
    {
      icon: Layers,
      title: "Scalable Platform",
      desc: "Handles growing message volumes seamlessly without performance loss.",
    },
  ];


     const advantages = [
    {
      icon: Activity,
      title: "High Delivery Rates Nationwide",
      desc: "Guaranteed high delivery rates across all Indian telecom operators with optimized routing.",
    },
    {
      icon: Zap,
      title: "24/7 Delivery Including DND",
      desc: "Critical transactional messages delivered instantly, even to DND-registered numbers.",
    },
    {
      icon: ShieldCheck,
      title: "Fully DLT-Compliant Gateway",
      desc: "Built with TRAI DLT compliance to ensure secure and regulation-ready messaging.",
    },
    {
      icon: CheckCircle2,
      title: "Secure & Scalable Infrastructure",
      desc: "Enterprise-grade architecture designed for OTPs, alerts, and mission-critical traffic.",
    },
    {
      icon: Headset,
      title: "Dedicated Technical Support",
      desc: "Hands-on onboarding, API support, and expert assistance whenever you need it.",
    },
    {
      icon: IndianRupee,
      title: "Transparent & Competitive Pricing",
      desc: "No hidden charges - clear transactional SMS pricing designed for scale.",
    },
  ];



    const useCases = [
    {
      icon: KeyRound,
      title: "OTP & Authentication",
      desc: "Instant OTP delivery for secure login and verification.",
    },
    {
      icon: ShieldCheck,
      title: "Payment & Order Confirmations",
      desc: "Real-time payment and order status updates.",
    },
    {
      icon: Bell,
      title: "Account Activity Alerts",
      desc: "Keep users informed about important account actions.",
    },
    {
      icon: Lock,
      title: "Password Reset Notifications",
      desc: "Fast and secure password reset messaging.",
    },
    {
      icon: ServerCog,
      title: "Service & System Updates",
      desc: "Critical system notifications delivered instantly.",
    },
  ];




  return (


    <>
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-emerald-100/40">
      
      {/* Subtle squared pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#22c55e20_1px,transparent_1px),linear-gradient(#22c55e20_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      {/* Soft glow blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-300/30 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 blur-[140px] rounded-full animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 animate-fadeInUp">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              Trusted Transactional SMS Platform
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Transactional SMS Service in India {" "} 
              <span className=" text-emerald-600">
                Fast, Secure & Reliable
              </span>
            </h1>

            <p className="text-gray-700 text-md sm:text-base max-w-xl leading-relaxed">
              Fast, secure, and reliable transactional SMS service in India designed
              to deliver <strong>OTPs, alerts, and critical notifications</strong> instantly
              with high delivery rates, compliance, and seamless API integration.
            </p>

            {/* Feature points */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
              <span className="flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-2 rounded-lg shadow-sm">
                <Zap className="w-4 h-4 text-emerald-600" />
                Instant OTP Delivery
              </span>
              <span className="flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-2 rounded-lg shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                DLT & TRAI Compliant
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/signup"
                className="
                  inline-flex items-center justify-center gap-2
                  px-4 py-1 rounded-xl
                  bg-gradient-to-r from-emerald-500 to-emerald-600
                  text-white font-semibold
                  shadow-lg shadow-emerald-500/30
                  hover:scale-[1.05] transition-all
                "
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/contact"
                className="
                  inline-flex items-center justify-center gap-2
                  px-4 py-1 rounded-xl
                  bg-white/80 backdrop-blur
                  border border-emerald-200
                  text-emerald-700 font-semibold
                  hover:bg-white transition
                "
              >
                Request Demo
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE PLACEHOLDER */}
          <div className="relative animate-fadeInUp delay-200">
            <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-emerald-200 shadow-2xl p-4 sm:p-4">

              {/* Animated mock image */}
              <div className="h-64 sm:h-72 md:h-80 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center text-emerald-700 font-semibold text-lg animate-floatSlow">
                <img
                src={transactional}
                alt="Transactional SMS Provider"
                />
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white px-4 py-3 rounded-xl shadow-lg text-sm">
                ⚡ <strong>99.9%</strong> Delivery Rate
              </div>

              <div className="absolute -top-6 -right-6 bg-white px-4 py-3 rounded-xl shadow-lg text-sm">
                🔐 Secure & Compliant
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease forwards;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>




     <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-emerald-100/40 py-16 sm:py-16">
      
      {/* Subtle squared pattern */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(90deg,#22c55e20_1px,transparent_1px),linear-gradient(#22c55e20_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      {/* Soft glowing orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-300/25 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 blur-[150px] rounded-full animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="max-w-3xl mb-12 animate-fadeInUp">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            <Zap className="w-4 h-4 animate-pulse" />
            Trusted & Mission-Critical Messaging
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Trusted Transactional SMS Service Provider in India
          </h2>

          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            Qmize is a leading transactional SMS service provider delivering
            <strong> time-sensitive system messages</strong> with unmatched reliability.
            When delivery speed and accuracy are non-negotiable, Qmize ensures every
            message reaches users exactly when it matters.
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-xl border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon className="w-6 h-6 text-emerald-600 animate-floatSlow" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-12 max-w-2xl text-gray-700 text-sm sm:text-base animate-fadeInUp">
          <p>
            With <strong>Qmize</strong>, every transactional message is delivered
            securely, instantly, and reliably - helping businesses build trust,
            protect users, and maintain seamless operations.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease forwards;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .animate-floatSlow {
          animation: floatSlow 4.5s ease-in-out infinite;
        }
      `}</style>
    </section>






     <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-emerald-100/30 py-16 sm:py-16">
      
      {/* Soft grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#22c55e20_1px,transparent_1px),linear-gradient(#22c55e20_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute -top-32 right-0 w-[28rem] h-[28rem] bg-emerald-300/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 -left-20 w-[26rem] h-[26rem] bg-emerald-200/30 blur-[150px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 animate-fadeInUp">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            <ShieldCheck className="w-4 h-4 animate-pulse" />
            Mission-Critical Messaging
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Why Choose Qmize for Transactional SMS Service?
          </h2>

          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            Qmize is built for businesses that cannot afford delays. We focus on
            <strong> performance, compliance, and reliability</strong> to ensure
            your most critical messages are delivered instantly and securely.
          </p>
        </div>

        {/* Advantage Flow Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Animated vertical signal line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-emerald-300/0 via-emerald-400/60 to-emerald-300/0 animate-pulse" />

          {advantages.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex gap-4 items-start p-6 bg-white/80 backdrop-blur-xl border border-emerald-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 animate-fadeInUp
                  ${isLeft ? "md:mr-10" : "md:ml-10"}
                `}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Floating icon */}
                <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-100 flex items-center justify-center shadow-inner">
                  <Icon className="w-6 h-6 text-emerald-600 animate-floatSlow" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Pulse dot */}
                <span className="hidden md:block absolute top-6 -right-[9px] w-4 h-4 rounded-full bg-emerald-400 animate-ping opacity-40" />
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-14 max-w-2xl text-gray-700 text-sm sm:text-base animate-fadeInUp">
          <p>
            <strong>Qmize is engineered for mission-critical transactional SMS</strong> -
            ensuring your OTPs, alerts, and system notifications are delivered
            without delays, failures, or compliance risks.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease forwards;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .animate-floatSlow {
          animation: floatSlow 5s ease-in-out infinite;
        }
      `}</style>
    </section>








     <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-emerald-100/30 py-16 sm:py-16">

      {/* subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#22c55e20_1px,transparent_1px),linear-gradient(#22c55e20_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300/30 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200/25 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-3xl mb-12 animate-fadeInUp">
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            <ShieldCheck className="w-4 h-4" />
            Platform Capabilities
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Features of Qmize Transactional SMS Gateway
          </h2>

          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            Built for speed, compliance, and reliability - Qmize ensures your
            mission-critical transactional messages are delivered without delay.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {/* icon */}
                <div className="w-12 h-12 mb-4 rounded-xl bg-emerald-100 flex items-center justify-center shadow-inner">
                  <Icon className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* hover accent */}
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </div>
            );
          })}

        </div>
      </div>

      {/* animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </section>









     <section className="relative bg-gradient-to-br from-white via-emerald-50 to-emerald-100/40 py-16 sm:py-16 overflow-hidden">

      {/* background pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#22c55e20_1px,transparent_1px),linear-gradient(#22c55e20_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* glow effects */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-emerald-300/30 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200/30 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-14 animate-fadeInUp">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            <Zap className="w-4 h-4" />
            Simple Setup Process
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            How to Send Transactional SMS
          </h2>

          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            Sending transactional messages with Qmize is quick and hassle-free.
            Follow these simple steps to start delivering OTPs, alerts, and critical notifications instantly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/85 backdrop-blur-xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* step number */}
                <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-lg">
                  {index + 1}
                </span>

                {/* icon */}
                <div className="w-12 h-12 mb-4 rounded-xl bg-emerald-100 flex items-center justify-center shadow-inner">
                  <Icon className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>

                {/* bottom accent */}
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </div>
            );
          })}

        </div>

        {/* Assistance note */}
        <div className="mt-14 text-center max-w-2xl mx-auto animate-fadeInUp">
          <p className="text-gray-700 text-sm sm:text-base">
            💡 <strong>Need help?</strong> Our onboarding and technical support team
            assists you throughout the entire setup and integration process.
          </p>
        </div>
      </div>

      {/* animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </section>







     <section className="relative bg-gradient-to-br from-white via-emerald-50 to-emerald-100/40 py-16 sm:py-16 overflow-hidden">

      {/* background grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#22c55e20_1px,transparent_1px),linear-gradient(#22c55e20_1px,transparent_1px)] bg-[size:34px_34px] pointer-events-none" />

      {/* glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300/25 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200/25 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-14 animate-fadeInUp">
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            <Code2 className="w-4 h-4" />
            Built for Developers
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Developer-Friendly Transactional SMS API
          </h2>

          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            Qmize provides a secure, high-performance transactional SMS API
            designed for seamless integration with websites, mobile apps,
            CRM systems, and third-party applications.
          </p>
        </div>

        {/* API Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {apiFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/85 backdrop-blur-xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {/* icon */}
                <div className="w-12 h-12 mb-4 rounded-xl bg-emerald-100 flex items-center justify-center shadow-inner">
                  <Icon className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* hover accent */}
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </div>
            );
          })}

        </div>

        {/* Footer note */}
        <div className="mt-14 max-w-2xl animate-fadeInUp">
          <p className="text-gray-700 text-sm sm:text-base">
            🚀 <strong>Built for automation:</strong> Qmize’s API is ideal for
            businesses that rely on real-time, automated transactional SMS delivery
            without delays or failures.
          </p>
        </div>

      </div>

      {/* animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </section>




    <section className="relative bg-gradient-to-br from-white via-emerald-50 to-emerald-100/40 py-16 sm:py-12 overflow-hidden">

      {/* subtle grid background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(90deg,#22c55e20_1px,transparent_1px),linear-gradient(#22c55e20_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* glow accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-300/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200/20 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 animate-fadeInUp">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            Transparent Pricing
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Transactional SMS Pricing
          </h2>

          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            Qmize offers flexible and competitive transactional SMS pricing
            designed to support startups, growing businesses, and large enterprises.
            Our cost structure is transparent, scalable, and aligned with your
            messaging volume.
          </p>
        </div>

        {/* Pricing Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Benefits List */}
          <div className="space-y-4 animate-fadeInUp">
            <h3 className="text-lg font-semibold text-gray-900">
              Pricing Benefits
            </h3>

            <ul className="space-y-3">
              {pricingBenefits.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-sm sm:text-base"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-gray-600 text-sm sm:text-base">
              Whether you send a few thousand messages or millions every month,
              Qmize ensures you get the best value without unnecessary complexity.
            </p>
          </div>

          {/* Right: CTA Content */}
          <div className="animate-fadeInUp">
            <div className="border-l-4 border-emerald-500 pl-6 space-y-4">
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Need exact pricing based on your transactional SMS volume?
                Our team will help you choose the most cost-effective plan
                tailored to your business requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a
                  href="/contact"
                  className="
                    inline-flex items-center justify-center gap-2
                    px-6 py-3 rounded-xl
                    bg-gradient-to-r from-emerald-500 to-emerald-600
                    text-white font-semibold
                    shadow-lg shadow-emerald-500/30
                    hover:scale-[1.04]
                    transition-all duration-300
                  "
                >
                  Talk to Sales
                  <PhoneCall className="w-4 h-4" />
                </a>

                <a
                  href="/pricing"
                  className="
                    inline-flex items-center justify-center
                    px-6 py-3 rounded-xl
                    border border-emerald-300
                    text-emerald-700 font-semibold
                    hover:bg-emerald-50
                    transition
                  "
                >
                  Request Pricing Quote
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease forwards;
        }
      `}</style>
    </section>







     <section className="relative bg-gradient-to-br from-white via-emerald-50 to-emerald-100/40 py-16 sm:py-12 overflow-hidden">

      {/* subtle grid background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#22c55e20_1px,transparent_1px),linear-gradient(#22c55e20_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* glow accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-300/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200/20 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-12 animate-fadeInUp">
          <span className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            Industry Coverage
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Industries Using Qmize Transactional SMS Service
          </h2>

          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            Qmize supports businesses across multiple industries that rely on
            fast, secure, and time-critical communication to deliver the best
            customer experience.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  group
                  p-6 rounded-2xl
                  bg-white/80 backdrop-blur
                  border border-emerald-100
                  shadow-sm
                  hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="
                    w-12 h-12 flex items-center justify-center rounded-xl
                    bg-emerald-100 text-emerald-700
                    group-hover:bg-emerald-600 group-hover:text-white
                    transition
                  ">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

        {/* Footer line */}
        <p className="mt-10 text-center text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
          Qmize adapts to diverse industries that depend on timely,
          compliant, and secure transactional messaging.
        </p>

      </div>

      {/* animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease forwards;
        }
      `}</style>
    </section>









     <section className="relative overflow-hidden py-16 sm:py-12">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#22c55e20_1px,transparent_1px),linear-gradient(#22c55e20_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Glowing orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-300/30 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-400/25 blur-[160px] rounded-full animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6 animate-fadeInUp">
          <ShieldCheck className="w-4 h-4" />
          Trusted Transactional Messaging
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight animate-fadeInUp">
          Start Sending Transactional SMS with{" "}
          <span className="text-emerald-600">Qmize</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed animate-fadeInUp delay-100">
          Choose a dependable transactional SMS service in India that prioritizes
          speed, security, and delivery accuracy. Qmize ensures your critical
          messages never fail.
        </p>

        {/* Feature highlights */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm animate-fadeInUp delay-200">
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-emerald-100 shadow-sm">
            <Zap className="w-4 h-4 text-emerald-600" />
            Instant Delivery
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-emerald-100 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            DLT Compliant
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-emerald-100 shadow-sm">
            <Rocket className="w-4 h-4 text-emerald-600" />
            Built for Scale
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp delay-300">

          <button className="
            w-full sm:w-auto
            px-6 py-3 rounded-xl
            bg-gradient-to-r from-emerald-500 to-emerald-600
            text-white font-semibold
            shadow-lg shadow-emerald-600/30
            hover:scale-[1.05] hover:shadow-xl
            transition-all duration-300
            flex items-center justify-center gap-2
          ">
            Request a Free Demo
            <ArrowRight className="w-4 h-4" />
          </button>

          <button className="
            w-full sm:w-auto
            px-6 py-3 rounded-xl
            bg-white/80 backdrop-blur
            border border-emerald-200
            text-emerald-700 font-semibold
            hover:bg-emerald-50 hover:scale-[1.05]
            transition-all duration-300
          ">
            Talk to Our Experts
          </button>

          <button className="
            w-full sm:w-auto
            px-6 py-3 rounded-xl
            bg-emerald-900
            text-white font-semibold
            hover:bg-emerald-800 hover:scale-[1.05]
            transition-all duration-300
          ">
            Get Started with Qmize
          </button>
        </div>

        {/* Footer line */}
        <p className="mt-10 text-gray-600 text-sm animate-fadeInUp delay-500">
          Qmize powering trusted transactional communication for modern businesses.
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease forwards;
        }
        .delay-100 { animation-delay: .1s; }
        .delay-200 { animation-delay: .2s; }
        .delay-300 { animation-delay: .3s; }
        .delay-500 { animation-delay: .5s; }
      `}</style>

    </section>







    <section className="w-full bg-[#fdfcf7] px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT SIDE HEADING */}
        <div className="col-span-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Frequently Asked <br />
            <span className="font-serif italic text-emerald-700">Questions</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Get instant answers to your most common questions.
          </p>
        </div>

        {/* RIGHT SIDE ACCORDION */}
        <div className="col-span-2 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
              >
                <span className="font-medium text-gray-900">
                  {item.q}
                </span>
                {openIndex === index ? (
                  <Minus className="text-emerald-700" size={20} />
                ) : (
                  <Plus className="text-gray-600" size={20} />
                )}
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 p-4 sm:p-5" : "max-h-0 p-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>








    





































































   </>     
  );
}
