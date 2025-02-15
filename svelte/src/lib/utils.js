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

export function loadGoogleAnalytics(trackingId) {
	if (typeof window === 'undefined') return; // Ensure it's client-side

	window.dataLayer = window.dataLayer || [];
	function gtag() {
		window.dataLayer.push(arguments);
	}
	window.gtag = gtag;

	gtag('js', new Date());
	gtag('config', trackingId, { send_page_view: false }); // Disable auto pageview tracking

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
	document.head.appendChild(script);
}
