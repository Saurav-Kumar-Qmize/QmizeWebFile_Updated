import React from 'react'
import voicebroadcast from "../../assets/Images/voice-broadcasting.png"

const VoiceBroadcastServices = () => {
  return (
    <>
    
     <section className="relative w-full overflow-hidden py-16 px-6 bg-gradient-to-br from-white via-green-50 to-green-100">
    
      {/* Background Sand Texture */}
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
            VOICE BROADCAST SERVICE
          </span>
    
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Voice Broadcasting Service -
            <span className="block text-green-600">Reach Thousands in One Call</span>
          </h1>
    
          <p className="text-gray-600 text-base md:text-md leading-relaxed max-w-md text-justify">
           Your message deserves to be heard, not ignored. Qmize offers a high-performance voice broadcasting service that helps businesses connect with thousands of customers instantly through clear, automated voice calls.<br/>
           From marketing campaigns to critical alerts, Qmize makes voice call broadcasting simple, reliable, and results-driven.
          </p>


         
    
          
    
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
  onClick={() =>
    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="cursor-pointer px-4 py-1 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
>
  Get Pricing
</button>

    
            <a
  href="https://wa.me/919031011559"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="cursor-pointer px-4 py-1 rounded-xl border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition">
    Talk to an Expert
  </button>
</a>

          </div>
    
        </div>
    
        
    
          
            <img
            src={voicebroadcast}
            alt='Voicebroadcast Services Provider in India'
            className='w-full h-80 md:h-[400px] object-contain'
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










    <section className="bg-gradient-to-tr from-green-100 via-white to-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* TOP CONTENT */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 leading-tight">
            Speak Directly to Your Customers Instantly
          </h2>

          <p className="mt-5 text-md text-gray-700 leading-relaxed max-w-4xl">
            Text messages get skipped. Emails go unopened. A voice broadcast
            creates immediate attention and builds trust.
          </p>

          <p className="mt-4 text-md text-gray-700 leading-relaxed max-w-4xl">
            With Qmize’s advanced call broadcasting platform, you can deliver
            your message to a massive audience in minutes without manual
            calling or complex setups.
          </p>
        </div>

        {/* SPLIT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT TEXT */}
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Why Choose Qmize for Voice Broadcasting Service?
            </h3>

            <p className="text-md text-gray-700 leading-relaxed">
              Qmize is built for businesses that want results, reliability, and
              complete control over their communication. Our voice broadcasting
              service helps you reach audiences faster, more personally, and
              with greater impact.
            </p>
          </div>

          {/* RIGHT HIGHLIGHT */}
          <div className="relative bg-gray-50 rounded-2xl p-8">
            {/* Accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600 rounded-l-2xl" />

            <h4 className="text-xl font-semibold text-green-700 mb-3">
              Higher Engagement, Better Response
            </h4>

            <p className="text-md text-gray-700 leading-relaxed">
              Voice calls create a personal connection, leading to higher pickup
              rates and faster responses compared to SMS or email. This makes
              voice broadcasting ideal for urgent updates, promotions, and
              customer engagement campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>




    <section id='pricing' className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-10">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
      Send Pre-Recorded Voice Calls in a Single Click
    </h2>

    <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
      Maximize your ROI with our award-winning IVR pricing platform,
      best-in-class delivery, and dedicated customer support.
    </p>
  </div>
</section>


<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {/* Card Template */}
      {[
        {
          calls: "10,000",
          pricePer: "0.42",
          amount: "Rs 4,200",
          gst: "Rs 4,956",
          validity: "6 Months",
        },
        {
          calls: "25,000",
          pricePer: "0.40",
          amount: "Rs 10,000",
          gst: "Rs 11,800",
          validity: "6 Months",
        },
        {
          calls: "50,000",
          pricePer: "0.38",
          amount: "Rs 19,000",
          gst: "Rs 22,420",
          validity: "1 Year",
        },
        {
          calls: "100,000",
          pricePer: "0.35",
          amount: "Rs 35,000",
          gst: "Rs 41,300",
          validity: "Unlimited",
        },
        {
          calls: "500,000",
          pricePer: "0.30",
          amount: "Rs 1,50,000",
          gst: "Rs 1,77,000",
          validity: "Unlimited",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-3xl border border-emerald-200 shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
        >
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-emerald-800">
              {item.calls} V. Calls
            </h3>

            <p className="text-gray-600">
              ₹ {item.pricePer} <span className="text-sm">(Per Call)</span>
            </p>

            <div className="mt-4 space-y-1">
              <p className="text-lg font-semibold">{item.amount}</p>
              <p className="text-sm text-gray-500">
                {item.gst} (Inclusive 18% GST)
              </p>
            </div>

            <p className="mt-3 text-sm">
              <span className="font-semibold">Validity:</span> {item.validity}
            </p>
          </div>

          <button className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl transition">
            Buy Now
          </button>

          <p className="text-xs text-gray-500 text-center mt-2">
            (We Accept Online / Offline Payment)
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="bg-emerald-50 py-12">
  <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
    <h3 className="text-xl font-semibold text-emerald-800">
      Chat with Our Expert on WhatsApp
    </h3>

    <p className="text-gray-700">
      30 Sec Pulse & 15 Sec Pulse services are also available
      <span className="font-semibold"> (On Demand)</span>
    </p>

    <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition">
      💬 Chat on WhatsApp
    </button>
  </div>
</section>


<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h3 className="text-2xl font-bold text-center text-emerald-900 mb-10">
      Voice Broadcasting Features
    </h3>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm text-gray-700">
      {[
        "Web based control panel",
        "Send Instant Voice Calls",
        "Powerful API’s for Integration",
        "99.99% Uptime Server",
        "Pulse Duration (30 Seconds)",
        "Best Support",
        "High throughput capacity",
        "Dedicated speed for huge campaigns",
        "DTMF Input",
        "100% Delivery on active numbers",
        "Pay only for answered calls",
        "9:00 AM - 9:00 PM promotional route",
        "Highest capacity - 5L calls/hour",
        "Run election campaigns",
        "Live Call Analytics",
        "Voice calls reach DND numbers",
        "3 (or custom) redial attempts",
        "Supports .mp3 / .wav / .amr formats",
      ].map((feature, i) => (
        <div
          key={i}
          className="flex items-start gap-2 bg-emerald-50 rounded-xl p-3"
        >
          <span className="text-emerald-600">✔</span>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="bg-emerald-900 text-white py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h3 className="text-2xl font-bold mb-4">
      What Makes Us Different from Others
    </h3>

    <p className="text-emerald-100 max-w-4xl mx-auto">
      Gain practical experience with India’s Enterprise Messaging Panel at
      Qmize. Manage SMS, WhatsApp, missed calls, PR campaigns and more — all
      from one platform. Our developer-friendly APIs allow you to build and
      integrate applications in just a few minutes.
    </p>
  </div>
</section>








    <section className="relative bg-white py-16 overflow-hidden">
      {/* Dotted Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(16,185,129,0.25) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 animate-sectionFade">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 leading-tight">
            Why Choose Qmize for Voice Broadcasting Service?
          </h2>

          <p className="mt-4 text-md text-gray-700 leading-relaxed max-w-3xl">
            Qmize is built for businesses that want results, reliability, and
            complete control over their voice communication campaigns.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-10">
          {/* Item */}
          <div className="flex gap-6 items-start animate-itemFade delay-100">
            <div className="w-2 h-2 mt-2 rounded-full bg-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Higher Engagement, Better Response
              </h3>
              <p className="mt-2 text-md text-gray-700 leading-relaxed">
                Voice calls create a personal connection, leading to higher
                pickup rates and faster responses than SMS or email.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex gap-6 items-start animate-itemFade delay-200">
            <div className="w-2 h-2 mt-2 rounded-full bg-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Fast & Scalable Delivery
              </h3>
              <p className="mt-2 text-md text-gray-700 leading-relaxed">
                Send thousands of calls at the same time using our robust voice
                broadcasting software designed for high-volume campaigns.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex gap-6 items-start animate-itemFade delay-300">
            <div className="w-2 h-2 mt-2 rounded-full bg-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Clear Voice, Every Time
              </h3>
              <p className="mt-2 text-md text-gray-700 leading-relaxed">
                High-quality audio and intelligent routing ensure your message
                sounds professional, clear, and trustworthy on every call.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex gap-6 items-start animate-itemFade delay-400">
            <div className="w-2 h-2 mt-2 rounded-full bg-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                100% Control & Transparency
              </h3>
              <p className="mt-2 text-md text-gray-700 leading-relaxed">
                Track answered calls, call duration, retries, and engagement in
                real time from one simple dashboard.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex gap-6 items-start animate-itemFade delay-500">
            <div className="w-2 h-2 mt-2 rounded-full bg-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Trusted Voice Broadcasting Service in India
              </h3>
              <p className="mt-2 text-md text-gray-700 leading-relaxed">
                Businesses across India rely on Qmize for secure, compliant, and
                dependable voice communication at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>









    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-green-600 to-emerald-500" />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          
          {/* LEFT: FEATURES */}
          <div className="animate-slideLeft">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Powerful Features That Drive Conversions
            </h2>

            <ul className="space-y-4">
              {[
                "Bulk voice call broadcasting in seconds",
                "Studio-quality voice playback",
                "Multi-language voice broadcasting support",
                "Scheduled and instant campaigns",
                "DTMF input for customer actions (Press 1, Press 2, etc.)",
                "Real-time campaign analytics",
                "Easy API integration",
                "Reliable voicemail broadcasting service for unanswered calls",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-md text-emerald-50 leading-relaxed"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-white flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: USE CASES */}
          <div className="animate-slideRight">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Use Voice Broadcasting to Grow Faster
            </h3>

            <p className="text-md text-emerald-100 mb-6 max-w-lg">
              Qmize helps you communicate smarter across industries and use
              voice calls to deliver messages that get heard and acted upon.
            </p>

            <ul className="space-y-4">
              {[
                "Promote offers, sales, and product launches",
                "Send payment reminders and overdue alerts",
                "Run political and election campaigns",
                "Share school or institute announcements",
                "Remind patients of appointments",
                "Deliver emergency or system alerts",
                "Collect feedback and survey responses",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-md text-emerald-50 leading-relaxed"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-white flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-md text-white font-medium max-w-lg">
              Every call is an opportunity to engage, inform, and convert.
            </p>
          </div>
        </div>
      </div>
    </section>










    <section className="relative py-12 bg-white overflow-hidden">
      {/* Squared Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,185,129,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700">
            How to Start Voice Broadcasting
          </h2>
          <p className="mt-4 text-md text-gray-700 leading-relaxed">
            Launching your voice broadcasting campaign with Qmize takes only a
            few minutes. Follow the simple steps below to get started.
          </p>
        </div>

        {/* STEPS */}
        <div className="space-y-10 mb-20">
          {[
            {
              step: "Step 1",
              title: "Sign Up",
              desc: "Create your Qmize account and access the voice broadcasting dashboard instantly.",
            },
            {
              step: "Step 2",
              title: "Upload or Record Your Message",
              desc: "Use a pre-recorded voice file or record your message directly on the platform.",
            },
            {
              step: "Step 3",
              title: "Add Contact Numbers",
              desc: "Upload phone numbers in bulk or connect your system using API integration.",
            },
            {
              step: "Step 4",
              title: "Launch Your Campaign",
              desc: "Send instantly or schedule your voice broadcast for the perfect time.",
            },
            {
              step: "Step 5",
              title: "Track Results",
              desc: "View live reports and optimize campaigns for better performance and response rates.",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white text-sm font-semibold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.step}: {item.title}
                </h3>
                <p className="mt-2 text-md text-gray-700 leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PRICING BLOCK */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 sm:p-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Simple, Affordable Pricing
          </h3>

          <p className="text-md text-gray-700 mb-6 max-w-3xl leading-relaxed">
            Qmize offers flexible pricing that fits your business needs - whether
            you’re running small campaigns or enterprise-level voice
            broadcasting.
          </p>

          <ul className="space-y-3 mb-6">
            {[
              "Pay-per-call pricing",
              "Discounted bulk packages",
              "Custom enterprise plans",
              "No setup fees and no hidden costs",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-md text-gray-800"
              >
                <span className="mt-2 w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-md text-gray-700 leading-relaxed max-w-3xl">
            Just a powerful, reliable voice broadcasting service that Indian
            businesses trust to communicate at scale.
          </p>

          <div className="mt-6">
            <button className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">
              👉 Request Pricing Tailored to Your Call Volume
            </button>
          </div>
        </div>
      </div>
    </section>







     <section className="relative bg-gradient-to-b from-emerald-50 to-white py-16 overflow-hidden">
      
      {/* Subtle Square Background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,185,129,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Why Businesses Choose Qmize Again and Again
          </h2>
          <p className="mt-4 text-md text-gray-700 leading-relaxed">
            Businesses trust Qmize not just for performance, but for consistency,
            reliability, and long-term value.
          </p>
        </div>

        {/* Feature Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mb-14">
          {[
            "High call connection rates",
            "Easy-to-use platform",
            "Scalable for any campaign size",
            "Dedicated support team",
            "Secure and compliant infrastructure",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="mt-2 w-3 h-3 rounded-full bg-emerald-600 flex-shrink-0" />
              <p className="text-md text-gray-800 font-medium leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Strong Closing Line */}
        <div className="border-l-4 border-emerald-600 pl-6 max-w-3xl">
          <p className="text-lg font-semibold text-gray-900 leading-relaxed">
            Your communication is too important to leave to chance.
          </p>
        </div>
      </div>
    </section>





     <section className="relative py-12 bg-white overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-100" />

      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-green-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-600 leading-tight">
          Start Your Voice Broadcasting Campaign Today
        </h2>

        {/* Description */}
        <p className="mt-6 text-md sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Turn your message into action with Qmize’s proven voice broadcasting
          service. Whether you’re promoting, reminding, or informing, Qmize
          helps you connect instantly and effectively.
        </p>

        <p className="mt-4 text-md sm:text-lg text-gray-800 font-medium">
          Ready to boost engagement and response?
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-7 py-4 rounded-xl bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-700 transition w-full sm:w-auto">
            👉 Start Voice Broadcasting Now
          </button>

          <button className="px-7 py-4 rounded-xl border border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-50 transition w-full sm:w-auto">
            👉 Book a Free Demo
          </button>

          <button className="px-7 py-4 rounded-xl bg-white text-gray-900 font-semibold border border-gray-300 hover:bg-gray-50 transition w-full sm:w-auto">
            👉 Talk to a Voice Campaign Expert
          </button>
        </div>
      </div>
    </section>



    
    
    </>
  )
}

export default VoiceBroadcastServices