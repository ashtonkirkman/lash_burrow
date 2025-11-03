"use client";

import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: "", email: "", service: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking submitted! Thank you, ${formData.name}!`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-ivory p-6 rounded-2xl shadow-sm border border-blush"
    >
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full border border-blush rounded p-2"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full border border-blush rounded p-2"
        required
      />
      <select
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        className="w-full border border-blush rounded p-2"
        required
      >
        <option value="">Select a Service</option>
        <option value="classic">Classic Lash Set</option>
        <option value="hybrid">Hybrid Lash Set</option>
        <option value="volume">Volume Lash Set</option>
        <option value="fill">Lash Fill</option>
      </select>
      <button
        type="submit"
        className="w-full bg-moss text-ivory py-2 rounded-full hover:opacity-90 transition"
      >
        Submit
      </button>
    </form>
  );
}
