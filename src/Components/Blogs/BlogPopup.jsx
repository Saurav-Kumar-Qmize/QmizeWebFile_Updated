import { useEffect, useState } from "react";

const BlogPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-2xl p-6 max-w-md w-[90%] relative">
        <button
          onClick={() => setShow(false)}
          className="absolute right-4 top-3 text-xl"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold">
          Interested in WhatsApp Marketing?
        </h3>

        <p className="mt-3 text-gray-600">
          Schedule a free consultation with our team.
        </p>

        <button className="mt-5 w-full bg-emerald-600 text-white py-3 rounded-xl">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default BlogPopup;