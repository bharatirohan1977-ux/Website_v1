export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Internship {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  mode: string;
  price: number;
  category: string;
  skillGains: string[];
  perks: string[];
  prerequisites: string[];
  projectOutline: string;
  processSteps: ProcessStep[];
  status: 'active' | 'upcoming' | 'archived';
}
