import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github } from 'lucide-react';
import { Button } from './Button';
import { PERSONAL_INFO } from '../constants';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            This website serves as a central hub for my professional identity and contact information. 
            I am not currently seeking new employment or freelance opportunities.
          </p>
          
          <div className="space-y-6">
             <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-800 border border-navy-700">
               <div className="p-3 rounded-full bg-navy-900 text-slate-300">
                 <Mail size={24} />
               </div>
               <div>
                 <p className="text-sm text-slate-400 font-medium mb-0.5">Email</p>
                 <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white font-medium hover:underline">{PERSONAL_INFO.email}</a>
               </div>
             </div>

             <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-800 border border-navy-700">
               <div className="p-3 rounded-full bg-navy-900 text-slate-300">
                 <Linkedin size={24} />
               </div>
               <div>
                 <p className="text-sm text-slate-400 font-medium mb-0.5">LinkedIn</p>
                 <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline">View Profile</a>
               </div>
             </div>

             <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-800 border border-navy-700">
               <div className="p-3 rounded-full bg-navy-900 text-slate-300">
                 <Github size={24} />
               </div>
               <div>
                 <p className="text-sm text-slate-400 font-medium mb-0.5">GitHub</p>
                 <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline">View Profile</a>
               </div>
             </div>
          </div>
        </div>

        <div className="bg-white text-slate-900 rounded-xl p-8 shadow-xl">
          <h3 className="text-xl font-bold text-navy-900 mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
              <input 
                type="text" 
                id="subject" 
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition-all"
                placeholder="Hello"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
              <textarea 
                id="message" 
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <Button type="submit" disabled={isSubmitting || isSent} className="w-full bg-navy-900 hover:bg-navy-800 text-white">
              {isSubmitting ? (
                "Sending..."
              ) : isSent ? (
                "Message Sent!"
              ) : (
                <>Send Message <Send className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};