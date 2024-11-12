/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary_text: '#18191f',
        secondary_text: '#ffffff',
        tertiary_text: '#d1d5db',
        primary_color: '#09bc8a',
        secondary_color: '#004346',
        card_color: '#508991',
        dark_green: '#172a3a',
        main_red: '#992020',
        unspoken_color: '#09404d'
      },
      boxShadow: {
        'left-bottom': '4px 7px 0px #09bc8a'
      },
      height: {
        '503': '503px'
      },
      width: {        
        '409': '409px'
      }
    },
  },
  plugins: [],
}