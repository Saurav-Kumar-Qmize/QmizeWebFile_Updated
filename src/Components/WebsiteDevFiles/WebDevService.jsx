import { motion } from "framer-motion";
import { useState } from "react";
import WebdevImage from '../../assets/Images/website-sample-image.png'
import Badami from '../../assets/Images/badami_website_sample.jpeg'
import Ahuniversal from '../../assets/Images/ahuniversal_website_sample.webp'
import Urbanheights from '../../assets/Images/urbanheight-website-sample.webp'
import Khadagdhari from '../../assets/Images/khadagdhari_website_sample.webp'
import Process from '../../assets/Images/process-flow-webdev.webp';
import { Plus, Minus } from "lucide-react";


import StackIcon from "tech-stack-icons";

const WebDevService = () => {


  const plans = [
  {
    name: "Starter",
    price: "₹15,999",
    desc: "Perfect for small businesses",
    color: "from-orange-300 to-orange-400",
    popular: false,
    features: ["Basic Website", "Mobile Friendly", "SEO Setup", "Support"],
  },
  {
    name: "Professional",
    price: "₹25,999",
    desc: "Best for serious growth",
    color: "from-sky-300 to-sky-400",
    popular: true,
    features: ["Custom Design", "Speed Optimized", "SEO Advanced", "CRM"],
  },
  {
    name: "Enterprise",
    price: "₹45,999",
    desc: "For powerful brands",
    color: "from-emerald-300 to-emerald-400",
    popular: false,
    features: ["Full Stack App", "Automation", "API", "Priority Support"],
  },
];


const planFeatures = [
  {
    feature: "No. of Pages",
    starter: "Up to 5",
    pro: "Up to 15",
    enterprise: "Up to 25",
  },
  {
    feature: "Eye Catching Website",
    starter: "✔",
    pro: "✔",
    enterprise: "✔",
  },
  {
    feature: "Responsive Design",
    starter: "✔",
    pro: "✔",
    enterprise: "✔ (Mobile First)",
  },
  {
    feature: "Custom Layout Design",
    starter: "Basic",
    pro: "Advanced",
    enterprise: "Premium",
  },
  {
    feature: "Integrated Contact Forms",
    starter: "1 Form",
    pro: "3 Forms",
    enterprise: "Unlimited",
  },
  {
    feature: "SEO Optimization",
    starter: "Basic",
    pro: "Standard",
    enterprise: "Advanced",
  },
  {
    feature: "Speed Boost",
    starter: "Normal",
    pro: "Fast",
    enterprise: "Ultra Fast",
  },
  {
    feature: "CRM Integration",
    starter: "✖",
    pro: "Optional",
    enterprise: "✔",
  },
  {
    feature: "Automation",
    starter: "✖",
    pro: "Limited",
    enterprise: "Full",
  },
  {
    feature: "Custom UI",
    starter: "✖",
    pro: "✔",
    enterprise: "✔",
  },
  {
    feature: "API Support",
    starter: "✖",
    pro: "Optional",
    enterprise: "✔",
  },
  {
    feature: "Payment Terms",
    starter: "75% advance and 25% before Delivery",
    pro:"75% advance and 25% before Delivery",
    enterprise: "75% advance and 25% before Delivery"
  }
  ,{
    feature: "Delivery",
    starter : "In 5 Days",
    pro: "In 15 Days",
    enterprise: "In 15 Days"
  },
  {
    feature: "WhatsApp API Button Integration",
    starter: "✔",
    pro: "✔",
    enterprise: "✔",
  }

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

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

     const stacks = [
    "react",
    "nextjs2",
    "nodejs",
    "js",
    "typescript",
    "tailwindcss",
    "html5",
    "css3",
    "mongodb",
    "mysql",
    "aws",
    "firebase",
    "docker",
    "github",
    "figma",
    "wordpress",
    "php",
    "laravel"
  ];




  const projects = [
    {
      title: "Construction Company",
      image: Badami,
      link: "https://www.badamideveloper.com"
    },
    {
      title: "Real Estate Website",
      image: Urbanheights,
      link: "https://www.m.msg24x7.com/mar2026"
    },
    {
      title: "Immigration Website",
      image: Ahuniversal,
      link: "https://www.ahuniversal.com"
    },
    {
      title: "Social Development Website",
      image:  Khadagdhari ,
      link: "https://www.khadagdhari.com"
    }
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

    




  return (
    <>
   
     <section className="relative w-full min-h-[60vh] py-16 overflow-hidden text-white 
bg-gradient-to-br from-[#06080f] via-[#0b1220] to-[#020409] flex items-center ">

  {/* Sand Texture Overlay */}
  <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')]"></div>

  {/* Gradient Glow Orbs */}
  <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-emerald-400/20 rounded-full blur-[140px] animate-pulse"></div>
  <div className="absolute bottom-[-200px] right-[-180px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[160px] animate-spinSlow"></div>

  {/* Floating Tech Icons */}
  <div className="hidden md:block absolute inset-0 pointer-events-none z-0">

    <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
      className="absolute top-[18%] left-[10%] w-10 animate-floatSlow opacity-70 " />

    <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
      className="absolute top-[65%] left-[15%] w-8 animate-floatMid opacity-60" />

    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
      className="absolute top-[25%] right-[15%] w-10 animate-floatFast opacity-70" />

    <img src="https://cdn-icons-png.flaticon.com/512/919/919830.png"
      className="absolute bottom-[18%] right-[10%] w-9 animate-floatSlow opacity-50" />

    <img src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
      className="absolute top-[55%] right-[40%] w-8 animate-floatMid opacity-50" />

  </div>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 text-center">

    <span className="inline-block mb-4 px-4 py-1 rounded-full 
      bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs tracking-widest uppercase">
      Web Development Company
    </span>

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
      Engineering Web Solutions 
      <span className="block mt-2 
        bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
        for Business Growth
      </span>
    </h1>

    <p className="mt-6 text-white/70 text-base sm:text-lg max-w-3xl mx-auto">
      From modern websites to enterprise platforms, we design, develop and deliver
      high-performance digital experiences with clean architecture and scalable technology.
    </p>

    {/* CTA */}
    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5">

      <a href="https://wa.me/9031011559" target="_blank" className="relative group">
        <button className="cursor-pointer
          px-3 py-1 rounded-full font-semibold text-black
          bg-gradient-to-r from-emerald-400 to-green-300
          hover:scale-105 transition-all duration-300
          shadow-lg hover:shadow-[0_0_25px_rgba(52,211,153,0.6)]
        "> <span className="absolute inset-0 rounded-full 
        border border-emerald-300 opacity-0 group-hover:opacity-100 
        animate-glowRing"></span>
          Start Your Project →
        </button></a>
       
      

      <a href="https://wa.me/9031011559" target="_blank">
      <button className="cursor-pointer px-3 py-1 rounded-full border border-white/30 
        hover:bg-white hover:text-black transition">
        
        Talk to Our Experts</button>
      </a>

    </div>

    {/* Tech Stack List */}
    <div className="mt-14 flex flex-wrap justify-center gap-5 text-xs uppercase tracking-wider text-white/50">
      <span>React</span>
      <span>Next.js</span>
      <span>Node.js</span>
      <span>Laravel</span>
      <span>MongoDB</span>
      <span>AWS</span>
      <span>Docker</span>
      <span>Firebase</span>
    </div>

  </div>


{/* ANIMATIONS */}
<style jsx>{`
@keyframes floatSlow {
  0% {transform: translateY(0);}
  50% {transform: translateY(-20px);}
  100% {transform: translateY(0);}
}
@keyframes floatFast {
  0% {transform: translateY(0);}
  50% {transform: translateY(-35px);}
  100% {transform: translateY(0);}
}
@keyframes floatMid {
  0% {transform: translateY(0) translateX(0);}
  50% {transform: translateY(-18px) translateX(12px);}
  100% {transform: translateY(0) translateX(0);}
}
@keyframes spinSlow {
  to {transform: rotate(360deg);}
}
.animate-floatSlow {animation: floatSlow 7s ease-in-out infinite;}
.animate-floatFast {animation: floatFast 5s ease-in-out infinite;}
.animate-floatMid {animation: floatMid 6s ease-in-out infinite;}
.animate-spinSlow {animation: spinSlow 45s linear infinite;}

@keyframes glowRing {
  from {box-shadow: 0 0 0 rgba(52,211,153,0.4);}
  to {box-shadow: 0 0 25px rgba(52,211,153,0.8);}
}
.animate-glowRing {
  animation: glowRing 2s infinite alternate;
}
`}</style>

</section>











<section className="relative w-full overflow-hidden 
bg-gradient-to-br from-white via-emerald-50 to-white 
py-20 md:py-17 px-6 md:px-20">

  {/* Background Decorative Shapes */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200/30 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/20 blur-[180px] rounded-full"></div>

  <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <div>

      <span className="inline-block mb-4 px-4 py-1 rounded-full 
      bg-emerald-100 text-emerald-700 font-semibold text-xs tracking-wide">
        WEBSITE DEVELOPMENT COMPANY
      </span>

      <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-tight text-gray-900">
        Leading Website Development Company for  
        <span className="block text-emerald-600 mt-2">
          Business Growth & Online Success
        </span>
      </h1>

      <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
        We are a professional website development company delivering
        high-performance, scalable, and search-engine-friendly websites
        built to grow your business online.
        <br /><br />
        From concept to deployment - we deliver technology with results.
      </p>

      {/* FEATURES */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">

        {[
          "SEO-Focused Development",
          "Business-Driven Design",
          "Scalable Architecture",
          "Conversion Optimization",
          "Transparent Pricing"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
            <span>{item}</span>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a href="https:wa.me/9031011559" target="_blank"
        >
        <button className="cursor-pointer
          px-3 py-1 rounded-full font-semibold text-white
          bg-gradient-to-r from-emerald-500 to-green-500
          hover:scale-105 transition shadow-lg
        ">
          Request Website Quote
        </button></a>

        <a
        href="https://wa.me/9031011559" target="_blank"
        ><button className="cursor-pointer
          px-3 py-1 rounded-full font-semibold text-emerald-700
          border border-emerald-400 hover:bg-emerald-50 transition
        ">
          Talk to a Web Expert
        </button></a>

      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center relative">

      <div className="
        relative w-[270px] sm:w-[360px] md:w-[440px]
        h-[280px] sm:h-[360px] md:h-[420px]
        rounded-3xl overflow-hidden shadow-2xl
        border border-emerald-100 bg-white
        hover:scale-[1.03] transition-all duration-500
      ">

        <img
          src={WebdevImage}
          alt="Website Development Company "
          className="w-full h-full object-cover"
        />

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent"></div>

      </div>

      {/* Floating Accent */}
      <div className="absolute -top-5 -right-6 w-20 h-20 bg-emerald-400 rounded-full opacity-20"></div>
      <div className="absolute bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full opacity-20"></div>

    </div>

  </div>

</section>








 <section className="relative min-h-screen bg-[#0e1c1b] text-white px-6 py-20 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-black blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold">
            Simple <span className="text-emerald-400">pricing</span>
          </h2>

          <p className="mt-4 text-white/60 max-w-md">
            Your complete website-development toolkit built for performance,
            conversion and long-term success.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-3 text-sm text-white/80">
            {[
              "Hosting & Optimization",
              "Fully Responsive UI",
              "Performance Analytics",
              "SEO Structure",
              "Security Protection",
              "Automation Ready",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE – CARDS */}
        <div className="grid sm:grid-cols-3 gap-6">

          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.04 }}
              className={`relative rounded-3xl p-6 bg-gradient-to-br ${plan.color} shadow-xl text-black overflow-hidden`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-1 right-1 bg-black text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="font-bold text-lg">{plan.name}</h3>
              <p className="text-sm opacity-70">{plan.desc}</p>

              <div className="mt-4 text-3xl font-extrabold">{plan.price}</div>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-full hover:bg-white hover:text-black transition">
                Get Started
              </button>
            </motion.div>
          ))}

        </div>

      </div>

      {/* Feature Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto mt-20 text-sm"
      >
        <h3 className="text-xl font-semibold mb-4">Key Features</h3>

       <table className="w-full text-left border-collapse">
  <thead>
    <tr className="text-white/40">
      <th className="py-2">Feature</th>
      <th>Starter</th>
      <th>Pro</th>
      <th>Enterprise</th>
    </tr>
  </thead>

  <tbody>
    {planFeatures.map((row, i) => (
      <tr key={i} className="border-b border-white/10">
        <td className="py-3">{row.feature}</td>
        <td>{row.starter}</td>
        <td>{row.pro}</td>
        <td>{row.enterprise}</td>
      </tr>
    ))}
  </tbody>
</table>

      </motion.div>
    </section>

























<section className="relative w-full py-17 px-6 md:px-20 bg-white overflow-hidden">

  {/* Soft Background Accent */}
  <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-100/40 blur-[160px] rounded-full"></div>

  <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      <span className="inline-flex items-center gap-2 px-4 py-1.5 
        text-xs font-semibold uppercase tracking-wide 
        bg-emerald-100 text-emerald-700 rounded-full">
        About Our Company
      </span>

      <h2 className="mt-4 text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        About Our Website Development Department
      </h2>

      <p className="mt-4 text-lg text-emerald-600 font-semibold">
        We are not just developers - we are growth partners.
      </p>

      <p className="mt-5 text-gray-600 leading-relaxed max-w-2xl">
        As a result-driven website-development-company, our mission is simple: 
        <span className="font-medium text-gray-900">
          {" "} Create websites that increase visibility, trust, and sales.
        </span>
        <br /><br />
        Every website we build is carefully structured around modern business impact -
        not only for visuals, but for real customer engagement and measurable results.
      </p>

      {/* STRATEGY LIST */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

        {[
          "User Experience Design",
          "Search Engine Optimization",
          "High-Speed Performance",
          "Secure Architecture",
          "Integrations & Automation",
          "Conversion Psychology"
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50
            hover:bg-emerald-100/60 transition"
          >
            <span className="w-3 h-3 bg-emerald-500 rounded-full mt-2"></span>
            <p className="text-gray-800 font-medium">{item}</p>
          </div>
        ))}

      </div>

      <p className="mt-8 text-gray-700 font-semibold">
        We don’t just design websites -  
        we build growth systems for modern businesses.
      </p>

    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="flex justify-center">

      <div className="relative w-[260px] sm:w-[350px] md:w-[430px] 
        h-[280px] sm:h-[360px] md:h-[440px]
        rounded-3xl overflow-hidden shadow-2xl
        border border-gray-100 bg-gray-100
        hover:scale-[1.03] transition-all duration-500">

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Development Team in a Work Process at Qmize"
          className="w-full h-full object-cover"
        />

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t 
            from-white/50 via-transparent to-transparent">
        </div>

      </div>

    </div>

  </div>

</section>






 <section className="relative w-full py-17 overflow-hidden 
      bg-gradient-to-br from-[#f2dfb2] via-[#fff3db] to-[#dcc5a1]">

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none 
        bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')]"></div>

      {/* Heading */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3b2508]">
          Our Development Tech Stack
        </h2>
        <p className="mt-3 text-[#70592c] max-w-2xl mx-auto">
          We use industry-leading technologies to build fast, scalable & future-ready web solutions.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 overflow-hidden">

        <div className="marquee-track flex items-center gap-10">

          {[...stacks, ...stacks].map((tech, i) => (
            <div
              key={i}
              className="group min-w-[120px] h-[110px]
              rounded-2xl bg-white/60 backdrop-blur-lg shadow-lg
              border border-white/30 flex flex-col justify-center items-center
              hover:scale-105 hover:shadow-xl transition duration-300"
            >
              
              <StackIcon 
                name={tech} 
                
                className="text-emerald-600 w-8 h-8"
              />

              <span className="mt-2 text-sm font-semibold text-[#4b3717] uppercase">
                {tech}
              </span>
            </div>
          ))}

        </div>

      </div>

      {/* CSS */}
      <style jsx>{`
        .marquee-track {
          width: max-content;
          animation: marqueeScroll 24s linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Mobile slower speed */
        @media (max-width: 640px) {
          .marquee-track {
            animation-duration: 30s;
          }
        }
      `}</style>

    </section>







    <section className="w-full py-17 bg-gradient-to-b from-white to-emerald-50">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
          Recent Completed Projects
        </h2>
        <p className="mt-4 text-gray-600">
          Some of our finest work crafted with performance, design & growth in mind.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mt-14 max-w-5xl mx-auto px-6">

        {/* Slides */}
        <div className="overflow-hidden relative">

          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl shadow-xl bg-white overflow-hidden"
          >

            {/* IMAGE */}
            <div className="relative group">
              <img
                src={projects[index].image}
                alt={projects[index].title}
                className="w-full h-[260px] md:h-[380px] object-contain"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                <a href={projects[index].link} target="_blank" rel="noreferrer">
                  <button className="
                    px-6 py-3 rounded-full font-semibold
                    bg-gradient-to-r from-emerald-500 to-green-400 text-black
                    hover:scale-110 transition-all duration-300 shadow-lg
                  ">
                    Visit Website →
                  </button>
                </a>
              </div>
            </div>

            {/* Title */}
            <div className="p-6 text-center">
              <h3 className="font-bold text-xl text-emerald-900">
                {projects[index].title}
              </h3>
            </div>
          </motion.div>

        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-6">

          <button
            onClick={prev}
            className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition"
          >
            ◀ Prev
          </button>

          <button
            onClick={next}
            className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition"
          >
            Next ▶
          </button>

        </div>

      </div>

    </section>




    <section className="relative w-full py-17 px-6 md:px-16 overflow-hidden 
  bg-gradient-to-br from-[#f6e7c1] via-[#d9f3d4] to-white">

  {/* Sand Gradient Glow */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#f5d48d]/30 via-transparent to-[#a6dda6]/30 blur-3xl"></div>

  {/* FLOATING SQUARE TEXTURE */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="square animate-floatSlow left-[5%] top-[10%]"></div>
    <div className="square animate-floatMid right-[12%] top-[20%]"></div>
    <div className="square animate-floatFast bottom-[12%] left-[15%]"></div>
    <div className="square animate-floatSlow bottom-[15%] right-[10%]"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-8">

      <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 leading-tight">
        Professional Website  
        <span className="block text-green-600">Development Services</span>
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
        We don’t just build websites - we create digital experiences that attract,
        convert, and scale your business. With speed, performance, security
        and marketing intelligence built-in.
      </p>

      

    </div>

    {/* RIGHT SERVICES LIST */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      {[
        ["Business Website Development", "Corporate & startup-ready platforms"],
        ["Custom Web Development", "Tailor-made solutions from scratch"],
        ["Ecommerce Development", "Payment gateway & order automation"],
        ["Portfolio & Personal Websites", "Branding focused visual design"],
        ["Web App Development", "High-level automation & logic"],
        ["Website Maintenance", "Performance tuning & security updates"],
      ].map((item, i) => (
        <div
          key={i}
          className="group relative p-6 rounded-2xl 
            bg-white/70 backdrop-blur-md shadow-lg
            border border-white hover:border-green-400
            transition-all duration-300 hover:-translate-y-2"
        >

          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr 
            from-green-200 via-transparent to-transparent opacity-0 
            group-hover:opacity-100 transition duration-500"></div>

          <h3 className="relative z-10 font-bold text-emerald-900 text-lg">
            {item[0]}
          </h3>

          <p className="relative z-10 text-sm text-gray-600 mt-2">
            {item[1]}
          </p>

        </div>
      ))}

    </div>

  </div>

  {/* ANIMATIONS & SQUARE STYLE */}
  <style jsx>{`
    .square {
      position: absolute;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #81e6bd, #34d399);
      opacity: .1;
      border-radius: 12px;
      filter: blur(1px);
    }

    @keyframes floatSlow {
      0% { transform: translateY(0); }
      50% { transform: translateY(-30px); }
      100% { transform: translateY(0); }
    }

    @keyframes floatMid {
      0% { transform: translate(0); }
      50% { transform: translate(30px, -20px); }
      100% { transform: translate(0); }
    }

    @keyframes floatFast {
      0% { transform: translateX(0); }
      50% { transform: translateX(-40px); }
      100% { transform: translateX(0); }
    }

    .animate-floatSlow {
      animation: floatSlow 14s ease-in-out infinite;
    }

    .animate-floatMid {
      animation: floatMid 12s ease-in-out infinite;
    }

    .animate-floatFast {
      animation: floatFast 10s ease-in-out infinite;
    }
  `}</style>

</section>







<section className="relative w-full py-17 px-6 md:px-16 overflow-hidden 
  bg-gradient-to-br from-[#022b1f] via-[#043d2c] to-[#01160f] text-white">

  {/* Sand Texture Glow */}
  <div className="absolute inset-0">
    <div className="sand animate-sandSlow"></div>
    <div className="sand animate-sandFast"></div>
    <div className="sand animate-sandMid"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-300 to-green-500 bg-clip-text text-transparent">
        Our Website Development Approach
      </h2>

      <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
        From idea to execution - a transparent, performance-driven process that 
        turns business goals into digital growth.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-14 items-center">

      {/* LEFT — PROCESS FLOW */}
      <div className="relative">

        {/* Vertical Timeline */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-emerald-400 to-transparent"></div>

        <div className="space-y-10">

          {[
            ["Discovery & Research", "Understanding audience & business goals"],
            ["Design & Wireframing", "Clickable layouts & UX planning"],
            ["Development", "Secure and high-performance coding"],
            ["SEO Configuration", "Speed optimization & indexing setup"],
            ["Testing & Launch", "Polished deployment & quality assurance"]
          ].map((item, i) => (
            <div key={i} className="relative flex gap-6">

              {/* Step Indicator */}
              <div className="relative z-10 w-10 h-10 flex items-center justify-center 
                rounded-full bg-gradient-to-r from-emerald-400 to-green-500
                font-bold text-black shadow-lg">
                {i + 1}
              </div>

              <div>
                <h3 className="text-xl font-bold text-emerald-300">
                  {item[0]}
                </h3>
                <p className="text-white/70 mt-1">
                  {item[1]}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* RIGHT — IMAGE PLACEHOLDER */}
      <div className="flex justify-center">

  <div className="relative w-[280px] sm:w-[340px] md:w-[420px]
    h-[260px] sm:h-[320px] md:h-[400px]
    rounded-3xl overflow-hidden shadow-2xl border border-white/10
    bg-white/5 backdrop-blur-xl hover:scale-[1.03] transition-all duration-700">

    {/* IMAGE */}
    <img
      src={Process}   // import your image like: import processFlow from "...";
      alt="Website Development Process Flow at Qmize"
      className="w-full h-full object-cover object-center"
    />

    {/* SOFT OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

    {/* OPTIONAL LABEL TEXT */}
    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 
      bg-black/50 backdrop-blur-lg px-4 py-1 rounded-full 
      text-white text-xs tracking-widest uppercase">
      Process Flow
    </span>

  </div>

</div>


    </div>

  </div>

  {/* SAND BACKGROUND STYLE */}
  <style jsx>{`
    .sand {
      position: absolute;
      inset: 0;
      background: repeating-radial-gradient(
        circle at 20% 30%,
        rgba(255,255,255,0.05) 0px,
        rgba(255,255,255,0.02) 2px,
        transparent 3px,
        transparent 6px
      );
      opacity: .25;
      animation: drift 30s linear infinite;
    }

    .animate-sandSlow { animation-duration: 40s; }
    .animate-sandMid { animation-duration: 32s; }
    .animate-sandFast { animation-duration: 24s; }

    @keyframes drift {
      from { transform: translateX(0); }
      to { transform: translateX(120px); }
    }
  `}</style>

</section>





    <section className="relative w-full py-17 px-6 md:px-16 overflow-hidden 
  bg-gradient-to-br from-white via-[#f9fafb] to-[#eefcf6] text-gray-900">

  {/* Light Glow Accent */}
  <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] 
    bg-emerald-200/30 blur-[180px] rounded-full"></div>

  {/* Soft Texture */}
  <div className="absolute inset-0 sandTexture opacity-10"></div>

  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-52 items-center">

    {/* LEFT CONTENT */}
    <div>

      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight
        bg-gradient-to-r from-black via-gray-800 to-emerald-600 bg-clip-text text-transparent">
        Why Choose Our  
        <span className="block text-gray-900">Website Development Company?</span>
      </h2>

      <p className="mt-6 text-gray-600 text-lg max-w-lg leading-relaxed">
        We are not designers - we are conversion engineers.  
        Everything we build is engineered to generate leads, authority, and growth.
      </p>

      <div className="mt-6 font-semibold text-emerald-600 text-lg">
        Websites that sell. Not just websites that exist.
      </div>

      

    </div>

    {/* RIGHT LIST */}
    <div className="relative space-y-5 text-lg">

      {[
        "Conversion-Optimized UI/UX",
        "SEO-Friendly Frameworks",
        "Mobile-First Coding",
        "Clean & Scalable Architecture",
        "Guaranteed On-Time Delivery",
        "Long-Term Support",
        "Cost-Effective Pricing"
      ].map((item, i) => (
        <div key={i} 
          className="group relative pl-10 py-3 hover:translate-x-2 transition-all">

          {/* Line Accent */}
          <div className="absolute left-0 top-0 h-full w-[3px] 
            bg-gradient-to-b from-emerald-400 to-transparent"></div>

          {/* Marker */}
          <span className="absolute left-[-6px] top-1/2 -translate-y-1/2 
            w-4 h-4 rounded-full bg-emerald-500 shadow-md"></span>

          <p className="text-gray-800 group-hover:text-emerald-700 transition-all">
            {item}
          </p>

        </div>
      ))}

    </div>

  </div>

  {/* Security / Trust Ribbon */}
  <div className="relative z-10 mt-20 flex flex-wrap justify-center gap-6 text-sm">

    {["Trusted Agency", "Secured Delivery", "Performance Focused", "Client First"].map((b, i) => (
      <span key={i}
        className="px-5 py-2 rounded-full bg-white shadow-md border 
          hover:bg-emerald-50 hover:text-emerald-700 transition">
        {b}
      </span>
    ))}

  </div>

  {/* TEXTURE ANIMATION */}
  <style jsx>{`
    .sandTexture {
      background-image: radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px);
      background-size: 6px 6px;
      animation: drift 120s linear infinite;
    }

    @keyframes drift {
      from { background-position: 0 0; }
      to { background-position: 600px 300px; }
    }
  `}</style>

</section>





<section className="relative w-full py-17 px-6 md:px-16 overflow-hidden 
  bg-gradient-to-r from-[#f8fbff] via-[#f0fff8] to-[#ecfdf3]">

  {/* Soft Glow */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
    bg-emerald-300/25 blur-[160px] rounded-full"></div>

  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      <h2 className="text-3xl md:text-4xl font-extrabold leading-snug
        bg-gradient-to-r from-black to-emerald-700 bg-clip-text text-transparent">
        Why SEO Matters from Day One
      </h2>

      <p className="mt-6 text-gray-700 text-lg max-w-lg leading-relaxed">
        Being a top website-development company is not just about writing code -  
        it's about <span className="text-emerald-600 font-semibold">visibility, performance, and ranking.</span>
        {" "}We engineer websites that are born SEO-ready.
      </p>

      <p className="mt-4 text-gray-600">
        Your website is not designed just to look good -  
        it's built to be discovered, indexed, and loved by search engines from day one.
      </p>

    </div>

    {/* RIGHT FEATURES STACK */}
    <div className="space-y-4">

      {[
        "Schema-ready website structure",
        "Clean & crawlable URL architecture",
        "Lightning-fast loading frameworks",
        "SEO-optimized content layout",
        "Search-engine friendly design system"
      ].map((feature, i) => (
        <div
          key={i}
          className="flex items-center gap-4 bg-white/60 backdrop-blur-md border
            rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition">

          {/* Tick Icon */}
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white 
            flex items-center justify-center font-bold shadow">
            ✓
          </div>

          <p className="font-medium text-gray-800">
            {feature}
          </p>

        </div>
      ))}

      {/* Highlight Note */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-lg">
        Your website is prepared for Google before launch.
      </div>

    </div>

  </div>
</section>






<section className="relative w-full py-17 px-6 md:px-16 overflow-hidden 
  bg-gradient-to-br from-emerald-300 via-white to-[#ecfdf3]">

  {/* SQUARE TEXTURE BACKGROUND */}
  <div className="absolute inset-0 squareTexture opacity-20"></div>

  {/* GREEN GLOW */}
  <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 
    w-[600px] h-[600px] bg-emerald-300/30 blur-[180px] rounded-full"></div>

  <div className="relative z-10 max-w-6xl mx-auto">

    {/* TITLE */}
    <h2 className="text-center text-4xl md:text-5xl font-extrabold 
      bg-gradient-to-r from-gray-800 to-emerald-600 bg-clip-text text-transparent">
      Industries We Serve
    </h2>

    <p className="text-center text-gray-600 mt-4 max-w-xl mx-auto">
      Tailored WhatsApp Business API & website solutions for industries that demand performance and reliability.
    </p>

    {/* INDUSTRY LIST */}
    <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-6">

      {[
        "Real Estate",
        "Healthcare",
        "Education",
        "Startup Companies",
        "Ecommerce",
        "Corporate Businesses",
        "Manufacturing",
        "Travel & Logistics"
      ].map((industry, i) => (
        <div key={i}
          className="group flex items-center gap-3 
            font-semibold text-gray-800 text-base
            cursor-pointer hover:text-emerald-600 transition-all">

          {/* SQUARE MARKER */}
          <span className="w-3 h-3 bg-gradient-to-br from-emerald-400 to-green-500
            rounded-sm shadow-md group-hover:scale-125 transition"></span>

          <span>{industry}</span>
        </div>
      ))}

    </div>

  </div>

  {/* TEXTURE STYLE */}
  <style jsx>{`
    .squareTexture {
      background-image: linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px);
      background-size: 24px 24px;
    }
  `}</style>

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
  )
}

export default WebDevService