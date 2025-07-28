
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
      padding: {
        DEFAULT: "1rem",
        xs: "1rem",
        sm: "1.5rem", 
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
        "2xl": "4rem",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px", 
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "375px",
      sm: "640px", 
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
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
        // FBI Government Colors - Enhanced for Vibrancy
        'fbi-blue': {
          DEFAULT: 'hsl(var(--fbi-blue))',
          light: 'hsl(var(--fbi-blue-light))',
          dark: 'hsl(var(--fbi-blue-dark))',
          vibrant: 'hsl(var(--fbi-blue-vibrant))',
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
        'fluid-xs': ['clamp(0.7rem, 0.8vw, 0.75rem)', { lineHeight: '1.2' }],
        'fluid-sm': ['clamp(0.8rem, 1vw, 0.875rem)', { lineHeight: '1.3' }], 
        'fluid-base': ['clamp(0.9rem, 1.2vw, 1rem)', { lineHeight: '1.5' }],
        'fluid-lg': ['clamp(1rem, 1.4vw, 1.125rem)', { lineHeight: '1.5' }],
        'fluid-xl': ['clamp(1.1rem, 1.6vw, 1.25rem)', { lineHeight: '1.4' }],
        'fluid-2xl': ['clamp(1.3rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
        'fluid-3xl': ['clamp(1.6rem, 2.5vw, 1.875rem)', { lineHeight: '1.2' }],
        'fluid-4xl': ['clamp(2rem, 3vw, 2.25rem)', { lineHeight: '1.1' }],
        'fluid-5xl': ['clamp(2.5rem, 4vw, 3rem)', { lineHeight: '1' }],
        'fluid-6xl': ['clamp(3rem, 5vw, 3.75rem)', { lineHeight: '1' }],
        'hero-title': ['clamp(1.75rem, 5vw, 4rem)', { lineHeight: '1.1' }],
        'hero-subtitle': ['clamp(1.25rem, 3vw, 2rem)', { lineHeight: '1.2' }],
      },
      spacing: {
        'fluid-xs': 'clamp(0.5rem, 1vw, 0.75rem)',
        'fluid-sm': 'clamp(0.75rem, 1.5vw, 1rem)', 
        'fluid-md': 'clamp(1rem, 2vw, 1.5rem)',
        'fluid-lg': 'clamp(1.5rem, 3vw, 2rem)',
        'fluid-xl': 'clamp(2rem, 4vw, 3rem)',
        'fluid-2xl': 'clamp(3rem, 5vw, 4rem)',
        'fluid-3xl': 'clamp(4rem, 6vw, 6rem)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
