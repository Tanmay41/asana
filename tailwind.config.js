/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"60-lines":
					"url('https://www.transparenttextures.com/patterns/60-lines.png')",
			},
		},
	},
	plugins: [],
};
