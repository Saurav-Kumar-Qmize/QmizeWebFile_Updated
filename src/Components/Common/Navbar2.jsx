import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
 
  

  
  
} from "lucide-react";
import {
  Zap,
  MessageCircle,
  Globe,
  Phone,
  Cloud,
  Mic,
  Mail,
  
  Workflow,
  Box,
  CreditCard,
  Sparkles,
  Newspaper,
  Users,
  HelpCircle,
  FileText,
  Shield
} from "lucide-react";

import Logo from "../../assets/Icons/newlogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);
  const [pricingRoute, setPricingRoute] = useState("/whatsapp-business-api");

  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isHoveringSubmenu, setIsHoveringSubmenu] = useState(false);


  useEffect(() => {
  const detectCountry = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
    console.log("Detected country:", data.country);
      if (data.country === "IN") {
        setPricingRoute("/whatsapp-business-api");
      } else {
        setPricingRoute("/whatsapp-business-api-international");
      }
    } catch (err) {
      console.error("Geo detection failed", err);
      // fallback
      // setPricingRoute("/whatsapp-business-api");
    }
  };

  detectCountry();
}, []);




  const navLinks = [
    { name: "Home" },
    { name: "Why Choose Us" },
    { name: "Solutions" },
    { name: "Integrations" },
    
    { name: "Resources" },
  ];


  const menuLayout = {
  Solutions: {
    width: "w-[60vw]",
    grid: "grid-cols-3"
  },
  Integrations: {
    width: "w-[17vw]",
    grid: "grid-cols-1"
  },
  Plans: {
    width: "w-[40vw]",
    grid: "grid-cols-3"
  },
  Resources: {
    width: "w-[40vw]",
    grid: "grid-cols-3"
  }
};


  const submenuData = {
  Solutions: [
    {
      title: "Marketing Services",
      items: [
       { title: "WhatsApp Business API", desc: "Customer messaging", icon: MessageCircle, link: "dynamic-pricing" },
      { title: "Bulk SMS Services", desc: "Instant offers", icon: Zap, link: "/bulk-sms-services" },
      { title: "OTP SMS", desc: "Instant offers", icon: Zap, link: "/otp-sms-service-provider" },
      { title: "Transactional SMS ", desc: "Instant offers", icon: Zap, link: "/transactional-sms" },
      { title: "Promotional SMS", desc: "Instant offers", icon: Zap, link: "/promotional-sms" },
      
      ]
    },
    {
      title: "Digital Services",
      items: [
        { title: "Website Development", desc: "Business website", icon: Globe, link: "/website-development-company-and-digital-agency" },
        { title: "Social Media Marketing", desc: "Brand building", icon: Users,link: "/social-media-marketing" },
        { title: "Press Release", desc: "Media on the top", icon: Sparkles,link:"/press-release-services" },  
        { title: "Search Engine Optimization", desc: "Grow traffic", icon: Sparkles, link:"/seo-services" },
        
      ]
    },
    {
      title: "Cloud Telephony",
      items: [
        { title: "Voice Broadcast", desc: "Bulk calls", icon: Mic ,link:"/voice-broadcasting-service"},
        { title: "Toll Free ", desc: "Toll Free Number", icon: Mic ,link:"/toll-free-number-for-business"},
        
        { title: "Missed Call", desc: "Lead tracking", icon: Phone, link: "/missed-call-service" }
      ]
    }
  ],

  Integrations: [
    {
      title: "Platform Integration",
      items: [
        { title: "WhatsApp Link", desc: "Generate Customize link", icon: MessageCircle, link: "/whatsapp-link-generator" },
        { title: "WhatsApp Button", desc: "Create Whatsapp chat widget", icon: Phone, link: "https://apihub.msg24x7.com/whatsapp-widget-button"  },
        { title: "App Marketplace", desc: "See our Integration", icon: Mail ,link:"/whatsapp-business-api-integration"}
      ]
    },
  
  ],

  Plans: [
    {
      title: "Plans",
      items: [
        { title: "Monthly Plan", desc: "Flexible pricing", icon: CreditCard },
        { title: "Enterprise", desc: "Custom billing", icon: Shield },
        { title: "Pay As You Go", desc: "Usage based", icon: Zap }
      ]
    },
    {
      title: "Add-ons",
      items: [
        { title: "Chatbots", desc: "Automation tools", icon: MessageCircle },
        { title: "Extra Credits", desc: "Recharge wallet", icon: CreditCard },
        { title: "Voice Minutes", desc: "Call balance", icon: Phone }
      ]
    },
    {
      title: "Discounts",
      items: [
        { title: "Festival Offers", desc: "Seasonal sale", icon: Sparkles },
        { title: "Bulk Deals", desc: "More savings", icon: Box },
        { title: "Partner Pricing", desc: "Reseller plans", icon: Users }
      ]
    }
  ],

  Resources: [
    {
      title: "Learn",
      items: [
        { title: "Blog", desc: "Expert content", icon: Newspaper , link: "/blogs" },
    
        { title: "Developer API Docs", desc: "Get API Integration Detail", icon: FileText , link: "/whatsapp-api-integration-docs"}
      ]
    },
    {
      title: "Company",
      items: [
        
        { title: "Careers", desc: "Join team", icon: Sparkles },
        { title: "Partners", desc: "Collaborate", icon: Workflow }
      ]
    },
    {
      title: "Support",
      items: [
     
        { title: "Reseller Guide", desc: "Become our Channel Partner", icon: Mail , link: "/white-labled-bulk-sms-reseller-program" },
        { title: "DLT Support", desc: "Get DLT Support", icon: Mail , link: "/dlt-support" },
        { title: "DLT New TRAI Rules", desc: "Information ", icon: Mail , link: "/dlt-new-trai-rules" }
      ]
    }
  ]
};

 const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  return (
     <nav
      className={`
        w-full 
        bg-white
        sticky top-0 left-0 
        z-60 
        overflow-visible
        transition-all duration-500 ease-in-out
         -mt-7
        ${
          scrolled
            ? "rounded-none shadow-md"
            : "rounded-tl-4xl rounded-tr-4xl "
        }
      `}
    >
      <div className="w-[95%] mx-auto flex items-center justify-between py-1 ">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link to="/"><img
            src={Logo}
            alt="qmize brand logo"
            className="w-[100px] h-[50px] object-contain"
          /></Link>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex items-center gap-6 text-emerald-900 font-semibold text-[15px] relative">
          {navLinks.map((link, index) => {
            const noSubmenu = ["Home", "Why Choose Us"];
            const showSubmenu = !noSubmenu.includes(link.name);

            return (
              <li
                key={index}
                className="relative flex items-center gap-1 cursor-pointer transition-colors duration-75 hover:text-emerald-700"
                onMouseEnter={() => showSubmenu && setHoveredMenu(link.name)}
                //  onMouseLeave={() => setHoveredMenu(true)} 
              >
               {link.name === "Home" ? (
                
  <Link to="/" className="hover:text-emerald-700">
    Home 
  </Link>
) : link.name === "Why Choose Us" ? (
  <Link to="/about" className="hover:text-emerald-700">
    Why Choose Us
  </Link>
) : (
  <span>{link.name}</span>
)}


                {/* Dropdown Arrow */}
                {showSubmenu && (
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ease-in-out ${
                      hoveredMenu === link.name
                        ? "rotate-180 text-emerald-700"
                        : "rotate-0"
                    }`}
                  />
                )}

                {/* Submenu */}
      {hoveredMenu === link.name && submenuData[link.name] && (() => {
  const layout = menuLayout[link.name] || { width: "w-[40vw]", grid: "grid-cols-1" };

  return (
   <div
  className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 shadow-2xl
  border-r-4 border-l-4 border-emerald-300 rounded-2xl p-6 ${layout.width}
  bg-white/80 backdrop-blur-xl overflow-hidden z-50 backdrop-blur-3xl`}
  onMouseEnter={() => setIsHoveringSubmenu(true)}
  onMouseLeave={() => {
    setIsHoveringSubmenu(false);
    setHoveredMenu(null);
  }}
>

  {/* ================= AI BACKGROUND EFFECT ================= */}
  <div className="absolute inset-0 -z-10 rounded-2xl">
    {/* Mesh / Glow blobs */}
    <div className="absolute bottom-10 -left-10 w-44 h-44 bg-emerald-400/50 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-5 right-0 w-56 h-56 bg-teal-600/60 rounded-full blur-[90px] animate-pulse"></div>
  
   
  </div>
  {/* ======================================================== */}

  {/* ================= SUBMENU CONTENT ================= */}
  <div className={`relative grid ${layout.grid} gap-8`}>

    {submenuData[link.name].map((section, idx) => (
      <div key={idx}>
        <h3 className="text-emerald-800 font-bold text-sm mb-3 uppercase border-b border-emerald-200 pb-1">
          {section.title}
        </h3>

        <ul className="space-y-3 text-sm">
          {section.items.map((item, i) => {
            const Icon = item.icon;
            return (
             <Link
  to={item.link === "dynamic-pricing" ? pricingRoute : item.link}
  key={i}
  className="block"
>
                <li className="flex gap-3 p-2 rounded-lg transition cursor-pointer
                  hover:bg-emerald-100/70">

                  <Icon size={16} className="text-emerald-600 mt-1" />

                  <div>
                    <p className="font-medium text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    ))}

  </div>
  {/* =================================================== */}
{/* Moving bottom glow strip */}
<div className="absolute bottom-0 left-0 w-full h-[15px] overflow-hidden">
  <div className="absolute left-[-40%] w-[40%] h-full 
    bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent
    animate-bottomFlow">
  </div>
</div>

</div>

  )
})()}


              </li>
            );
          })}
        </ul>

        {/* Right: Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="relative group">

  {/* MAIN BUTTON */}
  <a 
  href="https://apihub.msg24x7.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="bg-emerald-900 text-white text-sm font-medium px-4 py-1 rounded-md 
                     flex items-center gap-1 hover:bg-emerald-800 transition border-b-2 border-green-400 cursor-pointer">
    Sign in <ArrowRight size={12} />
  </button>
</a>


 

</div>


          <a href="https://wa.me/9031011559"
          target="_blank"
          ><button className="cursor-pointer bg-emerald-900 text-white text-sm font-medium px-4 py-1 rounded-md hover:bg-emerald-800 transition border-b-2 border-green-400">
            Talk to Sales
          </button></a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden p-2 rounded-md text-emerald-900 hover:bg-emerald-200 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

     {menuOpen && (
  <div className="md:hidden bg-emerald-50 border-t border-emerald-200 px-5 py-4 space-y-3">

    {navLinks.map((link, index) => {
      const hasSubmenu = submenuData[link.name];

      return (
        <div key={index} className="w-full">
          
          {/* MAIN MOBILE ITEM */}
          <button
            onClick={() =>
              hasSubmenu
                ? setMobileOpenMenu(
                    mobileOpenMenu === link.name ? null : link.name
                  )
                : setMenuOpen(false)
            }
            className="w-full flex items-center justify-between text-emerald-900 font-semibold text-sm py-2"
          >
            {link.name === "Home" ? (
                
  <Link to="/" className="hover:text-emerald-700">
    Home 
  </Link>
) : link.name === "Why Choose Us" ? (
  <Link to="/about" className="hover:text-emerald-700">
    Why Choose Us
  </Link>
) : (
  <span>{link.name}</span>)}


           


            {hasSubmenu && (
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  mobileOpenMenu === link.name ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {/* MOBILE SUBMENU */}
          {mobileOpenMenu === link.name && hasSubmenu && (
            <div className="mt-2 ml-2 space-y-4 border-l border-emerald-200 pl-4 animate-fadeIn">

              {submenuData[link.name].map((section, sIdx) => (
                <div key={sIdx}>
                  <h4 className="text-xs font-bold text-emerald-700 uppercase mb-2">
                    {section.title}
                  </h4>

                  <ul className="space-y-2">
                    {section.items.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={i}
                          to={item.link || "#"}
                          onClick={() => setMenuOpen(false)}
                          className="flex gap-3 p-2 rounded-lg bg-white hover:bg-emerald-100 transition"
                        >
                          <Icon size={16} className="text-emerald-600 mt-1" />
                          <div>
                            <p className="text-sm font-medium text-emerald-900">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              ))}

            </div>
          )}
        </div>
      );
    })}

    {/* MOBILE CTA BUTTONS */}
    <div className="pt-4 mt-4 border-t border-emerald-200 space-y-2">
      <a
        href="https://apihub.msg24x7.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-emerald-900 text-white py-2 rounded-md font-medium"
      >
        Sign In
      </a>

      <button className="w-full bg-emerald-900 text-white py-2 rounded-md font-medium">
        Talk to Sales
      </button>
    </div>

  </div>
)}


{hoveredMenu && (
  <div className="fixed inset-0 z-40 backdrop-blur-[1px] bg-black/20 pointer-events-none" />
)}

    </nav>
  );
}
