/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        rosa: {
          DEFAULT: '#FF8E9E',
          claro: '#FBDCE2',
          escuro: '#C05070',
        },
        creme: '#FEF9FB',
        chocolate: '#4A302C',
        caramelo: '#A0706A',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        pill: '50px',
      },
      boxShadow: {
        rosa: 'rgba(255, 142, 158, 0.4) 0px 4px 15px 0px',
        'rosa-lg': 'rgba(255, 142, 158, 0.5) 0px 8px 20px 0px',
        card: '0 16px 40px rgba(74, 48, 44, 0.1)',
        cart: '0 8px 32px rgba(74, 48, 44, 0.3)',
      },
    },
  },
  plugins: [],
}
