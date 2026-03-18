import {
  Monitor,
  Share2,
  MessageCircle,
  PhoneCall,
  Megaphone,
} from "lucide-react";
import {
  Landmark,
  GraduationCap,
  Stethoscope,
  Home,
  Tv,
  Banknote,
  Briefcase,
  ShoppingCart,
  Truck,
  Utensils,
  Laptop,
  Factory
} from "lucide-react";
import { Link } from "react-router-dom";

import star from "../../assets/Icons/ai-design.webp";
import WebDev from "../../assets/Images/web-development-front.webp"
import DigiMarket from "../../assets/Images/sm2.webp"
import WhatsAppApi from "../../assets/Images/whatsappbusiness.webp"
import BulkSms from "../../assets/Images/bulksms_front.webp"
import SeoServices from "../../assets/Images/seo-front.webp"
import Prrelease from "../../assets/Images/press-release-front.webp"
import WhatsAppFeature from "../../assets/Images/whatsappfeatures.png"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";


import WhatsAppFeature2 from "../../assets/Images/whatsappfeatures2.png"
import worldmap from "../../assets/Images/worldmap.png"
import gifvideo from '../../assets/Videos/create.gif';
import news1 from "../../assets/Images/siliconindia_news_channel.png"
import news2 from "../../assets/Images/yugpatrika_news_channel.png"
import news3 from "../../assets/Images/magzinopedia_news_channel.png"
import news4 from "../../assets/Images/dailyhunt_news_channel.jpg"
import Nadeem from "../../assets/Images/nadeem_testimonial.webp";
import Nishad from "../../assets/Images/nisaad_testimonial.jpg";
import Soumyadeep from "../../assets/Images/soumyadeep-testimonial.jpg";
import Bashrat from "../../assets/Images/bashrat_testimonial.webp";
import Guneshkaran from "../../assets/Images/guneshkaran_testimonial.jpg";
import Sharad from "../../assets/Images/sharad-testimonial.webp";




