import Image from "next/image";
import ServiceCard from "../../components/ServiceCard";

const lashServices = [
  { name: "Classic Lash Set", price: "$90", description: "A natural, timeless enhancement for a soft everyday look." },
  { name: "Hybrid Lash Set", price: "$110", description: "A perfect mix of classic and volume lashes for added fullness." },
  { name: "Volume Lash Set", price: "$130", description: "For a bold, luxurious lash look with maximum dimension." },
];

const lashPricing = [
  { service: "Classic Lash Set", price: "$90" },
  { service: "Hybrid Lash Set", price: "$110" },
  { service: "Volume Lash Set", price: "$130" },
  { service: "Lash Fill", price: "$60" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-ivory text-brown px-6 py-12 space-y-0">
      
      {/* Page Title */}
      <h1 className="text-6xl md:text-8xl font-caveat text-brown text-center">
        Services
      </h1>

      {/* Lashes Section */}
      <section className="w-full max-w-6xl text-center space-y-10">

        {/* Lash Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/lash.png"
            alt="Lash Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        <h2 className="text-5xl font-caveat text-brown">Lashes</h2>

        {/* Lash Service Options */}
        <div className="grid gap-8 md:grid-cols-3">
          {lashServices.map((service) => (
            <div
              key={service.name}
              className="bg-blush/20 p-8 rounded-2xl shadow-sm"
            >
              <h3 className="text-3xl font-caveat mb-2">{service.name}</h3>
              <p className="text-lg text-brown/80">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="mt-16 w-full max-w-3xl mx-auto">
          <h3 className="text-4xl font-caveat text-brown mb-6">Pricing</h3>
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
    </div>
  );
}
