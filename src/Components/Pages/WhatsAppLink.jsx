import React, { useState, useEffect } from "react";
import Navbar1 from "../Common/Navbar1";
import Navbar2 from "../Common/Navbar2";
import Footer from "../Common/Footer";
import { BsWhatsapp } from "react-icons/bs";
import { FaUserAlt, FaWhatsapp } from "react-icons/fa";
import iphone from "../../assets/Images/iphone-mockup.png";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Linkgene from "../../assets/Images/Linkgene.jpeg";
import Walink from "../../assets/Images/Walink.jpeg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineShutterSpeed } from "react-icons/md";
import { FaLink, FaShieldAlt, FaBolt , FaUserCheck, FaChartLine, FaRegCommentDots } from "react-icons/fa";
import { 
  FaGlobe, 
  FaInstagram, 
  FaBullhorn, 
  FaEnvelope, 
  FaQrcode 
} from "react-icons/fa";
const WhatsAppLink = () => {

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

  const [selectedCountry, setSelectedCountry] = useState("India");
  const [countryCode, setCountryCode] = useState("91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [text, settext] = useState("");
  const [link, setLink] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCountryChange = (e) => {
    const country = countries.find(c => c.name === e.target.value);
    setSelectedCountry(country.name);
    setCountryCode(country.code);
  };

  const generateLink = () => {
    if (!mobileNumber) {
      alert("Please enter mobile number");
      return;
    }

    const fullNumber = countryCode + mobileNumber;
    const url = `https://wa.me/${fullNumber}?text=${encodeURIComponent(text)}`;
    setLink(url);
    setIsVisible(true);
  };
   const faqs = [
    {
      q: "What is a WhatsApp link generator?",
      a: "It is a tool that creates a clickable URL that opens a WhatsApp chat directly."
    },
    {
      q: "Is the WhatsApp link generator free?",
      a: "Yes, you can create unlimited WhatsApp links for free."
    },
    {
      q: "Can I add a custom message?",
      a: "Yes, you can add a pre-filled message to guide user conversations."
    },
    {
      q: "Do users need to save my number?",
      a: "No, users can start chatting directly without saving your number."
    },
    {
      q: "Can I use it for business?",
      a: "Absolutely. It’s ideal for sales, support, and marketing campaigns."
    }
  ];
const features = [
  {
    text: "Fast & free link creation",
    icon: <FaLink />,
  },
  {
    text: "Secure and reliable tool",
    icon: <FaShieldAlt />,
  },
  {
    text: "Seamless marketing integration",
    icon: <FaBullhorn />,
  },
  {
    text: "Scalable for growing businesses",
    icon: <FaChartLine />,
  },
];
const feature = [
  {
    text: "Fast & free link creation",
    icon: <FaLink />,
  },
  {
    text: "Secure and reliable tool",
    icon: <FaShieldAlt />,
  },
  {
    text: "Seamless marketing integration",
    icon: <FaBullhorn />,
  },
  {
    text: "Scalable for growing businesses",
    icon: <FaChartLine />,
  },
];
const items = [
  {
    text: "Website “Chat with Us” buttons",
    icon: <FaGlobe />,
  },
  {
    text: "Instagram, Facebook, LinkedIn bios",
    icon: <FaInstagram />,
  },
  {
    text: "Google Ads & Meta Ads",
    icon: <FaBullhorn />,
  },
  {
    text: "Email signatures",
    icon: <FaEnvelope />,
  },
  {
    text: "Product packaging (QR codes)",
    icon: <FaQrcode />,
  },
];

  return (
    <>
      <Navbar1 />
      <Navbar2 />

      <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">

        <Helmet>
          <title>WhatsApp Link Generator – Create WhatsApp Link Instantly | Qmize</title>
          <meta
            name="description"
            content="Create a WhatsApp link instantly with
             Qmize WhatsApp Link Generator. Generate click-to-chat WA links,
              add custom messages, and boost customer engagement."
          />
          <meta
          name="keywords"
          content="WhatsApp link generator, create WhatsApp 
          link, create WA link, WhatsApp link create, 
          click to chat WhatsApp, wa.me link generator"
          />
        </Helmet>
<section className="w-full bg-gradient-to-r from-green-100 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-16">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
    
    {/* LEFT TEXT CONTENT */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
    <span className="text-green-600">WhatsApp</span> Link Generator
      </h1>

      <p className=" text-left mt-4 text-base sm:text-md text-black leading-relaxed max-w-xl mx-auto lg:mx-0">
        Turn conversations into conversions with Qmize’s powerful WhatsApp link generator. 
        Create a direct WhatsApp chat link in seconds and let your customers message you 
        instantly without saving your number.
      </p>

      {/* CTA Button */}
      <div className="mt-6 flex justify-center lg:justify-start">
        <button  onClick={() => {
      document.getElementById("link-generator")?.scrollIntoView({
        behavior: "smooth",
      });
    }}
     className="bg-green-600 hover:bg-green-700 flex items-center gap-2 text-white px-6 py-3 rounded-xl shadow-md transition duration-300 cursor-pointer">
         
         <BsWhatsapp className="text-2xl" /> Generate Link
        </button>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src={Linkgene} // replace with your image path
        alt="WhatsApp Link Generator"
        className="w-full max-w-md sm:max-w-lg object-contain"
      />
    </div>

  </div>
</section>

<section className="w-full bg-gradient-to-r from-white via-green-50 to-green-100 py-14 px-4 sm:px-6 lg:px-16">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
    
    {/* LEFT IMAGE */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src={Walink} // replace with your image
        alt="What is WhatsApp Link Generator"
        className="w-full max-w-md sm:max-w-lg object-contain"
      />
    </div>

    {/* RIGHT TEXT CONTENT */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      
      {/* HEADING */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight relative inline-block">
        What is a <span className="text-green-600">WhatsApp Link Generator?</span>
        <span className="absolute left-0 -bottom-2 w-14 h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></span>
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-5 text-base sm:text-md text-black leading-relaxed">
        A WhatsApp link generator is a tool that creates a clickable URL that opens a WhatsApp chat directly with your business. 
        Clicking the link instantly redirects users to WhatsApp, pre-filling a message that simplifies communication.
      </p>

      <p className="mt-3 text-base sm:text-md text-black leading-relaxed">
        No need to ask customers to save your number and type a message; a single click on the WhatsApp link starts the conversation.
      </p>

      <p className="mt-3 text-base sm:text-md text-black leading-relaxed">
        This makes it easier to start conversations and improves customer experience.
      </p>

    </div>

  </div>
</section>

<section className="w-full bg-gradient-to-r from-green-50 via-white to-green-100 py-12 px-4 sm:px-6 lg:px-16">
  <div className="max-w-6xl mx-auto text-center">
    
    {/* HEADING */}
    <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight relative inline-block">
      How to Create WhatsApp Link in 
      <span className="text-green-600"> 3 Simple Steps</span>
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-16 h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></span>
    </h2>

    {/* SUBTEXT */}
    <p className="mt-4 text-black text-md max-w-2xl mx-auto">
      Creating a WhatsApp link using Qmize is completely free. Just follow these simple steps and generate your link in seconds.
    </p>

    {/* STEPS */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-40">

  {/* STEP 1 */}
  <div className="bg-white rounded-2xl p-6 text-left border border-green-100 
  shadow-sm transform transition-all duration-300 
  hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
    
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
      1
    </div>

    <h3 className="mt-4 text-lg font-semibold text-black">
      Enter your WhatsApp number
    </h3>

    <p className="mt-2 text-black text-sm leading-relaxed">
      Add your country code and active WhatsApp number.
    </p>
  </div>

  {/* STEP 2 */}
  <div className="bg-white rounded-2xl p-6 text-left border border-green-100 
  shadow-sm transform transition-all duration-300 
  hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
    
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
      2
    </div>

    <h3 className="mt-4 text-lg font-semibold text-black">
      Add a custom message (optional)
    </h3>

    <p className="mt-2 text-black text-sm leading-relaxed">
      Pre-fill messages like “Hi, I want to know more about your services.”
    </p>
  </div>

  {/* STEP 3 */}
  <div className="bg-white rounded-2xl p-6 text-left border border-green-100 
  shadow-sm transform transition-all duration-300 
  hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
    
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
      3
    </div>

    <h3 className="mt-4 text-lg font-semibold text-black">
      Generate your WhatsApp link
    </h3>

    <p className="mt-2 text-black text-sm leading-relaxed">
      Copy and share your link anywhere instantly.
    </p>
  </div>

</div>

    {/* FOOT TEXT */}
    <p className="mt-8 text-black text-md ">
      That’s it! Your WhatsApp link is ready in just a few seconds.
    </p>

  </div>
</section>


    <section id="link-generator">
        {/* HERO */}
        <div className="text-center py-14 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-700">
            WhatsApp Link Generator
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-green-700/80">
            Create and share your WhatsApp chat link with a custom message.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl p-6 sm:p-10">

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

              <button
                onClick={generateLink}
                className="mt-6 w-full flex justify-center items-center gap-2 py-3 rounded-full 
                bg-green-500 text-white font-semibold shadow-md"
              >
                <BsWhatsapp className="text-2xl" />
                Generate Link
              </button>
            </div>

            {/* PHONE MOCKUP */}
          <motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{ repeat: Infinity, duration: 3.5 }}
  className="flex justify-center"
>
  <div className="relative w-[260px] sm:w-[300px]">

    {/* PHONE IMAGE */}
    <img
      src={iphone}
      alt="WhatsApp phone mockup"
      className="w-full select-none"
    />

    {/* SCREEN (INSIDE PHONE ONLY) */}
    <div className="absolute h-[545px] inset-[7%] -mt-6 rounded-[2rem] overflow-hidden bg-[#ECE5DD] flex flex-col ">

      {/* HEADER */}
      <div className="h-12 bg-[#128C7E] flex items-center px-3 gap-2 text-white">
        <FaUserAlt className="text-sm" />
        <span className="text-sm font-medium truncate">
          +{countryCode} {mobileNumber || ""}
        </span>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 px-3 py-2 space-y-2 text-sm overflow-hidden">
        <div className="bg-white px-3 py-2 rounded-xl w-fit shadow">
          Hi 👋
        </div>

        <div className="bg-[#DCF8C6] px-3 py-2 rounded-xl w-fit ml-auto shadow">
          {text || "Hello!"}
        </div>
      </div>

      {/* INPUT BAR */}
      <div className="h-12 bg-white flex items-center px-1 gap-2 ">
        <input
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="Type a message"
          className="flex-1 px-[5px] py-1.5 rounded-full bg-[#F0F2F5] outline-none text-sm"
        />

        <button
          onClick={() => {
            if (!mobileNumber) return;
            const url = `https://wa.me/${countryCode}${mobileNumber}?text=${encodeURIComponent(text)}`;
            window.open(url, "_blank");
          }}
          className="bg-[#25D366] text-white px-2 py-1.5 rounded-full text-sm font-medium"
        >
          Send
        </button>
      </div>

    </div>
  </div>
</motion.div>

          </div>
        </div>
</section>

<section className="w-full bg-gradient-to-r from-white via-green-50 to-green-100 py-14 px-4 sm:px-6 lg:px-16">
  <div className="max-w-6xl mx-auto text-center">

    {/* HEADING */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight relative inline-block">
      Why Use the 
      <span className="text-green-600"> Qmize WhatsApp Link Generator?</span>
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-16 h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></span>
    </h2>

    {/* GRID */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {[
    {
      title: "Instant Customer Connection",
      desc: "Let users message you with one click, no friction, no delays.",
      icon: <FaWhatsapp />,
    },
    {
      title: "Boost Conversions",
      desc: "Click-to-chat WhatsApp links drive more engagement and faster responses.",
      icon: <FaBolt />,
    },
    {
      title: "No Contact Saving Required",
      desc: "Customers can start chatting without saving your number.",
      icon: <FaUserCheck />,
    },
    {
      title: "Pre-Filled Messages",
      desc: "Guide users with ready-made messages to start conversations quickly.",
      icon: <FaRegCommentDots />,
    },
    {
      title: "Works Everywhere",
      desc: "Use on websites, social media, ads, email campaigns, and QR codes.",
      icon: <FaGlobe />,
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm 
      h-full flex  items-center flex-col gap-4
      transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
    >

      {/* ICON */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full 
      bg-green-100 text-green-600 text-xl">
        {item.icon}
      </div>

      {/* TEXT */}
      <div>
        <h3 className="text-lg font-semibold text-black">
          {item.title}
        </h3>
        <p className="mt-2 text-black text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>

    </div>
  ))}

</div>
  </div>
</section>

<section className="w-full bg-gradient-to-r from-green-50 via-white to-green-100 py-14 px-4 sm:px-6 lg:px-16">
  <div className="max-w-6xl mx-auto text-center">

    {/* HEADING */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight relative inline-block">
      Powerful 
      <span className="text-green-600"> Use Cases</span>
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-16 h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></span>
    </h2>

    {/* SUBTEXT */}
    <p className="mt-4 text-black text-base sm:text-lg max-w-2xl mx-auto">
      WhatsApp links are widely used across industries to start real-time conversations and improve engagement.
    </p>

    {/* GRID */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

      {/* CARD 1 */}
      <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm 
      h-full flex flex-col
      transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-lg font-semibold text-black">
          🛒 E-commerce & D2C
        </h3>
        <p className="mt-2 text-black text-sm leading-relaxed">
          Convert visitors into buyers directly from product pages.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm 
      h-full flex flex-col
      transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-lg font-semibold text-black">
          🎓 Education & Coaching
        </h3>
        <p className="mt-2 text-black text-sm leading-relaxed">
          Capture leads from courses and webinars instantly.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm 
      h-full flex flex-col
      transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-lg font-semibold text-black">
          🏥 Healthcare & Services
        </h3>
        <p className="mt-2 text-black text-sm leading-relaxed">
          Enable appointment booking via WhatsApp.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm 
      h-full flex flex-col
      transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-lg font-semibold text-black">
          💼 B2B & SaaS
        </h3>
        <p className="mt-2 text-black text-sm leading-relaxed">
          Generate leads and demo requests effortlessly.
        </p>
      </div>

    </div>

  </div>
</section>

<section className="w-full bg-gradient-to-r from-white via-green-50 to-green-100 py-16 px-4 sm:px-6 lg:px-16">
  <div className="max-w-6xl mx-auto">

    {/* ================= BENEFITS ================= */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black relative inline-block">
        Benefits of Creating 
        <span className="text-green-600"> WhatsApp Links</span>
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-16 h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></span>
      </h2>
    </div>

 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {features.map((item, i) => (
    <div
      key={i}
      className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm text-center
      h-full flex flex-col items-center justify-center
      transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* ICON */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl">
        {item.icon}
      </div>

      {/* TEXT */}
      <p className="mt-4 text-black text-sm sm:text-base font-medium">
        {item.text}
      </p>
    </div>
  ))}
</div>

    <p className="mt-6 text-center text-black text-sm sm:text-base max-w-2xl mx-auto">
      A simple link removes friction and helps customers reach you faster than traditional contact forms.
    </p>


    {/* ================= WHERE TO USE ================= */}
    <div className="mt-16 text-center">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
        Where to Use Your WhatsApp Link
      </h2>
    </div>

   <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map((item, i) => (
    <div
      key={i}
      className="bg-white rounded-xl px-4 py-4 border border-green-100 shadow-sm 
      flex items-center gap-3
      transform transition-all duration-300 hover:scale-[1.03] hover:shadow-md"
    >
      
      {/* ICON */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-lg">
        {item.icon}
      </div>

      {/* TEXT */}
      <p className="text-black text-sm sm:text-base">
        {item.text}
      </p>
    </div>
  ))}
</div>

    <p className="mt-6 text-center text-black text-sm sm:text-base max-w-2xl mx-auto">
      This feature allows customers to reach you wherever they discover your business.
    </p>


    {/* ================= WHY QMIZE ================= */}
    <div className="mt-16 text-center">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
        Why Choose <span className="text-green-600">Qmize?</span>
      </h2>
    </div>

    <p className="mt-4 text-center text-black text-sm sm:text-base max-w-3xl mx-auto">
      Qmize is a Meta Official Partner offering advanced communication solutions, including WhatsApp Business API, automation, and bulk messaging.
    </p>

 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {feature.map((item, i) => (
    <div
      key={i}
      className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm text-center
      h-full flex flex-col items-center justify-center
      transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
    >
      
      {/* ICON */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full 
      bg-green-100 text-green-600 text-2xl">
        {item.icon}
      </div>

      {/* TEXT */}
      <p className="mt-4 text-black text-sm sm:text-base font-medium leading-snug">
        {item.text}
      </p>

    </div>
  ))}
</div>


    {/* ================= CTA ================= */}
    <div className="mt-16 text-center">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
        Start Creating Your WhatsApp Link Now
      </h2>

      <p className="mt-4 text-black text-sm sm:text-base max-w-2xl mx-auto">
        Stop losing leads due to complicated contact processes. Use Qmize to create a WhatsApp link instantly and turn every click into a conversation.
      </p>

      <button   onClick={() => {
      document.getElementById("link-generator")?.scrollIntoView({
        behavior: "smooth",
      });
    }}
    className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition duration-300 cursor-pointer">
       
        <span className="flex items-center gap-2"><BsWhatsapp className="text-2xl" /> Generate Your Link </span>
      </button>
    </div>

  </div>
</section>

  <section className="w-full bg-gradient-to-r from-green-50 via-white to-green-100 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black relative inline-block">
          Frequently Asked 
          <span className="text-green-600"> Questions</span>
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-16 h-1 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></span>
        </h2>

        {/* FAQ LIST */}
        <div className="mt-10 space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-green-100 shadow-sm p-5 cursor-pointer
              transition-all duration-300 hover:shadow-md"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* QUESTION */}
              <div className="flex justify-between items-center">
                <h3 className="text-black font-semibold text-base sm:text-lg">
                  {faq.q}
                </h3>
                <span className="text-green-600 text-xl font-bold">
                  {openIndex === index ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown/>}
                </span>
              </div>

              {/* ANSWER */}
              {openIndex === index && (
                <p className="mt-3 text-black text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>


        {/* MODAL */}
        {isVisible && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setIsVisible(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 w-[90%] md:w-[380px]"
            >
              <h3 className="text-lg font-semibold text-green-600 text-center">
                Your WhatsApp Link
              </h3>

              <FaWhatsapp className="text-5xl text-green-500 mx-auto my-4" />

              <div className="bg-green-50 rounded-xl p-3 text-sm break-all">
                {link}
              </div>

              <div className="flex gap-2 mt-5">
                <button
                  onClick={() => navigator.clipboard.writeText(link)}
                  className="flex-1 py-2 rounded-full bg-green-500 text-white"
                >
                  Copy
                </button>

                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-full bg-green-600 text-white text-center"
                >
                  Open
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default WhatsAppLink;