export default function SolutionsSection() {


     const faqs = [
    {
      q: "What is WhatsApp Business API?",
      a: "It is a powerful solution that enables businesses to automate messages, send notifications, handle customer support, and scale communication seamlessly.",
    },
    {
      q: "How does Qmize help with WhatsApp automation?",
      a: "Qmize provides verified WhatsApp Business API access, automation tools, chatbots, templates, analytics, and campaign management.",
    },
    {
      q: "Is the WhatsApp API suitable for small businesses?",
      a: "Absolutely! Whether you are a startup or enterprise, the API helps automate customer communication and improve conversions.",
    },
    {
      q: "How long does onboarding take?",
      a: "Typically 24 hours after verification. Qmize provides fast onboarding with complete documentation support.",
    },
    {
      q: "Does Qmize offer customer support?",
      a: "Yes! 24x7 customer support with a dedicated success manager for all business plans.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };






     const images = [
   WebDev,WebDev,WebDev,WebDev,WebDev,WebDev,WebDev,WebDev,
    // add more image URLs here (remote or local)
  ];

  // duplicate array to create a seamless loop
  const looped = [...images, ...images,...images];


  const industries = [
  { name: "Government Sector", icon: Landmark },
  { name: "Education Sector", icon: GraduationCap },
  { name: "Health & Medical", icon: Stethoscope },
  { name: "Real Estate Industry", icon: Home },
  { name: "Entertainment", icon: Tv },
  { name: "Banking & Finance", icon: Banknote },
  { name: "Business & Accounting", icon: Briefcase },
  { name: "Retail & E-commerce", icon: ShoppingCart },
  { name: "Transport & Logistics", icon: Truck },
  { name: "Food & Restaurant", icon: Utensils },
  { name: "Information Technology", icon: Laptop },
  { name: "Industry & Oil & Gas", icon: Factory }
];









  const testimonials = [
    {
      name: "Gunasekaran N",
      username: "",
      image: Guneshkaran,
      text: "We Nihon Edutech Private Ltd have successfully integrated the Qmize formerly MSG24x7 WhatsApp Business API into our product for customer communication. The API implementation was seamless, allowing us to send bulk messages directly from our product to customers. The Qmize formerly MSG24x7 portal is user-friendly and intuitive, offering a convenient self-service experience. Their Business Development Executive, Rashid, has been exceptionally knowledgeable and supportive throughout the process, assisting us with implementation and promptly resolving any issues that arose.",
      featured: true,
    },
    {
      name: "Sharad Purohit",
      username: "",
      image: Sharad,
      text: "“Their services are really good and always reliable. We always receive timely responses to our queries.”",
    },
    {
      name: "Nadeem Asif",
      username: "",
      image: Nadeem,
      text: "Very professional team specialy Mr.Shujat ALI, Mr. Sarim Helal and Mr. Jabir Azad. They are helping with WA API on very reasonable fees, They are cooperative, informative and suportive since i came to this company. I am happy to deal with you guys. All the best.",
    },
    {
      name: "Nishad S L",
      username: "",
      image: Nishad,
      text: "We had an exceptional experience with MSG24X7 for obtaining a green tick for our business. From the moment we connected, their team provided outstanding support. ",
    },
    {
      name: "Bashrat Amim",
      username: "",
      image: Bashrat,
      text: "I am Basharat Amin From Srinagar, Kashmir. I had the pleasure of working with Qmize formerly MSG24x7, and I must say my relationship manager Ms. Kulsoom is exceptional! ",
    },
    {
      name: "Prachi Chaudhary",
      username: "",
      text: "Very professional team specialy Mr. Jabir Azad. They are helping with WA API on very reasonable fees, They are cooperative, informative and suportive since i came to this company. I am happy to deal with you guys. All the best.",
    },
    {
      name: "Shoumyadip Dutta",
      username: "",
      image: Soumyadeep,
      text: "The team is highly professional and provided prompt service, delivering the results well ahead of the promised deadline. A special thank you to Mr. Rashid for his assistance in helping us onboard the WABA platform and navigate the WhatsApp Blue Tick process.",
    },
    {
      name: "Kiran Kapadiya",
      username: "",
      text: "Great Service - Kulsoom was very attentive and always there to help when you need one! Keep up the good work!",
    },
    
  ];


  const services = [

     {
      title: "WhatsApp Business API",
      desc: "Automate notifications, campaigns, and customer journeys using WABA.",
      icon: <MessageCircle size={34} className="text-emerald-700" />,
      image: WhatsAppApi,
      link: "/whatsapp-business-api"
    },
     {
      title: "Bulk SMS Services",
      desc: "Send instant bulk SMS alerts, OTPs, and promotional campaigns.",
      icon: <PhoneCall size={34} className="text-emerald-700" />,
      image: BulkSms,
      link: "/bulk-sms-services"
    },
     {
      title: "Website Development",
      desc: "Beautiful, responsive, high-performance websites for your business.",
      icon: <Monitor size={34} className="text-emerald-700" />,
      image: WebDev,
      link: "/website-development-company-and-digital-agency"
    },
    {
      title: "Social Media Marketing",
      desc: "Grow your brand with SEO, SMM, Google Ads, and performance marketing.",
      icon: <Megaphone size={34} className="text-emerald-700" />,
      image: DigiMarket,
      link: "/social-media-marketing"
    },
    {
      title: "SEO Services",
      desc: "Rank higher on Google and turn searches into real customers with our SEO services.",
      icon: <Megaphone size={34} className="text-emerald-700" />,
      image: SeoServices,
      link: "/search-engine-optimization"
    },
   
   
   
    {
      title: "PR Release Services",
      desc: "Boost your brand visibility with nationwide digital PR & media coverage.",
      icon: <Share2 size={34} className="text-emerald-700" />,
      image: Prrelease,
      link:"/press-release-services "
    },
  ];

  return (

    <>
    <section className="relative w-full bg-gradient-to-b from-green-50 via-white to-green-50 py-20 px-6 overflow-hidden">

  {/* Decorative Blobs */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200 opacity-20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-52 h-52 bg-green-300 opacity-20 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto relative z-10">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-900 tracking-tight animate-slideDown">
      Discover Powerful Solutions  
      <br /> 
      <span className="text-emerald-600">Built for Growth</span>
    </h2>

    <p className="text-gray-600 mt-4 text-sm sm:text-lg animate-fadeIn">
      Transform your business with our complete suite of digital & communication solutions.
    </p>
  </div>

  {/* GRID */}
  <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto relative z-10">

    {services.map((srv, i) => (
      <div
        key={i}
        className="
          group relative bg-white/70 backdrop-blur-xl 
          rounded-3xl shadow-lg p-6 overflow-hidden
          border border-emerald-200 transition-all
          hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] 
          hover:-translate-y-2 
          hover:border-emerald-400
        "
      >
        {/* Gradient Border Glow */}
       <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-bl 
from-green-200 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 
pointer-events-none"></div>


        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={srv.image}
            alt={srv.title}
            className="
              w-full h-48 object-cover rounded-2xl
              group-hover:scale-105 transition-transform duration-700
            "
          />
        </div>

        {/* ICON BADGE */}
        <div className="
          w-14 h-14 bg-white shadow-md rounded-full 
          flex items-center justify-center 
          -mt-7 ml-3 relative z-10
          border border-emerald-200
          group-hover:-translate-y-1 transition-all
        ">
          {srv.icon}
        </div>

        {/* CONTENT */}
        <div className="mt-5 px-1">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-950 transition">
            {srv.title}
          </h3>

          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            {srv.desc}
          </p>

         <Link
  to={srv.link}
  className="
    mt-5 inline-block px-6 py-2 rounded-full text-sm font-semibold
    bg-emerald-600 text-white shadow-md
    hover:bg-emerald-700 hover:shadow-lg hover:scale-105
    transition-all duration-300
  "
>
  Learn More →
</Link>

        </div>
      </div>
    ))}

  </div>

  
</section>






<section className="relative w-full h-full bg-[#020f0b] overflow-hidden flex items-center py-28 px-6 md:px-16">

  {/* Animated Neon Grid Background */}
  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(52,211,153,.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(52,211,153,.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-gridMove"></div>

  {/* Floating Glow Orbs */}
  <div className="absolute -top-32 -left-24 w-96 h-96 bg-emerald-400/20 blur-[160px] rounded-full animate-floatSlow"></div>
  <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-green-400/10 blur-[200px] rounded-full animate-floatReverse"></div>

  {/* Content Container */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10 items-center">

    {/* LEFT: Power Content */}
    <div>

      <span className="inline-block mb-5 px-4 py-1 bg-emerald-400/10 border border-emerald-400/30 
        rounded-full text-emerald-300 text-xs tracking-widest uppercase animate-pulse">
        WhatsApp Growth Engine
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold leading-tight text-white animate-textReveal">
        Build Trust.  
        Build Speed.  
        <span className="block bg-gradient-to-r from-emerald-300 to-green-400 
          text-transparent bg-clip-text animate-glowShift">
          Build Revenue on WhatsApp.
        </span>
      </h1>

      <p className="mt-6 text-white/70 max-w-xl leading-relaxed text-sm md:text-base animate-softFade">
        WhatsApp is not just messaging.
        <br className="hidden md:block" />
        It’s the fastest business channel on the planet.
        <br /><br />
        Turn conversations into conversions using automation, verified presence,
        and intelligent engagement - without friction.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-5">

        <a
        href="https://apihub.msg24x7.com/register"
        target="_blank"
        ><button className="cursor-pointer relative group px-8 py-3 rounded-full font-semibold text-black
          bg-gradient-to-r from-emerald-400 to-green-300 overflow-hidden
          hover:scale-110 transition-all duration-300">

          <span className="relative z-10">Start Free Setup</span>

          <span className="absolute inset-0 opacity-0 group-hover:opacity-100
            bg-white/20 backdrop-blur transition"></span>
        </button></a>

      <a 
      href="https://youtu.be/AHffIU-u2qk"
      target="_blank"
      >
        <button className="cursor-pointer relative group px-8 py-3 rounded-full font-semibold text-emerald-300
          border border-emerald-500 hover:bg-emerald-500 hover:text-black transition-all">
          Watch Demo
        </button></a>

      </div>

    </div>

    {/* RIGHT: Futuristic Card */}
    <div className="relative animate-floatCard">

      <div className="absolute inset-0 bg-emerald-500/30 blur-[120px] rounded-full"></div>

      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

        <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 
          text-transparent bg-clip-text">
          WhatsApp Delivers Results
        </h3>

        <div className="grid grid-cols-2 gap-6 mt-8">

          {[
            ["98%", "Open Rate"],
            ["3X", "Customers Engaged"],
            ["70%", "Faster Support"],
            ["24/7", "Automation"]
          ].map((stat, i) => (
            <div key={i} className="rounded-xl bg-black/30 border border-white/10 p-4
              hover:bg-emerald-400/10 hover:scale-105 transition-all">
              <h4 className="text-2xl font-bold text-emerald-400">{stat[0]}</h4>
              <p className="text-white/60 text-xs mt-1">{stat[1]}</p>
            </div>
          ))}

        </div>

      </div>

    </div>

  </div>

  {/* Animations */}
  <style>{`
    @keyframes floatSlow {
      0% { transform: translateY(0); }
      50% { transform: translateY(-30px); }
      100% { transform: translateY(0); }
    }
    @keyframes floatReverse {
      0% { transform: translateY(0); }
      50% { transform: translateY(40px); }
      100% { transform: translateY(0); }
    }
    .animate-floatSlow { animation: floatSlow 12s ease-in-out infinite; }
    .animate-floatReverse { animation: floatSlow 15s reverse infinite; }

    @keyframes gridMove {
      from { background-position: 0 0; }
      to { background-position: 200px 200px; }
    }
    .animate-gridMove { animation: gridMove 60s linear infinite; }

    @keyframes textReveal {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-textReveal { animation: textReveal 1s ease; }

    @keyframes glowShift {
      0% { text-shadow: 0 0 10px #10b981; }
      100% { text-shadow: 0 0 30px #34d399; }
    }
    .animate-glowShift { animation: glowShift 3s infinite alternate; }

    @keyframes softFade {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-softFade { animation: softFade 1.2s ease; }

    @keyframes floatCard {
      0% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0); }
    }
    .animate-floatCard { animation: floatCard 8s ease-in-out infinite; }
  `}</style>

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
WhatsApp at the Core of Every Customer Conversation.
</h2>


<p className="text-gray-600 mt-4 text-sm sm:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
Build meaningful customer connections every day with India’s leading WhatsApp API platform.
</p>
</div>


{/* Right Image Block */}
<div className="w-full md:w-1/2 flex justify-center md:justify-end animate-imageFloat">
<div className="bg-white shadow-lg rounded-2xl p-8 sm:p-10">
<img
src={WhatsAppFeature}
alt="services of qmize"
className="w-28 sm:w-36 md:w-40 object-contain"
/>
</div>
</div>
</div>
</section>







<section className="relative w-full bg-[#e9fdf4] py-20 overflow-hidden">

  {/* Soft animated background gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 via-transparent to-emerald-100 animate-bgMove opacity-50"></div>

  {/* TOP STRIP */}
  <div className="w-full overflow-hidden border-y border-emerald-300 bg-white/60 backdrop-blur-lg">
    <div className="flex items-center gap-14 py-4 animate-marqueeLeft">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 whitespace-nowrap text-emerald-800 font-semibold text-[15px]">
          <img src={star} className="w-5 h-5" alt="" />
          Qmize – Smart WhatsApp API Automation
        </div>
      ))}
    </div>
  </div>

  {/* BOTTOM STRIP */}
  <div className="w-full overflow-hidden border-y border-emerald-300 bg-white/60 backdrop-blur-lg mt-6">
    <div className="flex items-center gap-14 py-4 animate-marqueeRight">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 whitespace-nowrap text-emerald-900 font-semibold text-[15px]">
          <img src={star} className="w-5 h-5" alt="" />
          #1 WhatsApp Business API Platform
        </div>
      ))}
    </div>
  </div>

  {/* Animations */}
  <style jsx>{`
    @keyframes marqueeLeft {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marqueeRight {
      0%   { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    @keyframes bgMove {
      0% { background-position: 0 0; }
      100% { background-position: 200% 0; }
    }

    .animate-marqueeLeft {
      animation: marqueeLeft 40s linear infinite;
      width: max-content;
    }
    .animate-marqueeRight {
      animation: marqueeRight 40s linear infinite;
      width: max-content;
    }
    .animate-bgMove {
      animation: bgMove 2s ease-in-out infinite alternate;
      background-size: 300%;
    }

    @media (max-width: 768px) {
      .animate-marqueeLeft,
      .animate-marqueeRight {
        animation-duration: 30s;
      }
    }
  `}</style>
</section>
















   



<section className="w-full bg-[#020617] text-white py-24 px-6 md:px-14 relative overflow-hidden">

  {/* Background Gradient Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-400/5 blur-[140px]"></div>

  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

    {/* LEFT SIDE */}
    <div className="animate-fadeInUp">

  <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
    Empowering Every  
    <span className="text-emerald-400"> Business Sector</span>
  </h2>

  <p className="text-white/60 text-base md:text-lg mb-12 leading-relaxed max-w-lg">
    From startups to enterprise giants - WhatsApp Business API helps every industry 
    automate communication, boost customer engagement, and accelerate business growth.
  </p>

  {/* INDUSTRIES GRID */}
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

    {industries.map((item, i) => {
      const Icon = item.icon;
      return (
        <div
          key={i}
          className="
            group p-5 rounded-2xl bg-white/5 backdrop-blur-xl
            border border-white/10
            hover:bg-white/10 hover:border-emerald-400/50
            hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]
            transition-all duration-500 cursor-pointer
            flex flex-col items-center justify-center gap-3
            animate-fadeStagger
          "
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          {/* Icon */}
          <div className="
            w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center
            border border-emerald-400/20
            group-hover:scale-110 group-hover:bg-emerald-500/30 
            transition-all duration-500
          ">
            <Icon className="w-6 h-6 text-emerald-300 group-hover:text-white transition-all" />
          </div>

          <p className="text-center text-sm text-white/80 leading-tight group-hover:text-white transition">
            {item.name}
          </p>
        </div>
      );
    })}

  </div>

