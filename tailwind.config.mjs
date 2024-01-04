export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  extend: {
		textColor: {
		  primary: '#2C3333',
		  secondary: '#A5C9CA',
		  third: '#E7F6F2',
		},
		backgroundColor: {
			'primary': '#2C3333', // Agrega tu color de fondo personalizado aquí
		},
	  },
	},
	plugins: ['@tailwindcss/typography'],
  }
  