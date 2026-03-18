import React from 'react'
import Navbar2 from '../Common/Navbar2'
import Navbar1 from '../Common/Navbar1';
import Footer from '../Common/Footer';






function ContactCard({ icon, title, desc, linkText, href }) {
  return (
    <div
      className="
        group rounded-2xl border border-gray-200 bg-white p-6
        shadow-sm transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
      "
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 text-xl mb-4 transition group-hover:scale-110">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-1">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mb-3">
        {desc}
      </p>

      <a
        href={href}
        className="text-sm font-semibold text-emerald-600 hover:underline"
      >
        {linkText}
      </a>
    </div>
  );
}

const Contact = () => {
  return (
   <>
   <Navbar1/>
   <Navbar2/>


<section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-100 to-white py-10">
  
  {/* Background Grid */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

  <div className="relative max-w-4xl mx-auto text-center px-6">
    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 mb-6">
      ✦
    </span>

    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
      Contact our friendly team
    </h1>

    <p className="mt-4 text-lg text-gray-600">
      Let us know how we can help.
    </p>
  </div>
</section>


<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    {/* LEFT: Google Map */}
    <div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
        Find Us on Google Maps
      </h2>

      <p className="text-gray-600 mb-6">
        GR TOWER, Near Railway Hospital, Gaya, Bihar
      </p>

      <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          title="Qmize Office Location"
          src="https://www.google.com/maps?q=Qmize%20formerly%20Msg24x7%20Gaya%20Bihar&output=embed"
          height="360"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </div>

    {/* RIGHT: Contact Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <ContactCard
        icon="💬"
        title="Chat to sales"
        desc="Speak to our friendly team."
        linkText="sales@qmize.com"
        href="mailto:sales@qmize.com"
      />

      <ContactCard
        icon="🛠️"
        title="Chat to support"
        desc="We’re here to help."
        linkText="support@qmize.com"
        href="mailto:support@qmize.com"
      />

      <ContactCard
        icon="📞"
        title="Call us"
        desc="Mon–Sat from 10:00 AM to 6:00 PM."
        linkText="+91 90310 11559"
        href="tel:+919031011559"
      />

      <ContactCard
        icon="💬"
        title="WhatsApp Us"
        desc="Quick replies on WhatsApp."
        linkText="Start WhatsApp Chat"
        href="https://wa.me/919031011559"
      />

    </div>
  </div>
</section>









<section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-3xl font-extrabold mb-4">
      Prefer WhatsApp?
    </h2>
    <p className="text-white/90 mb-6">
      Chat instantly with our team and get quick answers.
    </p>

    <a
      href="https://wa.me/919031011559"
      className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
    >
      💬 Start WhatsApp Chat
    </a>
  </div>
</section>












   <Footer/>
   </>
  )
}

export default Contact