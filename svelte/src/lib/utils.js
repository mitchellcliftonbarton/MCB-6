import Link from '../lib/components/Link.svelte';
import { urlFor } from '$lib/sanity/client';

// setup components for portable text
export const components = {
	marks: {
		link: Link
	}
};

// get srcset and sizes for images via sanity image dta/image builder
export function getImageData(image) {
	const { asset } = image;
	const imageUrlLg = urlFor(asset.url).width(1500).url();
	const imageUrlSm = urlFor(asset.url).width(500).url();
	const { aspectRatio } = asset.metadata.dimensions;
	const srcset = `${imageUrlSm} 500w, ${imageUrlLg} 1500w`;
	const sizes = '(max-width: 500px) 500px, 1500px';

	// we dont return alt text so that it can be set however we want

	return { srcset, sizes, aspectRatio };
}

export function debounce(fn, wait) {
	let timeout;

	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => fn.apply(this, args), wait);
	};
}
