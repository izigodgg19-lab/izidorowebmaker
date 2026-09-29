import React from 'react';
import { CheckCircle2, Code2, Cpu, Database, Layout, Shield, Terminal, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_SKILLS } from '../data/portfolioData';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  return (
    <section id="sobre" className="py-24 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            Apresentação Profissional
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Sobre mim
          </h2>
          <p className="mt-2 text-slate-400 text-base max-w-2xl">
            Conheça a visão de trabalho e as competências dedicadas à criação de soluções digitais sob medida.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Graphic Composition (No invented photo) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-[#090e18]/90 p-8 shadow-xl overflow-hidden">
              {/* Subtle background tech accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Graphic Developer Card */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-800/80">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-500/40 flex items-center justify-center text-sky-300 font-bold text-2xl font-mono shadow-inner">
                  IG
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-sky-400 font-medium">
                    {PERSONAL_INFO.title}
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    Soluções Digitais & Aplicações Web
                  </p>
                </div>
              </div>

              {/* Graphic composition elements */}
              <div className="py-6 space-y-3.5">
                <div className="flex items-center justify-between text-xs text-slate-300 py-1.5 px-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    Perfil
                  </span>
                  <span className="font-medium text-slate-200">Desenvolvedor de Software</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 py-1.5 px-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Layout className="w-3.5 h-3.5 text-indigo-400" />
                    Especialidade
                  </span>
                  <span className="font-medium text-slate-200">Sistemas & Interfaces Web</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 py-1.5 px-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    Abordagem
                  </span>
                  <span className="font-medium text-slate-200">Estruturação & Usabilidade</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 py-1.5 px-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-amber-400" />
                    Compromisso
                  </span>
                  <span className="font-medium text-slate-200">Soluções Funcionais Reais</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={onContactClick}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/70 hover:bg-slate-700/80 border border-slate-700/60 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Iniciar conversa com Izidoro</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Exact text and 9 skills */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-invert max-w-none space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg font-normal">
              <p>
                Sou <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, profissional com experiência em desenvolvimento de soluções digitais, sistemas web e aplicações voltadas para diferentes necessidades de negócios.
              </p>
              <p>
                Meu trabalho envolve transformar ideias em produtos digitais funcionais, combinando desenvolvimento, automação, organização de dados e experiência do usuário.
              </p>
              <p>
                Tenho interesse especialmente na criação de sistemas personalizados, dashboards, ferramentas de gestão, aplicações web, landing pages e soluções digitais que possam facilitar processos e gerar valor para empresas e profissionais.
              </p>
            </div>

            {/* 9 Highlighted Skills / Capabilities */}
            <div className="pt-4 border-t border-slate-800/80">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
                Competências em Destaque
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {HIGHLIGHT_SKILLS.map((skill, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-700 transition-colors flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-200 leading-snug">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
