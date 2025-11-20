import React from 'react';
import { SKILLS_DATA } from '../constants';

export const Skills: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Areas of Expertise</h2>
         <div className="h-1 w-16 bg-navy-900 mx-auto mb-6"></div>
         <p className="text-slate-600 max-w-2xl mx-auto">
            Core competencies bridging the gap between financial analysis and modern technology.
         </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        {SKILLS_DATA.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.name} className="w-full md:max-w-sm bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="p-3 bg-white rounded-full shadow-sm text-navy-900 mb-4">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-navy-900">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-md shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};