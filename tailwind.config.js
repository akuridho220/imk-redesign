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
          900: '#CF2729',
          800: '#c4314e',
          700: '#d93f57',
          750: '#FFD449',
          600: '#ca2128',
          500: '#ec2b26',
          400: '#F7A180',
        },
        secondary: {
          900: '#011F4B',
          800: '#03396C',
          700: '#005b96',
          600: '#6497b1',
          500: '#b3cde0',
        },
        accent: {
          900: '#F58020',
          800: '#FBAC1B',
          700: '#FFC837',
          600: '#FBE47E',
        },
        hitam: {
          100: '#1E1E1E',
        },
        putih: {
          200: '#FDFBF4',
          100: '#FAFAFA',
        },
        base: {
          100: '#FFFFFF',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}