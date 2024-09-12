/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{css,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"  // Asegúrate de incluir este path para Flowbite
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        rotate: 'rotate 10s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')  // Usa el paquete correcto
  ],
}
