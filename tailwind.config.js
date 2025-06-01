/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Unbounded', 'sans-serif'],
        'unbounded': ['Unbounded', 'sans-serif'],
      },
      colors: {
        'polka-pink': {
          50: '#fef2f7',
          100: '#fce7f0',
          200: '#fbd0e2',
          300: '#f7a8c9',
          400: '#f176a8',
          500: '#e6007a',
          600: '#d1006e',
          700: '#b5005f',
          800: '#940050',
          900: '#7a0045',
        },
        'polka-purple': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#552bbf',
          600: '#4c25ab',
          700: '#421f97',
          800: '#38197c',
          900: '#2e1465',
        },
        'polka-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#00b2ff',
          600: '#0099e6',
          700: '#0080cc',
          800: '#0066b3',
          900: '#004d99',
        },
      },
    },
  },
  plugins: [],
}
