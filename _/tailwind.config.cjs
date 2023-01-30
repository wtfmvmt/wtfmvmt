/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				major_mono: ["Major Mono Display", "display"],
				share_tech: ["Share Tech", "monospace"],
			},
		},
	},
	plugins: [],
}
