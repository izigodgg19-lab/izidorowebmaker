import React from 'react';
import { WORK_PROCESS } from '../data/portfolioData';
import { Compass, FileCode2, Rocket, Search } from 'lucide-react';

export const Process: React.FC = () => {
  const getIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Search className="w-5 h-5 text-sky-400" />;
      case '02':
        return <Compass className="w-5 h-5 text-indigo-400" />;
      case '03':
        return <FileCode2 className="w-5 h-5 text-emerald-400" />;
      case '04':
      default:
        return <Rocket className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="processo" className="py-24 border-b border-slate-800/60 relative bg-[#080c14]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            Metodologia & Fluxo
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Como eu trabalho
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Um processo claro e estruturado em quatro etapas para transformar requisitos em entregas estáveis e de alto padrão.
          </p>
        </div>

        {/* Visual Progress Steps Grid */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500/20 via-indigo-500/30 to-emerald-500/20 -translate-y-8 pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {WORK_PROCESS.map((item, index) => (
              <div
                key={item.step}
                className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 hover:bg-slate-900 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono tracking-tight text-slate-500 group-hover:text-sky-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                      {getIcon(item.step)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2.5">
                    {item.title}
                  </h3>

                  {/* Core Description */}
                  <p className="text-sm font-medium text-slate-200 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Details */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Etapa {index + 1} de 4</span>
                  <span className="text-sky-400/80">Fase ativa</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
