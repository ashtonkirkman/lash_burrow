"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const threshold = 50;

    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-6 bg-primary shadow-md transition-all duration-900 ease-in-out
          ${hidden ? "-translate-y-32 scale-100 opacity-100" : "translate-y-0 scale-100 opacity-100"}
        `}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-2xl font-fuzzy-bubbles text-brown group-hover:opacity-90 transition">The Lash Burrow</span>
          <Image
            src="/images/logo.PNG"
            alt="The Lash Burrow logo"
            width={120}
            height={120}
            className="object-contain drop-shadow-sm"
            priority
          />
        </Link>
        <div className="space-x-6 font-fuzzy-bubbles">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <a
            href="https://cyns-lashes.square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blush text-white px-4 py-2 rounded-full shadow hover:opacity-90 transition"
          >
            Book Now
          </a>
        </div>
      </nav>
    </>
  );
}
