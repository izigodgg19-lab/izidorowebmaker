/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Technologies } from './components/Technologies';
import { Diferenciais } from './components/Diferenciais';
import { CtaSection } from './components/CtaSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | undefined>(undefined);

  const handleContactClick = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForContact(serviceName);
    }
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-sky-500/20 selection:text-sky-300">
      {/* 1. Navbar */}
      <Navbar onContactClick={() => handleContactClick()} />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero onContactClick={() => handleContactClick()} />

        {/* 3. Sobre mim */}
        <About onContactClick={() => handleContactClick()} />

        {/* 4. Áreas de atuação (O que eu desenvolvo) */}
        <Services onSelectService={(service) => handleContactClick(service)} />

        {/* 5. Projetos */}
        <Projects />

        {/* 6. Como trabalho */}
        <Process />

        {/* 7. Tecnologias & Ferramentas */}
        <Technologies />

        {/* 8. Diferenciais */}
        <Diferenciais />

        {/* 9. CTA */}
        <CtaSection onContactClick={() => handleContactClick()} />

        {/* 10. Contato */}
        <Contact prefilledService={selectedServiceForContact} />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
