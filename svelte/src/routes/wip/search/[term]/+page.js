// import { client } from '$lib/sanity/client.js';

export async function load({ params }) {
	const { term = '' } = params || {};

	return {
		term
	};
}
