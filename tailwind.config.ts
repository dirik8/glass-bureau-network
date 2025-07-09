
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // FBI Government Colors
        'fbi-blue': {
          DEFAULT: 'rgb(31 78 121)',
          50: 'rgb(239 246 255)',
          100: 'rgb(219 234 254)',
          200: 'rgb(191 219 254)',
          300: 'rgb(147 197 253)',
          400: 'rgb(96 165 250)',
          500: 'rgb(59 130 246)',
          600: 'rgb(31 78 121)',
          700: 'rgb(29 78 216)',
          800: 'rgb(30 64 175)',
          900: 'rgb(30 58 138)',
        },
        'government': {
          'white': 'rgb(255 255 255)',
          'gray': {
            50: 'rgb(248 250 252)',
            100: 'rgb(241 245 249)',
            200: 'rgb(226 232 240)',
            300: 'rgb(203 213 225)',
            400: 'rgb(148 163 184)',
            500: 'rgb(100 116 139)',
            600: 'rgb(71 85 105)',
            700: 'rgb(51 65 85)',
            800: 'rgb(30 41 59)',
            900: 'rgb(15 23 42)',
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'government-xl': 'clamp(2.5rem, 5vw, 4rem)',
        'government-lg': 'clamp(1.75rem, 3vw, 2.5rem)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
