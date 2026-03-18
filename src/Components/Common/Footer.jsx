import React from 'react'
import logo from "../../assets/Icons/logo.webp"
import softwarebadge from "../../assets/Images/software_best_support.webp";
import iso9001 from "../../assets/Images/iso-9001_badge.png";
import iso27001 from "../../assets/Images/iso-27001_badge.png"
import metaLogo from "../../assets/Images/meta_business_badge.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
   
   
            <div className="w-full bg-white">
         {/* CONTACT SECTION */}
         <section className="relative bg-gradient-to-b from-emerald-900 to-emerald-800 text-white overflow-hidden">
           {/* Floating decorative SVG icons (top-left & bottom-right) */}
           <svg className="absolute -top-10 -left-8 w-36 opacity-10" viewBox="0 0 200 200">
             <circle cx="100" cy="100" r="100" fill="white" />
           </svg>
           <svg className="absolute -bottom-10 -right-8 w-44 opacity-8" viewBox="0 0 200 200">
             <rect x="0" y="0" width="200" height="200" rx="40" fill="white" />
           </svg>
   
           <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
               {/* Left: Headline + benefits */}
               <div className="space-y-6">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                   Do you have a project in mind?
                 </h2>
                 <p className="text-gray-200 max-w-xl leading-relaxed">
                   Tell us about your requirements and we'll get back within one business day.
                   We help with WhatsApp Business API, digital marketing, websites and more.
                 </p>
   
                 {/* feature chips */}
                 <div className="flex flex-wrap gap-3 mt-4">
                   <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm">
                     {/* SVG icon */}
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-95">
                       <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                     Business Messaging
                   </span>
   
                   <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                       <path d="M3 12h18M12 3v18" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                     WhatsApp Business API
                   </span>
   
                   <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                       <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.6"/>
                       <path d="M19 12a7 7 0 10-14 0" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                     </svg>
                     Social Media
                   </span>
                 </div>
               </div>
   
               {/* Right: Form card */}
               <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-emerald-900">
                 <form
                   onSubmit={(e) => {
                     e.preventDefault();
                     // TODO: integrate your form handler here
                     alert("Form submitted (demo) — replace with actual handler.");
                   }}
                   className="space-y-4"
                   aria-label="Contact form"
                 >
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <label className="block">
                       <span className="sr-only">Full name</span>
                       <input required placeholder="Full name" className="w-full border-b border-gray-200 py-2 outline-none bg-transparent" />
                     </label>
                     <label className="block">
                       <span className="sr-only">Mobile number</span>
                       <input required placeholder="Mobile No." className="w-full border-b border-gray-200 py-2 outline-none bg-transparent" />
                     </label>
                   </div>
   
                   <label className="block">
                     <span className="sr-only">Email</span>
                     <input required type="email" placeholder="Email" className="w-full border-b border-gray-200 py-2 outline-none bg-transparent" />
                   </label>
   
                   <label className="block">
                     <span className="sr-only">Subject</span>
                     <input required placeholder="Subject" className="w-full border-b border-gray-200 py-2 outline-none bg-transparent" />
                   </label>
   
                   <label className="block">
                     <span className="sr-only">Description</span>
                     <textarea required placeholder="Description" rows="4" className="w-full border border-gray-200 rounded-md p-3 resize-none outline-none" />
                   </label>
   
                   <div className="flex items-center justify-between gap-4">
                     <button type="submit" className="inline-flex items-center gap-2 bg-emerald-900 text-white px-4 py-2 rounded-full shadow hover:scale-[1.02] transition">
                       Submit
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                         <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                     </button>
   
                     <a href="#contact" className="text-sm text-white/80 hover:underline">Privacy Policy</a>
                   </div>
                 </form>
               </div>
             </div>
           </div>
   
           {/* curved divider SVG */}
           <div className="-mt-6">
             <svg viewBox="0 0 1440 120" className="w-full block">
               <path d="M0 40 C 360 120 1080 -40 1440 40 L1440 120 L0 120 Z" fill="#050B1E" />
             </svg>
           </div>
         </section>
   
         {/* FOOTER */}
        



        <footer className="relative overflow-hidden bg-[#050B1E] text-gray-300">

  
  


<div className="border-b border-white/10">
  <div
    className="
      relative max-w-2xl mx-auto px-2
      flex flex-wrap items-center justify-center gap-10
      rounded-2xl
      bg-gradient-to-r from-gray-600 via-emerald-50 to-gray-600
      
    "
  >
    {/* SoftwareSuggest */}
    <img
      src={softwarebadge}
      alt="Best Support 2025"
      className="h-28 w-28 opacity-90 transition-transform duration-300 hover:scale-105"
    />

    {/* ISO 9001 */}
    <img
      src={iso9001}
      alt="ISO 9001 Certified"
      className="h-12 opacity-90 transition-transform duration-300 hover:scale-105"
    />

    {/* ISO 27001 */}
    <img
      src={iso27001}
      alt="ISO 27001 Certified"
      className="h-12 opacity-90 transition-transform duration-300 hover:scale-105"
    />

    {/* Meta */}
    <img
      src={metaLogo}
      alt="Meta Business Partner"
      className="h-28 opacity-90 transition-transform duration-300 hover:scale-105"
    />
  </div>
