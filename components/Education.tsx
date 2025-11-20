import React from 'react';
import { EDUCATION_DATA } from '../constants';

export const Education: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Education & Certifications</h2>
        <div className="h-1 w-16 bg-navy-900 mx-auto"></div>
      </div>

      <div className="space-y-8">
        {EDUCATION_DATA.map((item) => (
          <div key={item.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 transition-all hover:shadow-md">
            <div className="md:w-1/4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-navy-50 text-navy-800 text-sm font-bold border border-navy-100">
                    {item.year}
                </span>
            </div>
            <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-navy-900 mb-2">{item.institution}</h3>
                <p className="text-lg text-navy-600 font-medium mb-3">{item.degree}</p>
                <p className="text-slate-600 leading-relaxed">
                    {item.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
