import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Fullscreen background image */}
      <Image
        src="/images/wheat.jpg"
        alt="Cozy wheat field background for The Lash Burrow"
        fill
        priority
        className="object-cover"
      />
      {/* Optional subtle overlay for readability */}
      <div className="absolute inset-0 bg-ivory/60 backdrop-blur-[2px]"></div>
      {/* Centered content overlay */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 min-h-screen space-y-6">
        <h1 className="text-5xl md:text-6xl font-serif text-brown drop-shadow-sm">Welcome to The Lash Burrow</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-brown">
          Nestled in a cozy corner, The Lash Burrow offers gentle, elegant lash extensions
          and beauty treatments that make you feel at home.
        </p>
        <a
          href="/booking"
          className="bg-moss text-ivory px-8 py-4 rounded-full inline-block mt-2 hover:opacity-80 transition shadow-lg"
        >
          Book an Appointment
        </a>
      </section>
    </div>
  );
}
