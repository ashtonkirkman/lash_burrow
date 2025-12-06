"use client";

import Image from "next/image";
import ServiceCard from "../../components/ServiceCard";

import { useState } from "react";

const lashServices = [
  { name: "Classic Lash Set", price: "$90", description: "A natural, timeless enhancement for a soft everyday look.", image: "/services/classic.jpg" },
  { name: "Hybrid Lash Set", price: "$110", description: "A mix of classic + volume for added fullness.", image: "/services/hybrid.JPG" },
  { name: "Lash Fill", price: "$60", description: "A refill to keep your lashes looking fresh and full.", image: "/services/hybrid_6.jpg" }
];

const lashPricing = [
  { service: "Classic Lash Set", price: "$90" },
  { service: "Hybrid Lash Set", price: "$110" },
  { service: "Volume Lash Set", price: "$130" },
  { service: "Lash Fill", price: "$60" },
];

// Added brow services (user requested browServices)
const browServices = [
  { name: "Brow Shaping", price: "$30", description: "Precision shaping for clean, natural definition.", image: "/services/brow_1.jpg" },
  { name: "Brow Lamination", price: "$70", description: "Lift and set brows for a fuller, fluffy look.", image: "/services/brow_2.jpg" },
  { name: "Brow Tint", price: "$25", description: "Add depth and color for face-framing balance.", image: "/services/brow_3.jpg" },
];

// Added wax services (interpreting 'wasServices' as 'waxServices')
const waxServices = [
  { name: "Lip Wax", price: "$15", description: "Swift, gentle removal for a smooth upper lip." },
  { name: "Brow Clean-Up", price: "$20", description: "Tidy stray hairs between shaping appointments." },
  { name: "Full Face Combo", price: "$55", description: "Cheeks, chin & lip for an even, polished complexion." },
];

export default function ServicesPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-ivory text-brown px-6 py-26 space-y-24">

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90%] max-w-3xl animate-zoom">
            <Image 
              src={selectedImage} 
              alt="Service Examples"
              width={1200} 
              height={1200} 
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Page Title */}
      <h1 className="text-6xl md:text-8xl font-fuzzy-bubbles text-brown text-center">
        Services
      </h1>

      {/* Lashes Section */}
      <section className="w-full max-w-7xl text-center space-y-10">
        <h2 className="text-5xl font-fuzzy-bubbles text-brown">Lashes</h2>

        {/* 3 Lash Boxes in a Row (larger boxes + more spacing) */}
        <div className="grid gap-12 md:grid-cols-3">
          {lashServices.map((service) => (
            <div 
              key={service.name}
              className="bg-blush/20 rounded-2xl shadow-md p-6 hover:scale-[1.03] transition-transform cursor-pointer flex flex-col items-center w-full space-y-5"
              onClick={() => setSelectedImage(service.image)}
            >
              <Image 
                src={service.image}
                alt={service.name}
                width={600}
                height={400}
                className="rounded-xl object-cover h-72 w-full"
              />

              <h3 className="text-3xl font-fuzzy-bubbles">{service.name}</h3>
              <p className="text-2xl font-semibold text-brown">{service.price}</p>
              <p className="text-lg text-brown/80 max-w-md">{service.description}</p>
              <a
                href="https://cyns-lashes.square.site"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blush text-white px-4 py-2 rounded-full shadow hover:opacity-90 transition"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Brows Section */}
      <section className="w-full max-w-7xl text-center space-y-10">
        <h2 className="text-5xl font-fuzzy-bubbles text-brown">Brows</h2>

        {/* 3 Brow Boxes in a Row (larger boxes + more spacing) */}
        <div className="grid gap-12 md:grid-cols-3">
          {browServices.map((service) => (
            <div 
              key={service.name}
              className="bg-blush/20 rounded-2xl shadow-md p-6 hover:scale-[1.03] transition-transform cursor-pointer flex flex-col items-center w-full space-y-5"
              onClick={() => setSelectedImage(service.image)}
            >
              <Image 
                src={service.image}
                alt={service.name}
                width={600}
                height={400}
                className="rounded-xl object-cover h-72 w-full"
              />

              <h3 className="text-3xl font-fuzzy-bubbles">{service.name}</h3>
              <p className="text-2xl font-semibold text-brown">{service.price}</p>
              <p className="text-lg text-brown/80 max-w-md">{service.description}</p>
              <a
                href="https://cyns-lashes.square.site"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blush text-white px-4 py-2 rounded-full shadow hover:opacity-90 transition"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Waxing */}
      <section className="w-full max-w-6xl text-center space-y-10">
        <h2 className="text-5xl font-fuzzy-bubbles text-brown">Waxing</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {waxServices.map((service) => (
            <div key={service.name} className="bg-blush/20 p-8 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-fuzzy-bubbles mb-2">{service.name}</h3>
              <p className="text-lg text-brown/80">{service.description}</p>
              <p className="mt-4 font-semibold text-brown">{service.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
