/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
     ],
  theme: {
    extend: {
      fontFamily:{
        Clash:['Clash Grotesk'],
      },
      backgroundColor: {
        'yellow-transparent': 'rgba(250, 208, 7, 0.07)',
      },
    },
  },
  plugins: [],
}

