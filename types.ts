export interface Project {
  id: string;
  title: string;
  date: string;
  category: 'Cinematic' | 'Freestyle' | 'Racing';
  thumbnailUrl: string;
  views: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
