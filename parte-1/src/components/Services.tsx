import React from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

type Variant = 'light' | 'neon' | 'dark';

interface ServiceCardProps {
  title: string | string[];
  titleVariant?: 'primary' | 'white';
  description?: string;
  image: string;
  link: string;
  variant: Variant;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  titleVariant, 
  image, 
  link, 
  variant 
}) => {
  // Configurações baseadas na variant
  const bgStyles = {
    light: 'bg-light border-dark text-dark',
    neon: 'bg-primary border-dark text-dark',
    dark: 'bg-dark border-dark text-white'
  };

  // Se não for passado titleVariant, deduzimos um padrão
  const defaultTitleVariant = variant === 'dark' || variant === 'neon' ? 'white' : 'primary';
  const finalTitleVariant = titleVariant || defaultTitleVariant;

  const titleBgStyles = {
    primary: 'bg-primary text-dark',
    white: 'bg-white text-dark',
  };

  const iconStyles = {
    light: { circle: 'fill-dark', arrow: 'stroke-primary' },
    neon: { circle: 'fill-dark', arrow: 'stroke-primary' },
    dark: { circle: 'fill-white', arrow: 'stroke-dark' }
  };

  const currentIcon = iconStyles[variant];

  const titles = Array.isArray(title) ? title : [title];

  return (
    <div className={`rounded-[40px] border border-b-[6px] p-10 md:p-12 flex justify-between items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${bgStyles[variant]}`}>
      <div className="flex flex-col justify-between h-full gap-24">
        <h3 className="flex flex-col items-start gap-1">
          {titles.map((t, i) => (
            <span key={i} className={`text-2xl md:text-3xl font-medium px-2 py-1 rounded-md ${titleBgStyles[finalTitleVariant]}`}>
              {t}
            </span>
          ))}
        </h3>
        
        <a href={link} aria-label={`Learn more about ${titles.join(' ')}`} className="flex items-center gap-4 w-max group">
          <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="transform transition-transform group-hover:translate-x-1">
            <circle cx="20.5" cy="20.5" r="20.5" className={currentIcon.circle}/>
            <path d="M16 26L25 17" className={currentIcon.arrow} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17H25V26" className={currentIcon.arrow} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={`text-xl font-medium`}>
            Learn more
          </span>
        </a>
      </div>

      <div className="hidden sm:block w-40 h-40 md:w-48 md:h-48 relative">
        <Image 
          src={image} 
          alt={titles.join(' ')} 
          fill 
          className="object-contain" 
        />
      </div>
    </div>
  );
};

export default function Services() {
  const servicesData: ServiceCardProps[] = [
    {
      title: ['Search engine', 'optimization'],
      variant: 'light',
      titleVariant: 'primary',
      image: '/assets/images/services/seo.webp',
      link: '#seo'
    },
    {
      title: ['Pay-per-click', 'advertising'],
      variant: 'neon',
      titleVariant: 'white',
      image: '/assets/images/services/ppc.webp',
      link: '#ppc'
    },
    {
      title: ['Social Media', 'Marketing'],
      variant: 'dark',
      titleVariant: 'white',
      image: '/assets/images/services/social.webp',
      link: '#social'
    },
    {
      title: ['Email', 'Marketing'],
      variant: 'light',
      titleVariant: 'primary',
      image: '/assets/images/services/email.webp',
      link: '#email'
    },
    {
      title: ['Content', 'Creation'],
      variant: 'neon',
      titleVariant: 'white',
      image: '/assets/images/services/content.webp',
      link: '#content'
    },
    {
      title: ['Analytics and', 'Tracking'],
      variant: 'dark',
      titleVariant: 'primary',
      image: '/assets/images/services/analytics.webp',
      link: '#analytics'
    }
  ];

  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Header da Seção */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <h2 className="text-4xl md:text-5xl font-medium bg-primary px-3 py-1 rounded-md text-dark">
          Services
        </h2>
        <p className="max-w-[580px] text-lg text-dark/90 text-center md:text-left">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Grid de Cards (Arquitetura requisitada: CSS Grid grid-cols-1 md:grid-cols-2 gap-6) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.15}>
            <ServiceCard {...service} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
