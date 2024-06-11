/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1F4098',
        },
        secondary: {
          900: '#7EBDE5',
        },
        tertiary:{
          900: '#365177',
        },
        hitam: {
          100: '#1E1E1E',
        },
        putih: {
          200: '#FDFBF4',
          100: '#FAFAFA',
        },
        base: {
          100: '#BAC5DE',
        },
        search_text: {
          900 : '#5F5F5F',
        },
        footer : {
          900 : '#343A40',
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}