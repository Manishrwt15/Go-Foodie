/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Include JS and JSX files
  ],
  theme: {
    extend: {
      screens:{
        'xs': '120px',
<<<<<<< HEAD
        'xsl': '420px'
=======
        'xsl': '420px',
        'xsll': '550px'
>>>>>>> upstream/main
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          'scrollbarWidth': 'none', // For Firefox
          '-ms-overflow-style': 'none', // For Internet Explorer and Edge
          '&::-webkit-scrollbar': {
            display: 'none', // For Chrome, Safari, and Opera
          },
        },
      });
    },
  ],
}
