/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      opacity: {

        '10': '0.1',

        '20': '0.2',

        '95': '0.95',
       }
    },
    colors: {
      custombg : '#e5e0dc',
      secondcustombg : '#cfc9b5',
      thirdcustombg : '#b6ad90',
      customlila : '#c993e6',
      customdarklila : "#7D5B8F",
      customdarkgreen : '#4c6d4b',
      customlightgreen : '#7aa479',
      secondcustomlightgreen : '#9ABF99'
    },
  },
  plugins: [],
}