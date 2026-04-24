import React from 'react';

export default function Header() {
  return (
    <header className="w-full">
      <nav className="w-full flex items-center justify-between px-6 py-8 max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-3" aria-label="Positivus Home">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#191A23"/>
          </svg>
          <span className="text-5xl font-medium tracking-tight">Positivus</span>
        </a>
        
        <div className="hidden lg:flex items-center gap-8">
          <a href="#about" className="hover:text-primary transition-colors text-xl">About us</a>
          <a href="#services" className="hover:text-primary transition-colors text-xl">Services</a>
          <a href="#use-cases" className="hover:text-primary transition-colors text-xl">Use Cases</a>
          <a href="#pricing" className="hover:text-primary transition-colors text-xl">Pricing</a>
          <a href="#blog" className="hover:text-primary transition-colors text-xl">Blog</a>
          <button className="border border-dark text-dark px-7 py-4 rounded-xl hover:bg-dark hover:text-white transition-colors text-xl ml-4">
            Request a quote
          </button>
        </div>
      </nav>
    </header>
  );
}
