import React from 'react';
import Image from 'next/image';

export default function Hero() {
  const logos = [
    { src: "/assets/images/hero/amazon.webp", alt: "Amazon", width: 175, height: 70 },
    { src: "/assets/images/hero/dribbble.webp", alt: "Dribbble", width: 175, height: 70 },
    { src: "/assets/images/hero/hubspot.webp", alt: "HubSpot", width: 175, height: 70 },
    { src: "/assets/images/hero/notion.webp", alt: "Notion", width: 175, height: 70 },
    { src: "/assets/images/hero/netflix.webp", alt: "Netflix", width: 175, height: 70 },
  ];

  const LogoSet = () => (
    <>
      {logos.map((logo, idx) => (
        <Image
          key={idx}
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="object-contain h-12 w-auto shrink-0"
        />
      ))}
      <span className="text-5xl font-black tracking-tighter shrink-0">zoom</span>
    </>
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Section: Text and Illustration */}
      <section className="w-full max-w-7xl mx-auto px-6 py-8 md:py-10 flex flex-col-reverse lg:flex-row items-center gap-8">
        <article className="flex-1 flex flex-col items-start gap-6">
          <h1 className="animate-fade-in-up text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-dark">
            Navigating the<br />digital landscape<br />for success
          </h1>
          <p className="text-lg max-w-lg text-dark/90 leading-relaxed">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="bg-dark text-white text-lg px-8 py-4 rounded-xl hover:bg-dark/90 transition-colors">
            Book a consultation
          </button>
        </article>

        <figure className="flex-1 flex justify-center items-center w-full">
          <div className="relative w-full max-w-lg xl:max-w-xl aspect-square">
            <Image
              src="/assets/images/hero/hero-logo.webp"
              alt="Hero Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </figure>
      </section>

      {/* Bottom Section: Infinite Logos Marquee */}
      <section className="w-full max-w-7xl mx-auto px-6 py-4 mt-8 mb-8 overflow-hidden relative">
        {/* Usamos flex para posicionar os dois conjuntos idênticos um ao lado do outro */}
        <div className="flex w-max animate-marquee grayscale opacity-80 items-center select-none gap-16 md:gap-24 pr-16 md:pr-24 hover:[animation-play-state:paused]">
          <LogoSet />
          <LogoSet />
        </div>
      </section>
    </div>
  );
}
