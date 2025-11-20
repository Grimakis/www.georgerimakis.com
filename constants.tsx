import { TrendingUp, Cpu, BookOpen, Award } from 'lucide-react';
import { ExperienceItem, ProjectItem, SkillCategory, EducationItem } from './types';

export const PERSONAL_INFO = {
  name: "George M. Rimakis, CFA",
  title: "Financial Technology Professional",
  tagline: "Bridging the gap between complex financial systems and modern technology.",
  email: "contact@georgerimakis.com",
  github: "https://github.com/Grimakis", 
  linkedin: "https://www.linkedin.com/in/grimakis/",
  location: "Greater New York City Area"
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: '1',
    role: "Financial Technology Professional",
    company: "FactSet Research Systems",
    period: "2014 - Present",
    description: [
      "Combining a strong academic background in Finance with a deep personal passion for technology to drive innovation.",
      "Awarded the globally recognized Chartered Financial Analyst® (CFA®) designation in September 2018.",
      "Leveraging technical expertise to enhance financial workflows and data analysis capabilities."
    ],
    technologies: ["Financial Analysis", "Market Data", "Technology Strategy", "CFA"]
  },
  {
    id: '2',
    role: "Risk Management Intern",
    company: "Tronox",
    period: "2013",
    description: [
      "Collaborated with the Risk Management and Corporate Audit team to ensure regulatory compliance.",
      "Gained extensive experience with multinational corporate accounting processes and internal controls.",
      "Assisted in internal audits and multinational risk assessments during summer and winter terms."
    ],
    technologies: ["Risk Management", "Internal Controls", "Auditing", "Corporate Finance"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'p1',
    title: "Text Sweeper",
    description: "A custom Minesweeper clone engineered for the TRS-80 Model 100/Tandy 102 Portable Computer. Features an 8x32 minefield and custom difficulty settings ranging from 10 to 217 mines.",
    technologies: ["Retro Computing", "BASIC", "System Architecture", "Game Logic"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    liveUrl: undefined,
    repoUrl: undefined
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Finance & Strategy",
    skills: ["CFA Charterholder", "Investment Analysis", "Derivatives", "Portfolio Management", "Financial Modeling", "Market Data"],
    icon: TrendingUp
  },
  {
    name: "Technology",
    skills: ["Software Development", "System Architecture", "Data Analysis", "Process Automation", "Financial Technology"],
    icon: Cpu
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu1",
    institution: "CFA Institute",
    degree: "Chartered Financial Analyst® (CFA) Charterholder",
    year: "2018",
    description: "Achieved the CFA designation after passing three levels of rigorous examinations covering investment tools, asset valuation, portfolio management, and ethical standards."
  },
  {
    id: "edu2",
    institution: "University of Connecticut",
    degree: "Bachelor of Science in Business, Finance",
    year: "2014",
    description: "Graduated from the School of Business. Specialized coursework included Futures & Options, Risk Management, Investments & Securities, and Project Valuation."
  }
];