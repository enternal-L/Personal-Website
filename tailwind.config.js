/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'notion-default': '#37352f',
        'notion-hover': '#2eaadc',
        'notion-gray': '#F7F6F3',
      },
      keyframes: {
        morph: {
          '0%': { 
            transform: 'scale(0.8) rotate(-10deg)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '1'
          }
        },
        wave: {
          '0%': { 
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        typewriter: {
          '0%': { 
            width: '0',
            opacity: '1'
          },
          '100%': { 
            width: '100%',
            opacity: '1'
          }
        },
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInFromLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'morph': 'morph 0.8s ease-out forwards',
        'wave': 'wave 0.8s ease-out forwards',
        'typewriter': 'typewriter 2s steps(40) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-left': 'fadeInFromLeft 0.8s ease-out forwards'
      }
    },
  },
  plugins: [],
} 