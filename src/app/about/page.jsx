import Image from "next/image";

const bunnyImages = [
  {
    src: "/bunnies/butterbean_1.jpg",
    alt: "Butterbean lounging",
  },
  {
    src: "/bunnies/butterbean_2.jpg",
    alt: "Butterbean being curious",
  },
  {
    src: "/bunnies/butterbean_3.jpg",
    alt: "Butterbean cuddled up",
  },
  {
    src: "/bunnies/butterbean_4.jpg",
    alt: "Butterbean mid-hop",
  },
  // 🐰 Add more here anytime!
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory text-brown px-6 py-20">
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Title + Text */}
        <div className="space-y-8 lg:sticky lg:top-24">
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-fuzzy-bubbles text-left leading-none">
            About
          </h1>

          <div className="max-w-2xl space-y-4 text-left text-lg leading-relaxed">
            <p>
              At The Lash Burrow, our mission is to create more than just
              beautiful lashes-we strive to create a space where everyone
              feels genuinely comfortable, cared for, and at ease from the
              moment they walk through the door. Our studio is designed to
              feel calm, welcoming, and cozy, offering a peaceful escape
              from the busyness of everyday life. Whether you are here for
              a little self-care, a confidence boost, or simply a quiet
              moment to relax, our goal is for you to leave feeling refreshed,
              beautiful, and proud of yourself. And of course, no visit to
              The Lash Burrow would be complete without the chance to meet
              our two beloved bunnies, Butterbean and Poppyseed, who add an
              extra touch of warmth, joy, and charm to the experience. We
              believe that when you feel relaxed, supported, and happy,
              your beauty truly shines.
            </p>
          </div>
        </div>

        {/* Right: Bunny Gallery */}
        <div className="grid grid-cols-2 gap-5 md:gap-6">
          {bunnyImages.map((bunny, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl shadow-lg bg-white aspect-square"
            >
              <Image
                src={bunny.src}
                alt={bunny.alt}
                width={500}
                height={500}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
