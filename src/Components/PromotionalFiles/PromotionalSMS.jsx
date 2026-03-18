import React from 'react'
import promotional from "../../assets/Images/promotional-sms.webp"
import {
  Send,
  
  
  
  FileText,
  Plug,
  
} from "lucide-react";
import { ArrowRight,  Zap ,Rocket} from "lucide-react";
import {
  Building2,
  CreditCard,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Truck
} from "lucide-react";

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
import {
  
  
  LayoutDashboard,
  
  
} from "lucide-react";
import { Plus, Minus } from "lucide-react";
import { ChevronDown } from "lucide-react";


const PromotionalSMS = () => {


  const [open, setOpen] = useState(null);



  const faqs = [
  {
    q: "What is promotional SMS?",
    a: "Promotional SMS is a marketing message sent to customers to promote offers, products, services, or events. It helps businesses reach a large audience instantly with high visibility."
  },
  {
    q: "How does Qmize promotional SMS service work?",
    a: "Qmize allows you to upload contacts, create a message, and send promotional SMS in bulk through an easy-to-use dashboard or API, ensuring fast and reliable delivery."
  },
  {
    q: "Is promotional SMS effective for marketing?",
    a: "Yes, promotional SMS has very high open rates compared to other digital channels. Messages are usually read within minutes, making it ideal for time-sensitive promotions and offers."
  },
  {
    q: "Who can use promotional SMS service?",
    a: "Any business can use promotional SMS, including e-commerce stores, retailers, educational institutions, real estate companies, healthcare providers, and startups."
  },
  {
    q: "Is Qmize a DLT-compliant promotional bulk SMS provider in India?",
    a: "Yes, Qmize fully supports DLT registration and compliance, making it a trusted promotional bulk SMS provider in India as per telecom regulations."
  },
   {
    q: "Can I schedule promotional SMS campaigns?",
    a: "Yes, Qmize allows you to schedule promotional SMS campaigns in advance, helping you send messages at the most effective time."
  }
];

  const steps = [
  {
    step: "01",
    title: "Create an Account",
    desc: "Sign up on the Qmize platform to get instant access to the promotional SMS dashboard.",
  },
  {
    step: "02",
    title: "Upload Contacts",
    desc: "Upload contacts or import your existing customer database securely.",
  },
  {
    step: "03",
    title: "Compose Your Message",
    desc: "Create your promotional SMS using approved and compliant templates.",
  },
  {
    step: "04",
    title: "Schedule or Send Instantly",
    desc: "Send messages instantly or schedule campaigns with just one click.",
  },
  {
    step: "05",
    title: "Monitor Performance",
    desc: "Track delivery status and campaign performance through real-time reports.",
  },
];

  const features = [
  {
    icon: Send,
    title: "Bulk SMS Sending",
    desc: "Reach thousands of customers instantly with high-volume promotional SMS campaigns.",
  },
  {
    icon: LayoutDashboard,
    title: "User-Friendly Dashboard",
    desc: "Launch and manage campaigns in minutes using a simple and intuitive dashboard.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Ensure real-time message delivery with optimized routing across telecom networks.",
  },
  {
    icon: BarChart3,
    title: "Campaign Reports",
    desc: "Track delivery status and performance metrics easily with detailed reports.",
  },
  {
    icon: FileText,
    title: "Template Management",
    desc: "Save, manage, and reuse winning promotional SMS templates effortlessly.",
  },
  {
    icon: Plug,
    title: "API Integration",
    desc: "Seamlessly integrate SMS functionality with your website, CRM, or mobile apps.",
  },
  {
    icon: ShieldCheck,
    title: "DLT Compliance Support",
    desc: "Fully compliant with Indian DLT regulations for secure and reliable messaging.",
  },
];

  const reasons = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Infrastructure",
    desc: "Trusted promotional SMS provider with secure, scalable, and reliable enterprise-level infrastructure.",
  },
  {
    icon: Zap,
    title: "High Delivery Rates",
    desc: "Consistently high delivery rates across all major telecom networks in India.",
  },
  {
    icon: LayoutDashboard,
    title: "Simple & Fast Dashboard",
    desc: "Clean, intuitive dashboard designed for speed, efficiency, and ease of use.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "Competitive pricing with absolutely no hidden costs or surprises.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    desc: "Our expert support team assists you at every step of your SMS campaigns.",
  },
];

  return (
    <>
    
    <section className="relative py-8  overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-emerald-100/40">
      
      {/* Subtle squared pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#22c55e20_1px,transparent_1px),linear-gradient(#22c55e20_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      {/* Soft glow blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-300/30 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 blur-[140px] rounded-full animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 animate-fadeInUp">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              Trusted Promotional SMS SMS Platform
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Promotional SMS SMS Service in India {" "} 
              <span className=" text-emerald-600">
                Fast, Secure & Reliable
              </span>
            </h1>

            <p className="text-gray-700 text-md sm:text-base max-w-xl leading-relaxed">
             Qmize empowers businesses with powerful promotional SMS solutions to instantly reach customers, boost engagement, increase conversions, and drive growth using a reliable, scalable, and cost-effective messaging platform.
            </p>

            

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

          
             
                <img
                src={promotional}
                alt="Promotional SMS Provider at Qmize"
                className='h-[450px] w-[450px]'
                
                />
             

             

              
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







     <section className="relative overflow-hidden py-12 sm:py-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />

      {/* Square Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,185,129,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Smart Promotional SMS That
            <span className="block text-emerald-600">
              Delivers Real Results
            </span>
          </h2>

          <p className="mt-6 text-gray-700 text-base sm:text-md leading-relaxed">
            Promotional SMS is one of the fastest and most cost-effective ways
            to connect with your audience. Qmize helps businesses send
            high-impact messages directly to customers’ mobile phones,
            ensuring maximum visibility, higher engagement, and measurable
            results.
          </p>

          <p className="mt-4 text-gray-700 text-base sm:text-md leading-relaxed">
            Whether you're running offers, launching products, or building
            brand awareness, Qmize delivers reliable promotional SMS solutions
            tailored for businesses of all sizes.
          </p>

          <p className="mt-4 text-gray-700 text-base sm:text-md leading-relaxed">
            As a trusted promotional bulk SMS provider in India, Qmize empowers
            brands to communicate instantly and effectively. Our scalable
            promotional SMS service helps you reach thousands of customers in
            just a few clicks.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-4 py-1 rounded-xl bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-700 transition">
              Get Started
            </button>
            <button className="px-4 py-1 rounded-xl border border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-50 transition">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>





    <section className="relative py-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-100" />

      {/* Square Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,185,129,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.15) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-emerald-600">Qmize</span> as Your
            Promotional SMS Provider?
          </h2>
          <p className="mt-4 text-gray-700 text-md leading-relaxed">
            Choosing the right partner makes all the difference. Qmize combines
            technology, reliability, and affordability to deliver consistent,
            measurable results for businesses across industries.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/70 backdrop-blur-xl border border-emerald-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition">
                <item.icon className="text-emerald-600 group-hover:text-white transition" size={26} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-700 text-md  leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Line */}
        <p className="mt-14 text-center text-gray-700 text-lg max-w-3xl mx-auto">
          Businesses across industries rely on{" "}
          <span className="font-semibold text-emerald-600">Qmize</span> as their
          preferred promotional SMS provider for reliable performance and
          consistent growth.
        </p>
      </div>
    </section>





     <section className="relative py-12 bg-white overflow-hidden">
      {/* Dotted Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(16,185,129,0.25) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Features of Promotional SMS Service
          </h2>
          <p className="mt-4 text-md text-gray-700 leading-relaxed">
            Powerful features built to maximize campaign performance and help
            businesses communicate faster, smarter, and more effectively.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition">
                <item.icon
                  size={26}
                  className="text-emerald-600 group-hover:text-white transition"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-md text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-12 max-w-3xl text-md text-gray-700 leading-relaxed">
          Qmize combines advanced technology with simplicity, making it a
          reliable promotional bulk SMS provider in India for businesses of all
          sizes.
        </p>
      </div>
    </section>




     <section className="relative py-10 bg-white overflow-hidden">
      {/* Dotted Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(16,185,129,0.25) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl font-bold text-green-700">
            How to Send Promotional SMS with Qmize
          </h2>
          <p className="mt-4 text-md text-gray-700 leading-relaxed">
            Sending promotional SMS is quick and straightforward. Follow the
            simple steps below to launch your campaigns effortlessly.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-200 hidden sm:block" />

          <div className="space-y-10">
            {steps.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                {/* Step Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-semibold flex items-center justify-center">
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-md text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-14 max-w-3xl text-md text-gray-700 leading-relaxed">
          No technical expertise required. Qmize makes promotional SMS marketing
          effortless for businesses of all sizes.
        </p>
      </div>
    </section>







     <section className="bg-white py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2  min-h-[420px]">
        
        {/* LEFT SIDE */}
        <div className="flex items-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-green-900">
              Pricing That Fits Every Business
            </h2>

            <p className="mt-4 text-md text-gray-700 leading-relaxed">
              Qmize offers flexible and transparent promotional SMS prices in
              India, designed to suit startups, SMEs, and large enterprises
              without complexity or hidden costs.
            </p>

            <p className="mt-6 text-md text-gray-700 leading-relaxed">
              Get premium service, high delivery rates, and enterprise-grade
              reliability at competitive prices from one of the best
              promotional SMS providers in India.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative bg-emerald-50 flex items-center px-6 sm:px-10 lg:px-16">
          {/* Vertical Accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600 hidden lg:block" />

          <ul className="space-y-6 max-w-xl">
            <li className="flex items-start gap-4">
              <span className="text-emerald-600 font-bold text-xl">✓</span>
              <p className="text-md text-gray-800">
                Affordable <strong>pay-as-you-go</strong> plans for complete
                flexibility
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="text-emerald-600 font-bold text-xl">✓</span>
              <p className="text-md text-gray-800">
                <strong>Volume discounts</strong> for high-volume bulk SMS
                campaigns
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="text-emerald-600 font-bold text-xl">✓</span>
              <p className="text-md text-gray-800">
                No setup charges and <strong>no hidden fees</strong>
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="text-emerald-600 font-bold text-xl">✓</span>
              <p className="text-md text-gray-800">
                <strong>Custom pricing</strong> for large-scale and enterprise
                campaigns
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>





     <section className="bg-green-50 py-12 ">
      {/* Full-width wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full ">
        
        {/* LEFT CONTENT */}
        <div className="flex items-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-green-900">
              Who Can Use Promotional SMS?
            </h2>

            <p className="mt-4 text-md text-gray-700 leading-relaxed">
              Qmize’s promotional SMS service is ideal for businesses across
              industries looking to reach customers instantly and drive higher
              engagement.
            </p>

            <p className="mt-6 text-md text-gray-700 leading-relaxed">
              Any business aiming to boost visibility, customer response, and
              conversions can benefit from promotional SMS marketing.
            </p>
          </div>
        </div>

        {/* RIGHT LIST */}
        <div className="bg-gray-50 flex items-center px-6 sm:px-10 lg:px-16">
          <div className="w-full max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10">
              {[
                "E-commerce",
                "Retail Stores",
                "Educational Institutes",
                "Real Estate Companies",
                "Event Organizers",
                "Healthcare Providers",
                "Startups & Enterprises",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-md text-gray-800"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>







     <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* CTA BLOCK */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-green-500 text-white p-10 sm:p-14 mb-16">
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Start Sending Promotional SMS with Qmize Today
          </h2>

          <p className="mt-4 text-md text-emerald-50 max-w-3xl leading-relaxed">
            Boost engagement, increase sales, and reach customers instantly with
            Qmize’s reliable promotional SMS service. Join thousands of
            businesses that trust Qmize as their promotional bulk SMS provider
            in India.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-50 transition">
              👉 Sign Up Now
            </button>
            <span className="text-sm text-emerald-100">
              Launch your first SMS campaign in minutes
            </span>
          </div>
        </div>

        {/* FAQ HEADER */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h3>
          <p className="mt-2 text-md text-gray-700">
            Answers to common questions about promotional SMS services using
            Qmize.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((item, idx) => (
            <div key={idx} className="py-5">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-medium text-gray-900 text-md">
                  {item.q}
                </span>
                <ChevronDown
                  className={`transition-transform ${
                    open === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === idx && (
                <p className="mt-3 text-md text-gray-700 leading-relaxed max-w-5xl">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    
    
    </>
  )
}

export default PromotionalSMS