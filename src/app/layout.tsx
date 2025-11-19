// layout.tsx is the root layout for your Next.js app. It wraps every page and component, allowing you to set up global styles, metadata, and shared UI elements (like Navbar and Footer) that should appear on every page. This is where you define the overall structure and persistent elements for your site.
import type { Metadata } from "next";
import { Butterfly_Kids, Fuzzy_Bubbles, Geist, Geist_Mono, Indie_Flower, Send_Flowers, Shadows_Into_Light, Shadows_Into_Light_Two, Square_Peg } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { Meow_Script } from "next/font/google";
import { Delicious_Handrawn } from "next/font/google";
import { Caveat } from "next/font/google";
import "./globals.css";

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

const butterflyKids = Butterfly_Kids({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-butterfly-kids",
});

const sendFlowers = Send_Flowers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-send-flowers",
});

const fuzzyBubbles = Fuzzy_Bubbles({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fuzzy-bubbles",
});

const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-indie-flower",
});

const shadowsIntoLight = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shadows-into-light",
});

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shadows-into-light-two",
});

const squarePeg = Square_Peg({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-square-peg",
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
        className={`${dancing.variable} ${meow.variable} ${deliciousHandrawn.variable} ${caveat.variable} ${butterflyKids.variable} ${sendFlowers.variable} ${fuzzyBubbles.variable} ${indieFlower.variable} ${shadowsIntoLight.variable} ${shadowsIntoLightTwo.variable} ${squarePeg.variable} antialiased bg-primary text-brown`}
      >
        <Navbar />
        {/* Added top padding to prevent content from being hidden behind the fixed navbar */}
        <main className="grow px-0 py-0 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
