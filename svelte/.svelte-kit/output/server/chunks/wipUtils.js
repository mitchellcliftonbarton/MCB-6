import { c as client, w as wipFragment } from "./client.js";
async function getWipData(pageNum, itemsPerPage, searchTerm = null) {
  pageNum = pageNum ? parseInt(pageNum) : 1;
  itemsPerPage = parseInt(itemsPerPage);
  const offset = (pageNum - 1) * itemsPerPage;
  const itemsPerPagePlusOne = offset + itemsPerPage + 1;
  let wip = false;
  if (searchTerm !== null && searchTerm !== "") {
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
  if (wip.error) {
    return false;
  }
  const { currentPageData, totalCount } = wip;
  const isLastPage = currentPageData.length <= itemsPerPage;
  const isFirstPage = pageNum === 1;
  const slicedWipItems = currentPageData.slice(0, itemsPerPage);
  const prevPageLink = isFirstPage ? false : {
    pageNum: pageNum - 1
  };
  const nextPageLink = !isLastPage ? {
    pageNum: pageNum + 1
  } : false;
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
export {
  getWipData as g
};
