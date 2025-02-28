import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		width: {
  			'70': '17.5rem'
  		},
  		gridTemplateColumns: {
  			app: 'minmax(18rem, 20rem) 1fr',
  			profile: 'max-content 1fr min-content',
  			form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)'
  		},
  		animation: {
  			slideDownAndFade: 'slideDownAndFade 1s linear',
  			slideUpAndFade: 'slideUpAndFade 1s linear'
  		},
  		keyframes: {
  			slideDownAndFade: {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			slideUpAndFade: {
  				from: {
  					opacity: '1'
  				},
  				to: {
  					opacity: '0'
  				}
  			}
  		},
  		borderWidth: {
  			'6': '6px'
  		},
  		colors: {
  			error: {
  				'25': '#FFFBFA',
  				'50': '#FEF3F2',
  				'100': '#FEE4E2',
  				'200': '#FECDCA',
  				'300': '#FDA29B',
  				'400': '#F97066',
  				'500': '#F04438',
  				'600': '#D92D20',
  				'700': '#B42318',
  				'800': '#912018',
  				'900': '#7A271A'
  			},
  			sky: {
  				'25': '#f8fcff',
  				'75': '#f0f9ff',
  				'150': '#e0f2fe'
  			},
  			slate: {
  				'25': '#fbfcfd',
  				'950': '#111820'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				light: '#3B82F6',
  				dark: '#1E3A8A',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				light: '#FBBF24',
  				dark: '#B45309',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			neutral: {
  				DEFAULT: '#64748B',
  				light: '#CBD5E1',
  				dark: '#1E293B'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
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
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
