import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CaseStudies() {
  const caseStudies = [
    {
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      link: "#"
    },
    {
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      link: "#"
    },
    {
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      link: "#"
    }
  ];

  return (
    <section id="case-studies" className="w-full max-w-7xl mx-auto px-6 py-10 mb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <h2 className="text-4xl md:text-5xl font-medium bg-primary px-3 py-1 rounded-md text-dark">
          Case Studies
        </h2>
        <p className="max-w-[580px] text-lg text-dark/90 text-center md:text-left">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      {/* Main Container */}
      <div className="bg-dark text-white rounded-[3rem] p-10 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-600">
          {caseStudies.map((study, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={idx * 0.15}
              className={`flex flex-col items-start
                ${idx === 0 ? 'lg:pr-14 pb-10 lg:pb-0' : ''}
                ${idx === 1 ? 'lg:px-14 py-10 lg:py-0' : ''}
                ${idx === 2 ? 'lg:pl-14 pt-10 lg:pt-0' : ''}
              `}
            >
              <p className="text-base leading-relaxed text-white/90 mb-6">
                {study.text}
              </p>

              <a 
                href={study.link} 
                aria-label={`Learn more about our case study for a ${idx === 0 ? 'local restaurant' : idx === 1 ? 'B2B software company' : 'national retail chain'}`}
                className="flex items-center gap-3 text-primary text-lg font-medium group hover:opacity-80 transition-opacity"
              >
                Learn more
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:translate-x-1" aria-hidden="true" focusable="false">
                  <path d="M1.5 18.5L18.5 1.5M18.5 1.5H4.05M18.5 1.5V15.95" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
