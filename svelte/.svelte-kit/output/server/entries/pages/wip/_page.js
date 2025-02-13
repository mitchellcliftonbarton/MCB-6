import { g as getWipData } from "../../../chunks/wipUtils.js";
import { d as defaultItemsPerPage } from "../../../chunks/globalStore.js";
import { g as get_store_value } from "../../../chunks/utils.js";
async function load({ url }) {
  const pageNum = parseInt(url.searchParams.get("page_num")) || 1;
  const itemsPerPage = parseInt(url.searchParams.get("items_per_page")) || get_store_value(defaultItemsPerPage);
  const wipData = await getWipData(pageNum, itemsPerPage);
  if (!wipData) {
    return false;
  }
  return wipData;
}
export {
  load
};
