/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'gradient-animation': 'gradient 5s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-white': {
          textShadow: '2px 2px 4px rgba(255, 255, 255, 0.6)',
        },
      });
    },
  ],
}
