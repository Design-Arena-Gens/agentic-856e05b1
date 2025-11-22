import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cairo"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#1F5EFF',
          foreground: '#ffffff'
        },
        secondary: '#F97316',
        accent: '#22C55E'
      },
      boxShadow: {
        glow: '0 20px 45px -20px rgba(31, 94, 255, 0.45)'
      }
    }
  },
  plugins: []
};

export default config;
