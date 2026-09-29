import React from 'react';
import { X, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0d131f] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div>
            <span className="text-xs font-mono text-sky-400 font-medium">
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/9]">
              <img
                src={project.image}
                alt={`Screenshot de ${project.name}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Descrição do Projeto
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
            {project.additionalNote && (
              <p className="mt-2 text-xs text-sky-300/90 bg-sky-950/40 border border-sky-800/40 p-3 rounded-lg">
                {project.additionalNote}
              </p>
            )}
          </div>

          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Destaques & Funcionalidades
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.tags && (
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="font-mono text-slate-500">Categorização:</span>
              {project.tags.map((tag, idx) => (
                <span key={idx} className="text-slate-300">
                  {tag} {idx < project.tags!.length - 1 && '·'}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Link oficial do projeto</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg transition-colors"
            >
              Fechar
            </button>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-sky-500/20"
            >
              <span>{project.buttonLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
