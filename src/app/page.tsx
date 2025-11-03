import Image from "next/image";

export default function Home() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-4xl font-serif">Welcome to The Lash Burrow</h1>
      <p className="text-lg max-w-2xl mx-auto">
        Nestled in a cozy corner, The Lash Burrow offers gentle, elegant lash extensions
        and beauty treatments that make you feel at home.
      </p>
      <a
        href="/booking"
        className="bg-moss text-ivory px-6 py-3 rounded-full inline-block mt-4 hover:opacity-90 transition"
      >
        Book an Appointment
      </a>
    </section>
  );
}
