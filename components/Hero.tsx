import React, { useState } from 'react';
import { ArrowRight, ChevronDown, User } from 'lucide-react';
import { Button } from './Button';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white flex items-center justify-center min-h-[85vh]">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="text-left order-2 lg:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-navy-900 leading-tight mb-6 animate-fade-in-up">
              Financial <br/>
              <span className="text-navy-600">Technologist.</span>
            </h1>
            
            <div className="h-1 w-20 bg-navy-900 mb-8"></div>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {PERSONAL_INFO.tagline} <br/>
              A unique professional blend of <span className="text-navy-900 font-semibold">CFA® charterholder</span> expertise and practical software engineering.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
                View Experience <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Information
              </Button>
            </div>
          </div>

          {/* Right Visual - Professional Headshot */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
             <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Image Container */}
                <div className="absolute inset-0 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-100">
                   {!imageError ? (
                     <img 
                      src="profile.png" 
                      alt="George M. Rimakis" 
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                     />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center bg-navy-900 text-white">
                        <span className="font-serif text-5xl font-bold">GR</span>
                     </div>
                   )}
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-4 -left-4 sm:bottom-8 sm:-left-8 bg-white p-4 sm:p-6 shadow-lg rounded-lg border border-slate-100 max-w-xs z-10">
                  <p className="font-serif text-navy-900 text-base sm:text-lg font-bold mb-1">CFA® Charterholder</p>
                  <p className="text-slate-500 text-xs sm:text-sm">Awarded September 2018</p>
                </div>
             </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hidden lg:block">
           <ChevronDown size={24} />
        </div>
      </div>
    </div>
  );
};