export interface Project {
  id: string;
  title: string;
  date: string;
  category: 'Cinematic' | 'Freestyle' | 'Racing' | 'Commercial';
  thumbnailUrl: string;
  views: string;
  videoUrl?: string; // Optional for now
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}