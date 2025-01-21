import { client, wipFragment } from '$lib/sanity/client.js';

export async function getWipData(pageNum, itemsPerPage) {
	// convert pageNum and itemsPerPage to numbers
	pageNum = pageNum ? parseInt(pageNum) : 1; // if pageNum is not provided, set it to 1
	itemsPerPage = parseInt(itemsPerPage);

	// get offset and items per page plus one
	const offset = (pageNum - 1) * itemsPerPage;
	const itemsPerPagePlusOne = offset + itemsPerPage + 1;

	const wip = await client.fetch(
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

	return {
		wip: slicedWipItems,
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
