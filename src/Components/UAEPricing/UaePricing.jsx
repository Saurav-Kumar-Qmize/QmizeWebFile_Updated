import React from 'react'
import waba from "../../assets/Images/uae-messaging.png";
import { Helmet } from "react-helmet";


const UaePricing = () => {



    {/* FAQ Item Component */}
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="border border-gray-200 rounded-2xl bg-white
      transition-all duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center
        px-6 py-4 text-left"
      >
        <span className="font-semibold text-gray-900 text-base md:text-lg">
          {question}
        </span>

        <span
          className={`text-green-600 text-xl transform transition
          ${open ? "rotate-45" : "rotate-0"}`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};
    {/* Pricing Card Component */}
const PricingCard = ({
  title,
  price,
  sms,
  plan,
  desc,
  popular,
}) => (
  <div className={`relative bg-white rounded-3xl p-6 border
    ${popular ? "border-green-500 scale-105 shadow-xl" : "border-gray-200 shadow-md"}
    hover:-translate-y-2 transition-all duration-500`}>

    {popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2
        bg-green-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
        MOST POPULAR
      </span>
    )}

    <h3 className="font-semibold text-gray-900 text-lg mb-2">
      {title}
    </h3>

    <p className="text-3xl font-extrabold text-green-600 mb-1">
      {price}
      <span className="text-sm font-medium text-gray-500"> /month</span>
    </p>

    <p className="text-sm text-gray-600 mb-4">
      {plan} + {sms}
    </p>

    <p className="text-sm text-gray-700 mb-6">
      {desc}
    </p>

    <button className={`w-full py-2.5 rounded-xl font-semibold transition
      ${popular
        ? "bg-green-600 text-white hover:bg-green-700"
        : "border border-green-600 text-green-700 hover:bg-green-50"}`}>
      Get UAE Bundle Access
    </button>
  </div>
);
  return (
    <>


    <Helmet>
    
           <meta charSet="utf-8" />
            <title>Top 10 Bulk SMS Service Providers in India | Qmize</title>
            <meta
              name="description"
              content=""
            />
            <link rel="canonical" href="https://qmize.com/blog/top-10-bulk-sms-sevice-providers-in-india" />
    
          </Helmet>
    
   <section className="relative w-full overflow-hidden py-10 px-6 bg-gradient-to-br from-white via-green-50 to-green-100">

  {/* Background Texture */}
  <div className="absolute inset-0 opacity-[0.08] pointer-events-none
    bg-[radial-gradient(#000_1px,transparent_1px)]
    [background-size:26px_26px]" />

  {/* Glow Orbs */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-300/30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/40 blur-3xl rounded-full"></div>

  <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-6 animate-fadeUp">

      <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-200 text-green-800 rounded-full">
        UAE ENTERPRISE MESSAGING
      </span>

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Complete Enterprise Messaging
        <span className="block text-green-600">
          for UAE Businesses
        </span>
      </h1>

      <h2 className="text-lg md:text-xl font-semibold text-gray-800">
        WhatsApp + SMS Messaging Bundle
      </h2>

      <p className="text-gray-600 text-base md:text-md leading-relaxed max-w-md">
        Enterprise-grade communication solutions designed specifically for companies across the United Arab Emirates. 
        <strong> Qmize Technologies (Powered by DIGINTRA)</strong> delivers an all-in-one messaging suite that combines:
      </p>

      <p className="text-gray-600 text-base md:text-md leading-relaxed max-w-md">
        
      </p>

      <ul className="space-y-2 text-gray-700 text-sm md:text-base list-disc ml-4">
        <li>Official WhatsApp Business API</li>
        <li>UAE-compliant A2P SMS for OTP & alerts</li>
      </ul>

      {/* <p className="text-gray-600 text-base md:text-md leading-relaxed max-w-md">
        Engage customers instantly, automate notifications, and scale messaging with secure, compliant infrastructure built for UAE enterprises.
      </p> */}

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 pt-4">
        <a href="#" target="_blank">
          <button className="cursor-pointer px-2 py-1 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition">
            Get UAE Bundle Pricing
          </button>
        </a>

        <a href="https://wa.me/+919031011559" target="_blank">
          <button className="cursor-pointer px-2 py-1 rounded-xl border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition">
            Talk to an Expert
          </button>
        </a>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <img
      src={waba}
      alt="Enterprise WhatsApp and SMS Messaging for UAE Businesses"
      className="w-full h-80 md:h-[400px] object-contain animate-fadeIn"
    />
  </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(25px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp {
      animation: fadeUp 1s ease forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fadeIn {
      animation: fadeIn 1.2s ease forwards;
    }
  `}</style>

</section>





<section className="relative w-full overflow-hidden py-20 px-6 bg-gradient-to-br from-[#f6fff9] via-[#ecfff4] to-[#e4ffef]">

  {/* Glow Grid Background */}
  <div className="absolute inset-0 opacity-[0.06] pointer-events-none
    bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
    [background-size:28px_28px]" />

  {/* Floating Glow Orbs */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-green-300/40 blur-3xl rounded-full animate-floatSlow" />
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200/40 blur-3xl rounded-full animate-floatReverse" />

  <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-6 animate-slideGlow">

      <span className="inline-flex items-center gap-2 px-4 py-1 text-xs font-semibold tracking-wide 
        bg-green-200/70 text-green-800 rounded-full shadow-md shadow-green-300/40">
        🚀 UAE GROWTH MESSAGING
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Grow Faster in the UAE with
        <span className="block text-green-600 drop-shadow-[0_0_12px_rgba(34,197,94,0.45)]">
          WhatsApp + SMS by Qmize
        </span>
      </h2>

      <p className="text-gray-600 text-base md:text-md leading-relaxed max-w-xl">
        UAE enterprises need <strong>multi-channel communication</strong> to guarantee reach, speed, and delivery reliability.
        Qmize’s UAE Messaging Bundles combine conversational WhatsApp engagement with high-priority SMS delivery.
      </p>

      <p className="text-gray-600 text-base md:text-md leading-relaxed max-w-xl">
        From OTPs to campaigns, Qmize helps brands connect with customers instantly - even when one channel isn’t enough.
      </p>
    </div>

    {/* RIGHT FEATURE CARDS */}
    <div className="grid sm:grid-cols-2 gap-6">

      {[
        { title: "Customer Verification", icon: "🔐" },
        { title: "Transactional Updates", icon: "📦" },
        { title: "Marketing Campaigns", icon: "📣" },
        { title: "Support Automation", icon: "🤖" },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative bg-white/70 backdrop-blur-xl border border-green-100 
          rounded-2xl p-6 shadow-lg hover:shadow-green-300/40
          transition-all duration-500 hover:-translate-y-2 animate-cardGlow"
        >
          {/* Card Glow */}
          <div className="absolute inset-0 rounded-2xl bg-green-400/10 opacity-0 
            group-hover:opacity-100 blur-xl transition duration-500" />

          <div className="relative z-10">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-gray-900 text-lg">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Bottom Line */}
  <div className="relative z-10 max-w-4xl mx-auto mt-16 text-center animate-fadeUp">
    <p className="text-gray-700 text-base md:text-lg">
      Whether you’re a fast-growing startup or a large enterprise,  
      <strong className="text-green-600"> Qmize delivers scalable, UAE-compliant messaging</strong>  
      built to meet local regulations and operator requirements.
    </p>
  </div>

  {/* Animations */}
  <style>{`
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-25px); }
    }
    .animate-floatSlow {
      animation: floatSlow 8s ease-in-out infinite;
    }

    @keyframes floatReverse {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(25px); }
    }
    .animate-floatReverse {
      animation: floatReverse 10s ease-in-out infinite;
    }

    @keyframes slideGlow {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slideGlow {
      animation: slideGlow 1s ease forwards;
    }

    @keyframes cardGlow {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-cardGlow {
      animation: cardGlow 0.9s ease forwards;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp {
      animation: fadeUp 1s ease forwards;
    }
  `}</style>

</section>





<section className="relative w-full py-20 px-6 bg-white overflow-hidden">

  {/* Subtle Side Accent */}
  {/* <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-400 to-emerald-600" /> */}

  {/* Soft Motion Dots */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.04]
    bg-[radial-gradient(#000_1px,transparent_1px)]
    [background-size:32px_32px]" />

  <div className="relative max-w-6xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mb-14 animate-fadeInSlow">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        The Business Impact of
        <span className="text-green-600"> WhatsApp + SMS </span>
        for UAE Brands
      </h2>

      <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
        WhatsApp accelerates engagement, while SMS guarantees delivery for
        time-critical use cases like OTPs and urgent alerts.
        Together, they create a resilient communication layer for UAE enterprises.
      </p>
    </div>

    {/* Impact Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Higher Customer Response",
          desc: "Boost engagement by combining conversational WhatsApp with high-reach SMS delivery.",
          icon: "📈",
        },
        {
          title: "Secure OTP & Verification",
          desc: "Ensure fast and reliable OTP delivery using UAE-approved messaging routes.",
          icon: "🔐",
        },
        {
          title: "Multi-Channel Notifications",
          desc: "Send updates across both WhatsApp and SMS to avoid message failures.",
          icon: "🔁",
        },
        {
          title: "Improved Support & Retention",
          desc: "Resolve queries faster with automated conversations and fallback alerts.",
          icon: "🤝",
        },
        {
          title: "Enterprise-Grade Compliance",
          desc: "Operate confidently with UAE regulations and operator-approved infrastructure.",
          icon: "🛡️",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relative group border border-gray-200 rounded-2xl p-6
          hover:border-green-500 transition-all duration-400
          hover:-translate-y-1 bg-white animate-rise"
        >
          {/* Hover Accent */}
          <div className="absolute top-0 left-0 h-1 w-0 bg-green-500 rounded-t-2xl
            group-hover:w-full transition-all duration-500" />

          <div className="text-3xl mb-4">{item.icon}</div>
          <h3 className="font-semibold text-gray-900 text-lg mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeInSlow {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeInSlow {
      animation: fadeInSlow 1s ease forwards;
    }

    @keyframes rise {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-rise {
      animation: rise 0.9s ease forwards;
    }
  `}</style>

</section>



<section className="relative w-full py-20 px-6 bg-gray-50 overflow-hidden">

  {/* Soft Background Lines */}
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none
    bg-[linear-gradient(to_right,#000_1px,transparent_1px)]
    [background-size:40px_40px]" />

  <div className="relative max-w-6xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mb-14 animate-fadeUp">
      <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold tracking-wide 
        bg-green-100 text-green-700 rounded-full">
        TRANSPARENT PRICING
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        UAE Enterprise Messaging Bundles with
        <span className="block text-green-600">Transparent Subscription Pricing</span>
      </h2>

      <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
        No hidden charges. No confusing pay-per-message bundles.
        Qmize UAE subscriptions offer predictable monthly pricing with
        included SMS volume and full WhatsApp API platform access.
      </p>
    </div>

    {/* Pricing Card */}
    <div className="max-w-4xl mx-auto">
      <div className="relative bg-white border border-gray-200 rounded-3xl p-10
        shadow-lg animate-scaleIn">

        {/* Top Accent */}
        <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl
          bg-gradient-to-r from-green-400 to-emerald-600" />

        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          What’s Included in Every UAE Bundle
        </h3>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {[
            "WhatsApp conversation category support",
            "Monthly SMS subscription volume",
            "Advanced analytics & reporting",
            "Automation-ready workflows",
            "Official API integrations",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
            >
              <span className="text-green-600 text-lg mt-0.5">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#">
            <button className="px-6 py-3 rounded-xl bg-green-600 text-white
              font-semibold hover:bg-green-700 transition
              shadow-md hover:shadow-green-300/40">
              Get UAE Bundle Access
            </button>
          </a>

          <p className="mt-4 text-xs text-gray-500">
            Designed for UAE regulations & operator-approved delivery
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp {
      animation: fadeUp 0.9s ease forwards;
    }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-scaleIn {
      animation: scaleIn 0.8s ease forwards;
    }
  `}</style>

</section>





<section className="relative w-full py-12 px-6 bg-gradient-to-b from-[#f7fffb] via-white to-[#f2fff8] overflow-hidden">

  {/* Ambient Glow */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px]
    bg-green-300/20 blur-3xl rounded-full" />

  <div className="relative max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center max-w-4xl mx-auto mb-16 animate-fadeUp">
      <span className="inline-block mb-4 px-5 py-1 text-xs font-semibold tracking-wide
        bg-green-100 text-green-700 rounded-full">
        UAE MESSAGING BUNDLE PRICING
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Boost Your Business Instantly with
        <span className="block text-green-600">
          UAE Messaging Bundle Pricing
        </span>
      </h2>

      <p className="mt-6 text-gray-600 text-base md:text-lg">
        Choose a UAE enterprise messaging bundle that fits your monthly
        communication volume and growth stage.
      </p>
    </div>

    {/* Pricing Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

      {/* Starter */}
      <PricingCard
        title="UAE Starter Bundle"
        price="AED 799"
        sms="5,000 SMS"
        plan="WhatsApp Basic"
        desc="Best for small businesses starting OTP + engagement"
      />

      {/* Business */}
      <PricingCard
        title="UAE Business Bundle"
        price="AED 1,499"
        sms="10,000 SMS"
        plan="WhatsApp Standard"
        desc="Best for growing SMEs running alerts + campaigns"
        popular
      />

      {/* Growth */}
      <PricingCard
        title="UAE Growth Bundle"
        price="AED 3,499"
        sms="25,000 SMS"
        plan="WhatsApp PRO"
        desc="Best for high-volume engagement teams"
      />

      {/* Enterprise */}
      <PricingCard
        title="UAE Enterprise Bundle"
        price="AED 5,999"
        sms="50,000 SMS"
        plan="WhatsApp PRO"
        desc="Best for enterprises running alerts + campaigns"
      />

      {/* Ultimate */}
      <PricingCard
        title="UAE Ultimate Bundle"
        price="AED 9,499"
        sms="100,000 SMS"
        plan="WhatsApp Ultimate"
        desc="Best for large enterprises and agencies"
      />
    </div>

    {/* VAT Note */}
    <p className="mt-10 text-center text-sm text-gray-500">
      All prices exclude 5% VAT. UAE operator compliance included.
    </p>
  </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp {
      animation: fadeUp 1s ease forwards;
    }
  `}</style>

</section>




<section className="relative w-full py-20 px-6 bg-white overflow-hidden">

  {/* Subtle Background Pattern */}
  <div
    className="absolute inset-0 opacity-[0.04] pointer-events-none
    bg-[linear-gradient(to_right,#000_1px,transparent_1px)]
    [background-size:48px_48px]"
  />

  <div className="relative max-w-6xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mb-14 animate-fadeUp">
      <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold tracking-wide
        bg-green-100 text-green-700 rounded-full">
        WHY QMIZE
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Why UAE Enterprises Choose
        <span className="block text-green-600">
          Qmize Technologies
        </span>
      </h2>

      <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
        Choosing the right messaging partner directly impacts message delivery,
        regulatory compliance, and overall customer experience.
        UAE enterprises trust Qmize for reliable, compliant, and scalable communication.
      </p>
    </div>

    {/* Trust Points */}
    <div className="grid md:grid-cols-2 gap-10">

      {[
        {
          title: "UAE-Compliant WhatsApp API Onboarding",
          desc: "Smooth onboarding aligned with Meta and UAE regulatory requirements.",
        },
        {
          title: "Reliable SMS Infrastructure by DIGINTRA",
          desc: "Enterprise-grade SMS delivery powered by trusted regional routing.",
        },
        {
          title: "Subscription Pricing for Enterprise Scale",
          desc: "Predictable plans designed for high-volume business messaging.",
        },
        {
          title: "Optimized Routing & Delivery Monitoring",
          desc: "Real-time monitoring ensures maximum deliverability and uptime.",
        },
        {
          title: "Expert Onboarding & Technical Support",
          desc: "Dedicated specialists to support setup, integration, and scaling.",
        },
        {
          title: "Built for UAE Industries",
          desc: "Trusted across retail, logistics, fintech, healthcare, and more.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relative border border-gray-200 rounded-2xl p-6
          hover:border-green-500 transition-all duration-400
          hover:-translate-y-1 bg-white animate-rise"
        >
          {/* Left Accent */}
          <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl
            bg-green-500 opacity-0 group-hover:opacity-100 transition" />

          <h3 className="font-semibold text-gray-900 text-lg mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Footer Line */}
    <div className="mt-16 text-center animate-fadeUp">
      <p className="text-gray-700 text-base md:text-lg">
        <strong className="text-green-600">Qmize Technologies</strong> is built to
        support UAE businesses across industries with secure,
        compliant, and high-performance messaging solutions.
      </p>
    </div>

  </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(25px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp {
      animation: fadeUp 0.9s ease forwards;
    }

    @keyframes rise {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-rise {
      animation: rise 0.8s ease forwards;
    }
  `}</style>

</section>



<section className="relative w-full py-20 px-6 bg-gray-50 overflow-hidden">

  {/* Soft Background Pattern */}
  <div
    className="absolute inset-0 opacity-[0.04] pointer-events-none
    bg-[radial-gradient(#000_1px,transparent_1px)]
    [background-size:36px_36px]"
  />

  <div className="relative max-w-6xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mb-16 animate-fadeUp">
      <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold tracking-wide
        bg-green-100 text-green-700 rounded-full">
        PLATFORM CAPABILITIES
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Key Features of
        <span className="block text-green-600">
          Qmize UAE Messaging Platform
        </span>
      </h2>

      <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
        Everything you need to run compliant, automated, and scalable WhatsApp
        and SMS communication for UAE enterprises.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

      {[
        {
          title: "Verified Business Profile",
          desc: "Official WhatsApp verification for trusted enterprise messaging.",
        },
        {
          title: "Automated Messaging Workflows",
          desc: "Trigger OTPs, reminders, and customer journeys automatically.",
        },
        {
          title: "Bulk WhatsApp Broadcasting",
          desc: "Send approved campaigns to segmented customer audiences.",
        },
        {
          title: "Two-Way Customer Conversations",
          desc: "Enable real-time responses for support and engagement teams.",
        },
        {
          title: "Multi-Agent Inbox",
          desc: "Manage conversations across teams with role-based access.",
        },
        {
          title: "Analytics & Reporting",
          desc: "Track delivery, engagement, and campaign performance.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relative bg-white border border-gray-200 rounded-2xl p-6
          hover:border-green-500 transition-all duration-400
          hover:-translate-y-1 animate-rise"
        >
          <h3 className="font-semibold text-gray-900 text-lg mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Integration Section */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}
      <div className="animate-fadeUp">
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
          Easy Integration with Your
          <span className="text-green-600"> Existing Systems</span>
        </h3>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          Qmize UAE bundles integrate seamlessly with your current technology
          stack - no disruption, no complexity.
        </p>

        <ul className="space-y-4 text-gray-700 text-sm md:text-base">
          <li>✔ CRM Integrations – Salesforce, HubSpot, Zoho & more</li>
          <li>✔ E-Commerce Platforms – Shopify, WooCommerce, Magento</li>
          <li>✔ Automation Tools – Zapier, Pabbly, workflow triggers</li>
          <li>✔ Custom API Integration – Enterprise-grade backend support</li>
        </ul>
      </div>

      {/* Right Visual Placeholder */}
      <div className="relative bg-white border border-gray-200 rounded-3xl p-10
        shadow-lg animate-scaleIn">
        <p className="text-center text-gray-700 text-sm md:text-base">
          Built for fast deployment and flexible integration across
          enterprise systems and custom applications.
        </p>
      </div>
    </div>

  </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(25px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp {
      animation: fadeUp 0.9s ease forwards;
    }

    @keyframes rise {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-rise {
      animation: rise 0.8s ease forwards;
    }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-scaleIn {
      animation: scaleIn 0.8s ease forwards;
    }
  `}</style>

</section>




<section className="relative w-full py-20 px-6 bg-white overflow-hidden">

  {/* Soft Background Pattern */}
  <div
    className="absolute inset-0 opacity-[0.04] pointer-events-none
    bg-[linear-gradient(to_right,#000_1px,transparent_1px)]
    [background-size:52px_52px]"
  />

  <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">

    {/* LEFT — Industries */}
    <div className="animate-fadeUp">
      <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold tracking-wide
        bg-green-100 text-green-700 rounded-full">
        INDUSTRIES WE SERVE
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
        Trusted Across Key
        <span className="block text-green-600">
          UAE Industries
        </span>
      </h2>

      <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl">
        Qmize messaging solutions are trusted by organizations of all sizes,
        delivering compliant, high-performance communication across industries.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          "E-Commerce",
          "Healthcare",
          "Education",
          "Real Estate",
          "Finance & Banking",
          "Travel & Hospitality",
          "Logistics",
          "Enterprises & Startups",
        ].map((industry, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl px-4 py-3
            text-sm md:text-base text-gray-800 text-center
            hover:border-green-500 transition animate-rise"
          >
            {industry}
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT — Activation Process */}
    <div className="animate-fadeUp">

      <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold tracking-wide
        bg-green-100 text-green-700 rounded-full">
        QUICK ACTIVATION
      </span>

      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-10">
        Our Simple
        <span className="text-green-600"> 3-Step Activation Process</span>
      </h3>

      <div className="space-y-8 relative">

        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-px bg-green-200" />

        {[
          {
            step: "1",
            title: "Business Verification & Setup",
            desc: "We complete WhatsApp onboarding and sender compliance for UAE regulations.",
          },
          {
            step: "2",
            title: "Integration & Automation",
            desc: "Connect your CRM, systems, and workflows with our platform.",
          },
          {
            step: "3",
            title: "Launch Messaging Campaigns",
            desc: "Go live with WhatsApp + SMS communication within days.",
          },
        ].map((item, index) => (
          <div key={index} className="relative pl-14 animate-rise">
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full
              bg-green-600 text-white flex items-center justify-center
              font-semibold text-sm">
              {item.step}
            </div>

            <h4 className="font-semibold text-gray-900 text-lg mb-1">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(25px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp {
      animation: fadeUp 0.9s ease forwards;
    }

    @keyframes rise {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-rise {
      animation: rise 0.8s ease forwards;
    }
  `}</style>

</section>



<section className="relative w-full py-20 px-6 bg-gray-50 overflow-hidden">

  {/* Subtle Background */}
  <div
    className="absolute inset-0 opacity-[0.04] pointer-events-none
    bg-[radial-gradient(#000_1px,transparent_1px)]
    [background-size:40px_40px]"
  />

  <div className="relative max-w-4xl mx-auto">

    {/* Header */}
    <div className="text-center mb-12 animate-fadeUp">
      <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold tracking-wide
        bg-green-100 text-green-700 rounded-full">
        FAQ
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Frequently Asked Questions
      </h2>

      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Everything you need to know about UAE WhatsApp + SMS messaging bundles.
      </p>
    </div>

    {/* FAQ Items */}
    <div className="space-y-4">

      <FAQItem
        question="What is included in the UAE WhatsApp + SMS bundle?"
        answer="Each subscription includes full WhatsApp Business API platform access along with a monthly SMS volume for OTPs, authentication, and critical alerts."
      />

      <FAQItem
        question="Do UAE businesses still need SMS with WhatsApp?"
        answer="Yes. SMS remains essential in the UAE for OTP delivery, authentication, and guaranteed reach when WhatsApp messages cannot be delivered."
      />

      <FAQItem
        question="How long does UAE activation take?"
        answer="Most businesses go live within 5–7 working days after successful document submission and approval."
      />

      <FAQItem
        question="Can I upgrade my bundle later?"
        answer="Absolutely. You can upgrade from Starter to higher bundles at any time as your messaging volume grows."
      />

      <FAQItem
        question="Is Qmize compliant with UAE operator requirements?"
        answer="Yes. Qmize supports sender ID approval, operator compliance, and all required UAE documentation."
      />

    </div>
  </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp {
      animation: fadeUp 0.8s ease forwards;
    }
  `}</style>

</section>

















    
    
    </>
  )
}

export default UaePricing