/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			primary: ['Web-77', 'serif']
		},
		fontSize: {
			sm: ['var(--text-sm)', '1.2'],
			base: ['var(--text-base)', '1.2'],
			lg: ['var(--text-lg)', '1.2']
		},
		extend: {
			spacing: {
				base: 'var(--base-spacing)',
				'base-1/2': 'var(--base-spacing-half)',
				'base-mobile': 'var(--base-spacing-mobile)',
				'base-mobile-1/2': 'var(--base-spacing-mobile-half)'
			},
			colors: {
				purple: 'var(--purple)',
				'light-purple': 'var(--light-purple)',
				red: 'var(--red)',
				pink: '#ffe5e5',
				grey: '#8c8c8c',
				yellow: 'var(--yellow)',
				primary: 'var(--primary)',
				'grey-1': 'var(--grey-1)',
				'grey-2': 'var(--grey-2)',
				'grey-3': 'var(--grey-3)',
				'grey-4': 'var(--grey-4)',
				'grey-5': 'var(--grey-5)',
				'grey-6': 'var(--grey-6)',
				'grey-7': 'var(--grey-7)',
				'grey-8': 'var(--grey-8)',
				'light-grey': '#D9D9D9',
				'lighter-grey': '#f5f5f5',
				green: 'var(--green)'
			},
			leading: {
				tight: 'var(--leading-tight)'
			}
		}
	},
	plugins: [],
	safelist: [
		'col-span-1',
		'col-span-2',
		'col-span-3',
		'col-span-4',
		'col-span-5',
		'col-span-6',
		'col-span-7',
		'col-span-8',
		'col-span-9',
		'col-span-10',
		'col-span-11',
		'col-span-12'
	]
};
