export interface AboutData {
  paragraphs: string[];
}

export interface Experience {
  title: string;
  company: string;
  type: string;
  duration: string;
  period: string;
  location: string;
  workType: string;
}

export interface ExperienceData {
  experiences: Experience[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  links?: {
    github?: string;
    site?: string;
  };
}

export interface ProjectsData {
  projects: Project[];
}

export interface SocialMedia {
  socialMediaName: string;
  url: string;
}

export interface SocialMediaData {
  socialMedia: SocialMedia[];
}

export interface NavItem {
  label: string,
  key: string,
}