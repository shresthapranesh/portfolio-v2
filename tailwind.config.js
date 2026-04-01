import typography from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
          mono: ['var(--font-jetbrains-mono)', 'monospace'],
        },
      },
    },
    plugins: [
      typography,
    ]
};