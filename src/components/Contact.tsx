import React, { useState } from 'react';
import {
  MessageCircle,
  Instagram,
  ArrowUpRight,
  ShieldCheck,
  Send,
  Copy,
  Check,
  MessageSquare,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  prefilledService?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService }) => {
  const [name, setName] = useState('');
  const [projectType, setProjectType] = useState(prefilledService || 'Sistemas Web');
  const [message, setMessage] = useState('');
  const [copiedMessage, setCopiedMessage] = useState(false);

  // Update if prefilledService changes
  React.useEffect(() => {
    if (prefilledService) {
      setProjectType(prefilledService);
    }
  }, [prefilledService]);

  const getFormattedMessage = () => {
    return `Olá Izidoro! Meu nome é ${name.trim() || 'Cliente'}. Gostaria de falar sobre um projeto de ${projectType}.${message.trim() ? `\n\nDetalhes:\n${message.trim()}` : ''}`;
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(getFormattedMessage());
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodedText}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(getFormattedMessage());
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  return (
    <section id="contato" className="py-24 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            Canais de Comunicação
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Entre em contato
          </h2>
          <p className="mt-2 text-slate-400 text-base leading-relaxed">
            Tem um projeto em mente, precisa de um sistema personalizado ou deseja estruturar a presença digital do seu negócio? Fale diretamente comigo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct WhatsApp & Instagram Redirection Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#0c1917] to-[#09121a] space-y-4 shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                    Canal Principal
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Conversar via WhatsApp
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Atendimento rápido para tirar dúvidas, alinhar requisitos técnicos e entender sua demanda de desenvolvimento.
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/15 active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar no WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-6 rounded-2xl border border-pink-500/20 bg-gradient-to-br from-[#1a0f19] to-[#0d131f] space-y-4 shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 shadow-sm">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-pink-400 font-semibold uppercase tracking-wider">
                    Rede Social
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Acessar Instagram
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Acompanhe atualizações, projetos e novidades sobre desenvolvimento de soluções digitais.
              </p>

              <div className="pt-2">
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 text-xs font-semibold text-white bg-pink-600/90 hover:bg-pink-500 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-pink-500/15 active:scale-[0.98]"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Acessar Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Assurance */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center gap-2.5 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Comunicação direta com o desenvolvedor Izidoro Geovane.</span>
            </div>

          </div>

          {/* Right Column: Direct WhatsApp Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-[#0d131f] p-8 shadow-xl">
              <div className="flex items-center gap-2.5 mb-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Envie sua ideia diretamente no WhatsApp
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Descreva sua necessidade abaixo. A mensagem será estruturada e enviada diretamente para o WhatsApp de Izidoro Geovane.
              </p>

              <form onSubmit={handleWhatsAppSend} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Seu Nome ou da sua Empresa
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Silva"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Tipo de Projeto / Solução
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="Sistemas Web">Sistemas Web (Gerenciamento e processos)</option>
                    <option value="Aplicações Web">Aplicações Web (Multiplataforma e responsivas)</option>
                    <option value="Landing Pages">Landing Pages (Apresentação profissional e conversão)</option>
                    <option value="Sistemas de Gestão">Sistemas de Gestão (Operações, tarefas e dados)</option>
                    <option value="Automação">Automação (Redução de tarefas manuais)</option>
                    <option value="Soluções Personalizadas">Soluções Personalizadas (Demanda específica)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Detalhes do Projeto / Funcionalidades Desejadas
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte resumidamente o que você precisa construir, quais funcionalidades imagina ou o problema que deseja resolver..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                {/* Preview of Message */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Prévia da mensagem formatada:</span>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-mono transition-colors"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copiada!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar texto</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-300 font-mono italic whitespace-pre-wrap bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/50">
                    {getFormattedMessage()}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem via WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
