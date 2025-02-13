import { json } from '@sveltejs/kit';
import { getWipData } from '$lib/wipUtils.js';

export async function POST({ request }) {
	const { pageNum, itemsPerPage, term } = await request.json();

	const wipData = await getWipData(pageNum, itemsPerPage, term);

	if (!wipData) {
		return false;
	}

	return json({
		status: 'success',
		data: wipData
	});
}
