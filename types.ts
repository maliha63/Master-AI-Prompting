export interface PromptCategory {
  title: string;
  prompts: string[];
}

export interface LlmModel {
  name: string;
  company: string;
  features: string;
  link: string;
  logo: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}