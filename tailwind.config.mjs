/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			textColor:theme => ({
				primary: '#0F0F0F',
				secondary: '#232D3F',
				tertiary: '#005B41',
			}),
		},
	},
	plugins: [],
}
