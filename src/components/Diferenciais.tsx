import React from 'react';
import { Sliders, MonitorCheck, Target } from 'lucide-react';
import { DIFFERENTIALS } from '../data/portfolioData';

export const Diferenciais: React.FC = () => {
  const getDifferentialIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sliders className="w-6 h-6 text-sky-400" />;
      case 1:
        return <MonitorCheck className="w-6 h-6 text-indigo-400" />;
      case 2:
      default:
        return <Target className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section className="py-24 border-b border-slate-800/60 relative bg-[#080c14]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            Visão & Princípios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Mais do que código: soluções.
          </h2>
          <blockquote className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed border-l-2 border-sky-400/80 pl-4 italic">
            "Meu foco não é apenas desenvolver uma aplicação, mas entender o problema por trás dela e construir uma solução que faça sentido para quem irá utilizá-la."
          </blockquote>
        </div>

        {/* 3 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((diff, index) => (
            <div
              key={diff.title}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/40 p-8 hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    {getDifferentialIcon(index)}
                  </div>
                  <span className="font-mono text-sm font-semibold text-slate-400 group-hover:text-sky-400 transition-colors">
                    {diff.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {diff.title}
                </h3>

                <p className="text-sm font-medium text-slate-200 leading-relaxed mb-2">
                  {diff.description}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {diff.subtext}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Pilar de entrega</span>
                <span className="text-slate-300">Confiabilidade</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
