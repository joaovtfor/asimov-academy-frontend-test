import React from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CtaBanner() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-10 mb-20">
      <ScrollReveal direction="up" delay={0.2}>
        <div className="bg-light rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between relative">
          
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6 z-10 w-full md:max-w-[50%] lg:max-w-[55%]">
            <h2 className="text-3xl md:text-4xl font-medium text-dark">
              Let's make things happen
            </h2>
            <p className="text-lg text-dark/90 max-w-[500px]">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <button className="bg-dark text-white px-8 py-5 rounded-2xl text-lg hover:bg-dark/90 transition-colors mt-2">
              Get your free proposal
            </button>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:block absolute right-0 lg:right-12 top-1/2 -translate-y-1/2 w-[450px] lg:w-[550px] h-[450px] lg:h-[550px] pointer-events-none">
            <Image 
              src="/assets/images/cta/cta-illustration.webp" 
              alt="Abstract geometric illustration with a black sphere and stars" 
              fill 
              className="object-contain"
            />
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
