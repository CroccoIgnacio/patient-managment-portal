/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-blue': 'var(--main-blue)',
        'blue-3': 'var(--blue-3)',
        'green-success': 'var(--green-success)',
        'gray-1': 'var(--gray-1)',
        'gray-background': 'var(--gray-background)',
        'modal-background': 'var(--modal-background)',
      },
    },
  },
  plugins: [],
};
