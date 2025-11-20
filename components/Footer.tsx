import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white border-t border-slate-100 text-center">
      <div className="max-w-7xl mx-auto px-4 text-sm text-slate-500">
        <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
        <p className="mt-2 text-xs text-slate-400">CFA® and Chartered Financial Analyst® are registered trademarks owned by CFA Institute.</p>
      </div>
    </footer>
  );
};