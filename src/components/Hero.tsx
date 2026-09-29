import React, { useState } from 'react';
import { ArrowRight, FolderKanban, Terminal, Layers, Database, ShieldCheck, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'interface' | 'code'>('architecture');

  const scrollToProjects = () => {
    const el = document.getElementById('projetos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-slate-800/60"
    >
      {/* Background subtle mesh & grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PERSONAL_INFO.name}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{PERSONAL_INFO.title}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] [text-wrap:balance]">
              Transformando ideias em soluções digitais.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              Desenvolvimento de sistemas, aplicações web e experiências digitais sob medida.
            </p>

            {/* Quick highlight points */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Sistemas Web & Dashboards</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Aplicações Responsivas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Automação & Gestão</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3.5 text-sm font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/15 active:scale-[0.98]"
              >
                <FolderKanban className="w-4 h-4" />
                <span>Ver projetos</span>
              </button>

              <button
                onClick={onContactClick}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Discreet Tech Visual Element */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-[#0d131f]/95 shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Window Header */}
              <div className="px-4 py-3 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/70">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">sistema-digital.preview</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-md border border-slate-800/80 text-xs">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      activeTab === 'architecture'
                        ? 'bg-slate-800 text-sky-300'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Arquitetura
                  </button>
                  <button
                    onClick={() => setActiveTab('interface')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      activeTab === 'interface'
                        ? 'bg-slate-800 text-sky-300'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Módulos
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      activeTab === 'code'
                        ? 'bg-slate-800 text-sky-300'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Estrutura
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-5 min-h-[300px] flex flex-col justify-center">
                {activeTab === 'architecture' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
                      <span>Fluxo Operacional de Soluções</span>
                      <span className="font-mono text-sky-400 text-[11px]">Integrado & Escalável</span>
                    </div>

                    {/* Step 1: User Interface */}
                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-200">Interface Web & Experiência</p>
                          <p className="text-[11px] text-slate-400">Telas responsivas, painéis e landing pages</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400">Frontend</span>
                    </div>

                    {/* Connector line */}
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-4 bg-slate-700/80" />
                    </div>

                    {/* Step 2: System Logic */}
                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                          <Terminal className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-200">Lógica & Regras de Negócio</p>
                          <p className="text-[11px] text-slate-400">Automações, autenticação e validações</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-indigo-400">Engine</span>
                    </div>

                    {/* Connector line */}
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-4 bg-slate-700/80" />
                    </div>

                    {/* Step 3: Database & Cloud */}
                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                          <Database className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-200">Dados & Armazenamento</p>
                          <p className="text-[11px] text-slate-400">Organização, integridade e segurança</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-sky-400">Cloud / DB</span>
                    </div>
                  </div>
                )}

                {activeTab === 'interface' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Módulos de Sistema Desenvolvidos</span>
                      <span className="font-mono text-sky-400">6 áreas ativas</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                        <p className="font-medium text-slate-200">Sistemas Web</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Fluxos operacionais</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                        <p className="font-medium text-slate-200">SaaS / Kanban</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Gestão de tarefas</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                        <p className="font-medium text-slate-200">Agendamentos</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Calendários e horários</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                        <p className="font-medium text-slate-200">Landing Pages</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Presença e conversão</p>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-sky-950/30 border border-sky-800/40 text-[11px] text-sky-300 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-sky-400" />
                      <span>Foco em soluções funcionais para resolver necessidades reais.</span>
                    </div>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="font-mono text-xs text-slate-300 bg-slate-950/80 p-3.5 rounded-lg border border-slate-800 space-y-1.5 overflow-x-auto">
                    <p className="text-slate-500">{"// Configuração de entrega"}</p>
                    <p>
                      <span className="text-pink-400">const</span> developer = &#123;
                    </p>
                    <p className="pl-4">
                      nome: <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                    </p>
                    <p className="pl-4">
                      foco: <span className="text-sky-300">"Sistemas e Aplicações Web"</span>,
                    </p>
                    <p className="pl-4">
                      objetivo: <span className="text-emerald-300">"Transformar ideias em produtos"</span>,
                    </p>
                    <p className="pl-4">
                      responsivo: <span className="text-amber-300">true</span>,
                    </p>
                    <p className="pl-4">
                      personalizado: <span className="text-amber-300">true</span>
                    </p>
                    <p>&#125;;</p>
                  </div>
                )}
              </div>

              {/* Window Footer */}
              <div className="px-4 py-2.5 border-t border-slate-800/80 bg-slate-900/40 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>status: pronto para novos projetos</span>
                <span className="text-sky-400">izidoro.geovane</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
