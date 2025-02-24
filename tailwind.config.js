/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src folder
    "./public/**/*.html",         // Include any static HTML files in the public directory

  ],

  theme: {
    extend: {
      
      colors: {
        primary:"#E86512",
      },

      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },

  plugins: [],
}

