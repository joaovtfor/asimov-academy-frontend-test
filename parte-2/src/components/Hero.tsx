import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Hero() {
  const benefits = [
    "+40 horas de conteúdo direto ao ponto",
    "Projetos com Python + IA desde o módulo 1",
    "Suporte da comunidade com +20.000 alunos",
    "Certificado reconhecido pelo mercado",
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden pt-24 pb-16">
      {/* Brilho Neon Sutil de Fundo Global */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center">
        <div className="w-[800px] h-[800px] bg-[#85E8EA]/5 rounded-full blur-[150px] mix-blend-screen translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* COLUNA ESQUERDA - CONTEÚDO */}
        <div className="flex flex-col items-start gap-8">
          
          {/* Headline Principal */}
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.05] tracking-tight">
              Aprenda Python do zero e construa projetos reais com IA
            </h1>
          </ScrollReveal>

          {/* Subtítulo */}
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-gray-400 max-w-[540px] leading-relaxed">
              O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação.
            </p>
          </ScrollReveal>

          {/* Lista de Benefícios */}
          <ScrollReveal direction="up" delay={0.3}>
            <ul className="w-full flex flex-col">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-4 border-b border-gray-800 py-4 last:border-b-0">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#85E8EA] flex items-center justify-center shadow-[0_0_10px_rgba(133,232,234,0.4)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-200 text-base md:text-lg font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
              <a 
                href="#checkout" 
                aria-label="Quero começar agora"
                className="w-full sm:w-auto px-8 py-4 bg-[#85E8EA] text-black font-bold text-lg rounded hover:bg-[#6FD8DA] transition-all text-center hover:shadow-[0_0_20px_rgba(133,232,234,0.4)]"
              >
                Quero começar agora
              </a>
              <a 
                href="#ementa" 
                aria-label="Ver o que vou aprender"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-800 text-gray-300 font-medium text-lg rounded hover:text-white hover:border-gray-600 hover:bg-white/5 transition-all text-center"
              >
                Ver o que vou aprender
              </a>
            </div>
          </ScrollReveal>
          
        </div>

        {/* COLUNA DIREITA - ILUSTRAÇÃO */}
        <ScrollReveal direction="left" delay={0.5} className="w-full flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[550px] aspect-square rounded-2xl flex items-center justify-center">
            
            {/* Brilho Neon Direto sob a Imagem */}
            <div className="absolute inset-0 bg-[#85E8EA]/10 blur-[100px] rounded-full scale-90 transform-gpu pointer-events-none"></div>
            
            {/* Imagem Nativa de Alta Performance */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
              alt="Logo oficial do Python" 
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_40px_rgba(133,232,234,0.2)]"
              loading="eager"
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
