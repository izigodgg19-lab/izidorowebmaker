import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-[#080c14]/60 backdrop-blur-sm border-b border-slate-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#inicio"
          className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2.5 group"
        >
          <span className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-sm font-bold flex items-center justify-center group-hover:bg-sky-500/20 group-hover:border-sky-500/50 transition-colors">
            IG
          </span>
          <span className="font-semibold tracking-tight text-slate-100 group-hover:text-white transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Zone 2: 5-7 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="hover:text-sky-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onContactClick}
            className="px-4 py-2 text-sm font-medium text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-sky-500/20 whitespace-nowrap active:scale-[0.98]"
          >
            <span>Entrar em contato</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#080c14]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="block px-3 py-2.5 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-3 px-4 text-center font-medium text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
