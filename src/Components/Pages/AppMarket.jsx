import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar1 from "../Common/Navbar1";
import Navbar2 from "../Common/Navbar2";
import Footer from "../Common/Footer";

// images
import app01 from "../../assets/Images/chat-button.png";
import app02 from "../../assets/Images/link-generator.png";
import app03 from "../../assets/Images/app03.webp";
import app04 from "../../assets/Images/app04.webp";
import app05 from "../../assets/Images/app05.png";
import app06 from "../../assets/Images/app06.png";
import app07 from "../../assets/Images/app07.png";
import app08 from "../../assets/Images/app08.webp";
import app09 from "../../assets/Images/app09.png";
import app10 from "../../assets/Images/app10.webp";
import app11 from "../../assets/Images/app11.webp";
import app12 from "../../assets/Images/app12.png";
import app13 from "../../assets/Images/app13.png";
import app14 from "../../assets/Images/app14.png";
import app15 from "../../assets/Images/app15.png";
import app16 from "../../assets/Images/app16.png";
import app17 from "../../assets/Images/app17.png";

/* =======================
   DATA CONFIG
======================= */

const tools = [
  {
    img: app01,
    title: "WhatsApp Chat Button",
    desc: "Add a floating WhatsApp chat button on your website to convert visitors instantly.",
    btn: "Generate Button",
    link: "https://apihub.msg24x7.com/whatsapp-widget-button",
  },
  {
    img: app02,
    title: "WhatsApp Link Generator",
    desc: "Create personalized WhatsApp chat links with predefined messages.",
    btn: "Create Link",
    link: "/whatsapp-link-generator/",
  },
];

const integrations = [
  {
    img: app03,
    title: "API Integration",
    desc: "Trigger WhatsApp notifications directly from your backend or CRM.",
    btn: "View API Docs",
    link: "/whatsapp-api-integration-docs",
  },
  {
    img: app04,
    title: "Pabbly Connect",
    desc: "Automate WhatsApp workflows across 1000+ apps easily.",
    btn: "Connect Now",
    link: "https://api.whatsapp.com/send?phone=919031011559",
  },
  {
    img: app05,
    title: "Razorpay",
    desc: "Send payment links & invoices automatically on WhatsApp.",
    btn: "Chat on WhatsApp",
    link: "https://api.whatsapp.com/send?phone=919031011559",
  },
  {
    img: app06,
    title: "Shopify",
    desc: "Recover abandoned carts & send order updates on WhatsApp.",
    btn: "Explore Integration",
    link: "",
  },
  {
    img: app07,
    title: "WooCommerce",
    desc: "Boost sales with automated WhatsApp notifications.",
    btn: "Explore Integration",
    link: "",
  },
  {
    img: app08,
    title: "OpenCart",
    desc: "Send real-time order & delivery alerts via WhatsApp.",
    btn: "Chat on WhatsApp",
    link: "https://api.whatsapp.com/send?phone=919031011559",
  },
  {
    img: app09,
    title: "Integrately",
    desc: "Connect multiple apps & automate WhatsApp communication.",
    btn: "Chat on WhatsApp",
    link: "https://api.whatsapp.com/send?phone=919031011559",
  },
  {
    img: app10,
    title: "WebEngage",
    desc: "Send WhatsApp campaigns directly from WebEngage.",
    btn: "Chat on WhatsApp",
    link: "https://api.whatsapp.com/send?phone=919031011559",
  },
  {
    img: app11,
    title: "Kylas CRM",
    desc: "Manage WhatsApp chats & broadcasts inside Kylas CRM.",
    btn: "Chat on WhatsApp",
    link: "https://api.whatsapp.com/send?phone=919031011559",
  },
];

const techStack = [
  app12, app13, app14, app15, app16, app17
];

/* =======================
   COMPONENT
======================= */

const AppMarket = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar1 />
      <Navbar2 />

      {/* WRAPPER WITH ANIMATED GREEN BACKGROUND */}
      <div className="relative overflow-hidden pt-[6rem] bg-[#ECFDF5]">

        {/* animated gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#25D366]/30 via-[#DCFCE7] to-[#128C7E]/30"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ backgroundSize: "400% 400%" }}
        />

        <div className="relative z-10">

          {/* SEO */}
          <Helmet>
            <title>WhatsApp Business API Integration | Qmize</title>
            <meta
              name="description"
              content="Powerful WhatsApp Business API integrations, tools & automation by MSG24x7."
            />
            <link
              rel="canonical"
              href="https://msg24x7.com/whatsapp-business-api-integration/"
            />
          </Helmet>

          {/* HERO */}
          <section className="py-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#128C7E]">
              WhatsApp Business API Integrations
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-gray-700">
              Tools & integrations that help you automate conversations and grow faster on WhatsApp.
            </p>
          </section>

          {/* TOOLS */}
          <section className="py-15">
            <h2 className="text-center text-3xl font-bold text-[#128C7E] mb-14">
              Tools that Drive Users to WhatsApp
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">
              {tools.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl text-center"
                >
                  <img src={item.img} className="mx-auto h-48 object-contain" />
                  <h3 className="mt-6 text-xl font-semibold text-[#128C7E]">
                    {item.title}
                  </h3>
                  <p className="text-sm mt-3 text-gray-600">{item.desc}</p>
                  <Link to={item.link}>
                    <button className="mt-6 bg-[#25D366] hover:bg-[#128C7E] transition text-white px-8 py-3 rounded-full font-medium shadow-md">
                      {item.btn}
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* INTEGRATIONS */}
          <section className="">
            <h2 className="text-center text-3xl font-bold text-[#128C7E] mb-14">
              Powerful WhatsApp Integrations
            </h2>

            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
              {integrations.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg text-center"
                >
                  <img src={item.img} className="h-32 w-32 mx-auto object-contain" />
                  <h3 className="mt-4 text-lg font-semibold text-[#128C7E]">
                    {item.title}
                  </h3>
                  <p className="text-sm mt-2 text-gray-600">{item.desc}</p>
                  <Link to={item.link}>
                    <button className="mt-5 bg-[#128C7E] hover:bg-[#25D366] transition text-white px-6 py-2 rounded-full text-sm">
                      {item.btn}
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* TECH STACK */}
          <section className="py-8">
            <h2 className="text-center text-3xl font-bold text-[#128C7E] mb-12">
              Technology Stack
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 px-4">
              {techStack.map((img, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-center hover:scale-105 transition"
                >
                  <img src={img} className="h-20 object-contain" />
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default AppMarket;
