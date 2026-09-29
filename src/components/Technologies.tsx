import React from 'react';
import { TECH_CATEGORIES } from '../data/portfolioData';
import { Code, Server, Database, Cloud, LayoutGrid, Cpu } from 'lucide-react';

export const Technologies: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-5 h-5 text-sky-400" />;
      case 1:
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 3:
        return <Cloud className="w-5 h-5 text-amber-400" />;
      case 4:
        return <LayoutGrid className="w-5 h-5 text-cyan-400" />;
      case 5:
      default:
        return <Cpu className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="tecnologias" className="py-24 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            Stack & Ferramentas
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Tecnologias & Ferramentas
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Tecnologias modernas, estáveis e consolidadas aplicadas diretamente na criação de sistemas, interfaces e fluxos digitais.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 hover:bg-slate-900/70 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-5">
                {cat.description}
              </p>

              {/* Items */}
              <div className="space-y-2 pt-3 border-t border-slate-800/60">
                {cat.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60"
                  >
                    <span className="font-medium text-slate-200">{tech.name}</span>
                    <span className="font-mono text-[11px] text-slate-400">Verificado</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
