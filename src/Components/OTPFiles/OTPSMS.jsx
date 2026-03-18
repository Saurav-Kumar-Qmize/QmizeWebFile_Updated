import React from 'react'
import otpSMS from "../../assets/Images/otp-sms.png"


const OTPSMS = () => {
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
                OTP SMS SERVICE
              </span>
        
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
             OTP SMS Service Provider in India 
                <span className="block text-green-600">for Fast & Secure OTP Verification</span>
              </h1>
        
              <p className="text-gray-600 text-base md:text-md leading-relaxed max-w-md text-justify">
              Powering secure digital access with high-delivery OTP SMS solutions, built for Indian networks to ensure instant verification, fraud prevention, and smooth user authentication at scale.
              </p>
    
    
             
        
              
        
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-4 py-1 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition">
                  Get Pricing
                </button>
        
                <button className="px-4 py-1 rounded-xl border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition">
                  Talk to an Expert
                </button>
              </div>
        
            </div>
        
            
        
              
                <img
                src={otpSMS}
                alt='OTP SMS Service Provider'
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



            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-12">
  {/* Soft Animated Background */}
  <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl animate-pulseSlow" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulseSlow delay-500" />

  <div className="relative max-w-6xl mx-auto px-6">
    <div className="grid gap-12 lg:grid-cols-2 items-center">

      {/* Left Content */}
      <div className="space-y-6 animate-fadeInUp">
        <span className="inline-block px-4 py-1 rounded-full bg-emerald-200 text-emerald-700 text-sm font-semibold">
          Trusted OTP SMS Service Provider in India
        </span>

        <h2 className="text-3xl md:text-4xl xl:text-4xl font-extrabold text-gray-900 leading-tight">
          Secure, Lightning-Fast OTP SMS <br className="hidden sm:block" />
          Solutions Built for India
        </h2>

        <p className="text-gray-700 text-base md:text-md leading-relaxed">
          Qmize delivers secure, lightning-fast OTP SMS solutions trusted by
          startups, enterprises, and growing digital platforms across India.
          As a leading OTP SMS service provider in India, Qmize ensures seamless
          OTP verification for user logins, transactions, and identity
          authentication every single time.
        </p>

        <p className="text-gray-700 text-base md:text-md leading-relaxed">
          With enterprise-grade infrastructure and direct carrier connections,
          Qmize empowers businesses to protect users, prevent fraud, and enhance
          customer experience through reliable OTP delivery.
        </p>

        <p className="text-gray-700 text-base md:text-md leading-relaxed">
          Digital security begins with dependable OTP delivery. Qmize operates
          as a high-performance OTP provider in India, offering scalable OTP SMS
          APIs designed to handle high traffic volumes without delays or
          failures. Whether you run a fintech platform, e-commerce store,
          healthcare app, or SaaS product, Qmize ensures OTP delivery across all
          Indian telecom networks.
        </p>

        
      </div>

      {/* Right Highlights */}
      <div className="grid gap-4 sm:grid-cols-2 animate-fadeInUp delay-200">
        {[
          "Instant OTP Delivery Across India",
          "Direct Carrier Connections",
          "Handles High Traffic at Scale",
          "Fraud-Resistant OTP Routing",
          "Works on All Indian Networks",
          "Enterprise-Grade Reliability",
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-emerald-100 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 text-xl">✔</span>
              <p className="text-gray-800 font-medium">{item}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>








<section className="relative bg-white py-12 overflow-hidden">
  {/* Soft Background Accent */}
  <div className="absolute -top-32 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulseSlow" />

  <div className="relative max-w-6xl mx-auto px-6">
    
    {/* Section Heading */}
    <div className="max-w-3xl mx-auto text-center mb-14 animate-fadeInUp">
      <h2 className="text-3xl md:text-4xl xl:text-4xl font-extrabold text-green-700">
        Why Qmize is the Best OTP SMS <br className="hidden sm:block" />
        Service Provider in India
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Built for reliability, security, and scale - trusted by Indian
        businesses that depend on instant OTP delivery.
      </p>
    </div>

    {/* Feature Grid */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      
      {/* Card 1 */}
      <div className="group bg-white border border-emerald-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition animate-fadeInUp">
        <div className="text-emerald-600 text-3xl mb-4">🎯</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Proven Expertise in OTP Messaging
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Qmize specializes exclusively in transactional and OTP SMS delivery, ensuring deep technical expertise and optimized routing for Indian operators.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-white border border-emerald-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition animate-fadeInUp delay-100">
        <div className="text-emerald-600 text-3xl mb-4">⚡</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          High Delivery Rate Across India
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
         Direct connections with major telecom providers ensure consistent and fast OTP delivery nationwide.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group bg-white border border-emerald-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition animate-fadeInUp delay-200">
        <div className="text-emerald-600 text-3xl mb-4">🔐</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Secure & Compliant Infrastructure
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
         All OTP SMS traffic follows Indian telecom regulations, DLT compliance, and data protection standards.
        </p>
      </div>

      {/* Card 4 */}
      <div className="group bg-white border border-emerald-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition animate-fadeInUp delay-300">
        <div className="text-emerald-600 text-3xl mb-4">📈</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Built for Scale
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
         From thousands to millions of OTP requests per day, Qmize handles growth without performance drops.
        </p>
      </div>

      {/* Card 5 */}
      <div className="group bg-white border border-emerald-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition animate-fadeInUp delay-400 sm:col-span-2 lg:col-span-1">
        <div className="text-emerald-600 text-3xl mb-4">💰</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Transparent & Fair Pricing
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Simple pricing with no hidden costs, ideal for startups and enterprises alike.
        </p>
      </div>

    </div>
  </div>
</section>





          <section className="relative bg-gradient-to-br from-white via-emerald-50 to-white py-12 overflow-hidden">
  {/* Soft background accent */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-200/20 rounded-full blur-3xl animate-pulseSlow" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-14 animate-fadeInUp">
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-700">
        Key Features of OTP SMS Service
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Built for speed, security, and reliability - everything your business
        needs for flawless OTP delivery across India.
      </p>
    </div>

    {/* Feature List */}
    <ul className="space-y-6 text-gray-800 text-base md:text-lg">

      <li className="flex items-start gap-4 animate-fadeInUp">
        <span className="text-emerald-600 text-xl">✔</span>
        <span>
          <strong>Instant OTP Delivery with low latency</strong> ensuring users
          receive verification codes within seconds.
        </span>
      </li>

      <li className="flex items-start gap-4 animate-fadeInUp delay-100">
        <span className="text-emerald-600 text-xl">✔</span>
        <span>
          <strong>Secure OTP Verification</strong> designed to prevent fraud,
          unauthorized access, and account misuse.
        </span>
      </li>

      <li className="flex items-start gap-4 animate-fadeInUp delay-200">
        <span className="text-emerald-600 text-xl">✔</span>
        <span>
          <strong>Reliable SMS Gateway for OTP in India</strong> with optimized
          routing across all major telecom networks.
        </span>
      </li>

      <li className="flex items-start gap-4 animate-fadeInUp delay-300">
        <span className="text-emerald-600 text-xl">✔</span>
        <span>
          <strong>Auto Retry & Failover Routing</strong> to maximize delivery
          success even during network fluctuations.
        </span>
      </li>

      <li className="flex items-start gap-4 animate-fadeInUp delay-400">
        <span className="text-emerald-600 text-xl">✔</span>
        <span>
          <strong>Real-Time Delivery Reports</strong> providing complete
          visibility into OTP status and performance.
        </span>
      </li>

      <li className="flex items-start gap-4 animate-fadeInUp delay-500">
        <span className="text-emerald-600 text-xl">✔</span>
        <span>
          <strong>Easy API Integration</strong> with developer-friendly
          documentation for quick setup.
        </span>
      </li>

      <li className="flex items-start gap-4 animate-fadeInUp delay-600">
        <span className="text-emerald-600 text-xl">✔</span>
        <span>
          <strong>24/7 Monitoring & Support</strong> to ensure uninterrupted OTP
          delivery at all times.
        </span>
      </li>

      <li className="flex items-start gap-4 animate-fadeInUp delay-700">
        <span className="text-emerald-600 text-xl">✔</span>
        <span>
          <strong>Supports Login, Signup & Transaction OTPs</strong> for complete
          authentication workflows.
        </span>
      </li>

    </ul>

  </div>
</section>



        <section className="relative bg-white py-12 overflow-hidden">
  {/* Background accent */}
  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulseSlow" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
        How OTP Verification Works with Qmize
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        A simple, secure, and lightning-fast OTP flow designed for modern
        Indian digital platforms.
      </p>
    </div>

    {/* Steps */}
    <div className="space-y-10">

      {/* Step 1 */}
      <div className="flex gap-6 items-start animate-fadeInUp">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
          1
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            User Action
          </h3>
          <p className="text-gray-600 mt-1">
            A user initiates login, signup, or a transaction on your platform.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex gap-6 items-start animate-fadeInUp delay-100">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
          2
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            OTP Generation
          </h3>
          <p className="text-gray-600 mt-1">
            Your system generates a unique, time-sensitive one-time password.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex gap-6 items-start animate-fadeInUp delay-200">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
          3
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            Send OTP SMS via API
          </h3>
          <p className="text-gray-600 mt-1">
            The OTP is instantly sent using Qmize’s secure and reliable SMS
            gateway through API integration.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="flex gap-6 items-start animate-fadeInUp delay-300">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
          4
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            User Enters OTP
          </h3>
          <p className="text-gray-600 mt-1">
            The user receives the OTP on their mobile device and enters it into
            your application.
          </p>
        </div>
      </div>

      {/* Step 5 */}
      <div className="flex gap-6 items-start animate-fadeInUp delay-400">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
          5
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            OTP Verification
          </h3>
          <p className="text-gray-600 mt-1">
            Your system verifies the OTP and successfully completes user
            authentication.
          </p>
        </div>
      </div>

    </div>

    {/* Closing Line */}
    <div className="mt-16 text-center animate-fadeInUp delay-500">
      <p className="text-lg font-semibold text-emerald-700">
        Simple, secure, and optimized for speed.
      </p>
    </div>

  </div>
</section>





        <section className="relative bg-gradient-to-br from-white via-emerald-50 to-white py-10 overflow-hidden">
  {/* Soft background accent */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulseSlow" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        How to Send OTP SMS
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Start sending secure OTP messages in minutes using Qmize’s
        developer-friendly SMS APIs.
      </p>
    </div>

    {/* Steps */}
    <div className="space-y-8 max-w-3xl mx-auto">

      <div className="flex gap-4 items-start animate-fadeInUp">
        <span className="text-emerald-600 font-bold text-xl">01</span>
        <p className="text-gray-700 text-base md:text-lg">
          <strong>Create your Qmize account</strong> to access the OTP SMS
          platform.
        </p>
      </div>

      <div className="flex gap-4 items-start animate-fadeInUp delay-100">
        <span className="text-emerald-600 font-bold text-xl">02</span>
        <p className="text-gray-700 text-base md:text-lg">
          <strong>Get API credentials instantly</strong> from your dashboard
          after account setup.
        </p>
      </div>

      <div className="flex gap-4 items-start animate-fadeInUp delay-200">
        <span className="text-emerald-600 font-bold text-xl">03</span>
        <p className="text-gray-700 text-base md:text-lg">
          <strong>Integrate OTP SMS API (REST-based)</strong> into your
          application using standard HTTP requests.
        </p>
      </div>

      <div className="flex gap-4 items-start animate-fadeInUp delay-300">
        <span className="text-emerald-600 font-bold text-xl">04</span>
        <p className="text-gray-700 text-base md:text-lg">
          <strong>Trigger OTP SMS with one API call</strong> whenever a user
          initiates login, signup, or transaction.
        </p>
      </div>

      <div className="flex gap-4 items-start animate-fadeInUp delay-400">
        <span className="text-emerald-600 font-bold text-xl">05</span>
        <p className="text-gray-700 text-base md:text-lg">
          <strong>Track delivery status in real time</strong> through reports
          and API responses.
        </p>
      </div>

    </div>

    {/* Developer Note */}
    <div className="mt-16 text-center max-w-4xl mx-auto animate-fadeInUp delay-500">
      <p className="text-gray-700 text-base md:text-lg">
        Qmize APIs are <strong>developer-friendly</strong>, well-documented, and
        compatible with <strong>all major programming languages</strong>,
        enabling fast and seamless OTP SMS integration.
      </p>
    </div>

  </div>
</section>



        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-12">
  {/* Decorative background lines */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute left-0 top-1/3 w-full h-px bg-emerald-300 animate-pulseSlow" />
    <div className="absolute left-0 top-2/3 w-full h-px bg-emerald-200 animate-pulseSlow delay-300" />
  </div>

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
      <h2 className="text-3xl md:text-4xl xl:text-4xl font-extrabold text-emerald-700">
        Industries Using Qmize OTP SMS Service
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Powering secure authentication across India’  s fastest-growing digital
        industries.
      </p>
    </div>

    {/* Industries List – Unique Split Layout */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-20">

      {[
        "Fintech & Banking",
        "E-commerce Platforms",
        "Healthcare & Telemedicine",
        "EdTech Applications",
        "SaaS & IT Products",
        "Logistics & Delivery Apps",
      ].map((industry, index) => (
        <div
          key={index}
          className="flex items-center gap-4 text-gray-800 text-base md:text-lg animate-fadeInUp"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
            ✓
          </span>
          <span className="font-medium">{industry}</span>
        </div>
      ))}

    </div>

    {/* Trust Statement */}
    <div className="max-w-4xl mx-auto text-center animate-fadeInUp delay-500">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Why Businesses Trust Qmize for OTP SMS
      </h3>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        Qmize combines <strong>technical reliability</strong>, 
        <strong> regulatory compliance</strong>, and 
        <strong> customer-first support</strong> to deliver a dependable OTP
        messaging experience. Businesses choose Qmize not just as an OTP SMS
        service provider, but as a <strong>long-term security partner</strong>
        they can rely on as they scale.
      </p>
    </div>

  </div>
</section>





      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-700 py-12">
  {/* Soft animated glow */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulseSlow" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulseSlow delay-500" />

  <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

    {/* Heading */}
    <div className="max-w-4xl mx-auto animate-fadeInUp">
      <h2 className="text-3xl md:text-4xl xl:text-4xl font-extrabold leading-tight">
        Get Started with the Best OTP SMS <br className="hidden sm:block" />
        Service Provider in India
      </h2>

      <p className="mt-6 text-emerald-100 text-base md:text-md">
        Protect your users and build trust with fast, secure OTP verification.
      </p>
    </div>

    {/* Subheading */}
    <div className="mt-6 animate-fadeInUp delay-100">
      <p className="text-lg md:text-lg font-semibold text-white">
        Start Sending OTP SMS with Qmize Today
      </p>
    </div>

    {/* CTA Buttons */}
    <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fadeInUp delay-200">
      <button className="px-6 py-3 rounded-xl bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition shadow-lg">
        Request a Free Trial or Demo
      </button>

      <button className="px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white/10 transition">
        Talk to Our OTP Messaging Experts
      </button>
    </div>

    {/* Trust Line */}
    <div className="mt-12 animate-fadeInUp delay-300">
      <p className="text-emerald-100 text-base md:text-lg font-medium">
        Qmize – Your Trusted OTP SMS Service Provider in India
      </p>
    </div>

  </div>
</section>























    
    
    </>
  )
}

export default OTPSMS