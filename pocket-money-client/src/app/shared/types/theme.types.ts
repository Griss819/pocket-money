export type Theme = 'light' | 'dark'; // Añade más temas si necesitas

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}
