// layout.tsx is the root layout for your Next.js app. It wraps every page and component, allowing you to set up global styles, metadata, and shared UI elements (like Navbar and Footer) that should appear on every page. This is where you define the overall structure and persistent elements for your site.
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { Meow_Script } from "next/font/google";
import { Delicious_Handrawn } from "next/font/google";
import { Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
});

const meow = Meow_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-meow",
});

const deliciousHandrawn = Delicious_Handrawn({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-delicious-handrawn",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
});

export const metadata = {
  title: "The Lash Burrow",
  description: "Cozy cottage lash extensions and beauty services",
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancing.variable} ${meow.variable} ${deliciousHandrawn.variable} ${caveat.variable} antialiased bg-primary text-brown`}
      >
        <Navbar />
        {/* Added top padding to prevent content from being hidden behind the fixed navbar */}
        <main className="grow px-0 py-0 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
