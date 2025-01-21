import { client } from '$lib/sanity/client.js';
import { goto } from '$app/navigation';
export async function load({ url }) {
	const detail = url.searchParams.get('detail');

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
			disableLazyLoading,
			image{
				asset->{
					...,
					metadata
				}
			}
		}
	}`);

	// check if detail is in the grid items, if not, send to 404
	if (detail) {
		// check if detail matches any of the slugs in the grid items
		const gridItem = homePage.gridItems.find((item) => item.slug.current === detail);

		if (!gridItem) {
			goto('/404');
		}
	}

	return {
		siteSettings,
		homePage,
		detail
	};
}
