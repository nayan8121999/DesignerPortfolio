/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'highlight': '#14cf93',
      },
    },
  },
  plugins: [],
}