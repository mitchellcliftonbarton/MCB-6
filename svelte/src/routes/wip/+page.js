import { getWipData } from '$lib/wipUtils.js';
import { defaultItemsPerPage } from '$lib/stores/paginationStore';
import { get } from 'svelte/store';

export async function load({ url }) {
	const pageNum = parseInt(url.searchParams.get('page_num')) || 1; // get page number from url if it exists, otherwise default to 1
	const itemsPerPage = parseInt(url.searchParams.get('items_per_page')) || get(defaultItemsPerPage); // get items per page from url if it exists, otherwise default to the defaultItemsPerPage store value

	const wipData = await getWipData(pageNum, itemsPerPage);

	if (!wipData) {
		return false;
	}

	return wipData;
}
