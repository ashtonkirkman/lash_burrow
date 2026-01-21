"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center
          bg-primary shadow-md transition-all duration-900 ease-in-out
          ${hidden ? "-translate-y-32" : "translate-y-0"}
          px-6 py-3 md:py-4
          relative
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-2xl font-fuzzy-bubbles text-brown group-hover:opacity-90 transition">
            The Lash Burrow
          </span>
          <Image
            src="/images/logo.PNG"
            alt="The Lash Burrow logo"
            width={120}
            height={120}
            className="object-contain drop-shadow-sm"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-fuzzy-bubbles items-center">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <a
            href="https://cyns-lashes.square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blush text-white px-4 py-2 rounded-full shadow hover:opacity-90 transition"
          >
            Book Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden absolute left-0 w-full bg-primary flex flex-col items-center gap-4 py-3 shadow-md font-fuzzy-bubbles z-40 top-[100%]">
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
            <a
              href="https://cyns-lashes.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blush text-white px-4 py-2 rounded-full shadow"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
