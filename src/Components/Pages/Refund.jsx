import React from 'react'
import Navbar2 from '../Common/Navbar2'
import Navbar1 from '../Common/Navbar1'
import Footer from '../Common/Footer'

const Refund = () => {
  return (
    <>
    
    <Navbar1/>
    <Navbar2/>





  {/* Refund Policy Hero */}
<section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
  {/* Animated Squares */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-24 left-16 w-16 h-16 bg-emerald-300/40 animate-floatSlow" />
    <div className="absolute top-44 right-28 w-20 h-20 bg-emerald-200/30 animate-floatSlow delay-300" />
    <div className="absolute bottom-24 left-1/3 w-12 h-12 bg-emerald-400/30 animate-floatSlow delay-700" />
  </div>

  <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-emerald-900">
      Refund Policy
    </h1>
    <p className="mt-4 text-emerald-700 max-w-2xl mx-auto">
      Please read our refund policy carefully before making any purchase on
      Qmize
    </p>
  </div>
</section>







<section className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-8 space-y-10 text-gray-700">

      {/* Overview */}
      <div>
        <p>
          Qmize does not have any refund policy. All subscriptions and services
          sold on this platform are non-refundable. Once a payment is made, the
          amount cannot be returned in any form.
        </p>
      </div>

      {/* Wallet Usage */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          Wallet Usage
        </h2>
        <p>
          The amount added to your Qmize wallet can only be used for sending
          Bulk SMS and for other services provided by Qmize Funds transferred
          through debit cards, credit cards, wallets, or any other online payment
          methods are strictly non-refundable.
        </p>
      </div>

      {/* No Refund Conditions */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          No Refund Conditions
        </h2>
        <p className="mb-3">
          As the services offered by Qmize are irrevocable in nature, we do not
          offer refunds in the following cases:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Failed SMS deliveries</li>
          <li>Sender ID related services</li>
          <li>Premium Membership fees</li>
          <li>Any development project abandoned by the client</li>
          <li>SEO packages discontinued before completion</li>
          <li>Unused or remaining wallet balance</li>
        </ul>
      </div>

      {/* Testing Advice */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          Service Testing
        </h2>
        <p>
          We strongly advise users to test our services before making any
          purchase. All purchases made on Qmize are considered final and are
          governed by our strict no-refund policy.
        </p>
      </div>

      {/* Payment Finality */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          Payment Finality
        </h2>
        <p>
          Once a transaction is initiated and funds are added to your Qmize
          SMS account wallet, no refund will be issued under any circumstances.
          Wallet balance can only be utilized for sending Bulk SMS and other
          Qmize services.
        </p>
      </div>

      {/* Submission Basis */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          Submission-Based System
        </h2>
        <p>
          Qmize operates on a submission-based system. This means charges apply
          to each SMS submitted through our website or application. Failed SMS
          are also chargeable.
        </p>
      </div>

      {/* Agreement */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          Agreement to Terms
        </h2>
        <p>
          Please read our Terms and Conditions carefully before making a
          purchase. By placing an order and making payment on Qmize, you
          acknowledge that you agree to our Terms and Conditions and this
          no-refund policy.
        </p>
      </div>

      {/* Footer Note */}
      <div className="border-t pt-6">
        <p className="text-sm text-gray-600">
          By using Qmize services, you fully accept and agree to this Refund
          Policy.
        </p>
      </div>

    </div>
  </div>
</section>







<Footer/>


    
    
    
    </>
  )
}

export default Refund