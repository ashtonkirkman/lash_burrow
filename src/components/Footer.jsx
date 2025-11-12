"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brown text-ivory py-12 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-moss/40 pt-8">
        
        {/* Left Section */}
        <div>
          <h2 className="text-4xl text-ivory font-caveat mb-3">The Lash Burrow</h2>
          <p className="text-ivory leading-relaxed">
            210 N 200 W <br />
            Logan, UT 84321
          </p>
          <Link
            href="https://www.google.com/maps/dir/?api=1&destination=210+N+200+W,+Logan,+UT+84321"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-ivory hover:text-blush underline transition-colors"
          >
            Get Directions
          </Link>
          <p className="mt-4 text-ivory">
            <span className="font-semibold text-ivory">Phone:</span> (636) 222-0862
          </p>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-4xl text-ivory font-caveat mb-3">Hours</h3>
          <ul className="space-y-2 text-ivory">
            <li>
              <span>Saturday:</span>
              <span className="ml-6">8am – 8pm</span>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-4xl text-ivory font-caveat mb-3">Resources</h3>
          <ul className="space-y-2 text-ivory">
            <li>
              <Link href="/booking" className="hover:text-ivory transition-colors">
                Book an Appointment
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-ivory transition-colors">
                Services &amp; Pricing
              </Link>
            </li>
            <li>
              <Link href="/boutique" className="hover:text-ivory transition-colors">
                Shop Boutique
              </Link>
            </li>
            <li>
              <Link href="/giving" className="hover:text-ivory transition-colors">
                Giving Back
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-sm text-ivory border-t border-moss/20 pt-6">
        © {new Date().getFullYear()} The Lash Burrow — All Rights Reserved
      </div>
    </footer>
  );
}
