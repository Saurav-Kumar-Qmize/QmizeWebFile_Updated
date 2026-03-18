import React, { useState, useEffect } from "react";
import Navbar1 from "../Common/Navbar1";
import Navbar2 from "../Common/Navbar2";
import Footer from "../Common/Footer";
import { BsWhatsapp } from "react-icons/bs";
import { FaUserAlt, FaWhatsapp } from "react-icons/fa";
import iphone from "../../assets/Images/iphone-mockup.png";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

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

  return (
    <>
      <Navbar1 />
      <Navbar2 />

      <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">

        <Helmet>
          <title>WhatsApp Link Generator || Qmize</title>
          <meta
            name="description"
            content="Create your personalized WhatsApp link with predefined message instantly."
          />
        </Helmet>

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
