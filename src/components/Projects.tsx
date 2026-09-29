import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'systems' | 'landing' | 'apps'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.categoryFilter === filter;
  });

  return (
    <section id="projetos" className="py-24 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
              Portfólio de Trabalhos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Meus Projetos
            </h2>
            <p className="mt-2 text-slate-400 text-base max-w-xl">
              Projetos reais desenvolvidos para clientes e soluções digitais funcionais acessíveis online.
            </p>
          </div>

          {/* Interactive filter control buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-sky-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Todos ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('systems')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'systems'
                  ? 'bg-sky-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Sistemas & SaaS
            </button>
            <button
              onClick={() => setFilter('landing')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'landing'
                  ? 'bg-sky-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Landing Pages
            </button>
            <button
              onClick={() => setFilter('apps')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'apps'
                  ? 'bg-sky-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Aplicações Web
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#0c121e]/90 hover:bg-[#0f1726] hover:border-slate-700 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-sky-500/5"
            >
              <div>
                {/* Visual Area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800/80">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Interface do projeto ${project.name}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Fallback stylized UI container */
                    <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-[#0d1422] to-slate-950">
                      <div className="flex items-center justify-between text-slate-500 text-xs font-mono">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        </div>
                        <span>web-solution</span>
                      </div>
                      <div className="space-y-2">
                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                          <Layers className="w-5 h-5" />
                        </div>
                        <h4 className="text-white font-bold text-base">{project.name}</h4>
                        <p className="text-xs text-slate-400 line-clamp-2">{project.description}</p>
                      </div>
                      <div className="text-[11px] font-mono text-sky-400">
                        {project.url.replace(/^https?:\/\//, '')}
                      </div>
                    </div>
                  )}

                  {/* Quick Action Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs p-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3.5 py-2 text-xs font-medium text-white bg-slate-800/90 hover:bg-slate-700 rounded-lg flex items-center gap-1.5 transition-colors shadow-md"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Detalhes</span>
                    </button>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 text-xs font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg flex items-center gap-1.5 transition-colors shadow-md"
                    >
                      <span>{project.buttonLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-2 text-xs text-sky-400/90 font-medium mb-2.5">
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-sky-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {project.additionalNote && (
                    <p className="mt-3 text-xs text-slate-400 italic font-normal">
                      {project.additionalNote}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer with visit link */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs text-slate-400 hover:text-slate-200 font-medium transition-colors"
                >
                  Ver informações
                </button>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors group-hover:underline"
                >
                  <span>{project.buttonLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for project preview */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
