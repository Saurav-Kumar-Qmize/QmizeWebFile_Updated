import React, { useState } from "react";
import axios from "axios";

const FormContact = () => {

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  service: "",
  description: "",
});
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState(""); // success | error


const handleSubmit = async (e) => {
  e.preventDefault();


  setLoading(true);
  setMessage("");


  try {
    const payload = {
      apiKey:
        "0TV8-CmAiDid5fNDGv3oM39otdbehxJppFsuMAjGKP7tWC-cgFwW65uDiJW8KK0ppxQo8OnIoQWB7MwqaJam76jk7NSutERJibp6ILGo5a73",

      campaignName: "qmize_contact_form",

      destination: formData.phone,

      userName: "MSG24x7 Communications (DEMO)",

      templateParams: [
        formData.name,
        formData.service,
      ],

      source: "Imported",

      media: {
        url: "https://usageuploading-m.s3.ap-south-1.amazonaws.com/68d41bc570ec1f5abff2488f/1779581107348-ChatGPT Image May 24, 2026, 05_34_09 AM.png",
        filename: "sample_media",
      },

      buttons: [],
      carouselCards: [],
      location: {},

      attributes: {},

      paramsFallbackValue: {
        FirstName: "user",
      },
    };

    const response = await axios.post(
      "https://apihub.msg24x7.com/getInteractedCustomerDetail/sendapicampaign",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);

    setMessage("✅ Form submitted successfully!");
    setMessageType("success");
    setTimeout(() => {
  setMessage("");
}, 5000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      description: "",
    });
  } catch (error) {
    console.error(error);

    setMessage("❌ Failed to submit form. Please try again.");
    setMessageType("error");
  }
  finally {
    setLoading(false);
  }
};

  return (
    <>

     {/* CONTACT SECTION */}
         <section className="relative bg-gradient-to-b from-emerald-900 to-emerald-800 text-white overflow-hidden">
           {/* Floating decorative SVG icons (top-left & bottom-right) */}
           <svg className="absolute -top-10 -left-8 w-36 opacity-10" viewBox="0 0 200 200">
             <circle cx="100" cy="100" r="100" fill="white" />
           </svg>
           <svg className="absolute -bottom-10 -right-8 w-44 opacity-8" viewBox="0 0 200 200">
             <rect x="0" y="0" width="200" height="200" rx="40" fill="white" />
           </svg>
   
           <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
               {/* Left: Headline + benefits */}
               <div className="space-y-6">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                   Do you have a project in mind?
                 </h2>
                 <p className="text-gray-200 max-w-xl leading-relaxed">
                   Tell us about your requirements and we'll get back within one business day.
                   We help with WhatsApp Business API, digital marketing, websites and more.
                 </p>
   
                 {/* feature chips */}
                 <div className="flex flex-wrap gap-3 mt-4">
                   <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm">
                     {/* SVG icon */}
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-95">
                       <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                     Business Messaging
                   </span>
   
                   <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                       <path d="M3 12h18M12 3v18" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                     WhatsApp Business API
                   </span>
   
                   <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                       <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.6"/>
                       <path d="M19 12a7 7 0 10-14 0" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                     </svg>
                     Social Media
                   </span>
                 </div>
               </div>
   
               {/* Right: Form card */}
               <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-emerald-900">
       <form
  onSubmit={handleSubmit}
  className="space-y-5"
>
  {/* Name + Email */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Full Name
      </label>

      <input
        required
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        className="
          w-full
          px-4 py-3
          rounded-xl
          border border-gray-300
          outline-none
          transition-all duration-300
          focus:border-emerald-500
          focus:ring-4
          focus:ring-emerald-200
        "
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Email Address
      </label>

      <input
        required
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        className="
          w-full
          px-4 py-3
          rounded-xl
          border border-gray-300
          outline-none
          transition-all duration-300
          focus:border-emerald-500
          focus:ring-4
          focus:ring-emerald-200
        "
      />
    </div>

  </div>

  {/* WhatsApp */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      WhatsApp Number
    </label>

    <input
      required
      type="tel"
      placeholder="Enter Your WhatsApp number"
      value={formData.phone}
      onChange={(e) =>
        setFormData({ ...formData, phone: e.target.value })
      }
      className="
        w-full
        px-4 py-3
        rounded-xl
        border border-gray-300
        outline-none
        transition-all duration-300
        focus:border-emerald-500
        focus:ring-4
        focus:ring-emerald-200
      "
    />
  </div>

  {/* Service */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Select Service
    </label>

    <select
      required
      value={formData.service}
      onChange={(e) =>
        setFormData({ ...formData, service: e.target.value })
      }
      className="
        w-full
        px-4 py-3
        rounded-xl
        border border-gray-300
        outline-none
        transition-all duration-300
        focus:border-emerald-500
        focus:ring-4
        focus:ring-emerald-200
      "
    >
      <option value="">Choose Service</option>

      <option value="WhatsApp Business API">
        WhatsApp Business API Service
      </option>

      <option value="Bulk SMS">
        Bulk SMS Services
      </option>

      <option value="Digital Marketing">
        Digital Marketing Services
      </option>
    </select>
  </div>

  {/* Description */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
    Description
    </label>

    <textarea
      rows={5}
      placeholder="Desc. if you have..."
      value={formData.description}
      onChange={(e) =>
        setFormData({
          ...formData,
          description: e.target.value,
        })
      }
      className="
        w-full
        px-4 py-3
        rounded-xl
        border border-gray-300
        outline-none
        resize-none
        transition-all duration-300
        focus:border-emerald-500
        focus:ring-4
        focus:ring-emerald-200
      "
    />
  </div>

  {/* Button */}
 <button
  type="submit"
  disabled={loading}
  className="
    w-full
    cursor-pointer
    bg-emerald-700
    hover:bg-emerald-800
    disabled:bg-emerald-400
    disabled:cursor-not-allowed
    text-white
    py-3.5
    rounded-xl
    font-semibold
    transition-all
    duration-300
  "
>
  {loading ? (
    <div className="flex items-center justify-center gap-2">
      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      Sending...
    </div>
  ) : (
    "Submit Request →"
  )}
</button>
{message && (
  <div
    className={`text-sm font-medium text-center mt-3 ${
      messageType === "success"
        ? "text-green-600"
        : "text-red-600"
    }`}
  >
    {message}
  </div>
)}
</form>
               </div>
             </div>
           </div>
   
           {/* curved divider SVG */}
           <div className="-mt-6">
             <svg viewBox="0 0 1440 120" className="w-full block">
               <path d="M0 40 C 360 120 1080 -40 1440 40 L1440 120 L0 120 Z" fill="#050B1E" />
             </svg>
           </div>
         </section>

    </>
  )
}

export default FormContact