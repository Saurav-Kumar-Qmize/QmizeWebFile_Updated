import React from 'react'

const Dltsupportservices = () => {
  return (
  <>
  


  <section className="w-full bg-gradient-to-r from-emerald-200 via-white to-emerald-200 py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-900">
      DLT NEW TRAI Rules
    </h1>
  </div>
</section>





    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 py-12">
  {/* subtle background grid */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-1/4 left-0 w-full h-px bg-emerald-300" />
    <div className="absolute top-2/4 left-0 w-full h-px bg-emerald-300" />
  </div>

  <div className="relative max-w-6xl mx-auto px-6 text-white">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold">
        TRAI Guidelines & DLT Compliance
      </h2>
      <p className="mt-4 text-emerald-100 text-base md:text-lg">
        Strengthening transparency, security, and accountability in SMS
        communication across India.
      </p>
    </div>

    {/* Content Flow */}
    <div className="space-y-12 text-emerald-50 text-base md:text-lg leading-relaxed">

      {/* Block 1 */}
      <div className="flex gap-5 items-start">
        <span className="text-emerald-400 text-2xl font-bold">01</span>
        <p>
          The <strong>Telecom Regulatory Authority of India (TRAI)</strong> has
          formulated strict guidelines to enhance control, prevent fraudulent
          practices, and provide greater safety to end customers receiving SMS
          communications.
        </p>
      </div>

      {/* Block 2 */}
      <div className="flex gap-5 items-start">
        <span className="text-emerald-400 text-2xl font-bold">02</span>
        <p>
          As per the revised TRAI guidelines, all businesses intending to
          communicate with their customers via SMS must
          <strong> register themselves with telecom operators</strong> before
          sending any messages.
        </p>
      </div>

      {/* Block 3 */}
      <div className="flex gap-5 items-start">
        <span className="text-emerald-400 text-2xl font-bold">03</span>
        <p>
          Businesses and Bulk SMS Service Providers are directly accountable to
          telecom operators, who in turn are accountable to
          <strong> TRAI</strong>. This ensures end-to-end responsibility and
          regulatory oversight.
        </p>
      </div>

      {/* Block 4 */}
      <div className="flex gap-5 items-start">
        <span className="text-emerald-400 text-2xl font-bold">04</span>
        <p>
          The entire ecosystem is governed using
          <strong> Blockchain technology</strong>, also known as
          <strong> Distributed Ledger Technology (DLT)</strong>, where all panel
          entities are interlinked to maintain transparency, traceability, and
          tamper-proof records.
        </p>
      </div>

    </div>

  </div>
</section>





    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-12">
  {/* soft background blobs */}
  <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-emerald-200/40 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/40 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
        Commercial Communications Ecosystem
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Roles and responsibilities of the five entities operating on the
        Blockchain-based DLT ecosystem.
      </p>
    </div>

    {/* Glass Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {/* Mobile Subscriber */}
      <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Mobile Subscriber
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          The mobile subscriber is the end customer who receives SMS messages.
          Subscribers have full control to provide consent for promotional
          messages, opt out at any time, set communication preferences, and
          register complaints against unwanted or spam messages.
        </p>
      </div>

      {/* Principal Entity */}
      <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Principal Entity
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          The Principal Entity is the business or organisation sending SMS to
          customers. This includes individuals, sole proprietors, partnership
          firms, private/public companies, or government entities. As per TRAI
          DLT rules, every Principal Entity must register with telecom operators
          on the DLT platform.
        </p>
      </div>

      {/* Telemarketer */}
      <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Telemarketer
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Telemarketers are Bulk SMS Service Providers from whom businesses
          purchase SMS credits. As per updated TRAI guidelines, every
          telemarketer must be registered on the DLT platform to send messages
          on behalf of Principal Entities.
        </p>
      </div>

      {/* Access Provider */}
      <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Access Provider
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Access Providers are telecom operators such as Vodafone, Idea, Airtel,
          MTNL, and BSNL. They connect directly with TRAI and play a key role in
          implementing and enforcing regulatory compliance.
        </p>
      </div>

      {/* Regulator */}
      <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-6 shadow-lg sm:col-span-2 lg:col-span-1">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Regulator
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          TRAI acts as the regulator responsible for auditing, governing, and
          enforcing compliance across the ecosystem. Its role is to safeguard
          customer interests and prevent fraudulent or misleading
          communication practices.
        </p>
      </div>

    </div>

  </div>
</section>






    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-12">
  {/* soft background accents */}
  <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-emerald-200/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/30 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
        What Has Changed in the New Updated TRAI Regulations for Bulk SMS?
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        A complete overview of the latest TRAI updates that redefine how Bulk
        SMS communication works in India.
      </p>
    </div>

    {/* Content Blocks */}
    <div className="space-y-12 text-gray-700 text-base md:text-lg leading-relaxed">

      <div>
        <h3 className="font-semibold text-emerald-800 mb-2">
          Entity and Telemarketer Registration
        </h3>
        <p>
          Every Business (Principal Entity) and Bulk SMS Service Provider
          (Telemarketer) must now register with Telecom Operators to send SMS.
          Earlier, only Bulk SMS Providers were required to register with TRAI,
          and business firms did not require registration. Under the updated
          rules, both businesses and telemarketers must register on the Telecom
          Operator’s DLT platform.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-emerald-800 mb-2">
          Header and Template Registration
        </h3>
        <p>
          Sender IDs are now referred to as <strong>Headers</strong>. Each header
          must be registered and approved by Telecom Operators. Similarly, every
          SMS template must also be approved directly by operators. Bulk SMS
          Providers no longer control sender IDs or template approvals, and all
          approved headers and templates are visible on the DLT panel.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-emerald-800 mb-2">
          Message Type Classification
        </h3>
        <p>
          Earlier, SMS was categorized into two routes: Transactional and
          Promotional. The updated regulations introduce three routes:
          <strong> Transactional, Promotional, and Service</strong> (Implicit
          and Explicit). Transactional routes are now reserved only for banks
          for OTPs. Service-related informational messages fall under Implicit,
          while Explicit messages are sent only when customers opt in. General
          promotional messages are delivered only to Non-DND numbers.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-emerald-800 mb-2">
          Customer Consent
        </h3>
        <p>
          Customers now have complete control over their consent. They can view,
          manage, and withdraw consent for receiving messages through a single
          dashboard at any time, ensuring transparency and user control.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-emerald-800 mb-2">
          Customer Preferences
        </h3>
        <p>
          Previously, customers could only choose between DND and Non-DND. The
          new rules introduce time-based preferences, allowing customers to
          receive promotional messages at specific times or days. Even DND users
          can opt to receive messages from selected businesses if they wish.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-emerald-800 mb-2">
          Scrubbing Function
        </h3>
        <p>
          A real-time scrubbing function filters numbers based on customer
          preferences. If consent is withdrawn before a scheduled campaign, the
          message will not be delivered. All filtering is done instantly, and
          results are visible immediately.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-emerald-800 mb-2">
          Complaint Management
        </h3>
        <p>
          Customers can now register complaints for violations of consent or
          preferences through multiple channels such as SMS and calls, further
          enhancing system accountability and safety.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-emerald-800 mb-2">
          Interoperability Between Telecom Service Providers
        </h3>
        <p>
          All Telecom Service Providers can view entity registrations,
          telemarketer details, headers, and templates across the DLT network.
          Information shared by businesses and SMS providers is accessible
          across operators at any time.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-emerald-800 mb-2">
          100% Traceability
        </h3>
        <p>
          The entire system operates on Distributed Ledger Technology (DLT),
          powered by Blockchain. Every action is recorded, shared across the
          network, and can be traced at any time.
        </p>
      </div>

    </div>

    {/* Closing CTA */}
    <div className="mt-16 text-center">
      <p className="text-lg font-semibold text-emerald-900">
        Try us. You will love the QMIZE experience.
      </p>
    </div>

  </div>
</section>







<section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-12">
  {/* soft background accents */}
  <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-emerald-200/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200/30 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto mb-14">
      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
        Different DLT Operators in India
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Videocon, Vodafone Idea, Airtel, BSNL, MTNL, Jio
      </p>
    </div>

    {/* Content */}
    <div className="space-y-8 text-gray-700 text-base md:text-lg leading-relaxed">

      <p>
        As per the revised <strong>TRAI guidelines</strong>, DLT registration is
        mandatory for every business and entity in order to continue sending SMS
        to their clients.
      </p>

      <p>
        Different telecom operators such as
        <strong>
          {" "}
          Videocon, Tata Teleservices, Vodafone Idea, Airtel, BSNL, MTNL, and Jio
        </strong>{" "}
        have provided their own DLT platforms for registration. Businesses can
        choose to register on <strong>any one or multiple DLT platforms</strong>
        based on their requirements.
      </p>

      <div className="bg-white/70 backdrop-blur rounded-2xl border border-emerald-200 p-6">
        <h3 className="font-semibold text-emerald-800 mb-3">
          DLT Registration Fees
        </h3>
        <p>
          For registering on a DLT SMS platform, the client needs to pay
          <strong> INR 5,900/-</strong> to the
          <strong> first telecom operator</strong> with whom they register.
        </p>
        <p className="mt-3">
          If you wish to register with additional operators, no additional
          registration fee is required.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur rounded-2xl border border-emerald-200 p-6">
        <h3 className="font-semibold text-emerald-800 mb-3">
          Multiple Operator Registration
        </h3>
        <p>
          When registering with other telecom operators, businesses only need to
          complete <strong>Sender ID registration and KYC</strong>. There is no
          need to pay the registration amount again for additional operators.
        </p>
      </div>

    </div>

  </div>
</section>

















  
  
  
  
  
  
  
  </>
  )
}

export default Dltsupportservices