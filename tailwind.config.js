/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins", "serif"]
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

