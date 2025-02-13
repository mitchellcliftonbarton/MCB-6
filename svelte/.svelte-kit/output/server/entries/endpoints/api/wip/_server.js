import { j as json } from "../../../../chunks/index.js";
import { g as getWipData } from "../../../../chunks/wipUtils.js";
async function POST({ request }) {
  const { pageNum, itemsPerPage, term } = await request.json();
  const wipData = await getWipData(pageNum, itemsPerPage, term);
  if (!wipData) {
    return false;
  }
  return json({
    status: "success",
    data: wipData
  });
}
export {
  POST
};
