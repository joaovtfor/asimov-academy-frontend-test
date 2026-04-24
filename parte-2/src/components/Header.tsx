import React from 'react';
import Link from 'next/link';
import { FiChevronDown, FiUser } from 'react-icons/fi';

export default function Header() {
  const navItems = [
    { label: 'Formações', hasDropdown: true },
    { label: 'Trilhas', hasDropdown: true },
    { label: 'Cursos', hasDropdown: false },
    { label: 'Projetos', hasDropdown: false },
    { label: 'Conteúdos gratuitos', hasDropdown: true },
  ];

  return (
    <header className="w-full bg-asimov-black border-b border-gray-900 py-1.5 px-6 md:px-12 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" aria-label="Voltar para a página inicial da Asimov Academy">
          <img
            src="/assets/images/header/asimov-logo.webp"
            alt="Asimov Academy"
            className="h-16 object-contain"
          />
        </Link>
      </div>

      {/* Nav Links (Desktop) */}
      <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação Principal">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href="#"
            className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors text-lg font-medium"
          >
            {item.label}
            {item.hasDropdown && <FiChevronDown aria-hidden="true" className="text-gray-400 w-[14px] h-[14px]" />}
          </Link>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="flex items-center gap-2 px-6.5 py-2.5 rounded-full border border-asimov-cyan text-asimov-cyan hover:bg-asimov-cyan/10 transition-colors text-md font-bold"
        >
          <FiUser aria-hidden="true" className="w-[20px] h-[20px] font-bold" />
          Entrar
        </Link>
        <Link
          href="/matricula"
          className="px-8.5 py-3.5 rounded-full bg-asimov-cyan text-black hover:bg-asimov-cyan-hover transition-colors text-sm font-bold"
        >
          Matricule-se
        </Link>
      </div>
    </header>
  );
}
