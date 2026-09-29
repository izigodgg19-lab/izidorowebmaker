import React from 'react';
import {
  LayoutGrid,
  AppWindow,
  Sparkles,
  Briefcase,
  Cpu,
  Wrench,
  Check,
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-sky-400" />;
      case 'AppWindow':
        return <AppWindow className="w-5 h-5 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="atuacao" className="py-24 border-b border-slate-800/60 relative bg-[#080c14]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            Áreas de Atuação
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            O que eu desenvolvo
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Soluções digitais planejadas para transformar processos operacionais e presença online em ferramentas funcionais, eficientes e escaláveis.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-xl border border-slate-800/80 bg-slate-900/40 p-7 hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Icon box */}
                <div className="w-12 h-12 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-center mb-6 group-hover:border-sky-500/40 transition-colors">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {service.title}
                </h3>

                {/* Exact Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverable points */}
              <div className="pt-4 border-t border-slate-800/60 space-y-2">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                    <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}

                <button
                  onClick={() => onSelectService(service.title)}
                  className="mt-4 w-full pt-2 text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center justify-between group-hover:translate-x-0.5 transition-all text-left"
                >
                  <span>Solicitar orçamento deste serviço</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
