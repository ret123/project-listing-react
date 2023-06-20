/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueGray-300': '#cbd5e1',
        'coolGray-600': '#4b5563',
        'coolGray-100': '#f3f4f6'
      },
      fontFamily: {
        title: ['Nunito']
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      width: {
        '350': '350px',
       },
       height: {
         '350': '350px',
        
         
        }
       
    },
    
  },
  plugins: [],
}

