
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  level?: number;
}
