/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // Ajusta según tu estructura
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // Para Next.js App Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-primary': 'var(--color-primary)',
        'theme-secondary': 'var(--color-secondary)',
        'theme-text': 'var(--color-text)',
        'theme-background': 'var(--color-background)',
      }
    }
  },
  plugins: [],
}

