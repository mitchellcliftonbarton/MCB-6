import { client, wipFragment } from '$lib/sanity/client.js';

export async function getWipData(pageNum, itemsPerPage, searchTerm = null) {
	// convert pageNum and itemsPerPage to numbers
	pageNum = pageNum ? parseInt(pageNum) : 1; // if pageNum is not provided, set it to 1
	itemsPerPage = parseInt(itemsPerPage);

	// get offset and items per page plus one
	const offset = (pageNum - 1) * itemsPerPage;
	const itemsPerPagePlusOne = offset + itemsPerPage + 1;

	let wip = false;

	if (searchTerm !== null && searchTerm !== '') {
		wip = await client.fetch(
			`{
        "currentPageData": *[_type == "wip" && ([title, medium] match "${searchTerm.toLowerCase()}*" || notes[].children[].text match "${searchTerm.toLowerCase()}*" && media != null)] | order(date desc, _createdAt desc) [$offset...$itemsPerPagePlusOne] {
          ${wipFragment}
        },
				"totalCount": count(*[_type == "wip" && ([title, medium] match "${searchTerm.toLowerCase()}*" || notes[].children[].text match "${searchTerm.toLowerCase()}*" && media != null)])
      }`,
			{
				itemsPerPagePlusOne,
				offset
			}
		);
	} else {
		wip = await client.fetch(
			`{
        "currentPageData": *[_type == "wip" && media != null] | order(date desc, _createdAt desc) [$offset...$itemsPerPagePlusOne] {
          ${wipFragment}
        },
				"totalCount": count(*[_type == "wip" && media != null])
      }`,
			{
				itemsPerPagePlusOne,
				offset
			}
		);
	}

	// check for errors
	if (wip.error) {
		return false;
	}

	// set current page data
	const { currentPageData, totalCount } = wip;

	// determine pagination state
	const isLastPage = currentPageData.length <= itemsPerPage; // check if the last page has been reached
	const isFirstPage = pageNum === 1; // check if on the first page

	// slice the wip items back to original items per page amount
	const slicedWipItems = currentPageData.slice(0, itemsPerPage);

	// Generate prevPageLink
	const prevPageLink = isFirstPage
		? false // No previous page if already on the first page
		: {
				pageNum: pageNum - 1
			};

	// Generate nextPageLink
	const nextPageLink = !isLastPage
		? {
				pageNum: pageNum + 1
			}
		: false;

	const range = {
		from: offset + 1,
		to: offset + slicedWipItems.length
	};

	return {
		wip: slicedWipItems,
		totalCount,
		range,
		paginationData: {
			isLastPage,
			isFirstPage,
			prevPageLink,
			nextPageLink,
			pageNum,
			totalPages: Math.ceil(totalCount / itemsPerPage)
		}
	};
}
