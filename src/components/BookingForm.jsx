"use client";

export default function BookingForm() {
  return (
    <div className="text-center">
      <p className="mb-4 text-lg md:text-xl text-black">
        Ready to book your appointment? Click below to schedule directly!
      </p>
      <a
        href="https://cyns-lashes.square.site"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-moss text-ivory font-fuzzy-bubbles px-8 py-4 rounded-full hover:opacity-90 transition shadow-md"
      >
        Book Now
      </a>
    </div>
  );
}
