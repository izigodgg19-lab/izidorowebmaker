import React from 'react';
import { ArrowRight, MessageSquareCode } from 'lucide-react';

interface CtaSectionProps {
  onContactClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 relative overflow-hidden border-b border-slate-800/60">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-950/10 via-slate-900/40 to-[#080c14] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium mb-6">
          <MessageSquareCode className="w-3.5 h-3.5" />
          <span>Inicie seu projeto com Izidoro Geovane</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight [text-wrap:balance]">
          Tem uma ideia ou precisa de uma solução digital?
        </h2>

        <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Vamos transformar sua ideia em uma solução funcional.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onContactClick}
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl transition-all shadow-xl shadow-sky-500/20 flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <span>Entrar em contato</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
