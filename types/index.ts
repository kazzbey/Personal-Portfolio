export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  highlights?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Certification {
  title: string;
  provider: string;
  date: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  status: string;
  cgpaOrMarks?: string;
  coursework?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface MetricCard {
  value: string;
  label: string;
  description?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // Honeypot field
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}
