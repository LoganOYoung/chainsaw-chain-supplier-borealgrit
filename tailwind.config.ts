import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Oswald', 'Roboto', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'Roboto', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
      },
      colors: {
        industrial: {
          DEFAULT: '#374151',
          dark: '#1f2937',
          light: '#6b7280',
        },
        // Forest Green Theme Colors
        'forest-dark': '#1A3922',      // Deep green for Menu & Footer
        'forest-brand': '#426B3D',     // Brand green for links, icons, borders (equivalent to rgba(45, 90, 39, 0.9) on white)
        'forest-light': '#F0F5F2',     // Light gray-green for backgrounds
        'safety-orange': '#F28C28',     // Safety orange for CTA buttons
        'cream-white': '#F8F9F5',      // Cream white for text on dark green (updated)
        accent: '#2D5A27',             // Brand green as default accent
        forest: '#2D5A27',
        // Text Colors
        'text-main': '#222222',        // Deep charcoal for headings
        'text-body': '#555555',        // Medium gray for body text
        'text-muted': '#4B5563',       // Muted gray for secondary text
      },
    },
  },
  plugins: [],
}
export default config
