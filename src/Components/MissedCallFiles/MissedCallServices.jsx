import React from 'react'
import otpSMS from "../../assets/Images/missedcallserviceposter.jpeg"

const MissedCallServices = () => {
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
                MISSED CALL SERVICE
              </span>
        
              <h1 className="text-3xl md:text-4xl font-extrabold text-green-800 leading-tight">
             Missed Call Service Provider 
                {/* <span className="block text-green-600">for Fast & Secure OTP Verification</span> */}
              </h1>
        
              <p className="text-gray-600 text-base md:text-md leading-relaxed max-w-md text-justify">
              Smart missed call service provider that helps you capture, respond, and convert customers automatically.<br /> Missed call services have become one of the most effective tools for marketing, customer support, and data collection across industries in India. Qmize delivers a scalable and easy to manage solution designed for businesses of all sizes.
              </p>
    
    
             
        
              
        
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a href='https://wa.me/90310 11559' target='_blank'><button className="cursor-pointer px-4 py-1 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition">
                  Get Missed Call Service
                </button></a>
        
                <a href='https://wa.me/90310 11559' target='_blank'><button className="cursor-pointer px-4 py-1 rounded-xl border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition">
                  Talk to an Expert
                </button></a>
              </div>
        
            </div>
        
            
        
              
                <img
                src={otpSMS}
                alt='Missed Call Service Provider'
                className=' ml-20 h-80 md:h-[400px] object-contain rounded-3xl'
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







        <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-12">
  {/* soft background accents */}
  <div className="absolute -top-24 right-0 w-[360px] h-[360px] bg-emerald-200/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-emerald-300/20 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
        What is a Missed Call Service?
      </h2>
    </div>

    {/* Content */}
    <div className="grid gap-10 md:grid-cols-2 items-center">

      {/* Left Text */}
      <div className="text-gray-700 text-base md:text-md leading-relaxed space-y-4">
        <p>
          A <strong>missed call service</strong> allows customers to give a
          missed call on a dedicated virtual number. The system automatically
          records the call and instantly triggers a predefined action such as
          sending an SMS, WhatsApp message, IVR flow, or updating a CRM system.
        </p>

        <p>
          Since the call is disconnected automatically, the customer does not
          incur any call charges, making it a simple and cost-free way to
          interact with businesses.
        </p>
      </div>

      {/* Right Highlight Box */}
      <div className="bg-white/80 backdrop-blur border border-emerald-200 rounded-3xl p-8 shadow-md">
        <h3 className="text-xl font-semibold text-emerald-800 mb-4">
          Why Businesses Use Missed Call Services
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Businesses use missed call services for
          <strong> lead generation</strong>, campaign tracking,
          <strong> opt-in confirmation</strong>, feedback collection, and
          customer verification - all without any cost to the end user.
        </p>
      </div>

    </div>

  </div>
</section>




<section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 py-12">
  {/* background glow */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-6 text-white">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold">
        Why Choose Qmize as Your Missed Call Service Provider?
      </h2>
      <p className="mt-4 text-emerald-100 text-base md:text-md">
        A dependable missed call service provider in India built for scale,
        security, and seamless customer engagement.
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid gap-14 lg:grid-cols-2 items-center">

      {/* Left Content */}
      <div className="space-y-6 text-emerald-50 text-base md:text-md leading-relaxed">
        <p>
          Qmize stands out as a trusted <strong>missed call service provider
          in India</strong> with advanced features, high uptime, and
          <strong> enterprise-grade security</strong>.
        </p>
        <p>
          Our platform is designed to support marketing teams, sales
          departments, and customer support operations with reliability and
          ease - even during high call volumes.
        </p>
      </div>

      {/* Features List */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
        <h3 className="text-xl font-bold text-emerald-300 mb-6">
          Key Advantages of Qmize
        </h3>

        <ul className="space-y-4 text-gray-100">
          {[
            "Easy setup and quick activation",
            "Dedicated virtual numbers",
            "Real-time call tracking and analytics",
            "CRM and API integrations",
            "Automated SMS and WhatsApp responses",
            "High call handling capacity",
            "Reliable and responsive customer support"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold">✓</span>
              <span className="text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>

  </div>
</section>



<section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-12">
  {/* Square pattern background */}
  {/* <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
        Drive More Conversions with the Best Missed Call Service Provider in India
      </h2>
      <p className="mt-5 text-gray-700 text-base md:text-md leading-relaxed">
        Qmize is recognized as one of the best missed call service providers in
        India due to its performance, flexibility, and transparent pricing.
        From startups to large enterprises, Qmize supports multiple use cases
        across industries such as education, healthcare, finance, real estate,
        ecommerce, and political campaigns.
      </p>
      <p className="mt-4 text-gray-700 text-base md:text-md">
        Businesses trust Qmize to run large-scale campaigns without call drops
        or data loss.
      </p>
    </div>

    {/* Use Cases */}
    <div className="max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-emerald-800 mb-8 text-center">
        Use Cases of Missed Call Services by Qmize
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {[
          "Lead generation campaigns",
          "Customer verification and opt-in",
          "Contest and voting systems",
          "Feedback and surveys",
          "Appointment confirmation",
          "Support request registration",
          "Offer and promotion tracking"
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur border border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                ✓
              </span>
              <p className="text-gray-800 text-sm md:text-base font-medium">
                {item}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>

    {/* Closing Line */}
    <div className="max-w-4xl mx-auto mt-16 text-center">
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        Each missed call is instantly captured and processed, ensuring that
        <strong> no opportunity is ever missed</strong>.
      </p>
    </div>

  </div>
</section>




<section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-12">
  {/* subtle square pattern */}
  {/* <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:42px_42px]" /> */}

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
        Missed Call Service Price That Fits Your Budget
      </h2>
      <p className="mt-5 text-gray-700 text-base md:text-md leading-relaxed">
        Qmize offers <strong>competitive and transparent missed call service pricing</strong>
        based on your business requirements. Pricing depends on factors such as
        number type, call volume, integrations, and automation features.
      </p>
      <p className="mt-4 text-gray-700 text-base md:text-md">
        Flexible plans make it easy to scale without worrying about hidden costs.
        Custom pricing options are available for high-volume or enterprise needs.
      </p>
    </div>

    {/* HOW IT WORKS */}
    <div className="max-w-6xl mx-auto mb-24">
      <h3 className="text-2xl font-bold text-emerald-800 mb-10 text-center">
        How Qmize Missed Call Services Work
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {[
          "Customer gives a missed call on your virtual number",
          "System disconnects automatically",
          "Call details are recorded instantly",
          "Automated response is triggered",
          "Data is stored securely for reporting and follow-up"
        ].map((step, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur border border-emerald-200 rounded-2xl p-5 text-center shadow-sm"
          >
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
              {i + 1}
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              {step}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-gray-700 text-base md:text-md">
        This seamless flow ensures a smooth customer experience and
        <strong> better conversion rates</strong>.
      </p>
    </div>

    {/* QUICK START */}
    <div className="max-w-6xl mx-auto mb-24">
      <div className="bg-white/80 backdrop-blur border border-emerald-200 rounded-3xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-emerald-800 mb-6 text-center">
          Start Your Missed Call Campaign in Minutes
        </h3>

        <div className="grid gap-6 sm:grid-cols-3 text-center">
          {[
            "Choose your number",
            "Set your automation flow",
            "Go live and start receiving leads"
          ].map((item, i) => (
            <div key={i}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                ✓
              </div>
              <p className="text-gray-700 font-medium text-sm md:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-gray-700 text-base md:text-md">
          Our team supports you at every step so you can focus on growing your business.
        </p>
      </div>
    </div>

    {/* FINAL CTA */}
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-2xl md:text-3xl font-extrabold text-emerald-900">
        Start Using Missed Call Service Today with Qmize
      </h3>

      <p className="mt-5 text-gray-700 text-base md:text-lg leading-relaxed">
        Qmize empowers businesses to turn every missed call into a meaningful
        interaction. With powerful automation, detailed insights, and dependable
        infrastructure, Qmize helps you grow faster and connect smarter.
      </p>

      <p className="mt-4 text-gray-700 text-base md:text-lg">
        Choose Qmize, a reliable missed call service provider in India, and
        transform the way your business communicates with customers.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="px-8 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">
          Start Missed Call Service
        </button>
        <button className="px-8 py-3 rounded-xl border border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-50 transition">
          Talk to an Expert
        </button>
      </div>
    </div>

  </div>
</section>






<section className="relative bg-gradient-to-br from-emerald-100 via-emerald-50 to-white py-24">
  {/* soft pattern */}
  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:44px_44px]" />

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-900">
      Ready to Get More Leads From Every Missed Call?
    </h2>

    <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
      Take the smarter route to customer engagement with Qmize.
      Choose a trusted missed call service provider in India that helps you
      <strong> capture, respond, and convert instantly</strong>.
    </p>

    <h3 className="mt-6 text-xl md:text-2xl font-semibold text-emerald-800">
      Get Started with Qmize Today
    </h3>

    {/* CTA Buttons */}
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      <button className="px-8 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">
        Request a Free Demo
      </button>

      <button className="px-8 py-3 rounded-xl border border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-50 transition">
        Talk to Our Expert Now
      </button>
    </div>

  </div>
</section>








<section className="bg-white py-12">
  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
        Missed Call Service – FAQs
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Everything you need to know before getting started.
      </p>
    </div>

    <div className="space-y-6">

      {[
        {
          q: "What is a missed call service provider?",
          a: "A missed call service provider offers a virtual number that allows customers to give a missed call and trigger automated actions such as SMS, WhatsApp messages, IVR flows, or lead capture."
        },
        {
          q: "Why should businesses use missed call services?",
          a: "Missed call services help businesses collect leads, verify users, and engage customers without any cost to the caller. This makes it an effective communication tool in India, especially for campaigns targeting a wide audience."
        },
        {
          q: "Why is Qmize considered a trusted missed call service provider in India?",
          a: "Qmize is trusted due to its high call handling capacity, real-time reporting, easy integrations, and dependable infrastructure. Businesses rely on Qmize for stable performance and quick support."
        },
        {
          q: "What is the missed call service price in India?",
          a: "Pricing depends on call volume, number type, automation features, and integrations. Qmize offers flexible and transparent pricing plans for startups, growing businesses, and enterprises."
        },
        {
          q: "How quickly can a missed call service be activated with Qmize?",
          a: "Qmize enables quick activation. Most campaigns can go live shortly after setup, with full support from the Qmize team for smooth execution."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="border border-emerald-200 rounded-2xl p-6 hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold text-emerald-800">
            {item.q}
          </h3>
          <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
            {item.a}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>























</>
  )
}

export default MissedCallServices