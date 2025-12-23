export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-ivory text-brown px-6 py-26 space-y-24">
      <section className="max-w-3xl mx-auto space-y-4 grow">
        {/* Page Title */}
        <h1 className="text-6xl md:text-8xl font-fuzzy-bubbles text-brown text-center">
          About
        </h1>
        <p>
          At The Lash Burrow, we believe in enhancing your natural beauty in a relaxing,
          cottage-inspired space filled with warmth and charm.
        </p>
        <p>
          Founded by a passionate lash artist, our goal is to create an experience that feels as cozy as your favorite blanket and as beautiful as a spring garden.
        </p>
        <image>
          <img src="/bunnies/butterbean_1.jpg" alt="Butterbean the bunny" className="rounded-xl shadow-lg mt-6" />
        </image>
      </section>
    </div>
  );
}
