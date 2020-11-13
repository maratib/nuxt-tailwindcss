module.exports = {
	theme: {
		extend: {
			screens: {
				'phone': '340px',
				'notphone': '340px',

				'tablet': '640px',
				// => @media (min-width: 640px) { ... }

				'laptop': '1024px',
				// => @media (min-width: 1024px) { ... }
				'nottablet': '1024px',
				// => @media (min-width: 1024px) { ... }

				'desktop': '1280px',
				// => @media (min-width: 1280px) { ... }
			},
			listStyleType: {
				square: 'square'
			}
		}
	},
	variants: {},
	plugins: []
}