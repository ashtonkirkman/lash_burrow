"use client";

import Image from "next/image";
import ServiceCard from "../../components/ServiceCard";

import { useState } from "react";

const lashServices = [
  { name: "Classic Lash Set", price: "$90", description: "A natural, timeless enhancement for a soft everyday look.", image: "/services/hybrid.JPG" },
  { name: "Hybrid Lash Set", price: "$110", description: "A perfect mix of classic and volume lashes for added fullness.", image: "/services/hybrid.JPG" },
  { name: "Lash Fill", price: "$60", description: "Maintain your lash set with a refill of lashes to keep them looking fresh.", image: "/services/hybrid.JPG" },
  { name: "Lash Tint", price: "$16", description: "Darken your natural lashes for a mascara-like effect without the makeup.", image: "/services/hybrid.JPG" },
];

const lashPricing = [
  { service: "Classic Lash Set", price: "$90" },
  { service: "Hybrid Lash Set", price: "$110" },
  { service: "Volume Lash Set", price: "$130" },
  { service: "Lash Fill", price: "$60" },
];

// Added brow services (user requested browServices)
const browServices = [
  { name: "Brow Shaping", price: "$30", description: "Precision shaping for clean, natural definition." },
  { name: "Brow Lamination", price: "$70", description: "Lift and set brows for a fuller, fluffy look." },
  { name: "Brow Tint", price: "$25", description: "Add depth and color for face-framing balance." },
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
              alt="Service Example" 
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
      <section className="w-full max-w-6xl text-center space-y-10">
        <h2 className="text-5xl font-fuzzy-bubbles text-brown">Lashes</h2>

        {/* Lash Service Buttons */}
        <div className="grid gap-8 md:grid-cols-4">
          {lashServices.map((service) => (
            <button
              key={service.name}
              onClick={() => setSelectedImage(service.image)}
              className="bg-blush/20 p-8 rounded-2xl shadow-sm text-left hover:scale-105 transition-transform"
            >
              <h3 className="text-3xl font-fuzzy-bubbles mb-2">{service.name}</h3>
              <p className="text-lg text-brown/80">{service.description}</p>
            </button>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="mt-16 w-full max-w-3xl mx-auto">
          <h3 className="text-4xl font-fuzzy-bubbles text-brown mb-6">Pricing</h3>
          <table className="w-full text-left text-lg border-collapse">
            <tbody>
              {lashPricing.map((item, index) => (
                <tr key={index} className="border-none">
                  <td className="py-3">{item.service}</td>
                  <td className="py-3 text-right font-semibold">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Brows */}
      <section className="w-full max-w-6xl text-center space-y-10">
        <h2 className="text-5xl font-fuzzy-bubbles text-brown">Brows</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {browServices.map((service) => (
            <div key={service.name} className="bg-blush/20 p-8 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-fuzzy-bubbles mb-2">{service.name}</h3>
              <p className="text-lg text-brown/80">{service.description}</p>
              <p className="mt-4 font-semibold text-brown">{service.price}</p>
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
