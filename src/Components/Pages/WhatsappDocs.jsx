import React from 'react'
import Navbar2 from '../Common/Navbar2'
import Navbar1 from '../Common/Navbar1';
import Footer from '../Common/Footer';
 
 
 const WhatsappDocs = () => {

    function Field({ name, value, nested = false }) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center gap-2 ${nested ? "ml-4" : ""}`}>
      <span className="font-mono font-semibold text-gray-900 w-48">
        {name}
      </span>
      <span className="font-mono text-gray-600 break-all">
        {value}
      </span>
    </div>
  );
}

   return (
    <>
     <Navbar1/>
       <Navbar2/>


        <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="border-b bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            WhatsApp API - Send Campaign
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Trigger WhatsApp template campaigns programmatically for interacted customers
            using Qmize WhatsApp Business APIs.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">

        {/* TABLE OF CONTENTS */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-4">
            Table of Contents
          </h3>
          <ul className="space-y-3 text-sm font-medium text-emerald-600">
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#http-request">HTTP Request</a></li>
            <li><a href="#request-body">Request Body</a></li>
            <li><a href="#fields">Fields Description</a></li>
            <li><a href="#notes">Notes</a></li>
            <li><a href="#response">Response Body</a></li>
          </ul>
        </aside>

        {/* DOCUMENTATION BODY */}
        <div className="space-y-20">

          {/* PREREQUISITES */}
          <section id="prerequisites">
            <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Verified WhatsApp Business API account</li>
              <li>Approved WhatsApp template messages</li>
              <li>An API Campaign already created and set to <strong>Live</strong></li>
            </ul>
          </section>

          {/* HTTP REQUEST */}
          <section id="http-request">
            <h2 className="text-2xl font-bold mb-4">HTTP Request</h2>

            <div className="rounded-xl bg-gray-900 text-green-400 p-5 font-mono text-sm overflow-x-auto">
              POST https://apihub.msg24x7.com/getInteractedCustomerDetail/sendapicampaign
            </div>
          </section>

          {/* REQUEST BODY */}
          <section id="request-body">
  <h2 className="text-2xl font-bold mb-6">Request Body</h2>

  <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 space-y-5 text-sm">

    <Field name="apiKey" value="xyz" />
    <Field name="campaignName" value="xyz" />
    <Field name="destination" value="xyz" />
    <Field name="userName" value="xyz" />
    <Field name="source" value="xyz" />

    {/* Media */}
    <div className="pl-4 border-l border-gray-300 space-y-3">
      <div className="font-semibold text-gray-700">media</div>
      <Field name="url" value="xyz" nested />
      <Field name="filename" value="xyz" nested />
    </div>

    <Field name="templateParams" value='["xyz"]' />
    <Field name="tags" value='["xyz"]' />

    {/* Attributes */}
    <div className="pl-4 border-l border-gray-300 space-y-3">
      <div className="font-semibold text-gray-700">attributes</div>
      <Field name="attribute_name" value="xyz" nested />
    </div>

  </div>
</section>


          {/* FIELDS DESCRIPTION */}
          <section id="fields">
            <h2 className="text-2xl font-bold mb-6">Fields Description</h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left">Field</th>
                    <th className="px-4 py-3 text-left">Type</th>
                    <th className="px-4 py-3 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="px-4 py-3 font-medium">apiKey</td><td>string</td><td>Required. API key generated from the dashboard.</td></tr>
                  <tr><td className="px-4 py-3 font-medium">campaignName</td><td>string</td><td>Required. Campaign name (must be Live).</td></tr>
                  <tr><td className="px-4 py-3 font-medium">destination</td><td>string</td><td>Required. Mobile number with country code.</td></tr>
                  <tr><td className="px-4 py-3 font-medium">userName</td><td>string</td><td>Required. Recipient user name.</td></tr>
                  <tr><td className="px-4 py-3 font-medium">source</td><td>string</td><td>Optional. Lead source (Website, Facebook, etc).</td></tr>
                  <tr><td className="px-4 py-3 font-medium">media</td><td>object</td><td>Optional. Media URL and filename.</td></tr>
                  <tr><td className="px-4 py-3 font-medium">templateParams</td><td>array</td><td>Optional. Template placeholder values.</td></tr>
                  <tr><td className="px-4 py-3 font-medium">tags</td><td>array</td><td>Optional. Tags to assign to user.</td></tr>
                  <tr><td className="px-4 py-3 font-medium">attributes</td><td>object</td><td>Optional. Custom user attributes.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* NOTES */}
          <section id="notes">
            <h2 className="text-2xl font-bold mb-4">Notes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Optional fields can be omitted</li>
              <li>Media URL must be publicly accessible</li>
              <li>templateParams length must match template placeholders</li>
              <li>Tags must exist in the project or they will be ignored</li>
              <li>Attributes must exist in the project or they will be ignored</li>
            </ul>
          </section>

          {/* RESPONSE BODY */}
          <section id="response">
            <h2 className="text-2xl font-bold mb-4">Response Body</h2>

            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5 mb-6">
              <strong>Status:</strong> 200 OK
            </div>

            <div className="rounded-xl bg-gray-900 text-gray-100 p-6 font-mono text-sm overflow-x-auto">
{`{
  "success": true,
  "message": "Campaign sent successfully",
  "campaignId": "CMP123456789",
  "destination": "919876543210"
}`}
            </div>
          </section>

        </div>
      </section>

    </main>



       <Footer/>
    
    
    </>
   )
 }
 
 export default WhatsappDocs