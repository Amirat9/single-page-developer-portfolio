/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        black: '#151515',
        green: '#4EE1A0',
        darkGrey: '#242424',
        lightGrey: '#D9D9D9',
        errorColor: '#FF6F5B',
      },
    },
  },
  plugins: [],
};
