import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white shadow-md border-gray-200 py-3' 
          : 'bg-white border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo / Name */}
          <div className="flex items-center">
            <a href="#home" className="group">
              <h1 className="font-serif font-bold text-xl sm:text-2xl text-navy-900 tracking-tight">
                George M. Rimakis<span className="text-navy-500 font-sans text-base ml-1 font-normal">, CFA</span>
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-navy-900 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <div className="w-px h-5 bg-slate-300 mx-2" />
            <div className="flex gap-3">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-navy-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-navy-700 transition-colors">
                <Github size={20} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-500 hover:text-navy-700 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-navy-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-navy-900 hover:bg-slate-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};