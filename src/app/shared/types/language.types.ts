export type Language = 'es' | 'en';

export interface LanguageContextType {
  language: Language;
  toggleLanguage: (lang: Language) => void;
}
