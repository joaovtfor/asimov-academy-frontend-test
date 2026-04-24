"use client";

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { FiArrowRight } from 'react-icons/fi';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Hero() {
  const benefits = [
    "+40 horas de conteúdo direto ao ponto",
    "Projetos com Python + IA desde o módulo 1",
    "Suporte da comunidade com +20.000 alunos",
    "Certificado reconhecido pelo mercado",
  ];

  // Motion Values para o tracking do mouse (Eye-tracking)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Suavização extrema do movimento via GPU/Spring
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Mapeamento severo para um paralaxe micro-tátil elegante (-15px a 15px)
  const xOffset = useTransform(smoothX, [-1, 1], [-15, 15]);
  const yOffset = useTransform(smoothY, [-1, 1], [-15, 15]);

  // Listener nativo do React para rastrear o mouse via viewport
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Normaliza de -1 a 1 baseado no centro da tela
    mouseX.set((clientX - centerX) / centerX);
    mouseY.set((clientY - centerY) / centerY);
  };

  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center bg-asimov-black overflow-hidden pt-24 pb-16"
      onMouseMove={handleMouseMove}
    >
      {/* Brilho Neon Sutil de Fundo Global */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center">
        <div className="w-[800px] h-[800px] bg-asimov-cyan/5 rounded-full blur-[150px] mix-blend-screen translate-x-1/4"></div>
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
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-asimov-cyan flex items-center justify-center shadow-[0_0_10px_rgba(133,232,234,0.4)]">
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
                className="w-full sm:w-auto px-8 py-4 bg-asimov-cyan text-black font-bold text-lg rounded hover:bg-asimov-cyan-hover transition-all text-center hover:shadow-[0_0_20px_rgba(133,232,234,0.4)]"
              >
                Quero começar agora
              </a>
              <a
                href="#ementa"
                aria-label="Ver o que vou aprender"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-800 text-gray-300 font-medium text-lg rounded hover:text-white hover:border-gray-600 hover:bg-white/5 transition-all text-center"
              >
                Ver o que vou aprender
                <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>

        </div>

        {/* COLUNA DIREITA - ILUSTRAÇÃO */}
        <ScrollReveal direction="left" delay={0.5} className="w-full flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[550px] aspect-square rounded-2xl flex items-center justify-center">

            {/* Brilho Neon Direto sob a Imagem */}
            <div className="absolute inset-0 bg-asimov-cyan/10 blur-[100px] rounded-full scale-90 transform-gpu pointer-events-none"></div>

            {/* Wrapper Dinâmico Acelerado por GPU */}
            <motion.div
              className="relative w-3/4 h-3/4 flex items-center justify-center cursor-pointer"
              initial="initial"
              whileHover="hover"
            >
              {/* Glow Elemento de Sombra em Hover */}
              <motion.div
                className="absolute inset-0 bg-asimov-cyan/50 rounded-full blur-2xl pointer-events-none z-0"
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  hover: { opacity: 1, scale: 1.1 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              {/* Logo do Python Dinâmica (Asset Local) */}
              <motion.img 
                src="/assets/images/hero/python-logo.svg" 
                alt="Logo oficial do Python" 
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_40px_rgba(133,232,234,0.2)]"
                loading="eager"
                style={{ x: xOffset, y: yOffset }}
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.05 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
