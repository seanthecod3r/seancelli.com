/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'main-font':  ['Montserrat'],
				'expertise': ['Arial', 'sans-serif'],
			},
			colors: {
				'primary': '#0B3D91',
				'secondary': '#ebeff3',
			},
			keyframes: {
				slideIn: {
					'0%': { transform: 'translateX(-100%)', opacity: '0'},
					'100%': { transform: 'translateX(0)', opacity: '1'},
				}
			},
			animation: {
				slideIn: 'slideIn 1.5s ease-out forwards',
			}
		},
	},
	plugins: [],
}
