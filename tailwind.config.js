/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          orange: '#F98F33',
          bright: '#F05E47',
          rose: '#E73B50',
          magenta: '#D21D61',
          purple: '#950B6D',
          warm: '#FFF7F2',
          light: '#FFF0EA',
          50: '#FFF5F0',
          100: '#FFE8DF',
          200: '#FFD1BF',
          500: '#F05E47',
          600: '#E73B50',
          700: '#D21D61',
        },
        navy: {
          midnight: '#080B2E',
          secondary: '#25294D',
          card: '#0D113B',
          surface: '#13194D',
          border: '#1E2563',
          muted: '#8A92B2',
          light: '#F5F6FA',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'swift-gradient': 'linear-gradient(120deg, #F98F33 0%, #F05E47 30%, #E73B50 55%, #D21D61 78%, #950B6D 100%)',
        'swift-gradient-hover': 'linear-gradient(120deg, #FF9E4A 0%, #F86E58 30%, #EF4B5F 55%, #DE2D70 78%, #A8127D 100%)',
        'swift-subtle': 'linear-gradient(135deg, rgba(249, 143, 51, 0.05) 0%, rgba(240, 94, 71, 0.05) 35%, rgba(210, 29, 97, 0.03) 70%, rgba(149, 11, 109, 0.02) 100%)',
        'navy-gradient': 'linear-gradient(180deg, #080B2E 0%, #0F1545 100%)',
        'dark-card-gradient': 'linear-gradient(135deg, rgba(19, 25, 77, 0.95) 0%, rgba(8, 11, 46, 0.98) 100%)',
      },
      boxShadow: {
        'glow-coral': '0 8px 24px -4px rgba(240, 94, 71, 0.25)',
        'glow-accent': '0 16px 36px -10px rgba(210, 29, 97, 0.22)',
        'card-soft': '0 2px 14px 0 rgba(8, 11, 46, 0.04)',
        'card-hover': '0 12px 32px -4px rgba(8, 11, 46, 0.09)',
        'premium': '0 20px 40px -15px rgba(8, 11, 46, 0.08)',
        'floating': '0 16px 32px -8px rgba(8, 11, 46, 0.12), 0 4px 12px -2px rgba(8, 11, 46, 0.06)',
        'neumorphic': '6px 6px 16px rgba(8, 11, 46, 0.06), -6px -6px 16px rgba(255, 255, 255, 0.9)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 5s ease-in-out infinite',
        'grid-drift': 'gridDrift 25s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0.8deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.65', transform: 'scale(1.06)' },
        },
        gridDrift: {
          '0%': { backgroundPosition: '0px 0px' },
          '100%': { backgroundPosition: '48px 48px' },
        },
      }
    },
  },
  plugins: [],
}
