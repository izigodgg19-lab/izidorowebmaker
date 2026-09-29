export interface Project {
  id: string;
  name: string;
  category: string;
  categoryFilter: 'all' | 'systems' | 'landing' | 'apps';
  description: string;
  additionalNote?: string;
  url: string;
  buttonLabel: string;
  image?: string;
  tags?: string[];
  features?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface TechCategory {
  title: string;
  description: string;
  items: Array<{
    name: string;
    level?: string;
  }>;
}
