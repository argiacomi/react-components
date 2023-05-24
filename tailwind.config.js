/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: { preflight: false },
  important: '#root',
  theme: {
    fontFamily: {
      sans: ['Lato', 'Montserrat', 'Poppins', 'Source Sans Pro']
    },
    screens: {
      xs: '0px',
      sm: '480px',
      md: '768px',
      lg: '1280px',
      xl: '1920px',
      '2xl': '2560px'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000000',
        disabled: {
          light: '#bdbdbd',
          dark: '#9e9e9e',
          text: '#616161'
        },
        divider: {
          light: '#00000033',
          dark: '#ffffff1f'
        },
        primary: {
          200: '#a5c8f2',
          300: '#77aceb',
          400: '#4a91e5',
          500: '#1d75de',
          600: '#175eb2',
          light: '#000000de',
          dark: '#ffffff'
        },
        secondary: {
          200: '#d5b9f1',
          300: '#c196eb',
          400: '#ac73e4',
          500: '#9750dd',
          600: '#7940b1',
          light: '#00000099',
          dark: '#ffffffb3'
        },
        success: {
          200: '#a5efbf',
          300: '#78e79f',
          400: '#4bdf7f',
          500: '#1ed75f',
          600: '#18ac4c'
        },
        warning: {
          200: '#fde49b',
          300: '#fdd769',
          400: '#fcc937',
          500: '#fbbc05',
          600: '#c99604'
        },
        danger: {
          200: '#f7b4ae',
          300: '#f28e86',
          400: '#ee695d',
          500: '#ea4335',
          600: '#bb362a'
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#F2F2F2',
          300: '#eeeeee',
          400: '#e0e0e0',
          500: '#bdbdbd',
          600: '#9e9e9e',
          700: '#757575',
          800: '#616161',
          900: '#424242',
          1000: '#212121'
        }
      },
      keyframes: {
        enterKeyframe: {
          '0%': {
            transform: 'scale(0)',
            opacity: 0.1
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 0.3
          }
        },
        exitKeyframe: {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        },
        ripplePulsateKeyframe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.92)' }
        },
        waveKeyframe: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '50%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      },
      animation: {
        'ripple-enter': 'enterKeyframe 550ms ease-in-out',
        'ripple-exit': 'exitKeyframe 550ms ease-in-out',
        'ripple-pulse':
          'ripplePulsateKeyframe 2500ms ease-in-out infinite 200ms',
        'skeleton-wave': 'waveKeyframe 1.6s linear 0.5s infinite'
      }
    }
  },
  plugins: []
};
