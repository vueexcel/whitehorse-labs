/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'Tiempos-Headline': ['Tiempos Headline', 'serif'],
      },
    },
  },
  plugins: [],
}