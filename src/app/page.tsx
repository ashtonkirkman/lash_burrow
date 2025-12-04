import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Fullscreen background image */}
      <Image
        src="/images/wheat_3.jpg"
        alt="Cozy wheat field background for The Lash Burrow"
        fill
        priority
        className="object-fill pointer-events-none"
      />
      {/* Optional subtle overlay for readability */}
      <div className="absolute inset-0 bg-ivory/60 backdrop-blur-[2px] pointer-events-none"></div>
      {/* Centered content overlay */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 min-h-screen space-y-6">
        <h1 className="text-5xl md:text-6xl font-fuzzy-bubbles text-brown drop-shadow-sm">The Lash Burrow</h1>
        <p className="text-lg md:text-2xl max-w-5xl mx-auto text-brown font-pregnant">
          Lashes & Brows
        </p>
        <a
          href="https://cyns-lashes.square.site"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-moss text-ivory font-fuzzy-bubbles px-8 py-4 rounded-full inline-block mt-2 hover:opacity-80 transition shadow-lg"
        >
          Book an Appointment
        </a>
      </section>
      {/* --- Services Section --- */}
      <section className="relative z-10 bg-ivory text-black py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto mb-16 text-center">
          <h2 className="text-6xl md:text-7xl font-fuzzy-bubbles text-black">Services</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Lashes Column */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-fuzzy-bubbles text-black">
              Lashes
            </h2>
            <p className="text-lg md:text-xl text-black leading-relaxed mx-auto">
              Enhance your natural beauty with our gentle lash extensions.
              Whether you’re after a subtle lift or full-volume glam,
              each set is customized to complement your eye shape and
              personality—designed for comfort and effortless elegance.
            </p>
            <a
              href="/services"
              className="inline-block bg-moss text-ivory font-fuzzy-bubbles px-6 py-3 rounded-full hover:opacity-85 transition shadow-md"
            >
              Explore Lash Services
            </a>
          </div>

          {/* Brows Column */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-fuzzy-bubbles text-black">
              Brows
            </h2>
            <p className="text-lg md:text-xl text-black leading-relaxed mx-auto">
              Shape and define your brows for a naturally polished look.
              From brow lamination to precision tinting, our treatments
              help frame your face and bring balance to your features—
              perfect for every occasion.
            </p>
            <a
              href="/services"
              className="inline-block bg-moss text-ivory font-fuzzy-bubbles px-6 py-3 rounded-full hover:opacity-85 transition shadow-md"
            >
              Explore Brow Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
