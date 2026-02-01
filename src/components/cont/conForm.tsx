"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        number,
        message,
      }),
    });

    if (res.ok) {
      setSuccess("Email successfully sent ✅");
      setName("");
      setEmail("");
      setMessage("");
      setNumber("");
    } else {
      setSuccess("Something went wrong ❌");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-125 mx-auto px-2 py-6 md:p-9 rounded-xl bg-neutral-700 text-white shadow-lg ">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <h2 className="font-serif text-2xl">Get in Touch</h2>
          <p className=" text-neutral-200">
            Fill out the form below and {"I'll"} get back to you soon.
          </p>
        </div>
        <div>
          <label className="text-sm mb-1 block">Full Name</label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 rounded bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm mb-1 block">Email Address</label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 rounded bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm mb-1 block">Phone Number</label>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              placeholder="Your Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 rounded bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="text-sm mb-1 block">Message</label>
          <textarea
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-3 py-2 rounded bg-neutral-800 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition py-2 rounded font-medium"
        >
          <FaPaperPlane />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* ✅ Message OUTSIDE the form */}
      {success && (
        <p className="mt-4 text-center text-green-400 text-sm">{success}</p>
      )}
    </div>

    // <div
    //   className="max-w-112.5  mx-auto p-4 rounded-lg  bg-neutral-800
    // dark:text-white"
    // >
    //   <form onSubmit={handleSubmit} className="space-y-4 border-none">
    //     <h2 className="text-xl font-bold text-center">Contact Us</h2>
    //     <div>
    //       <label>Full Name</label>
    //       <input
    //         type="text"
    //         placeholder="Your Name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //         required
    //         className="w-full border px-3 py-2 rounded"
    //       />
    //     </div>
    //     <div>
    //       <label>Email Address</label>
    //       <input
    //         type="email"
    //         placeholder="Your Email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //         className="w-full border px-3 py-2 rounded"
    //       />
    //     </div>
    //     <div>
    //       <label>Phone Number</label>
    //       <input
    //         type="number"
    //         placeholder="Your Number"
    //         value={number}
    //         onChange={(e) => setNumber(e.target.value)}
    //         required
    //         className="w-full border px-3 py-2 rounded"
    //       />
    //     </div>

    //     <div>
    //       <label>Message</label>
    //       <textarea
    //         placeholder="Your Message"
    //         value={message}
    //         onChange={(e) => setMessage(e.target.value)}
    //         required
    //         className="w-full border px-3 py-2 rounded h-28"
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       disabled={loading}
    //       className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
    //     >
    //       {loading ? "Sending..." : "Send Message"}
    //     </button>
    //     {success && <p className="text-center text-sm mt-2">{success}</p>}
    //   </form>
    // </div>
  );
}
