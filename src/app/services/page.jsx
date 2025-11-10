import ServiceCard from "../../components/ServiceCard";

const services = [
  { name: "Classic Lash Set", price: "$90", description: "Natural, elegant look." },
  { name: "Hybrid Lash Set", price: "$110", description: "A blend of classic and volume." },
  { name: "Volume Lash Set", price: "$130", description: "Full, dramatic style." },
  { name: "Lash Fill", price: "$60", description: "Refresh your current set." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.name} {...s} />
        ))}
      </section>
    </div>
  );
}