
import React, { useState, useEffect } from "react";
import Navbar1 from "../Common/Navbar1";
import Navbar2 from "../Common/Navbar2";
import Footer from "../Common/Footer";
import { BsWhatsapp } from "react-icons/bs";
import WhatsAppQR  from "../../assets/Images/WhatsAppQR.png";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import whyQR from "../../assets/Images/whyQR.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
// import QRCode from "qrcode.react";
import { QRCodeCanvas } from "qrcode.react";

import {
  FaBolt, FaUserAlt,
  FaCommentDots,
  FaUserCheck,
  FaChartLine,
  FaQrcode,
  FaMobileAlt,
  FaPhoneAlt, FaDownload ,
  FaPlus, FaMinus 
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
   const countries = [
        { name: 'India', code: '91' },
          { name: "Afghanistan", code: "93" },
          { name: "Albania", code: "355" },
          { name: "Algeria", code: "213" },
          { name: "American Samoa", code: "1684" },
          { name: "Andorra", code: "376" },
          { name: "Angola", code: "244" },
          { name: "Anguilla", code: "1264" },
          { name: "Antigua and Barbuda", code: "1268" },
          { name: "Argentina", code: "54" },
          { name: "Armenia", code: "374" },
          { name: "Aruba", code: "297" },
          { name: "Ascension Island", code: "247" },
          { name: "Australia", code: "61" },
          { name: "Austria", code: "43" },
          { name: "Azerbaijan", code: "994" },
          { name: "Bahamas", code: "1242" },
          { name: "Bahrain", code: "973" },
          { name: "Bangladesh", code: "880" },
          { name: "Barbados", code: "1246" },
          { name: "Belarus", code: "375" },
          { name: "Belgium", code: "32" },
          { name: "Belize", code: "501" },
          { name: "Benin", code: "229" },
          { name: "Bermuda", code: "1441" },
          { name: "Bhutan", code: "975" },
          { name: "Bolivia", code: "591" },
          { name: "Bonaire, Sint Eustatius and Saba", code: "599" },
          { name: "Bosnia and Herzegovina", code: "387" },
          { name: "Botswana", code: "267" },
          { name: "Brazil", code: "55" },
          { name: "Brunei", code: "673" },
          { name: "Bulgaria", code: "359" },
          { name: "Burkina Faso", code: "226" },
          { name: "Burundi", code: "257" },
          { name: "Cambodia", code: "855" },
          { name: "Cameroon", code: "237" },
          { name: "Canada", code: "1" },
          { name: "Cape Verde", code: "238" },
          { name: "Cayman Islands", code: "1345" },
          { name: "Central African Republic", code: "236" },
          { name: "Chad", code: "235" },
          { name: "Chile", code: "56" },
          { name: "China", code: "86" },
          { name: "Colombia", code: "57" },
          { name: "Comoros", code: "269" },
          { name: "Cook Islands", code: "682" },
          { name: "Costa Rica", code: "506" },
          { name: "Croatia", code: "385" },
          { name: "Cuba", code: "53" },
          { name: "Curacao", code: "599" },
          { name: "Cyprus", code: "357" },
          { name: "Czechia", code: "420" },
          { name: "Democratic Republic of the Congo", code: "243" },
          { name: "Denmark", code: "45" },
          { name: "Djibouti", code: "253" },
          { name: "Dominica", code: "1767" },
          { name: "Dominican Republic", code: "1809" },
          { name: "East Timor", code: "670" },
          { name: "Ecuador", code: "593" },
          { name: "Egypt", code: "20" },
          { name: "El Salvador", code: "503" },
          { name: "Equatorial Guinea", code: "240" },
          { name: "Eritrea", code: "291" },
          { name: "Estonia", code: "372" },
          { name: "Eswatini", code: "268" },
          { name: "Ethiopia", code: "251" },
          { name: "Falkland Islands", code: "500" },
          { name: "Faroe Islands", code: "298" },
          { name: "Fiji", code: "679" },
          { name: "Finland", code: "358" },
          { name: "France", code: "33" },
          { name: "French Guiana", code: "594" },
          { name: "French Polynesia", code: "689" },
          { name: "Gabon", code: "241" },
          { name: "Gambia", code: "220" },
          { name: "Georgia", code: "995" },
          { name: "Germany", code: "49" },
          { name: "Ghana", code: "233" },
          { name: "Gibraltar", code: "350" },
      { name: "Greece", code: "30" },
      { name: "Greenland", code: "299" },
      { name: "Grenada", code: "1473" },
      { name: "Guadeloupe", code: "590" },
      { name: "Guam", code: "1671" },
      { name: "Guatemala", code: "502" },
      { name: "Guinea", code: "224" },
      { name: "Guinea-Bissau", code: "245" },
      { name: "Guyana", code: "592" },
      { name: "Haiti", code: "509" },
      { name: "Honduras", code: "504" },
      { name: "Hong Kong", code: "852" },
      { name: "Hungary", code: "36" },
      { name: "Iceland", code: "354" },
      { name: "Indonesia", code: "62" },
      { name: "Iran", code: "98" },
      { name: "Iraq", code: "964" },
      { name: "Ireland", code: "353" },
      { name: "Israel", code: "972" },
      { name: "Italy", code: "39" },
      { name: "Ivory Coast", code: "225" },
      { name: "Jamaica", code: "1876" },
      { name: "Japan", code: "81" },
      { name: "Jordan", code: "962" },
      { name: "Kazakhstan", code: "7" },
      { name: "Kenya", code: "254" },
      { name: "Kiribati", code: "686" },
      { name: "Kosovo", code: "383" },
      { name: "Kuwait", code: "965" },
      { name: "Kyrgyzstan", code: "996" },
      { name: "Laos", code: "856" },
      { name: "Latvia", code: "371" },
      { name: "Lebanon", code: "961" },
      { name: "Lesotho", code: "266" },
      { name: "Liberia", code: "231" },
      { name: "Libya", code: "218" },
      { name: "Liechtenstein", code: "423" },
      { name: "Lithuania", code: "370" },
      { name: "Luxembourg", code: "352" },
      { name: "Macau", code: "853" },
      { name: "Macedonia", code: "389" },
      { name: "Madagascar", code: "261" },
      { name: "Malawi", code: "265" },
      { name: "Malaysia", code: "60" },
      { name: "Maldives", code: "960" },
      { name: "Mali", code: "223" },
      { name: "Malta", code: "356" },
      { name: "Marshall Islands", code: "692" },
      { name: "Martinique", code: "596" },
      { name: "Mauritania", code: "222" },
      { name: "Mauritius", code: "230" },
      { name: "Mayotte", code: "269" },
      { name: "Mexico", code: "52" },
      { name: "Micronesia", code: "691" },
      { name: "Moldova", code: "373" },
      { name: "Monaco", code: "377" },
      { name: "Mongolia", code: "976" },
      { name: "Montenegro", code: "382" },
      { name: "Montserrat", code: "1664" },
      { name: "Morocco", code: "212" },
      { name: "Mozambique", code: "258" },
      { name: "Myanmar", code: "95" },
      { name: "Namibia", code: "264" },
      { name: "Nauru", code: "674" },
      { name: "Nepal", code: "977" },
      { name: "Netherlands", code: "31" },
      { name: "New Caledonia", code: "687" },
      { name: "New Zealand", code: "64" },
      { name: "Nicaragua", code: "505" },
      { name: "Niger", code: "227" },
      { name: "Nigeria", code: "234" },
      { name: "Northern Mariana Islands", code: "1670" },
      { name: "Norway", code: "47" },
      { name: "Oman", code: "968" },
      { name: "Pakistan", code: "92" },
      { name: "Palau", code: "680" },
      { name: "Palestinian Territory", code: "970" },
      { name: "Panama", code: "507" },
      { name: "Papua New Guinea", code: "675" },
      { name: "Paraguay", code: "595" },
      { name: "Peru", code: "51" },
      { name: "Philippines", code: "63" },
      { name: "Poland", code: "48" },
      { name: "Portugal", code: "351" },
      { name: "Puerto Rico", code: "1787" },
      { name: "Qatar", code: "974" },
      { name: "Republic Of The Congo", code: "242" },
      { name: "Réunion Island", code: "262" },
      { name: "Romania", code: "40" },
      { name: "Russia", code: "7" },
      { name: "Rwanda", code: "250" },
      { name: "Saint Helena", code: "290" },
      { name: "Saint Kitts and Nevis", code: "1869" },
      { name: "Saint Lucia", code: "1758" },
      { name: "Saint Pierre and Miquelon", code: "508" },
      { name: "Saint Vincent and The Grenadines", code: "1784" },
      { name: "Samoa", code: "685" },
      { name: "San Marino", code: "378" },
      { name: "Sao Tome and Principe", code: "239" },
      { name: "Saudi Arabia", code: "966" },
      { name: "Senegal", code: "221" },
      { name: "Serbia", code: "381" },
      { name: "Seychelles", code: "248" },
      { name: "Sierra Leone", code: "232" },
      { name: "Singapore", code: "65" },
      { name: "Sint Maarten (Dutch Part)", code: "1721" },
      { name: "Slovakia", code: "421" },
      { name: "Slovenia", code: "386" },
      { name: "Solomon Islands", code: "677" },
      { name: "Somalia", code: "252" },
      { name: "South Africa", code: "27" },
      { name: "South Korea", code: "82" },
      { name: "South Sudan", code: "211" },
      { name: "Spain", code: "34" },
      { name: "Sri Lanka", code: "94" },
      { name: "Sudan", code: "249" },
      { name: "Suriname", code: "597" },
      { name: "Sweden", code: "46" },
      { name: "Switzerland", code: "41" },
      { name: "Syria", code: "963" },
      { name: "Taiwan", code: "886" },
      { name: "Tajikistan", code: "992" },
      { name: "Tanzania", code: "255" },
      { name: "Thailand", code: "66" },
      { name: "Togo", code: "228" },
      { name: "Tonga", code: "676" },
      { name: "Trinidad and Tobago", code: "1868" },
      { name: "Tunisia", code: "216" },
      { name: "Turkey", code: "90" },
      { name: "Turkmenistan", code: "993" },
      { name: "Turks and Caicos Islands", code: "1649" },
      { name: "Uganda", code: "256" },
      { name: "Ukraine", code: "380" },
      { name: "United Arab Emirates", code: "971" },
      { name: "United Kingdom", code: "44" },
      { name: "United States", code: "1" },
      { name: "Uruguay", code: "598" },
      { name: "Uzbekistan", code: "998" },
      { name: "Vanuatu", code: "678" },
      { name: "Venezuela", code: "58" },
      { name: "Vietnam", code: "84" },
      { name: "Virgin Islands, British", code: "1284" },
      { name: "Virgin Islands, US", code: "1340" },
      { name: "Wallis and Futuna", code: "681" },
      { name: "Yemen", code: "967" },
      { name: "Zambia", code: "260" },
      { name: "Zimbabwe", code: "263" }
        
        // Add more countries as needed
      ];

  
const faqs = [
  {
    q: "What is a WhatsApp QR Code?",
    a: "It is a scannable code that opens a WhatsApp chat with your number.",
  },
  {
    q: "Is the WhatsApp QR Code Generator free?",
    a: "Yes, you can create unlimited QR codes for free with Qmize WhatsApp QR Code Generator.",
  },
  {
    q: "Can I add a custom message?",
    a: "Yes, you can include a pre-filled message.",
  },
  {
    q: "Do users need to save my number?",
    a: "No, they can start chatting instantly by scanning the QR code without saving your contact.",
  },
  {
    q: "Can I use it for business?",
    a: "Yes, it is ideal for marketing, support, and lead generation.",
  },
];

const WhatsAppQRCode = () => {
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
  const generateQR = () => {
   // 1. Validate number
  if (!mobileNumber || mobileNumber.length < 8) {
    alert("Please enter a valid WhatsApp number");
    return;
  }

   // 2. Remove spaces / non-numeric (safety)
  const cleanNumber = mobileNumber.replace(/\D/g, "");

  const fullNumber = `${countryCode}${mobileNumber}`;
  // 4. Encode message safely
  const encodedText = text ? encodeURIComponent(text) : "";
 const link = encodedText
    ? `https://wa.me/${fullNumber}?text=${encodedText}`
    : `https://wa.me/${fullNumber}`;

  setQrValue(link);
  setShowModal(true);
};
    const handleCountryChange = (e) => {
    const country = countries.find(c => c.name === e.target.value);
    setSelectedCountry(country.name);
    setCountryCode(country.code);
  };

    const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // const canvas = document.getElementById("qr-code-canvas");
// const url = canvas.toDataURL("image/png");

// const a = document.createElement("a");
// a.href = url;
// a.download = "whatsapp-qr.png";
// a.click();

  return (
    <>
         <Navbar1 />
          <Navbar2/>
            <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
                  <Helmet>
                          <title>WhatsApp QR Code Generator | Create WhatsApp QR Code Online - Qmize</title>
                          <meta
                            name="description"
                            content="Create WhatsApp QR code instantly with Qmize.
                             Generate WhatsApp QR code with a custom message for your
                              business. Free WhatsApp QR generator for fast customer chats."
                          />
                         
                        </Helmet>

<section className="w-full bg-gradient-to-br from-green-50 via-white to-green-100 py-12 sm:py-12 lg:py-17 px-4">
  
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    
    {/* LEFT SIDE - TEXT */}
    <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
      
      {/* HEADING */}
     <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
  WhatsApp{" "}
  <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
    QR Code Generator
  </span>
</h1>

      {/* DESCRIPTION */}
      <p className="text-sm sm:text-[15px] lg:text-md text-black/80 leading-relaxed max-w-xl">
        Turn offline visitors into instant conversations with the <span className="font-bold">WhatsApp QR Code Generator </span> by Qmize. 
        Create a simple QR code that opens a direct WhatsApp chat with your business in seconds. 
         No typing. No saving numbers.Just fast and smooth communication.
      </p>

      <p className="text-sm sm:text-[15px] text-black/80 leading-relaxed max-w-xl">
        Whether you run a business, manage marketing campaigns, or work as a freelancer, you can <span className="font-bold"> generate 
        WhatsApp QR code </span> links that bring more leads and improve customer engagement.
      </p>

      {/* CTA */}
      <div className="mt-4 flex justify-center lg:justify-start">
        <button onClick={() => {
      document.getElementById("qr-code")?.scrollIntoView({
        behavior: "smooth",
      });
    }} className="bg-green-600 hover:bg-green-700 text-white cursor-pointer px-6 py-3 rounded-xl shadow-md transition duration-300">
          Generate QR Code
        </button>
      </div>
    </div>

    {/* RIGHT SIDE - IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <div className=" transform transition duration-300 hover:scale-105">
        
        <img
          src={WhatsAppQR }   
          alt="WhatsApp QR Code Preview"
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
      What is a{" "}
      <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
        WhatsApp QR Code Generator?
      </span>
    </h2>

    {/* DESCRIPTION */}
    <p className="text-sm sm:text-[15px] lg:text-md text-black/80 leading-relaxed max-w-3xl">
      A {"  "} <span className="font-bold"> {"  "}WhatsApp QR Code Generator </span>  is a tool that converts your WhatsApp number or chat link 
      into a QR code. When someone scans it, a WhatsApp chat opens instantly with your number.
      You can also add a
pre-filled messageto guide the conversation.
    </p>

    <p className="text-sm sm:text-[15px] text-black/80 leading-relaxed max-w-2xl">
      This makes it easier for users to contact you without saving your number, creating a faster 
      and more seamless communication experience.
    </p>

  </div>

</section>

<section className="w-full py-10 sm:py-10  px-4 
bg-gradient-to-br from-green-50 via-white to-green-100">

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE - IMAGE */}
    <div className="flex justify-center lg:justify-start">
      <img
        src={whyQR}  
        alt="QR Code Features"
        className="w-[300px] sm:w-[360px] lg:w-[420px] object-contain drop-shadow-xl"
      />
    </div>

    {/* RIGHT SIDE - CONTENT */}
    <div className="flex flex-col gap-6 text-center lg:text-left">

      {/* HEADING */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
        Why Use{" "}
        <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
          Qmize WhatsApp QR Generator?
        </span>
      </h2>

      <p className="text-sm sm:text-[15px] text-black/80 max-w-xl mx-auto lg:mx-0">
        Qmize offers more than just a QR code. It helps you build faster and smarter communication.
      </p>

      {/* FEATURES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">

        {[
          {
            icon: <FaBolt />,
            title: "Instant connection",
            desc: "Let users start chatting instantly with one scan.",
          },
          {
            icon: <FaCommentDots />,
            title: "Pre-filled messages",
            desc: "Guide users with ready-made conversation starters.",
          },
          {
            icon: <FaUserCheck />,
            title: "No contact saving",
            desc: "Users can message without adding your number.",
          },
          {
            icon: <FaChartLine />,
            title: "Better lead generation",
            desc: "Increase inquiries and conversions easily.",
          },
          {
            icon: <FaQrcode />,
            title: "Brand friendly QR",
            desc: "Create clean and professional QR codes.",
          },
          {
            icon: <FaMobileAlt />,
            title: "Works on all devices",
            desc: "Compatible with Android, iOS & WhatsApp Web.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-white/80 backdrop-blur-md 
            p-4 rounded-xl border border-green-100 shadow-sm
            transition duration-300 hover:shadow-md hover:-translate-y-1 "
          >
            {/* ICON */}
            <div className="text-green-600 text-lg mt-1">
              {item.icon}
            </div>

            {/* TEXT */}
            <div>
              <h4 className="text-sm font-semibold text-black">
                {item.title}
              </h4>
              <p className="text-xs text-black/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>

  </div>
</section>

<section className="w-full py-12 sm:py-12 px-4 
bg-gradient-to-br from-white via-green-50 to-white">

  <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-10">

    {/* HEADING */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
      How to Create{" "}
      <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
        WhatsApp QR Code
      </span>
    </h2>

    {/* STEPS FLOW */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">

      {[
        {
          icon: <FaPhoneAlt />,
          title: "Enter Number",
          desc: "Add your WhatsApp number with country code.",
        },
        {
          icon: <FaCommentDots />,
          title: "Add Message",
          desc: "Include a custom message if needed.",
        },
        {
          icon: <FaQrcode />,
          title: "Generate QR",
          desc: "Click to instantly create your QR code.",
        },
        {
          icon: <FaDownload />,
          title: "Download & Share",
          desc: "Use it anywhere to start conversations.",
        },
      ].map((step, i) => (
        <div
          key={i}
          className="relative flex flex-col items-center text-center gap-4"
        >

          {/* CONNECTOR LINE (DESKTOP ONLY) */}
          {i !== 3 && (
            <div className="hidden lg:block absolute top-7 left-[60%] w-[75%] h-[2px] 
            bg-gradient-to-r from-green-300 to-green-100"></div>
          )}

          {/* STEP ICON */}
          <div className="w-14 h-14 flex items-center justify-center rounded-full 
          bg-gradient-to-r from-green-500 to-emerald-400 text-white text-xl shadow-md">
            {step.icon}
          </div>

          {/* STEP NUMBER */}
          <span className="text-xs font-semibold text-green-600">
            Step {i + 1}
          </span>

          {/* TEXT */}
          <h3 className="text-sm sm:text-base font-semibold text-black">
            {step.title}
          </h3>

          <p className="text-[12px] sm:text-[12px] text-black/70 leading-relaxed max-w-[220px]">
            {step.desc}
          </p>

        </div>
      ))}

    </div>

    {/* FOOT TEXT */}
    <p className="text-sm sm:text-[15px] text-black/80 max-w-2xl">
      Your QR code is now ready to use anywhere from websites to offline marketing materials.
    </p>

  </div>

</section>

    <section id="qr-code">
        {/* HERO */}
        <div className="text-center py-12 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-700">
            WhatsApp QR Code Generator
          </h1>
  
        </div>

        {/* MAIN CARD */}
        <div className="max-w-xl mx-auto px-3 pb-12">
          <div className="grid grid-cols-1  gap-10 bg-white rounded-3xl shadow-xl p-5 sm:p-6">

            {/* FORM */}
            <div>
              <h2 className="text-xl font-semibold text-green-700 mb-4">
                Create WhatsApp Link
              </h2>

              <label className="text-sm font-medium">Country</label>
              <select
                value={selectedCountry}
                onChange={handleCountryChange}
                className="w-full px-4 py-3 rounded-xl bg-green-50 mb-4"
              >
                {countries.map(c => (
                  <option key={c.name}>{c.name}</option>
                ))}
              </select>

              <label className="text-sm font-medium">WhatsApp Number</label>
              <div className="flex gap-2">
                <input
                  disabled
                  value={`+${countryCode}`}
                  className="w-20 px-3 py-3 rounded-xl bg-green-100"
                />
                <input
                  className="flex-1 px-4 py-3 rounded-xl bg-green-50 outline-none"
                  placeholder="9898123412"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>

              <label className="block mt-5 mb-2 text-sm font-medium">
                Welcome Message
              </label>
              <textarea
                rows="3"
                className="w-full px-4 py-3 rounded-xl bg-green-50 outline-none"
                placeholder="Hello! I want to know more."
                value={text}
                onChange={(e) => settext(e.target.value)}
              />
<p className="text-[12px] ml-2">Example: "Hello, I am interested to know about your business."</p>
              <button
                onClick={generateQR}
                className="mt-6 w-full flex justify-center items-center gap-2 py-3 rounded-full cursor-pointer
                bg-green-500 text-white font-semibold shadow-md"
              >
                <BsWhatsapp className="text-2xl" />
                Generate QR Code
              </button>
            </div>

        

          </div>
        </div>
</section>

{showModal && (
  <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center px-4">
    
    <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl relative animate-fadeIn">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-900 text-xl"
      >
        ✕
      </button>

      {/* TITLE */}
      <h2 className="text-xl font-bold text-green-700 text-center mb-3">
        Your WhatsApp Link is Ready!
      </h2>

      {/* DESCRIPTION */}
      <p className="text-xs text-black text-center mb-5">
        Share this QR code or link so users can connect with you instantly.
      </p>

      {/* LINK */}
      <div className="flex items-center justify-center gap-2 mb-5 text-green-600 font-medium break-all text-center">
        <BsWhatsapp />
        <span>{qrValue}</span>
      </div>

      {/* QR CODE */}
      <div  className="flex justify-center mb-6">
        <QRCodeCanvas id="qr-code-canvas"  value={qrValue} size={180} />
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-3 justify-center">
        
        {/* COPY */}
        <button
        onClick={() => {
    navigator.clipboard.writeText(qrValue);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }}
          className="px-4 py-2 rounded-full bg-green-500 text-white text-sm"
        >
        {copied ? "Copied" : "Copy Link"}
        </button>

    
      </div>
    </div>
  </div>
)}
<section className="w-full py-12 sm:py-12 px-4 
bg-gradient-to-br from-green-50 via-white to-green-100">

  <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">

    {/* HEADING */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
      Where Can You Use{" "}
      <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
        WhatsApp QR Codes?
      </span>
    </h2>

    {/* DESCRIPTION */}
    <p className="text-sm sm:text-[15px] text-black/80 max-w-2xl leading-relaxed">
      A  <span className="font-bold">{"   "} WhatsApp QR code  </span> can be used across multiple platforms to grow your business 
      and turn offline visitors into real-time conversations.
    </p>

    {/* ICON GRID */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          icon: <FaBoxOpen />,
          text: "Product packaging",
        },
        {
          icon: <FaStore />,
          text: "Store displays",
        },
        {
          icon: <FaIdCard />,
          text: "Business cards",
        },
        {
          icon: <FaBullhorn />,
          text: "Flyers and banners",
        },
        {
          icon: <FaGlobe />,
          text: "Websites and landing pages",
        },
        {
          icon: <FaShareAlt />,
          text: "Social media posts",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-4 bg-white/80 backdrop-blur-md 
          p-5 rounded-2xl border border-green-100 shadow-sm
          transition duration-300 hover:shadow-md hover:-translate-y-1"
        >
          
          {/* ICON */}
          <div className="w-12 h-12 flex items-center justify-center rounded-full 
          bg-gradient-to-r from-green-500 to-emerald-400 text-white text-lg">
            {item.icon}
          </div>

          {/* TEXT */}
          <p className="text-sm sm:text-base font-medium text-black text-left">
            {item.text}
          </p>

        </div>
      ))}

    </div>

    {/* FOOT TEXT */}
    <p className="text-sm sm:text-[15px] text-black/80 max-w-xl leading-relaxed">
      It helps convert offline users into online conversations quickly and efficiently.
    </p>

  </div>

</section>

<section className="w-full py-12 sm:py-16 px-4 
bg-gradient-to-br from-white via-green-50 to-green-100">

  <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">

    {/* TOP SECTION */}
    <div className="text-center flex flex-col items-center gap-6 max-w-3xl">
      
      {/* HEADING */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
        WhatsApp Business{" "}
        <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
          QR Code Generator for Growth
        </span>
      </h2>

      {/* DESCRIPTION */}
      <p className="text-xs sm:text-[14px] text-black leading-relaxed">
        If you use WhatsApp Business, this tool becomes even more useful.<span className="font-bold"> {"  " }WhatsApp business QR code generator </span> helps you create
        faster, smarter communication channels that improve customer experience and drive growth.
      </p>
    </div>

    {/* USE CASE GRID */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        { icon: <FaHeadset />, text: "Provide quick customer support" },
        { icon: <FaBullseye />, text: "Capture leads from offline marketing" },
        { icon: <FaShoppingCart />, text: "Simplify order inquiries" },
        { icon: <FaClock />, text: "Improve response time" },
      ].map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center gap-3 
          bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-green-100 shadow-sm
          transition duration-300 hover:-translate-y-2 hover:shadow-md"
        >
          {/* ICON */}
          <div className="w-12 h-12 flex items-center justify-center rounded-full 
          bg-gradient-to-r from-green-500 to-emerald-400 text-white text-lg">
            {item.icon}
          </div>

          {/* TEXT */}
          <p className="text-sm font-medium text-black">{item.text}</p>
        </div>
      ))}

    </div>

    {/* DIVIDER */}
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

    {/* BENEFITS SECTION */}
    <div className="w-full flex flex-col items-center gap-8">

      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black text-center">
        Benefits of Using{" "}
        <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
          WhatsApp QR Codes
        </span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 w-full">

        {[
          { icon: <FaBolt />, text: "Faster communication" },
          { icon: <FaUsers />, text: "Higher engagement" },
          { icon: <FaSmile />, text: "Better customer experience" },
          { icon: <FaPlug />, text: "Easy marketing integration" },
          { icon: <FaExchangeAlt />, text: "Smooth offline to online transition" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-2 p-4 
            bg-white rounded-xl border border-green-100 shadow-sm
            transition duration-300 hover:scale-105"
          >
            <div className="text-green-600 text-lg">{item.icon}</div>
            <p className="text-xs sm:text-sm font-medium text-black">
              {item.text}
            </p>
          </div>
        ))}

      </div>

      {/* FOOT TEXT */}
      <p className="text-sm sm:text-[15px] text-black/80 text-center max-w-2xl">
        QR codes help businesses connect with customers in a simple, fast, and effective way.
      </p>

    </div>

  </div>

</section>

<section className="w-full py-16 sm:py-20 px-4 
bg-gradient-to-br from-green-50 via-white to-green-100">

  <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 text-center">

    {/* HEADING */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
      Why Choose{" "}
      <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
        Qmize?
      </span>
    </h2>

    {/* DESCRIPTION */}
    <p className="text-sm sm:text-[14px] text-black/80 leading-relaxed max-w-2xl">
      Qmize is a Meta Official Partner that provides advanced communication solutions 
      including WhatsApp Business API, Bulk SMS, and automation tools.
    </p>

    {/* FEATURES */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-3xl">

      {[
        "Free WhatsApp QR code generation",
        "Easy to use interface",
        "Business focused features",
        "Scalable communication solutions",
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 bg-white/80 backdrop-blur-md 
          p-4 rounded-xl border border-green-100 shadow-sm
          text-left transition duration-300 hover:shadow-md"
        >
          {/* ICON */}
          <FaCheckCircle className="text-green-600 text-lg shrink-0" />

          {/* TEXT */}
          <p className="text-sm font-medium text-black">{item}</p>
        </div>
      ))}

    </div>

    {/* DIVIDER */}
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

    {/* CTA SECTION */}
    <div className="flex flex-col items-center gap-6 max-w-2xl">

      <h3 className="text-xl sm:text-2xl font-semibold text-black">
        Start Generating Your{" "}
        <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
          WhatsApp QR Code
        </span>
      </h3>

      <p className="text-sm sm:text-[14px] text-black/80 leading-relaxed">
        Make it easy for customers to reach you. Turn every scan into a real conversation 
        and start growing your business with WhatsApp.
      </p>

      {/* CTA BUTTON */}
      <button  onClick={() => {
      document.getElementById("qr-code")?.scrollIntoView({
        behavior: "smooth",
      });
    }}  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 
      text-white px-6 py-3 cursor-pointer rounded-xl shadow-md transition duration-300">
        <FaRocket />
        Create QR Code Now
      </button>

    </div>

  </div>

</section>

<section className="w-full py-16 sm:py-20 px-4 
    bg-gradient-to-br from-white via-green-50 to-green-100">

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Questions
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
                  {openIndex === index ? <IoIosArrowDown/> : <IoIosArrowUp />}
                </span>
              </button>

              {/* ANSWER */}
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
 <Footer />
</div>
 
    </>
  )
}

export default WhatsAppQRCode