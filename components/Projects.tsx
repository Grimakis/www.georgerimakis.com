import React from 'react';
import { PROJECTS_DATA } from '../constants';

export const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Projects</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
            Personal technical initiatives and historical computing projects.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 md:flex">
            
            {/* Image Area */}
            <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-slate-100">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:w-3/5 flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3">{project.title}</h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="pt-6 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-semibold text-navy-700 bg-navy-50 px-3 py-1 rounded-md">
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