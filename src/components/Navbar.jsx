import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-[var(--accent)] shadow-sm">
      <Link href="/" className="text-2xl font-serif text-[var(--foreground)]">
        The Lash Burrow
      </Link>
      <div className="space-x-6 font-sans">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link
          href="/booking"
          className="bg-blush text-white px-4 py-2 rounded-full shadow hover:bg-rose-300 transition"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}
