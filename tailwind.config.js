/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-alt': 'var(--bg-alt)',
        surface: 'var(--surface)',
        'surface-raised': 'var(--surface-raised)',
        text: 'var(--text)',
        'text-strong': 'var(--text-strong)',
        'text-muted': 'var(--text-muted)',
        line: 'var(--border)',
        'line-strong': 'var(--border-strong)',
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          active: 'var(--primary-active)',
          soft: 'var(--primary-soft)',
        },
        cyan: 'var(--accent-cyan)',
        deep: 'var(--accent-deep)',
        success: 'var(--success)',
        error: 'var(--error)',
      },
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        display: ['3rem', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-m': ['2.125rem', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '700' }],
        h1: ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1-m': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2-m': ['1.375rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        h3: ['1.25rem', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        eyebrow: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.14em', fontWeight: '600' }],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.4)',
        md: '0 8px 24px rgba(0,0,0,0.45)',
        lg: '0 24px 64px rgba(0,0,0,0.55)',
        glow: '0 0 0 1px rgba(53,49,254,0.35), 0 12px 40px rgba(53,49,254,0.22)',
        focus: '0 0 0 3px rgba(53,49,254,0.22)',
      },
      maxWidth: {
        container: '1120px',
        prose: '68ch',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
        std: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
