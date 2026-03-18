import { useState,useEffect } from "react"
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {Link} from "react-router-dom";
import group from "../../assets/Images/svgdesign1.png"
import group2 from "../../assets/Images/svgdesign2.png"
import group3 from "../../assets/Images/svgdesign3.png" 
import Logo1 from "../../assets/Icons/baxium-brand.webp"
import Logo2 from "../../assets/Icons/cafe-comedy-brand.webp"
import Logo3 from "../../assets/Icons/imity-brand.webp"
import Logo4 from "../../assets/Icons/kbd-brand.webp"
import Logo5 from "../../assets/Icons/litrix-brand.webp"
import Logo6 from "../../assets/Icons/oasis-brand.webp"
import Logo7 from "../../assets/Icons/profit-brand.webp"
import Logo8 from "../../assets/Icons/spg-brand.webp"
import map from "../../assets/Images/world_map.png";
import { Plus, Minus } from "lucide-react";
import Safder from '../../assets/Images/manager_safder.jpeg'
import Shujat from "../../assets/Images/bdm-shujat.webp"
import Anam from "../../assets/Images/ceo_anam.webp"
import Nadeem from "../../assets/Images/nadeem_testimonial.webp";
import Nishad from "../../assets/Images/nisaad_testimonial.jpg";
import Soumyadeep from "../../assets/Images/soumyadeep-testimonial.jpg";
import Bashrat from "../../assets/Images/bashrat_testimonial.webp";
import Guneshkaran from "../../assets/Images/guneshkaran_testimonial.jpg";
import Sharad from "../../assets/Images/sharad-testimonial.webp";
import logo from "../../assets/Icons/logo.webp"
import { Globe, Rocket, Heart, ShieldCheck, Users } from "lucide-react";
import websiteImage from "../../assets/Images/website-sample-image.png";




const AboutHeroSec = () => {

   const sectionRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const counters = sectionEl.querySelectorAll(".counter");
    let started = false;

    const animateCounters = () => {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const suffix = counter.getAttribute("data-suffix") || "+";
        let current = 0;
        const duration = 1200; // 1.2s
        const startTime = performance.now();

        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          current = Math.floor(target * progress);
          counter.textContent = current.toLocaleString() + suffix;

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            counter.textContent = target.toLocaleString() + suffix;
          }
        };

        requestAnimationFrame(step);
      });
    };

    // Scroll pe trigger karne ke liye IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
      value: 200,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/9292/9292923.png",
      value: 10000,
      label: "Active Customers",
      suffix: "+",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
      value: 50,
      label: "Team Members",
      suffix: "+",
    },
  ];


   
  const { scrollYProgress } = useScroll({ target: sectionRef });

  const glowX = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const glowY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const timeline = [
    { year: "2018", text: "We started with one vision: build brands digitally with bold thinking." },
    { year: "2020", text: "Our first workspace opened under Digintra Inc." },
    { year: "2022", text: "We launched MSG24x7 - WhatsApp Automation Platform." },
    { year: "2024", text: "Our community crossed 50+ designers, engineers & strategists." },
    { year: "2025", text: "Now we scale brands fearlessly and build digital empires." },
  ];

const valueIcons = [Globe, Rocket, Heart, ShieldCheck, Users];

  const logos = [
      Logo1, Logo2, Logo3, Logo4,
      Logo5, Logo6, Logo7, Logo8,
    ];


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

   



   const [openIndex, setOpenIndex] = useState(null);
  
    const toggle = (i) => {
      setOpenIndex(openIndex === i ? null : i);
    };


    const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};



