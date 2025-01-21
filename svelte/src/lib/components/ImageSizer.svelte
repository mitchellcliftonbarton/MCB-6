<script>
	import { urlFor } from '$lib/sanity/client';

	// props
	export let image, alt, disableLazyLoading, classes;

	const { aspectRatio } = image.asset.metadata.dimensions;

	// build image urls
	const imageUrlLg = urlFor(image.asset.url).width(1500).url();

	const imageUrlSm = urlFor(image.asset.url).width(500).url();
</script>

<div style:aspect-ratio={aspectRatio} class="relative bg-grey-1 {classes}">
	<img
		srcset={`${imageUrlSm} 500w, ${imageUrlLg} 1500w`}
		sizes="(max-width: 500px) 500px, 1500px"
		src={imageUrlLg}
		{alt}
		loading={disableLazyLoading ? 'eager' : 'lazy'}
		fetchpriority={disableLazyLoading ? 'high' : 'auto'}
		class="media-cover"
	/>
</div>
