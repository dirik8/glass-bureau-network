
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
          DEFAULT: 'hsl(var(--fbi-blue))',
          50: 'hsl(220, 100%, 98%)',
          100: 'hsl(214, 95%, 93%)',
          200: 'hsl(213, 97%, 87%)',
          300: 'hsl(212, 96%, 78%)',
          400: 'hsl(213, 94%, 68%)',
          500: 'hsl(var(--fbi-blue-light))',
          600: 'hsl(var(--fbi-blue))',
          700: 'hsl(215, 78%, 48%)',
          800: 'hsl(215, 70%, 40%)',
          900: 'hsl(var(--fbi-blue-dark))',
        },
        'government': {
          'white': 'hsl(var(--government-white))',
          'gray': {
            50: 'hsl(210, 40%, 98%)',
            100: 'hsl(210, 40%, 96%)',
            200: 'hsl(214, 32%, 91%)',
            300: 'hsl(213, 27%, 84%)',
            400: 'hsl(215, 20%, 65%)',
            500: 'hsl(215, 16%, 47%)',
            600: 'hsl(var(--fbi-gray))',
            700: 'hsl(215, 25%, 27%)',
            800: 'hsl(217, 33%, 17%)',
            900: 'hsl(var(--government-black))',
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
