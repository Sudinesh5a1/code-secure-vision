
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom cybersecurity theme colors
				cyber: {
					dark: '#0a192f',
					blue: '#1fb4ff',
					teal: '#64ffda',
					navy: '#112240',
					slate: '#8892b0',
					light: '#a8b2d1',
					lightest: '#ccd6f6',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px #1fb4ff, 0 0 10px #1fb4ff',
					},
					'50%': { 
						boxShadow: '0 0 15px #1fb4ff, 0 0 25px #1fb4ff',
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				typing: {
					from: { width: '0' },
					to: { width: '100%' }
				},
				blink: {
					from: { borderColor: 'transparent' },
					to: { borderColor: '#1fb4ff' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'radar-scan': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 3s ease-in-out infinite',
				'typing': 'typing 3.5s steps(40, end)',
				'cursor-blink': 'blink .75s step-end infinite',
				'gradient-shift': 'gradient-shift 6s ease infinite',
				'radar-scan': 'radar-scan 3s linear infinite'
			},
			backgroundImage: {
				'cyber-grid': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 0h1v100H0V0zm10 0h1v100h-1V0zm10 0h1v100h-1V0zm10 0h1v100h-1V0zm10 0h1v100h-1V0zm10 0h1v100h-1V0zm10 0h1v100h-1V0zm10 0h1v100h-1V0zm10 0h1v100h-1V0zm10 0h1v100h-1V0zM0 0v1h100V0H0zm0 10v1h100v-1H0zm0 10v1h100v-1H0zm0 10v1h100v-1H0zm0 10v1h100v-1H0zm0 10v1h100v-1H0zm0 10v1h100v-1H0zm0 10v1h100v-1H0zm0 10v1h100v-1H0zm0 10v1h100v-1H0z' fill='%231fb4ff' fill-opacity='0.05'/%3E%3C/svg%3E\")",
			},
			fontFamily: {
				'mono': ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
				'sans': ['"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
