/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        archive: {
          ink: '#050706',
          surface: '#0b110d',
          green: '#79d742',
          gold: '#d4af37'
        }
      }
    }
  },
  plugins: []
};
