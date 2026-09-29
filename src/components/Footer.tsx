import React from 'react';
import { ArrowUp, MessageCircle, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#atuacao' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="py-12 bg-[#060910] border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand & Title */}
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-slate-400">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct channels & Back to top button */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-pink-400 transition-colors flex items-center gap-1.5"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors flex items-center gap-1.5 ml-2"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs font-normal">
          <p>© 2026 {PERSONAL_INFO.name}. Todos os direitos reservados.</p>
          <p className="font-mono text-[11px] text-slate-400">
            Desenvolvido com foco em usabilidade, performance e código limpo.
          </p>
        </div>
      </div>
    </footer>
  );
};
