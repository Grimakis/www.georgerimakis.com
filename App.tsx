import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-gray-50">
      <Navbar isScrolled={isScrolled} />

      <main className="z-10 flex-grow flex flex-col gap-0">
        <section id="home">
          <Hero />
        </section>
        
        <section id="skills" className="py-20 bg-white">
          <Skills />
        </section>

        <section id="experience" className="py-20 bg-slate-50 border-y border-slate-200">
          <Experience />
        </section>

        <section id="education" className="py-20 bg-white border-b border-slate-200">
          <Education />
        </section>

        <section id="projects" className="py-20 bg-slate-50">
          <Projects />
        </section>

        <section id="contact" className="py-20 bg-navy-900 text-white">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
