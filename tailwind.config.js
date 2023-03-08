/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts}"],
	theme: {
		extend: {
			screens: {
				sm: "400px"
			},
			colors: {
				primary: "#007AFF",
				background: "#ECF2F6",
				white: "#FAFAFA",
				gray: "#C4C4C4"
			}
		}
	},
	plugins: []
}
