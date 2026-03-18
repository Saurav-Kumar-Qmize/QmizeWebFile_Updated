import React, { useState } from "react";
import { Megaphone, BarChart3, Hand, Cog } from "lucide-react";
import Marketing from '../../assets/Images/marketing_image_sample.webp'
import Sales from '../../assets/Images/sales-image-sample.webp'
import Support from '../../assets/Images/support-image-sample.webp'
import Operation from '../../assets/Images/operation_image_sample.webp'
import { Star } from "lucide-react";
import Meta from "../../assets/Icons/meta-logo.webp";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("marketing");

    const reviews = [
    "Amazing Tool!",
    "The Perfect Solution",
    "Amazing Experience",
    "Found Exactly What I Needed",
    "Loved The Interface",
    "Outstanding Support",
    "Super Useful Platform"
  ];

    
  const tabs = [
    { id: "marketing", label: "Marketing", icon: <Megaphone size={18} className="text-emerald-700" /> },
    { id: "sales", label: "Sales", icon: <BarChart3 size={18} className="text-emerald-700" /> },
    { id: "support", label: "Support", icon: <Hand size={18} className="text-emerald-700" /> },
    { id: "operations", label: "Operations", icon: <Cog size={18} className="text-emerald-700" /> },
  ];

  const content = {
    marketing: {
      title: "Boost your lead generation",
      desc: "Send deals, discounts, or product drops straight into WhatsApp inboxes. No more getting lost in email — just tap, read, and shop.",
      image: Marketing, // replace later
      button: "Start for free",
    },
    sales: {
      title: "Accelerate your sales process",
      desc: "Send product updates, reminders, follow-ups, and offers to increase conversions and close deals faster than ever.",
      image: Sales, // replace later
      button: "Grow Sales",
    },
    support: {
      title: "Support your customers instantly",
      desc: "Provide real-time chat, quick replies, and automated support on WhatsApp to keep customers satisfied.",
      image: Support, // replace later
      button: "Improve Support",
    },
    operations: {
      title: "Streamline your operations",
      desc: "Automate repetitive tasks, send alerts, manage orders, and run operations smoothly with WhatsApp workflows.",
      image: Operation, // replace later
      button: "Optimize Workflow",
    },
  };

  const current = content[activeTab];

  return (

    <>
   <section className="relative w-full bg-gradient-to-b from-green-50 to-emerald-50 py-14 sm:py-12 overflow-hidden">

  {/* Floating Background Decorations */}
  <div className="absolute -top-10 -left-10 w-28 h-28 sm:w-40 sm:h-40 bg-emerald-200 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
  <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-52 sm:h-52 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>

  {/* Title */}
  <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-900 tracking-tight px-4 animate-slideDown leading-snug">
    Fuel Your Business to the <br className="hidden sm:block" /> Next Level
  </h2>

  <p className="text-center text-gray-600 mt-2 text-xs sm:text-sm md:text-base max-w-md sm:max-w-xl mx-auto px-4 animate-fadeIn leading-relaxed">
    Take the hard work out of staying connected with your audience and focus on what really matters -
    building relationships and growing your brand.
  </p>

  {/* MAIN CONTAINER */}
  <div className="
    max-w-6xl mx-auto mt-8 sm:mt-12 
    bg-white/80 backdrop-blur-xl 
    border border-emerald-200 
    rounded-2xl sm:rounded-3xl shadow-xl 
    p-3 sm:p-4 md:p-6
    transition-all 
    animate-fadeInUp
  ">

    {/* Top Tabs */}
    <div className="grid grid-cols-4 border-b border-emerald-200 text-[10px] sm:text-xs md:text-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            flex items-center justify-center gap-1 py-2 sm:py-3 font-semibold relative
            transition-all duration-300 cursor-pointer
            ${activeTab === tab.id 
              ? "text-emerald-800 bg-emerald-100 shadow-inner" 
              : "text-gray-700 hover:bg-emerald-50"}
          `}
        >
          <span className={`${activeTab === tab.id ? "animate-tabBounce" : ""}`}>
            {tab.icon}
          </span>
          {tab.label}

          {activeTab === tab.id && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] sm:h-[3px] bg-emerald-600 rounded-full animate-growWidth"></span>
          )}
        </button>
      ))}
    </div>

    {/* CONTENT AREA */}
    <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 p-4 sm:p-8 md:p-12 animate-smoothFade">

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={current.image}
          className="w-40 sm:w-56 md:w-72 rounded-xl shadow-lg transform animate-imagePop"
          alt="features of qmize"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 animate-slideRight text-center md:text-left px-2 sm:px-0">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-900 leading-snug">
          {current.title}
        </h3>

        <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base leading-relaxed">
          {current.desc}
        </p>

       <a
       href="https://apihub.msg24x7.com"
       target="_blank"
       > <button className="
          mt-4 sm:mt-6 px-5 sm:px-6 py-1.5 sm:py-2 
          bg-gradient-to-r from-emerald-700 to-green-600 
          text-white cursor-pointer
          rounded-full shadow-lg
          hover:scale-105 hover:shadow-xl 
          transition-all duration-300
          flex items-center gap-2 mx-auto md:mx-0 text-xs sm:text-sm
        ">
          {current.button}
          <svg className="w-3 sm:w-4 h-3 sm:h-4 animate-arrowMove" fill="white" viewBox="0 0 20 20">
            <path d="M10 3l1.5 1.5L7 9h11v2H7l4.5 4.5L10 17l-7-7 7-7z" />
          </svg>
        </button></a>
      </div>

    </div>
  </div>
</section>




<section className="w-full bg-[#3e3e3e] py-3 overflow-hidden relative">
      
      {/* Marquee Container */}
      <div className="flex items-center gap-10 animate-review-scroll whitespace-nowrap">

        {reviews.concat(reviews).map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-white text-sm sm:text-base font-medium">
            <span className="italic">“{item}”</span>

            {/* Stars */}
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#fbbf24" stroke="#fbbf24" />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>





    <section className="w-full bg-[#faf7ef] py-12 sm:py-10">

  {/* Badge */}
  <div className="flex justify-center">
    <span className="px-4 py-1 bg-green-100 border border-green-300 text-green-800 text-xs sm:text-sm rounded-full font-medium flex items-center gap-2 shadow-sm animate-fadeIn">
      <i className="fa-brands fa-whatsapp text-green-600"></i>
      Powered by Official WhatsApp Business API
    </span>
  </div>

  {/* Main Content */}
  <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row items-center md:items-start gap-10 px-6">

    {/* Left Text Block */}
    <div className="w-full md:w-1/2 animate-slideLeft text-center md:text-left">

      <p className="text-emerald-700 font-semibold text-sm sm:text-base mb-2">
        Best WhatsApp API Provider in India
      </p>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
        Qmize is an Official <br className="hidden sm:block" /> 
        META Business Partner
      </h2>

      <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
        Build meaningful customer connections every day with India’s leading WhatsApp API platform.
      </p>

    </div>

    {/* Right Image Block */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-imageFloat">
      <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-10">
        <img 
          src={Meta} 
          alt="meta brand logo"
          className="w-28 sm:w-36 md:w-40 object-contain"
        />
      </div>
    </div>

  </div>
</section>












</>


  );
};

export default TabsSection;
