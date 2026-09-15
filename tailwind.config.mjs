/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#8a7863',
        secondary: '#d1ded8',
        tertiary: '#FAF6F0'
      }
    }
  },
  plugins: []
}