const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

  
  return (
    <>



    
    
   <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#04140e] via-[#0a3b2a] to-[#020807] py-15 md:py-32">

  {/* BACKGROUND SQUARE GRID */}
  <div className="absolute inset-0 opacity-[0.12]">
    <svg className="w-full h-full">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#10B981" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  {/* GLOW LIGHT */}
  <div className="absolute w-[500px] h-[500px] bg-emerald-400/20 blur-[150px] rounded-full top-[-200px] left-[-150px]" />
  <div className="absolute w-[400px] h-[400px] bg-emerald-300/20 blur-[150px] rounded-full bottom-[-150px] right-[-150px]" />

  {/* DECOR SVGs */}
  <img
    src={group}
    alt="Decor"
    className="absolute top-6 left-0 w-24 md:w-40 opacity-80 pointer-events-none"
  />

  <img
    src={group2}
    alt="Decor"
    className="absolute top-10 right-6 w-20 md:w-32 opacity-80 pointer-events-none"
  />

  <img
    src={group3}
    alt="Decor"
    className="absolute bottom-4 right-2 w-24 md:w-36 opacity-80 pointer-events-none"
  />

  {/* CONTENT */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

    {/* BADGE */}
    <div className="inline-block mb-6 px-6 py-1.5 rounded-full text-md md:text-sm font-semibold 
      bg-emerald-500/15 text-emerald-400 border border-emerald-400/30 shadow-lg backdrop-blur">
      ABOUT US
    </div>

    {/* HEADING */}
    <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
      <span className="bg-gradient-to-r from-white via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
        Helping brands rise above the noise in a digital-first world.
      </span>
    </h2>

    {/* SUBHEADING */}
    <p className="mt-6 text-white/70 text-xs sm:text-base md:text-lg max-w-2xl mx-auto">
  We partner with brands to shape bold, future-ready digital identities that connect, convert, and continue to grow.

    </p>

    {/* CTA */}
    <div className="mt-10 flex justify-center gap-4 flex-wrap">

      <Link to="/whatsapp-business-api"><button className="cursor-pointer px-3 py-1 md:py-1 rounded-full font-semibold text-black
        bg-gradient-to-r from-emerald-400 to-green-300
        hover:scale-105 transition-all duration-300 shadow-lg">
        Learn More →
      </button></Link>

      <Link to="/contact-us"><button className="cursor-pointer px-3 py-1 md:py-1 rounded-full font-semibold text-white/80 border border-white/30
        hover:bg-white/10 transition-all duration-300 backdrop-blur">
        Contact Us
      </button></Link>

    </div>

  </div>

</section>






<section className="relative w-full bg-gradient-to-br from-[#f8fff7] via-[#e8fdf1] to-[#ffffff] py-24 px-6 md:px-16 overflow-hidden">

  {/* Soft Glow Background */}
  <div className="absolute w-[500px] h-[500px] bg-emerald-300/20 blur-[160px] rounded-full top-[-200px] left-[-200px]"></div>
  <div className="absolute w-[400px] h-[400px] bg-green-300/20 blur-[140px] rounded-full bottom-[-150px] right-[-150px]"></div>

  <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <div>

      {/* Badge */}
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold 
        bg-emerald-500/10 text-emerald-600 border border-emerald-300">
        ABOUT THE COMPANY
      </div>

      {/* Heading */}
      <h2 className="text-md md:text-xl xl:text-4xl font-extrabold leading-tight text-gray-900">
       Who We Are & 
        <span className=" text-emerald-500"> How We Do</span>
      </h2>

      {/* Description */}
      <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
        Qmize, previously known as MSG24x7.com, is a proud venture of DIGINTRA Inc., The #1 <span className="font-semibold">WhatsApp Business API provider in India</span> and globally, which also focuses on allowing businesses with trusted, scalable, and innovative IT and SaaS solutions. With years of experience in messaging solutions such as <span className="font-semibold">WhatsApp Business API</span>  and <span className="font-semibold">Bulk SMS messaging</span>, Qmize has evolved into a one-stop platform for providing complete digital marketing solutions, website designing and development, paid marketing services (Google Ads and Meta Ads), SEO, advanced messaging solutions, and performance-driven marketing tools. Consequently, we also provide performance marketing solutions.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
       We specialize in delivering secure, affordable, and cutting-edge services, WhatsApp Business API, Bulk SMS, IVR, Toll-Free Numbers, Voice Broadcasting, and more. We help businesses communicate seamlessly.
      </p>
      <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
       At Qmize, we provide powerful business tools that help them connect, engage, and grow. No matter if you are a budding start-up or a well-established enterprise, our platform is tailored to cater to a wide range of needs; we prioritize reliability, speed, and top-notch service quality to ensure you get the best experience.
      </p>

      {/* CTA */}
      {/* <div className="mt-8 flex gap-4 flex-wrap">
        <button className="px-6 py-3 rounded-full font-semibold text-white 
          bg-gradient-to-r from-emerald-500 to-green-400
          hover:scale-105 transition-all shadow-lg">
          Learn More →
        </button>

        <button className="px-6 py-3 rounded-full font-semibold text-emerald-700 
          border border-emerald-400 hover:bg-emerald-50 transition">
          Contact Us
        </button>
      </div> */}

    </div>

    {/* RIGHT IMAGES GRID */}
    <div>
      <img
      src={websiteImage}
      alt="services of qmize company"
      />
    </div>
   




  </div>
</section>







 <section className="relative w-full py-16 md:py-16 px-6 bg-gradient-to-b from-white via-emerald-50/40 to-white overflow-hidden">

      {/* BACKGROUND PATTERNS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] 
          bg-[radial-gradient(#000_1px,transparent_1px)] 
          [background-size:24px_24px]" />

        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-emerald-300/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-green-200/30 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            What We Offer at{" "}
            <span className="text-emerald-600">Qmize</span>
          </h2>

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            A unified growth ecosystem combining intelligent messaging,
            automation, digital experiences, and performance-driven marketing -
            all built to scale with your business.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* MESSAGING */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-emerald-700 tracking-wide">
              Messaging Services
            </h3>

            <ul className="space-y-5">
              {[
                ["WhatsApp Business API", "A tool for businesses of all sizes to communicate with customers at scale, offering features like automated messaging, integration with other systems like CRMs, ERPs, Websites, Apps, third party Applications etc. and multi-user access."],
                ["WhatsApp Chatbots", "Enhance customer service with smart WhatsApp Chatbots that efficiently address inquiries, assist users, and are available around the clock (so provide 24x7 support to your customers)."],
                ["Collaborative Live Chat", "Allow your teams to connect with customers on various devices, enabling synchronized, real-time communication, transfer agent, live monitoring and many more."],
                ["High-Scale Broadcasting", "Reach to unlimited customers in just one broadcast. Amplify the effectiveness of your messaging campaigns by bulk broadcasting to unlimited customers."],
                ["Smart Automation", "Streamline essential business alerts, like OTPs, order confirmations, delivery updates, and reminders for abandoned carts, through robust integrations customized to fit your workflow. These all through one WhatsApp Business API Platform."],
                ["Bulk SMS Messaging", "Delivers instant, high-reach text campaigns to large audiences, enabling businesses to share updates, send OTPs, awareness, promotions, and alerts quickly with high open and engagement rates. Do all these through one BULK SMS platform."]
              ].map(([title, desc], i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className="flex items-start gap-4 group"
                >
                  <span className="
                    mt-2 w-2 h-2 rounded-full bg-emerald-500
                    group-hover:scale-125 transition
                  " />
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      {title}
                    </span>
                    {" "}: {desc}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* DIGITAL MARKETING */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-emerald-700 tracking-wide">
              Digital Marketing Services
            </h3>

            <ul className="space-y-5">
              {[
                ["Website Design & Development", "Build responsive, visually engaging, SEO based optimized and user-friendly websites that enhance brand presence, improve customer experience, and support business growth across all devices."],
                ["Custom Web Applications", "Build fully customized web apps that are scalable and secure to fit your needs. Simplify your operations, improve the user experience, and effectively achieve your specific business objectives."],
                ["Search Engine Optimization (SEO)", "Optimize websites to rank higher on search engines like Google, Bing, Yahoo and on many more other search engines. increasing organic traffic, improving visibility, and driving qualified leads through strategic keyword and content tactics. We help you rank your website and its web pages on the first page of search engines."],
                ["Press Releases (PR)", "Creates impactful announcements that share newsworthy updates, strengthen brand authority, and secure media coverage to boost credibility and public engagement."],
                ["Google Ads", "Targeted ad campaigns across Google’s network to reach high-intent audiences, boost website traffic, and maximize conversions with data-driven optimization."],
                ["Meta Ads", "Promotes brands on Facebook and Instagram using precise audience targeting, engaging creatives, and optimized strategies to drive visibility, engagement, and sales."]
              ].map(([title, desc], i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className="flex items-start gap-4 group"
                >
                  <span className="
                    mt-2 w-2 h-2 rounded-full bg-emerald-500
                    group-hover:scale-125 transition
                  " />
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      {title}
                    </span>
                    {" "}: {desc}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>










 <section
      ref={sectionRef}
      className="relative py-[70px] overflow-hidden bg-gradient-to-br 
      from-[#041f18] via-[#0d4f3b] to-[#000] text-white"
    >

      {/* ANIMATED GLOW BACKGROUND */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute w-[500px] h-[500px] bg-emerald-400/25 blur-[200px] rounded-full left-1/2 top-1/4"
      />

      <motion.div
        style={{ x: glowY, y: glowX }}
        className="absolute w-[300px] h-[300px] bg-lime-400/20 blur-[200px] rounded-full right-1/4 bottom-0"
      />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="gridBig" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridBig)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-white/10 border border-white/20 text-xs tracking-wider">
            OUR TIMELINE
          </span>

         <h2 className="mt-6 text-4xl md:text-5xl font-extrabold">
  Our Journey
</h2>


          <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm">
            A story written in actions, power and bold digital growth.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-1/2 top-0 w-[3px] h-full bg-emerald-400/30 
            -translate-x-1/2 origin-top hidden md:block"
          />

          <div className="space-y-10">

            {timeline.map((item, i) => {

              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`relative grid md:grid-cols-2 gap-10 items-center`}
                >

                  {/* CARD */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`p-6 rounded-2xl bg-white/5 backdrop-blur-xl 
                      border border-white/10 shadow-[0_0_40px_rgba(16,185,129,0.25)]
                      ${isLeft ? "md:pr-20" : "md:pl-20 md:order-2"}`}
                  >
                    <h3 className="text-2xl font-bold text-emerald-400">{item.year}</h3>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>

                  {/* CENTER DOT */}
                  <motion.div
                    className={`hidden md:flex justify-center ${isLeft ? "" : "md:order-1"}`}
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                  >
                    <div className="w-6 h-6 bg-emerald-400 ring-4 ring-black rounded-full shadow-xl"></div>
                  </motion.div>

                </motion.div>
              )

            })}

          </div>
        </div>
      </div>
    </section>






    <section className="relative w-full py-24 px-6 overflow-hidden 
bg-gradient-to-br from-[#f8fff7] via-[#ffffff] to-[#ecfff6]">

  {/* BACKGROUND DECOR */}
  <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-emerald-100/50 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-lime-100/40 blur-[100px] rounded-full"></div>

  {/* SOFT GRID */}
  <div className="absolute inset-0 opacity-[0.04]">
    <svg className="w-full h-full">
      <defs>
        <pattern id="whyGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#10b981" strokeWidth="0.25"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#whyGrid)" />
    </svg>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-6">

      <span className="inline-block px-5 py-1.5 text-xs font-semibold rounded-full 
      bg-emerald-100 text-emerald-700 tracking-wide">
        WHY CHOOSE QMIZE
      </span>

      <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
        Performance That  
        <span className="text-emerald-600"> Truly Delivers</span>
      </h2>

      <p className="text-gray-700 leading-relaxed max-w-lg text-base">
        Qmize, a flagship venture by <b>DIGINTRA Inc.</b>, is your trusted growth 
        technology partner. We engineer high-performance websites and intelligent 
        automation systems that turn visitors into revenue.
      </p>

      {/* TRUST INDICATORS */}
      <div className="mt-6 flex flex-wrap gap-4">
        {["ISO Secured", "Official API Partner", "Data Protected", "24/7 Support"].map((t, i) => (
          <span 
            key={i}
            className="px-4 py-1 bg-white border border-emerald-200 rounded-full 
            text-xs font-semibold text-emerald-700 shadow-sm">
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* RIGHT CONTENT – FEATURE ROADMAP */}
    <div className="space-y-6">

      {[
        ["10,000+ Businesses", "Scaling with Qmize globally"],
        ["99% Delivery Ratio", "Engineered intelligence routing"],
        ["Instant Support", "Dedicated team, zero delays"],
        ["Automated Growth", "Crack marketing with AI insights"],
      ].map((item, i) => (
        <div
          key={i}
          className="
          group relative pl-6
          border-l-4 border-emerald-400 
          hover:border-emerald-600 transition-all
        "
        >

          {/* DOT */}
          <span className="
            absolute -left-2 top-3 w-4 h-4 
            bg-emerald-400 rounded-full 
            ring-4 ring-white
            shadow-md
            group-hover:scale-125 transition
          "></span>

          {/* CONTENT */}
          <div className="
            ml-4 p-5 rounded-xl 
            bg-white/90 backdrop-blur-lg 
            border border-emerald-200
            hover:shadow-md transition-all
          ">
            <p className="font-bold text-gray-900 text-base">{item[0]}</p>
            <p className="text-sm text-gray-600 mt-1">{item[1]}</p>
          </div>

        </div>
      ))}

    </div>

  </div>
</section>





    <section className="relative w-full py-20 px-6 overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-700 text-white">

  {/* Decorative SVG Circles Left */}
  <svg
    className="absolute top-10 left-4 w-40 opacity-20"
    viewBox="0 0 200 200"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <circle cx="100" cy="100" r="80" />
    <circle cx="100" cy="100" r="60" />
    <circle cx="100" cy="100" r="40" />
  </svg>

  {/* Decorative Blobs Right */}
  <div className="absolute right-0 top-0 w-60 h-60 bg-green-300/20 rounded-full blur-3xl"></div>
  <div className="absolute right-20 bottom-10 w-40 h-40 bg-green-500/20 rounded-full blur-2xl"></div>

  {/* Content */}
  <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeUp">

    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
      Welcome To The New Era Of Business<br className="hidden md:block" />
      Messaging
    </h2>

    <p className="mt-5 text-sm md:text-base text-white/90 leading-relaxed px-2">
      We help businesses implement bulk messaging services aimed to increase revenues,
      improve brand strategy, optimize business performance and develop impactful
      public services through mobile media.  
      Our messaging platform is capable of delivering bulk messages to virtually any
      CDMA/GSM mobile handset across the globe.
    </p>
  </div>

  {/* Floating WhatsApp Icon */}
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="absolute bottom-6 left-6 w-12 md:w-14 opacity-80 animate-iconFloat"
  />

  {/* Floating Message Icon */}
  <img
    src="https://cdn-icons-png.flaticon.com/512/893/893257.png"
    alt="message"
    className="absolute top-16 right-6 w-12 md:w-16 opacity-80 animate-iconFloatSlow"
  />

  {/* Animations */}
  <style>{`
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp { animation: fadeUp 1s ease-out forwards; }

    @keyframes iconFloat {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
    .animate-iconFloat { animation: iconFloat 4s ease-in-out infinite; }

    @keyframes iconFloatSlow {
      0% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
      100% { transform: translateY(0); }
    }
    .animate-iconFloatSlow { animation: iconFloatSlow 6s ease-in-out infinite; }
  `}</style>

</section>




 <section className="relative w-full py-24 px-6 bg-gradient-to-b from-white via-emerald-50 to-white overflow-hidden">

  {/* Soft Light Orbs */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-300/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400/20 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="relative z-10 text-center mb-20">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      Our Working Process
    </h2>
    <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
      A seamless, well-structured approach that transforms ideas into powerful digital solutions.
    </p>
  </div>

  {/* PROCESS GRID */}
  <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

    {/* STEP CARD */}
    {[
      {
        step: "01",
        title: "Research & Discovery",
        desc: "Understanding your business goals, users and competitors deeply.",
        icon: "https://cdn-icons-png.flaticon.com/512/610/610120.png"
      },
      {
        step: "02",
        title: "Strategy & Planning",
        desc: "Clear roadmap, architecture and scalable tech planning.",
        icon: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png"
      },
      {
        step: "03",
        title: "Execution & Delivery",
        desc: "Pixel-perfect development with performance optimization.",
        icon: "https://cdn-icons-png.flaticon.com/512/4712/4712033.png"
      }
    ].map((item, i) => (
      
      <div
        key={i}
        className="
          group relative rounded-3xl bg-white/80 backdrop-blur-xl
          border border-gray-200 shadow-lg p-8
          hover:shadow-[0_15px_35px_rgba(16,185,129,0.25)]
          hover:border-emerald-400 transition-all duration-500
          hover:-translate-y-3
        "
      >

        {/* Gradient Ring */}
        <div className="
          absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
          bg-gradient-to-br from-emerald-400/20 to-green-300/10
          transition duration-500 pointer-events-none
        "></div>

        {/* Step Badge */}
        <div className="
          absolute -top-5 left-6 w-12 h-12 rounded-full 
          bg-gradient-to-tr from-emerald-500 to-green-400
          flex items-center justify-center text-white font-bold shadow-xl
        ">
          {item.step}
        </div>

        {/* ICON */}
        <div className="relative z-10 flex justify-center mb-6">
          <div className="
            w-16 h-16 rounded-2xl 
            bg-emerald-100 flex items-center justify-center
            group-hover:scale-110 transition duration-500
          ">
            <img src={item.icon} className="w-9" alt={item.title} />
          </div>
        </div>

        {/* CONTENT */}
        <h3 className="relative z-10 text-lg font-semibold text-gray-800 text-center">
          {item.title}
        </h3>

        <p className="relative z-10 text-gray-600 mt-2 text-sm text-center leading-relaxed">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</section>





 <section
      ref={sectionRef}
      className="relative w-full py-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/20 blur-3xl rounded-full" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="gridStats"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0H0V40"
                fill="none"
                stroke="black"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridStats)" />
        </svg>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
          Qmize at a Glance
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
          Proven results, strong numbers, and a growing impact across
          industries.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="
              group relative rounded-3xl bg-white/70 backdrop-blur-xl
              border border-emerald-200 p-10 text-center
              hover:shadow-[0_15px_40px_rgba(16,185,129,0.25)]
              hover:border-emerald-400 hover:-translate-y-2
              transition-all duration-500
            "
          >
            {/* Glow */}
            <div
              className="
              absolute inset-0 opacity-0 group-hover:opacity-100
              bg-gradient-to-br from-emerald-300/20 to-green-200/10
              rounded-3xl transition-all duration-500 pointer-events-none
            "
            />

            {/* Icon */}
            <div className="relative z-10 flex justify-center mb-5">
              <div
                className="
                w-16 h-16 rounded-2xl flex items-center justify-center
                bg-emerald-100 group-hover:bg-emerald-200
                transition duration-500
              "
              >
                <img
                  src={stat.icon}
                  className="w-8 group-hover:scale-110 transition-all duration-500"
                />
              </div>
            </div>

            {/* Counter Number */}
            <h3
              className="relative z-10 text-4xl font-extrabold text-emerald-700 counter"
              data-target={stat.value}
              data-suffix={stat.suffix}
            >
              0+
            </h3>

            <p className="relative z-10 text-gray-700 mt-1 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>






<section className="w-full py-20 px-6 bg-white relative overflow-hidden">

  {/* Background Floating SVG Decorations */}
  <svg className="absolute top-10 left-10 w-24 opacity-15" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="40" stroke="#22c55e" strokeWidth="3" />
  </svg>

  <svg className="absolute bottom-10 right-10 w-20 opacity-10" viewBox="0 0 100 100" fill="none">
    <rect x="10" y="10" width="80" height="80" stroke="#22c55e" strokeWidth="3" rx="12" />
  </svg>

  {/* Heading */}
  <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-14">
    Meet Our Team
  </h2>

  {/* Team Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

    {/* TEAM CARD COMPONENT */}
    {[
      {
        name: "Md. Anamullah",
        role: "CEO & Founder",
        img: Anam,
      },
      {
        name: "Md. Safder Ali Khan",
        role: "Manager",
        img: Safder,
      },
      {
        name: "Shujat Ali",
        role: "B.D.M",
        img: Shujat,
      }
    ].map((member, i) => (
      <div
        key={i}
        className="group bg-white rounded-3xl p-4 shadow-md border border-gray-200 
                   hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer"
      >

        {/* Image Wrapper */}
        <div className="w-full h-56 bg-gray-200 rounded-2xl overflow-hidden">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
          />
        </div>

        {/* Info Box */}
        <div className="mt-4 p-4 rounded-2xl bg-emerald-100 text-center shadow-inner 
                        backdrop-blur-lg hover:bg-emerald-200 transition-all">
          <h3 className="text-lg font-semibold text-emerald-900">{member.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{member.role}</p>
        </div>

        {/* Floating SVG Icon */}
        <svg
          className="absolute -top-2 right-4 w-8 opacity-0 group-hover:opacity-100 
                     transition-all duration-500"
          viewBox="0 0 24 24"
          fill="#22c55e"
        >
          <path d="M12 2L15 8H9L12 2Z" />
          <circle cx="12" cy="14" r="8" fill="none" stroke="#22c55e" strokeWidth="2" />
        </svg>

      </div>
    ))}

  </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-card {
      animation: fadeUp 1s ease-out forwards;
    }
  `}</style>

</section>







<section className="relative w-full overflow-hidden bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 py-4">

  {/* Floating Glow */}
  <div className="absolute -top-10 left-0 w-full h-20 bg-yellow-300/30 blur-2xl"></div>

  {/* Marquee Wrapper */}
  <div className="overflow-hidden w-full">

    <div className="marquee-track flex whitespace-nowrap">

      {[ 
        "Focused On Result",
        "Creative Ideas",
        "Strategic Results",
        "Customer First Approach",
        "Smart Automation",
      ].concat([
        "Focused On Result",
        "Creative Ideas",
        "Strategic Results",
        "Customer First Approach",
        "Smart Automation",
      ]).map((text, index) => (
        <span
          key={index}
          className="mx-8 text-sm sm:text-base md:text-lg font-semibold tracking-wide text-yellow-900 flex items-center gap-2"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#eab308">
            <path d="M12 2L15 9L22 9L17 14L19 21L12 17L5 21L7 14L2 9L9 9Z"/>
          </svg>
          {text}
        </span>
      ))}

    </div>
  </div>

  {/* Styles */}
  <style>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .marquee-track {
      width: max-content;
      animation: marquee 18s linear infinite;
    }

    .marquee-track:hover {
      animation-play-state: paused;
    }

    @media (max-width: 640px) {
      .marquee-track { animation-duration: 28s; }
      span { font-size: 12px; }
    }
  `}</style>

</section>




<section className="relative w-full bg-gradient-to-b from-white to-emerald-50 py-20 px-6 overflow-hidden">

  {/* Decorative Light Blurs */}
  <div className="absolute top-16 left-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 right-14 w-40 h-40 bg-green-300/30 rounded-full blur-3xl"></div>

  {/* Title */}
  <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
    Our Core Values
  </h2>

  <p className="text-center text-gray-600 text-sm md:text-base mt-4 max-w-2xl mx-auto">
    At our core, we are driven by principles that define how we think, work, and grow.  
    These values shape our culture and fuel every decision we make.
  </p>

  {/* Values Grid */}
 <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

  {[
    "Making a Difference",
    "Innovation First",
    "Customer Centric",
    "Integrity Driven",
    "Team Empowerment"
  ].map((value, i) => {
    const Icon = valueIcons[i];

    return (
      <div
        key={i}
        className="
          group rounded-2xl border border-emerald-200 bg-white shadow-md p-5
          hover:shadow-xl hover:border-emerald-400 hover:-translate-y-2
          transition-all duration-300 text-center
        "
      >

        {/* ICON AREA */}
        <div className="w-full h-32 rounded-xl bg-emerald-100 
                        flex items-center justify-center
                        group-hover:scale-110 transition-all duration-300">

          <Icon size={48} className="text-emerald-600" />

        </div>

        {/* ICON OVERLAY BADGE */}
        <div className="w-12 h-12 mx-auto bg-white shadow-md rounded-full flex items-center justify-center 
                        -mt-6 text-emerald-600">
          <Icon size={22} />
        </div>

        {/* TITLE */}
        <h3 className="mt-4 text-sm font-bold text-emerald-900">
          {value}
        </h3>

      </div>
    );
  })}

</div>

</section>










    <section className="relative w-full py-20 px-6 bg-gradient-to-b from-white to-emerald-50 overflow-hidden">

  {/* Decorative Glow */}
  <div className="absolute top-20 left-12 w-48 h-48 bg-emerald-200/40 rounded-full blur-3xl"></div>
  <div className="absolute bottom-16 right-12 w-48 h-48 bg-green-300/40 rounded-full blur-3xl"></div>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="animate-fadeIn">

      <span className="inline-block mb-4 px-3 py-1 bg-emerald-200 text-emerald-900 text-xs font-semibold rounded-full shadow">
        Our People
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 leading-tight">
        Trusted Users across the World
      </h2>

      <p className="mt-4 text-gray-700 max-w-md leading-relaxed text-sm md:text-base">
        Chosen globally by businesses and creators who trust us to deliver 
        secure, scalable, and impactful messaging experiences.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center animate-slideUp">

      <div className="relative group">

        <div className="absolute inset-0 bg-emerald-300/20 blur-3xl rounded-full"></div>

        <img
          src={map}
          alt="World Map"
          className="relative w-full max-w-md object-cover"
        />

        {/* Location Dots */}
        {[
          { top: "30%", left: "40%" },
          { top: "50%", left: "60%" },
          { top: "65%", left: "45%" }
        ].map((p, i) => (
          <span
            key={i}
            className="absolute w-3 h-3 bg-emerald-500 rounded-full animate-ping"
            style={{ top: p.top, left: p.left }}
          ></span>
        ))}

      </div>
    </div>

  </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeIn {
      from {opacity:0; transform: translateY(20px);}
      to {opacity:1; transform: translateY(0);}
    }
    .animate-fadeIn {
      animation: fadeIn 0.8s ease-in forwards;
    }

    @keyframes slideUp {
      from {opacity:0; transform: translateY(30px);}
      to {opacity:1; transform: translateY(0);}
    }
    .animate-slideUp {
      animation: slideUp 1s ease-in forwards;
    }
  `}</style>

</section>







 <section className="relative w-full py-20 md:py-28 px-6 overflow-hidden bg-gradient-to-b from-white via-emerald-50/50 to-white">

      {/* BACKGROUND ART */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 right-[-200px] w-[500px] h-[500px] bg-emerald-300/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-green-200/20 blur-[160px] rounded-full" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:28px_28px]" />
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold tracking-wide
            bg-emerald-100 text-emerald-700">
              THE QMIZE ADVANTAGE
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Why <span className="text-emerald-600">Qmize</span> Stands Out
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
           At Qmize, we go beyond just offering services; we help you build meaningful customer experiences. Join us today and unlock the full potential of digital communication and marketing technology.
          </p>

          <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-lg">
            Backed by trusted infrastructure and a forward-thinking team,
            we empower businesses to grow faster, smarter, and stronger.
          </p>
        </motion.div>

        {/* RIGHT – VALUE POINTS */}
        <div className="relative">

         

          <div className="space-y-8">
            {[
              "A reliable partner, proudly supported by DIGINTRA Inc.",
              "Flexible and secure cloud solutions.",
              "Affordable options, tailored for businesses of all sizes.",
              "Committed support and continuous innovation.",
            ].map((text, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative flex items-start gap-5 group"
              >
                {/* pulse dot */}
                <span className="
                  relative z-10 mt-1 w-3 h-3 rounded-full bg-emerald-500
                  ring-4 ring-emerald-200
                  group-hover:ring-emerald-300 transition
                " />

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* closing message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl"
          >
            Join Qmize today and unlock the full potential of
            <span className="font-semibold text-emerald-700">
              {" "}digital communication & marketing technology.
            </span>
          </motion.p>
        </div>

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
          alt="client-logo"
          className="w-20 sm:w-24 md:w-32 md:h-10 object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all"
        />
      ))}

    </div>
  </div>

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
            <path d="M0 40 C 360 120 1080 -40 1440 40 L1440 120 L0 120 Z" fill="#061025" />
          </svg>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#061025] text-gray-200 py-16">
             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
               {/* Brand */}
               <div>
                <div className="flex items-center gap-3 mb-4">
       
       <img
         src={logo}   // ✅ replace with correct path
         alt="Qmize Logo"
         className="w-14 h-14 object-contain"
       />
     
       <div>
         <div className="font-semibold text-white">Qmize Pvt. Ltd</div>
         <div className="text-sm text-gray-400">Automate Smarter . Grow Faster</div>
       </div>
     </div>
     
                 <p className="text-sm text-gray-400 max-w-xs">
                   We are a results-driven digital marketing company helping businesses grow online.
                 </p>
               </div>
     
               {/* Links columns */}
               <div>
                 <h4 className="font-semibold mb-3">Company</h4>
                 <ul className="space-y-2 text-sm text-gray-400">
                   <li>About</li>
                   <li>Careers</li>
                   <li>Press Release</li>
                 </ul>
               </div>
     
               <div>
                 <h4 className="font-semibold mb-3">Products</h4>
                 <ul className="space-y-2 text-sm text-gray-400">
                   <li>WhatsApp Business API</li>
                   <li>Bulk SMS</li>
                   <li>Website Development</li>
                 </ul>
               </div>
     
               <div>
                 <h4 className="font-semibold mb-3">Contact</h4>
                 <ul className="space-y-2 text-sm text-gray-400">
                   <li>support@qmize.com</li>
                   <li>+91 90310 11559</li>
                   <li>Privacy Policy</li>
                 </ul>
     
                 {/* social icons */}
                 <div className="flex items-center gap-3 mt-4">
                   {/* Facebook */}
                   <a aria-label="facebook" href="#" className="w-9 h-9 flex items-center justify-center bg-white/6 rounded-full hover:bg-white/10 transition">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 8h2V6c0-1 1-2 2-2h2v3h-1c-1 0-1 1-1 1v2h3l-1 3h-2v6h-3v-6H9v-3z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                   </a>
                   {/* Twitter */}
                   <a aria-label="twitter" href="#" className="w-9 h-9 flex items-center justify-center bg-white/6 rounded-full hover:bg-white/10 transition">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M23 3a10.9 10.9 0 0 1-3 1 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="white" strokeWidth="0.8"/></svg>
                   </a>
                   {/* Linkedin */}
                   <a aria-label="linkedin" href="#" className="w-9 h-9 flex items-center justify-center bg-white/6 rounded-full hover:bg-white/10 transition">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h4v16H4zM8 8h7v2h1v10h-1v-6h-7v6H8z" stroke="white" strokeWidth="0.9"/></svg>
                   </a>
                 </div>
               </div>
             </div>
     
             <div className="mt-12 border-t border-white/6 pt-8 text-center text-sm text-gray-500">
               © {new Date().getFullYear()} Qmize. All rights reserved.
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

export default AboutHeroSec