</div>


              <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-14">

    {/* Brand */}
    <div>
      <div className="flex items-center gap-3 mb-4">
        <img src={logo} alt="Qmize Logo" className="w-14 h-14" />
        <div>
          <h3 className="text-white text-xl font-semibold ">
            Qmize
          </h3>
          <p className="text-xs text-gray-400">
            A Venture of DIGINTRA
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
        Qmize helps businesses automate conversations, boost engagement,
        and grow revenue using WhatsApp-first marketing solutions.
      </p>
    </div>

    {/* Company */}
    <div>
      <h4 className="text-white text-lg font-extrabold mb-2">Company</h4>
      <ul className="space-y-3 text-sm text-gray-400">
        <Link to="/about"><li className=" cursor-pointer hover:text-white transition">About Us</li></Link>
        <Link to="/contact-us"><li className=" cursor-pointer hover:text-white transition">Contact Us</li></Link>
        <Link to="/whatsapp-business-api"><li className="cursor-pointer hover:text-white transition">Whatsapp Business API</li></Link>
        <Link to="/website-development-company-and-digital-agency"><li className="cursor-pointer hover:text-white transition">Website Development</li></Link>
        <Link to="/bulk-sms-services"><li className="cursor-pointer hover:text-white transition">Bulk SMS</li></Link>
        <Link to="/seo-services"><li className="cursor-pointer hover:text-white transition">Search Engine Optimization</li></Link>
        <Link to="/enterprise-messaging-for-uae-businesses"><li className="cursor-pointer hover:text-white transition">UAE Bundle Package</li></Link>
      </ul>
    </div>

    {/* Why Qmize */}
    <div>
      <h4 className="text-white text-lg font-extrabold mb-2">Why Qmize</h4>
      <ul className="space-y-3 text-sm text-gray-400">
        <Link to="/blog/aisensy-alternatives-india">
          <li className="hover:text-white transition">Qmize vs Aisensy</li>
        </Link>
        <Link to="/blog/interakt-alternatives-whatsapp-marketing">
          <li className="hover:text-white transition">Qmize vs Interakt</li>
        </Link>
        <Link to="/blog/gallabox-alternatives-india">
          <li className="hover:text-white transition">Qmize vs Gallabox</li>
        </Link>
        <Link to="/blog/zoko-alternatives-india">
          <li className="hover:text-white transition">Qmize vs Zoko</li>
        </Link>
        <Link to="/blog/top-wati-alternatives-for-whatsapp-business">
          <li className="hover:text-white transition">Qmize vs Wati</li>
        </Link>
      </ul>
    </div>

    {/* Contact */}
    <div className="flex flex-col h-full">
  <h4 className="text-white text-lg font-extrabold mb-2">Contact</h4>

  <ul className="space-y-3 text-sm text-gray-400">
    <li>support@qmize.com</li>
    <li>+91 90310 11559</li>
    <li>Gaya, Bihar (India)</li>
  </ul>

  {/* Social Icons */}
  <div className="flex items-center gap-4 mt-6">
    
    {/* Facebook */}
    <a
      href="https://www.facebook.com/QmizeOfficial/"
      aria-label="Facebook"
      target='_blank'
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 8h2V6c0-1.1.9-2 2-2h2v3h-1c-.6 0-1 .4-1 1v2h3l-.5 3H13v7h-3v-7H9V8z"
          fill="currentColor"
        />
      </svg>
    </a>

    {/* Twitter */}
    <a
  href="https://www.youtube.com/channel/UCGLu43fIVOPPK2-9_uc9hMg/videos"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="YouTube"
  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition"
>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"
      fill="currentColor"
    />
    <path
      d="M9.75 15.02V8.98L15.5 12l-5.75 3.02z"
      fill="#050B1E"
    />
  </svg>
</a>


    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/qmize"
      aria-label="LinkedIn"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4h4v16H4V4zm6 6h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V20h-4v-5.3c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V20h-4V10z"
          fill="currentColor"
        />
      </svg>
    </a>

  </div>
</div>




  </div>

  
  <div className="flex flex-wrap justify-center gap-6 text-sm">

    <Link
      to="/terms-and-conditions"
      className="relative text-gray-300 hover:text-white transition group"
    >
      Terms & Conditions
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full" />
    </Link>

    <Link
      to="/privacy-policy"
      className="relative text-gray-300 hover:text-white transition group"
    >
      Privacy Policy
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full" />
    </Link>

    <Link
      to="/no-spam-policy"
      className="relative text-gray-300 hover:text-white transition group"
    >
      No Spam Policy
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full" />
    </Link>

    <Link
      to="/refund-policy"
      className="relative text-gray-300 hover:text-white transition group"
    >
      Refund Policy
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full" />
    </Link>

  </div>


  

                        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Qmize (A Venture of DIGINTRA). All rights reserved.
  </div>


  <div className="pointer-events-none absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[100%] text-center">
  <span className="block text-[120px] sm:text-[160px] md:text-[200px] font-extrabold tracking-tight text-white/5">
    Q m i z e
  </span>
</div>

</footer>


   
         {/* Small styles for animations (optional: move to global css) */}
         <style>{`
           @keyframes floatSlow {
             0% { transform: translateY(0px); }
             50% { transform: translateY(-8px); }
             100% { transform: translateY(0px); }
           }
           .animate-floatSlow { animation: floatSlow 6s ease-in-out infinite; }
   
           @keyframes fadeInUp {
             from { opacity: 0; transform: translateY(12px); }
             to { opacity: 1; transform: translateY(0); }
           }
           .animate-fadeInUp { animation: fadeInUp .9s ease forwards; }
         `}</style>
       </div>
   
   </>
  )
}

export default Footer