import { client } from '$lib/sanity/client.js';

export async function load() {
	const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]{
    title,
    metaDescription,
		ogImage{
			asset->{
				...,
				metadata
			}
		}
  }`);

	return {
		siteSettings
	};
}
