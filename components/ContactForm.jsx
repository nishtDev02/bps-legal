"use client";
import React, { useState } from "react";

const ContactForm = ({ locale, t }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    caseType: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const caseTypes = [
    "Criminal Law",
    "Cyber Law",
    "Bail Matters",
    "FIR & Police Matters",
    "Cyber Fraud",
    "Legal Consultation",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, locale }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          caseType: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#1F2A44] mb-1.5"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-[#1F2A44]/15 bg-white text-[#1F2A44] focus:outline-none focus:border-[#C6A75E] transition"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[#1F2A44] mb-1.5"
          >
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            title="Enter a valid 10-digit mobile number"
            className="w-full px-4 py-3 rounded-md border border-[#1F2A44]/15 bg-white text-[#1F2A44] focus:outline-none focus:border-[#C6A75E] transition"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#1F2A44] mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-[#1F2A44]/15 bg-white text-[#1F2A44] focus:outline-none focus:border-[#C6A75E] transition"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="caseType"
          className="block text-sm font-medium text-[#1F2A44] mb-1.5"
        >
          Case Type
        </label>
        <select
          name="caseType"
          id="caseType"
          value={formData.caseType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-[#1F2A44]/15 bg-white text-[#1F2A44] focus:outline-none focus:border-[#C6A75E] transition"
        >
          <option value="">Select a category</option>
          {caseTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#1F2A44] mb-1.5"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-md border border-[#1F2A44]/15 bg-white text-[#1F2A44] focus:outline-none focus:border-[#C6A75E] transition"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#C6A75E] text-[#1F2A44] font-semibold px-6 py-3.5 rounded-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Book Consultation"}
      </button>

      {status === "success" && (
        <p className="text-green-700 bg-green-50 border border-green-200 rounded-md px-4 py-3 text-sm">
          Thank you! Your request has been received. We'll get back to you
          shortly.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-700 bg-red-50 border border-red-200 rounded-md px-4 py-3 text-sm">
          Something went wrong. Please try again or contact us directly via
          WhatsApp.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
