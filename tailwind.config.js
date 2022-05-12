module.exports = {
	content: [
		'./src/components/**/*.{js,jsx,ts,tsx}',
		'./src/pages/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				'sectionOne': "repeat(auto-fill, minmax(250px, 1fr))",
			}
		},
	},
	plugins: [],
};