</div>


    {/* RIGHT SIDE — ANIMATED FLOATING GLOBE */}
    <div className="relative flex justify-center lg:justify-end">

      <div className="absolute -top-10 right-10 w-72 h-72 bg-emerald-400/20 blur-[120px] rounded-full"></div>

      <img
        src={worldmap}
        alt="global reach of qmize"
        className="
          w-[90%] md:w-[85%] lg:w-[600px]
          floatingGlobe drop-shadow-[0_0_40px_rgba(16,185,129,0.2)]
        "
      />
    </div>

  </div>

  {/* CUSTOM ANIMATIONS */}
  <style jsx>{`
    /* Fade upward animation */
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeInUp { animation: fadeInUp 1.2s ease forwards; }

    /* Stagger item fade */
    @keyframes fadeStagger {
      0% { opacity: 0; transform: translateY(15px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeStagger { animation: fadeStagger 0.8s ease forwards; }

    /* Floating Globe Animation */
    @keyframes floatGlobe {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-18px); }
      100% { transform: translateY(0px); }
    }
    .floatingGlobe { 
      animation: floatGlobe 5s ease-in-out infinite;
    }
  `}</style>

</section>






  







<section className="relative bg-[#001c11] py-20 text-white overflow-hidden">

  {/* Light Rays */}
  <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
    <div className="absolute top-20 left-1/2 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full"></div>
    <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-green-400/20 blur-2xl rounded-full"></div>
  </div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">

    <h2 className="text-4xl font-extrabold text-center mb-3">In the News</h2>
    <p className="text-center text-white/60 mb-16">
      Major media outlets are recognizing our innovation.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-10">

  {[news1, news2, news3, news4].map((img, i) => {
    const isNews1 = img === news1;

    return (
      <div
        key={i}
        className="rotate-6 hover:rotate-0 transition-all duration-500 
                   bg-white rounded-2xl p-1 shadow-xl border border-white/20"
      >

        {isNews1 ? (
          <a
            href="https://www.siliconindia.com/news/general/qmize-whatsapp-api-offers-businesses-a-powerful-and-costeffective-messaging-solution-nid-238451-cid-1.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={img}
              className=" rounded-xl w-48 sm:w-60 h-32 sm:h-40 object-contain cursor-pointer hover:scale-105 transition"
              alt="pr services media channels"
            />
          </a>
        ) : (
          <img
            src={img}
            className="rounded-xl w-48 sm:w-60 h-32 sm:h-40 object-contain cursor-pointer hover:scale-105 transition"
            alt="pr services media channels"
          />
        )}

      </div>
    );
  })}

