import { c as client } from "../../chunks/client.js";
import { g as goto } from "../../chunks/client2.js";
async function load({ url }) {
  const detail = url.searchParams.get("detail");
  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]{
    announcement
  }`);
  const homePage = await client.fetch(`*[_type == "homePage"][0]{
		title,
		gridItems[]{
			_type,
			slug,
			text,
			columnCount,
			alt,
			image{
				asset->{
					...,
					metadata
				}
			}
		}
	}`);
  if (detail) {
    const gridItem = homePage.gridItems.find((item) => item.slug.current === detail);
    if (!gridItem) {
      goto();
    }
  }
  return {
    siteSettings,
    homePage,
    detail
  };
}
export {
  load
};
