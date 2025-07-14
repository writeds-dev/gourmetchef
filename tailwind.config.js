/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant-garamond': ['Cormorant Garamond', 'serif'],
        'eb-garamond': ['EB Garamond', 'serif'],
        'fira-sans-condensed': ['Fira Sans Condensed', 'sans-serif'],
        'kaushan-script': ['Kaushan Script', 'cursive'],
        'manrope': ['Manrope', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
        'noto-sans': ['Noto Sans', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '128': '32rem', // 512px
        '144': '36rem', // 576px
        '160': '40rem', // 640px
      },
      fontSize: {
        'xxs': '.65rem', // For smaller elements
        'tiny': '.875rem', // For specific small elements
      },
      lineHeight: {
        'extra-loose': '2.5', // For extra spacing in large text
      },
      colors: {
        custom: {
          light: '#F4F4F9',
          dark: '#1F1F1F',
          primary: '#A65F00',
          secondary: '#8c4b00',
        },
      },
    },
  },
  plugins: [],
};