</div>

  </div>
</section>











<section className="w-full bg-[#fdfcf7] py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-5 animate-fadeIn">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
        Get Started with Qmize - 
        <span className="block">the new face of MSG24x7.</span>
      </h2>

      <div className="flex flex-wrap gap-4 text-gray-700 text-sm sm:text-base">
        <span className="flex items-center gap-1">⭐ Business Messaging</span>
        <span className="flex items-center gap-1">⭐ WhatsApp Business API</span>
        <span className="flex items-center gap-1">⭐ Social Media</span>
      </div>

      <a
  href="https://wa.me/919031011559"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="
      bg-emerald-700 text-white px-6 py-2 rounded-full text-sm
      hover:bg-emerald-800 transition shadow-md hover:shadow-lg
      cursor-pointer
    "
  >
    📞 Ping us on WhatsApp
  </button>
</a>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center md:justify-end">
      <img
        src={WhatsAppFeature2}
        alt="best whatsapp business api provider in india"
        className="
          w-[80%] sm:w-[70%] lg:w-[60%] 
          drop-shadow-2xl rounded-xl 
          animate-floatSlow
        "
      />
    </div>
  </div>

  {/* Animations */}
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn { animation: fadeIn 1.2s ease forwards; }

    @keyframes floatSlow {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    .animate-floatSlow {
      animation: floatSlow 6s ease-in-out infinite;
    }
  `}</style>
</section>






<section className="relative w-full min-h-screen bg-gradient-to-b from-[#ecfdf5] via-white to-[#f8fafc] overflow-hidden flex items-center px-6 md:px-16">

  {/* Animated Mesh Gradient */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.12),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(52,211,153,0.18),transparent_55%)]"></div>

  {/* Floating Blobs */}
  <div className="absolute -top-32 -left-20 w-96 h-96 bg-emerald-300/40 rounded-full blur-[160px] animate-floatSlow"></div>
  <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-green-300/20 rounded-full blur-[200px] animate-floatReverse"></div>

  {/* Content Wrapper */}
  <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center lg:text-left">

      <span className="inline-block mb-6 px-4 py-1.5 rounded-full 
        bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide
        shadow-md animate-bounceSoft">
        ⚡ AI-Powered WhatsApp Automation
      </span>

      <h1 className="text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight text-gray-900 animate-textReveal">
        Design Experiences.
        <br />
        Automate Conversations.
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r 
          from-emerald-500 via-green-400 to-emerald-600 animate-gradientText">
          Convert Customers Instantly.
        </span>
      </h1>

      <p className="mt-6 text-gray-600 max-w-xl leading-relaxed text-base md:text-md animate-fadeIn">
        Build chatbot journeys, send smart broadcasts, automate follow-ups,
        and deliver human-like engagement on WhatsApp - all from one powerful platform.
      </p>

      {/* CTA BUTTONS */}
      <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

        <a
        href="https://wa.me/919031011559"
        target="_blank"
        ><button className=" cursor-pointer relative group px-4 py-2 rounded-full font-semibold text-white
          bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg
          hover:scale-110 transition-all duration-300 overflow-hidden">

          <span className="relative z-10">Launch On WhatsApp</span>

          <span className="absolute inset-0 opacity-0 group-hover:opacity-100
            bg-white/20 backdrop-blur transition"></span>
        </button></a>

        <a
        href="https://youtu.be/AHffIU-u2qk"
        target="_blank"
        ><button className="cursor-pointer px-8 py-2 rounded-full font-semibold 
          border border-emerald-500 text-emerald-600
          hover:bg-emerald-500 hover:text-white transition-all">
          Watch Demo →
        </button></a>

      </div>
    </div>

    {/* RIGHT SIDE – GIF SHOWCASE */}
    <div className="relative animate-floatCard">

      {/* Glow Ring */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/30 to-teal-400/20 blur-[120px] rounded-full"></div>

      <div className="relative p-4 sm:p-6 rounded-[2rem] bg-white/70 backdrop-blur-xl
        border border-white shadow-2xl hover:scale-[1.03] transition-all duration-500">

        <div className="absolute top-4 right-4 bg-emerald-500 text-white 
          text-xs px-3 py-1 rounded-full animate-pulseSoft">
          Live Automation
        </div>

        <img
          src={gifvideo}
          alt="WhatsApp Automation Demo"
          className="rounded-2xl w-full object-contain"
        />
      </div>

    </div>

  </div>

  {/* Animations */}
  <style>
    {`
    @keyframes floatSlow {
      0% { transform: translateY(0); }
      50% { transform: translateY(-30px); }
      100% { transform: translateY(0); }
    }
    @keyframes floatReverse {
      0% { transform: translateY(0); }
      50% { transform: translateY(40px); }
      100% { transform: translateY(0); }
    }

    .animate-floatSlow { animation: floatSlow 15s ease-in-out infinite; }
    .animate-floatReverse { animation: floatReverse 18s ease-in-out infinite; }

    @keyframes textReveal {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-textReveal { animation: textReveal 1s ease; }

    @keyframes gradientText {
      0% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }
    .animate-gradientText { 
      background-size: 200% auto;
      animation: gradientText 5s linear infinite alternate;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fadeIn { animation: fadeIn 1.2s ease; }

    @keyframes pulseSoft {
      0%,100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    .animate-pulseSoft { animation: pulseSoft 2s infinite; }

    @keyframes bounceSoft {
      0%,100% { transform: translateY(0); }
      50% { transform: translateY(-3px); }
    }
    .animate-bounceSoft { animation: bounceSoft 1.5s infinite; }

    @keyframes floatCard {
      0%,100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .animate-floatCard { animation: floatCard 6s ease-in-out infinite; }
    `}
  </style>

</section>









 <section className="w-full bg-[#f2f2f2] py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Loved by thousands of people
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Here's what people are saying about Qmize
        </p>
      </div>

      {/* GRID */}
      <div className="
        max-w-7xl mx-auto 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-6
      ">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`
              bg-white rounded-3xl p-6 shadow-md border border-gray-200
              hover:shadow-xl transition-all duration-300
              ${t.featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
            `}
          >
            {/* Header */}
           <div className="flex items-center gap-3 mb-3">
  <img
    src={t.image}
    alt={t.name}
    className="w-10 h-10 rounded-full object-cover border border-gray-200"
  />
  <div>
    <p className="font-semibold text-gray-900">{t.name}</p>
    <p className="text-gray-500 text-xs">{t.username}</p>
  </div>
</div>

            {/* Content */}
            <p className="text-gray-700 leading-relaxed text-sm">{t.text}</p>
          </div>
        ))}
      </div>
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
