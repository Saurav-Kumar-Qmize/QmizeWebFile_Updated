import React, { useRef, useState ,useEffect} from "react";

import Fb from "../../assets/Icons/facebook-logo.webp";
import Google from "../../assets/Icons/google-logo.webp";
import Star from "../../assets/Icons/ai-design.webp";
import WhatsApp from "../../assets/Icons/whatsapp-logo.webp";
import Meta from "../../assets/Icons/meta-logo.webp";
import Logo1 from "../../assets/Icons/baxium-brand.webp"
import Logo2 from "../../assets/Icons/cafe-comedy-brand.webp"
import Logo3 from "../../assets/Icons/imity-brand.webp"
import Logo4 from "../../assets/Icons/kbd-brand.webp"
import Logo5 from "../../assets/Icons/litrix-brand.webp"
import Logo6 from "../../assets/Icons/oasis-brand.webp"
import Logo7 from "../../assets/Icons/profit-brand.webp"
import Logo8 from "../../assets/Icons/spg-brand.webp"
import Qmize from "../../assets/Images/qmize-api-platform.webp"
import CreditIcon from "../../assets/Icons/credit.svg?react";
import Google2 from "../../assets/Icons/g2.svg?react";
import download from "../../assets/Icons/download.svg?react";


import {gradients} from "../../Gradient";





const HeroSection = () => {

   const logos = [
    Logo1, Logo2, Logo3, Logo4,
    Logo5, Logo6, Logo7, Logo8,
  ];


    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, setPlay] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [bg, setBg] = useState(gradients[0]);

  useEffect(() => {
    const random = gradients[Math.floor(Math.random() * gradients.length)];
    setBg(random);
  }, []);

  

  return (
    <>
    <section
  className="relative w-full pb-28 pt-16 overflow-hidden transition-colors duration-700"
  style={{
    background: `linear-gradient(to bottom, ${bg.from}, ${bg.via}, ${bg.to})`
  }}
>

      {/* Animated Floating Icons (Left & Right) */}
      <img
        src={Google}
        alt="google"
        className="hidden sm:block absolute left-2 top-[45%] w-6 sm:w-8 opacity-80 animate-float"
      />

      <img
        src={Fb}
        alt="fb logo"
        className="hidden sm:block absolute right-3 top-[40%]   w-6 sm:w-10 opacity-90 animate-floatSlow"
      />
      <img
        src={Meta}
        alt="meta logo"
        className="hidden sm:block absolute left-72 top-[70%] w-6 sm:w-10 opacity-90 animate-floatSlow"
      />
      <img
        src={WhatsApp}
        alt="wahtsapp logo"
        className="hidden sm:block absolute right-72 top-[70%] w-6 sm:w-10 opacity-90 animate-floatSlow"
      />

      {/* MAIN CONTAINER */}
      <div className="max-w-5xl mx-auto text-center px-4">

        {/* TOP BADGE */}
        <div className="flex justify-center mb-6 animate-fadeIn">
          <span className="px-4 py-1 border border-[#CDEEC7] rounded-full bg-white shadow text-[11px] sm:text-[13px] text-[#1b1b1b] font-medium flex items-center gap-2">
            <img src={Star} alt="spark" className="w-3 sm:w-4" />
            #1 WHATSAPP MARKETING COMPANY
          </span>
        </div>

        {/* MAIN HEADING */}
        <h1 className="relative text-[30px] sm:text-[40px] md:text-[58px] font-extrabold 
leading-[1.15] text-[#0f172a] tracking-tight overflow-hidden">

  <span className="block animate-aiReveal">
    Re-Imagine the{" "}
    <span className="relative inline-block px-3 mx-1 ai-highlight">
      <span className="ai-bg" />
      <span className="ai-glow" />
      <span className="relative z-10">Future of Marketing</span>
      <span className="ai-scan" />
    </span>
  </span>

  <span className="block mt-3 animate-aiReveal delay-200">
    With{" "}
    <span className="relative inline-block px-3 mx-1 ai-highlight">
      <span className="ai-bg" />
      <span className="ai-glow" />
      <span className="relative z-10">Qmize</span>
      <span className="ai-scan" />
    </span>
  </span>

</h1>


        {/* UNDER ICONS */}
        <div className="flex justify-center gap-10 mt-6 text-3xl sm:text-4xl animate-fadeInSlow">
          <i className="fa-brands fa-whatsapp text-[#1cd260]"></i>
          <i className="fa-brands fa-meta text-[#316FF6]"></i>
        </div>

        {/* SUB-TEXT */}
        <p className="text-[#6b6b6b] mt-4 text-[15px] sm:text-[18px] max-w-lg mx-auto animate-fadeIn">
          Empowering Brands Through WhatsApp Marketing and Analysis.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-8 animate-slideUp">
        <a
  href="https://apihub.msg24x7.com/register"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <button className="bg-[#20D235] cursor-pointer text-white px-6 sm:px-7 py-2.5 sm:py-1.5 rounded-full shadow font-semibold hover:scale-[1.05] transition-all">
    Get Started
  </button>
</a>


           <a
  href="https://calendly.com/qmize/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
          <button className="cursor-pointer border border-green-700 px-6 sm:px-7 py-2.5 sm:py-1.5 rounded-full shadow font-semibold text-gray-800 hover:bg-gray-100 transition-all">
            Book Demo Updated
          </button></a>
          
        </div>
        {/* TRUST BADGES */}
<div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-700">

  {/* No Credit Card */}
  <div className="flex items-center gap-2">
    
    <img
    src={CreditIcon} className="w-4 h-4 text-sky-600 "
    />
    <span className="text-lg font-semibold text-gray-900">No Credit Card Required</span>
  </div>

  {/* Divider */}
  <span className="hidden sm:block text-gray-600">|</span>

  {/* G2 Rating */}
  <div className="flex items-center gap-2">
    <img
    src={Google2} className="w-5 h-5 text-sky-600 "
    />
    <span className="text-lg font-semibold text-gray-900">Rated 4.3 on G2</span>
  </div>

  {/* Divider */}
  <span className="hidden sm:block text-gray-600">|</span>

  {/* Blue Tick */}
  <div className="flex items-center gap-2">
   <img
    src={download} className="w-5 h-5 text-sky-600 "
    />
    <span className="text-lg font-semibold text-gray-900">Blue Tick Verification</span>
  </div>

</div>

      </div>

      {/* THIN GREEN CURVED BORDER */}
      <div className="absolute bottom-0 left-0 right-0">
  <svg
    className="w-full"
    viewBox="0 0 1400 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 20 C 420 60 1020 -10 1440 30 L1440 60 L0 60 Z"
      fill="url(#g1)"
    />
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1440" y2="0">
        <stop offset="0%" stopColor="#6DFF57" />
        <stop offset="100%" stopColor="#19D63A" />
      </linearGradient>
    </defs>
  </svg>
</div>

    </section>










    <section className="w-full bg-white pt-10 pb-5">

  {/* Heading */}
  <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800 mb-8">
    Join <span className="text-emerald-600 font-bold">10,000+</span> customers around the world who trust{" "}
    <span className="text-emerald-700 font-bold">Qmize</span>
  </h2>

  {/* Green Background Line */}
  <div className="w-full py-4 overflow-hidden">
    
    {/* MARQUEE CONTAINER */}
    <div className="flex items-center gap-24 animate-marquee whitespace-nowrap">

      {logos.concat(logos).map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="best client of qmize"
          className="w-20 sm:w-24 md:w-32 md:h-10 object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all"
        />
      ))}

    </div>
  </div>

