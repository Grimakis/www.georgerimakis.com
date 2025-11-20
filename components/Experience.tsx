import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

export const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Professional Experience</h2>
        <div className="h-1 w-16 bg-navy-900 mx-auto"></div>
      </div>

      <div className="space-y-12">
        {EXPERIENCE_DATA.map((item) => (
          <div key={item.id} className="relative pl-8 md:pl-0 group">
            {/* Mobile Left Line */}
            <div className="absolute left-0 top-2 bottom-[-48px] w-px bg-slate-200 md:hidden last:hidden" />
            <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-navy-900 md:hidden" />
            
            <div className="md:flex md:gap-8">
                {/* Left: Date */}
                <div className="md:w-1/4 md:text-right pt-1 mb-2 md:mb-0">
                    <span className="font-medium text-slate-500 text-sm uppercase tracking-wide">
                        {item.period}
                    </span>
                </div>

                {/* Center: Divider (Desktop) */}
                <div className="hidden md:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-navy-900 z-10"></div>
                    <div className="flex-grow w-px bg-slate-200 my-2 group-last:hidden"></div>
                </div>

                {/* Right: Content */}
                <div className="md:w-3/4 pb-12 group-last:pb-0">
                    <h3 className="text-xl font-bold text-navy-900 mb-1">
                        {item.role}
                    </h3>
                    <div className="text-lg text-navy-600 font-medium mb-4">
                        {item.company}
                    </div>
                    
                    <ul className="space-y-3 mb-5">
                        {item.description.map((desc, i) => (
                        <li key={i} className="text-slate-600 leading-relaxed flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0"></span>
                            {desc}
                        </li>
                        ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                        <span key={tech} className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                            {tech}
                        </span>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};