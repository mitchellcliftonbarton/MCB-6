import { c as client } from "../../chunks/client.js";
async function load() {
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
export {
  load
};
