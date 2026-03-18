import React from 'react'
import Navbar2 from '../Common/Navbar2'
import Navbar1 from '../Common/Navbar1'
import Footer from '../Common/Footer'

const Refund = () => {
  return (
    <>
    
    <Navbar1/>
    <Navbar2/>





   {/* No Spam Policy Hero */}
<section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
  {/* Animated Squares */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-24 left-14 w-16 h-16 bg-emerald-300/40 animate-floatSlow" />
    <div className="absolute top-44 right-24 w-20 h-20 bg-emerald-200/30 animate-floatSlow delay-300" />
    <div className="absolute bottom-24 left-1/3 w-12 h-12 bg-emerald-400/30 animate-floatSlow delay-700" />
  </div>

  <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-emerald-900">
      No Spam Policy
    </h1>
    <p className="mt-4 text-emerald-700 max-w-2xl mx-auto">
      We follow a strict zero-tolerance policy against spam to protect users,
      networks, and legal compliance.
    </p>
  </div>
</section>






<section className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-8 space-y-10 text-gray-700">

      {/* 1 */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          1. Introduction
        </h2>
        <p>
          Qmize, including subsidiaries and affiliates (“Website”, “Website
          Owner”, “we”, “us”, or “our”), enforces a strict no-spam policy. We do
          not tolerate sending spam messages, unapproved messages, harmful
          communications, or messages that violate any applicable laws.
        </p>
      </div>

      {/* 2 */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          2. Marketing: Opt-in
        </h2>
        <p>
          When sending marketing messages or any message other than A2P
          (Application-to-Person), the receiver must have explicitly granted
          permission to receive messages on their mobile number. Sending
          messages without consent is considered spam and is strictly
          prohibited.
        </p>
      </div>

      {/* 3 */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          3. A2P Messaging
        </h2>
        <p>
          For A2P messaging, the recipient must have given prior permission or
          the message must be expected as a result of a specific user action.
          For example, sending a login verification code after a user initiates
          a login request.
        </p>
      </div>

      {/* 4 */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          4. Account Blocking
        </h2>
        <p>
          If an account is found sending spam messages, it will be blocked
          immediately. This block is permanent and cannot be reversed under
          any circumstances.
        </p>
      </div>

      {/* 5 */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          5. No Refunds
        </h2>
        <p>
          Accounts blocked due to spamming are not eligible for refunds. This
          rule is strictly enforced without exception.
        </p>
      </div>

      {/* 6 */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          6. Complaints and Account Details
        </h2>
        <p>
          If Qmize receives spam-related complaints from operators or
          recipients, each case will be investigated thoroughly. If required,
          account details may be shared with law enforcement agencies for
          criminal investigation and potential prosecution.
        </p>
      </div>

      {/* 7 */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          7. Comments or Questions
        </h2>
        <p>
          If you have any questions, concerns, or comments regarding this No
          Spam Policy, our Privacy Policy, or any related terms and conditions,
          please contact us.
        </p>
      </div>

      {/* 8 */}
      <div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-3">
          8. Examples
        </h2>
        <p className="mb-4">
          The following examples are provided for clarity. These examples are
          illustrative only and do not limit the scope of this policy.
        </p>

        <div className="space-y-4 pl-4 border-l border-emerald-200">
          <div>
            <h3 className="font-semibold text-emerald-700">
              8.1 Unlocking / iPhone / iCloud Spam
            </h3>
            <p>
              Messages related to iCloud, iPhone, iMessage, or similar content
              are strictly prohibited and will result in immediate account
              termination.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-emerald-700">
              8.2 Account Fishing
            </h3>
            <p>
              Sending messages intended to steal login credentials or imitate
              legitimate services is strictly forbidden. Such activity will
              result in immediate blocking, and account details will be shared
              with law enforcement authorities.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="border-t pt-6">
        <p className="text-sm text-gray-600">
          By using Qmize services, you agree to comply fully with this No Spam
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