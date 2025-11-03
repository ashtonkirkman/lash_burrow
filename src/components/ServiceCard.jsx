export default function ServiceCard({ name, price, description }) {
  return (
    <div className="bg-ivory p-6 rounded-2xl shadow-sm border border-blush hover:shadow-md transition">
      <h3 className="text-xl font-serif text-brown">{name}</h3>
      <p className="text-moss font-semibold">{price}</p>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
}