</section>









      <section className="w-full py-16 bg-white">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-emerald-800 mb-8 px-4">
        Experience How Qmize Transforms Marketing With Smart Automation 🚀
      </h2>

      {/* Video Wrapper */}
      <div className="max-w-4xl mx-auto px-4">
  <div className="relative rounded-xl overflow-hidden shadow-lg">

    {!play ? (
      /* THUMBNAIL */
      <div className="relative">
        <img
          src={Qmize} // 👈 your thumbnail image
          alt="Whatsapp Business API Platform"
          className="w-full h-[260px] sm:h-[320px] md:h-[550px] object-cover rounded-xl"
        />

        {/* DARK OVERLAY */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}

        {/* PLAY BUTTON */}
        <button
          onClick={() => setPlay(true)}
          className="
            absolute inset-0 m-auto
            w-16 h-16 md:w-20 md:h-20
            bg-white/80 backdrop-blur-md
            rounded-full
            flex items-center justify-center
            shadow-xl
            transition-all duration-300
            hover:scale-110 hover:bg-white
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-emerald-700"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    ) : (
      /* YOUTUBE IFRAME */
      <iframe
        className="w-full h-[260px] sm:h-[320px] md:h-[550px] rounded-xl"
        src="https://www.youtube.com/embed/p4D-SAh5IGU?autoplay=1&mute=1&rel=0&modestbranding=1"
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    )}
  </div>

  {/* CAPTION */}
  <p className="text-center text-gray-600 text-sm md:text-base mt-4">
    Watch how businesses like yours achieve faster, smarter, automated marketing wins.
  </p>
</div>

    </section>


    </>
  );
};

export default HeroSection;


