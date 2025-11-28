/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: '#f7f5f2',
        'deep-blue': '#173340',
        'accent-blue': '#0a24e3',
        'accent-coral': '#e3664f',
        'accent-yellow': '#ffcd63',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}