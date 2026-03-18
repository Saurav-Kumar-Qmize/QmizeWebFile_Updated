import React from 'react'
import bulksmsposter from "../../assets/Images/toll-free-service.jpeg"

const TollfreeServices = () => {
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
           TOLL - FREE SERVICES
         </span>
   
         <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 leading-tight">
         Toll Free Number for Business 
           {/* <span className="block text-green-600">Provider WorldWide</span> */}
         </h1>
   
         <p className="text-gray-600 text-base md:text-md leading-relaxed max-w-md">
         Get a toll-free number for your business and convert more calls into customers with easy access, zero call cost, and higher response rates.
         </p>
   
         
   
         {/* CTA Buttons */}
         <div className="flex flex-wrap gap-4 pt-4">
           <a href='https://wa.me/9031011559' target='_blank'><button className="cursor-pointer px-4 py-1 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition">
             Get Toll Free Number
           </button></a>
   
            <a href='https://wa.me/9031011559' target='_blank'><button className="cursor-pointer px-4 py-1 rounded-xl border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition">
             Talk to an Expert
           </button></a>
         </div>
   
       </div>
   
       
   
         
           <img
           src={bulksmsposter}
           alt='Toll Free Service Provider'
           className='ml-20 h-80 md:h-[400px] object-contain rounded-4xl'
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
  {/* soft background accents */}
  <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-emerald-200/40 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-emerald-300/30 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-6">
    <div className="grid gap-14 lg:grid-cols-2 items-center">

      {/* Left Content */}
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-emerald-900 leading-tight">
          Grow Customer Trust with Qmize
        </h2>

        <p className="mt-6 text-gray-700 text-base md:text-md leading-relaxed">
          Qmize offers a <strong>reliable and affordable toll free number</strong>{" "}
          for businesses to improve customer engagement, brand credibility, and
          sales performance. A professional <strong>1800 toll free number</strong>{" "}
          allows customers to contact your business without any call charges,
          resulting in more inquiries and higher conversions.
        </p>

        <p className="mt-4 text-gray-700 text-base md:text-md leading-relaxed">
          Businesses across India trust Qmize as a leading toll free number
          service provider for seamless communication and
          <strong> enterprise-grade call management solutions</strong>.
        </p>
      </div>

      {/* Right Highlight Box */}
      <div className="bg-white/70 backdrop-blur-xl border border-emerald-200 rounded-3xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-emerald-800 mb-4">
          What is a Toll Free Number?
        </h3>

        <p className="text-gray-700 text-base md:text-md leading-relaxed">
          A toll free telephone number is a business phone number that allows
          customers to call without paying any charges. Calls made to toll free
          numbers such as <strong>1800 numbers</strong> are billed to the
          business instead of the caller.
        </p>

        <p className="mt-4 text-gray-700 text-base md:text-md leading-relaxed">
          Toll free numbers are widely used by customer support teams, sales
          departments, service centers, and enterprises that want to establish a
          strong and trusted national presence.
        </p>
      </div>

    </div>
  </div>
</section>






<section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-white py-12">
  {/* subtle background accents */}
  <div className="absolute -top-24 right-0 w-[380px] h-[380px] bg-emerald-200/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-emerald-300/20 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
        How Business Toll Free Service Works
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        A simple, reliable system that ensures customers connect with your
        business effortlessly.
      </p>
    </div>

    {/* Steps */}
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

      {/* Step 1 */}
      <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-emerald-100">
        <span className="absolute -top-4 left-6 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Step 1
        </span>
        <h3 className="mt-6 text-lg font-semibold text-emerald-800">
          Customer Dials Your Toll Free Number
        </h3>
        <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
          Customers call your <strong>1800 toll free number</strong> without
          paying any call charges, making it easy and comfortable for them to
          reach your business.
        </p>
      </div>

      {/* Step 2 */}
      <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-emerald-100">
        <span className="absolute -top-4 left-6 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Step 2
        </span>
        <h3 className="mt-6 text-lg font-semibold text-emerald-800">
          Call Connects to Your Business
        </h3>
        <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
          The call is automatically routed to your preferred business endpoint
          such as a <strong>mobile, landline, or call center</strong>.
        </p>
      </div>

      {/* Step 3 */}
      <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-emerald-100">
        <span className="absolute -top-4 left-6 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Step 3
        </span>
        <h3 className="mt-6 text-lg font-semibold text-emerald-800">
          Smart IVR Call Routing
        </h3>
        <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
          Calls can be routed through <strong>IVR menus</strong> to connect
          customers with the correct department or support team instantly.
        </p>
      </div>

      {/* Step 4 */}
      <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-emerald-100">
        <span className="absolute -top-4 left-6 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Step 4
        </span>
        <h3 className="mt-6 text-lg font-semibold text-emerald-800">
          Monitor & Optimize Calls
        </h3>
        <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
          Track call details, listen to recordings, and measure performance
          using an <strong>online analytics dashboard</strong>.
        </p>
      </div>

    </div>

    {/* Closing Statement */}
    <div className="max-w-3xl mx-auto mt-16 text-center">
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        This system enables businesses to handle customer calls in a professional
        manner, ensuring that every inquiry is addressed efficiently and
        nothing is overlooked.
      </p>
    </div>

  </div>
</section>





<section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-12">
  {/* soft background accents */}
  <div className="absolute -top-24 left-0 w-[360px] h-[360px] bg-emerald-200/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-emerald-300/20 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
        Why Choose Qmize as Your Toll Free Number Provider
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Trusted by startups, SMEs, and large enterprises across India.
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid gap-12 md:grid-cols-2 items-center">

      {/* Left Content */}
      <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
        <p>
          Qmize is a trusted <strong>toll free number provider in India</strong>,
          offering scalable and cost-effective solutions designed to support
          businesses of all sizes.
        </p>
        <p>
          From startups to large enterprises, Qmize helps organizations improve
          customer engagement while maintaining full control over communication
          costs.
        </p>
      </div>

      {/* Right Reasons */}
      <div className="bg-white/70 backdrop-blur-xl border border-emerald-200 rounded-3xl p-8 shadow-lg">
        <h3 className="text-xl font-bold text-emerald-800 mb-6">
          Reasons Businesses Choose Qmize
        </h3>

        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            Reliable call connectivity across India
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            Competitive 1800 toll free number pricing in India
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            Easy number activation with quick setup
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            Advanced analytics and detailed call tracking
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            Dedicated and responsive customer support
          </li>
        </ul>
      </div>

    </div>

    {/* Closing Line */}
    <div className="max-w-4xl mx-auto mt-16 text-center">
      <p className="text-gray-700 text-base md:text-lg">
        Qmize focuses on helping businesses deliver better customer experiences
        while keeping communication costs under control.
      </p>
    </div>

  </div>
</section>





<section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-black py-12">
  {/* glow accents */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-6 text-white">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold">
        Features of Toll Free Number for Business
      </h2>
      <p className="mt-4 text-emerald-100 text-base md:text-lg">
        Qmize provides feature-rich toll free number services designed for modern,
        growing businesses.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {/* Feature */}
      {[
        {
          title: "Multi-Level IVR System",
          desc: "Guide callers through intelligent IVR menus to reach the right department quickly."
        },
        {
          title: "Call Forwarding to Multiple Numbers",
          desc: "Route incoming calls to multiple mobiles, landlines, or call centers seamlessly."
        },
        {
          title: "Real-Time Call Analytics & Reports",
          desc: "Track call volume, duration, performance, and trends through live dashboards."
        },
        {
          title: "Call Recording & Quality Monitoring",
          desc: "Record calls securely to improve service quality and team performance."
        },
        {
          title: "Missed Call Alerts & Notifications",
          desc: "Get instant alerts for missed calls so no customer inquiry is overlooked."
        },
        {
          title: "Time & Location-Based Call Routing",
          desc: "Automatically route calls based on business hours or caller location."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 hover:border-emerald-400 transition"
        >
          <h3 className="text-lg font-semibold text-emerald-300 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

    {/* Closing Line */}
    <div className="max-w-4xl mx-auto mt-16 text-center">
      <p className="text-emerald-100 text-base md:text-lg">
        These features ensure that no customer call is missed and every
        interaction is optimized for better engagement and conversions.
      </p>
    </div>

  </div>
</section>




<section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-emerald-100 py-12">
  {/* soft background highlights */}
  <div className="absolute -top-32 right-0 w-[420px] h-[420px] bg-emerald-200/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-emerald-300/20 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
        Benefits of Toll Free Number
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        A toll free number helps businesses connect better, build trust, and
        grow faster across India.
      </p>
    </div>

    {/* Benefits Grid */}
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Builds Customer Trust",
          desc: "A toll free number enhances brand credibility and reassures customers that your business is professional and reliable."
        },
        {
          title: "Encourages More Calls",
          desc: "Customers are more likely to call when there are no call charges, leading to more inquiries and conversations."
        },
        {
          title: "Nationwide Business Presence",
          desc: "A single 1800 number helps you establish a strong national presence without opening offices in multiple locations."
        },
        {
          title: "Improves Support Efficiency",
          desc: "Centralized call handling and IVR routing ensure faster resolution and better customer support experiences."
        },
        {
          title: "Boosts Sales & Lead Generation",
          desc: "Higher call volumes translate into more qualified leads and improved sales conversion opportunities."
        },
        {
          title: "Professional Setup Without Cost",
          desc: "Get enterprise-grade call handling without investing in expensive infrastructure or hardware."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/80 backdrop-blur border border-emerald-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition"
        >
          <h3 className="text-lg font-semibold text-emerald-800 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

    {/* Closing Statement */}
    <div className="max-w-4xl mx-auto mt-16 text-center">
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        Businesses using toll free numbers consistently see
        <strong> higher customer engagement</strong> and
        <strong> improved satisfaction</strong> by making communication easier
        and more accessible.
      </p>
    </div>

  </div>
</section>





<section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-12">
  {/* soft background accents */}
  <div className="absolute -top-24 left-0 w-[360px] h-[360px] bg-emerald-200/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-emerald-300/20 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
        Who Can Use Toll Free Numbers?
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Toll free numbers are suitable for businesses of all sizes and across
        every major industry.
      </p>
    </div>

    {/* Industries Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {[
        "Startups and Growing Businesses",
        "E-commerce Companies",
        "Customer Support Centers",
        "Healthcare and Education Providers",
        "Real Estate and Travel Agencies",
        "Large Enterprises and Corporate Offices"
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-4 bg-white/80 backdrop-blur border border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
        >
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
            ✓
          </span>
          <p className="text-gray-800 text-sm md:text-base font-medium">
            {item}
          </p>
        </div>
      ))}

    </div>

    {/* Closing Line */}
    <div className="max-w-4xl mx-auto mt-16 text-center">
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        Any business that wants to improve customer communication, accessibility,
        and trust can benefit from using a
        <strong> toll free telephone number</strong>.
      </p>
    </div>

  </div>
</section>




      <section className="relative bg-gradient-to-br from-white via-emerald-50 to-emerald-100 py-12">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
        How to Get a Toll Free Number in India
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Getting a toll free number for your business with Qmize is simple, fast,
        and hassle-free.
      </p>
    </div>

    {/* Steps */}
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

      <div className="bg-white/80 backdrop-blur border border-emerald-200 rounded-3xl p-6 shadow-sm">
        <span className="text-emerald-600 font-bold">Step 1</span>
        <h3 className="mt-2 font-semibold text-emerald-800">
          Choose Your 1800 Toll Free Number
        </h3>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          Select your preferred 1800 toll free number for customer communication.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur border border-emerald-200 rounded-3xl p-6 shadow-sm">
        <span className="text-emerald-600 font-bold">Step 2</span>
        <h3 className="mt-2 font-semibold text-emerald-800">
          Select a Pricing Plan
        </h3>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          Choose a suitable pricing plan based on your call volume and usage.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur border border-emerald-200 rounded-3xl p-6 shadow-sm">
        <span className="text-emerald-600 font-bold">Step 3</span>
        <h3 className="mt-2 font-semibold text-emerald-800">
          Submit Business Documents
        </h3>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          Provide basic business documents such as proof of address and business
          registration (for example, GST in India).
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur border border-emerald-200 rounded-3xl p-6 shadow-sm">
        <span className="text-emerald-600 font-bold">Step 4</span>
        <h3 className="mt-2 font-semibold text-emerald-800">
          Configure Call Routing & IVR
        </h3>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          Set up call forwarding rules, IVR menus, and routing preferences.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur border border-emerald-200 rounded-3xl p-6 shadow-sm">
        <span className="text-emerald-600 font-bold">Step 5</span>
        <h3 className="mt-2 font-semibold text-emerald-800">
          Activate & Start Receiving Calls
        </h3>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          Activate your toll free number and start receiving customer calls
          instantly.
        </p>
      </div>

    </div>

    {/* Note */}
    <div className="max-w-4xl mx-auto mt-14 text-center">
      <p className="text-gray-700 text-base md:text-lg">
        Qmize offers <strong>transparent 1800 toll free number pricing in India</strong>{" "}
        with no hidden costs.
      </p>
    </div>

  </div>
</section>





<section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 py-12 text-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold">
        1800 Toll Free Number Price in India
      </h2>
      <p className="mt-4 text-emerald-100 text-base md:text-lg">
        Flexible pricing plans designed to suit businesses of every size.
      </p>
    </div>

    {/* Pricing Highlights */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6">
        <h3 className="text-lg font-semibold text-emerald-300">
          Affordable Startup Plans
        </h3>
        <p className="mt-2 text-gray-200 text-sm md:text-base">
          Cost-effective options designed for startups and small businesses.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6">
        <h3 className="text-lg font-semibold text-emerald-300">
          Scalable Business Plans
        </h3>
        <p className="mt-2 text-gray-200 text-sm md:text-base">
          Flexible plans that grow with your business as call volumes increase.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6">
        <h3 className="text-lg font-semibold text-emerald-300">
          Customized Enterprise Solutions
        </h3>
        <p className="mt-2 text-gray-200 text-sm md:text-base">
          Tailored pricing and features for large enterprises and call centers.
        </p>
      </div>

    </div>

    {/* Closing CTA */}
    <div className="max-w-4xl mx-auto mt-16 text-center">
      <p className="text-emerald-100 text-base md:text-lg">
        Contact Qmize to get the best pricing from a reliable toll free number
        service provider in India.
      </p>
    </div>

  </div>
</section>






<section className="relative bg-gradient-to-br from-emerald-100 via-emerald-50 to-white py-12">
  {/* soft accents */}
  <div className="absolute -top-24 left-0 w-[360px] h-[360px] bg-emerald-200/40 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-emerald-300/30 rounded-full blur-3xl" />

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-900">
      Get Started with Qmize Today
    </h2>

    <p className="mt-6 text-gray-700 text-base md:text-md leading-relaxed">
      Qmize empowers businesses with a powerful toll free number solution that
      enhances customer communication and drives growth. Choose Qmize as your
      trusted toll free number provider in India and take your business
      connectivity to the next level.
    </p>

    <p className="mt-4 text-gray-700 text-base md:text-md">
      Request a demo or get your toll free number for business now.
    </p>

    

  </div>
</section>








   
   
   
   
   </>
  )
}

export default TollfreeServices