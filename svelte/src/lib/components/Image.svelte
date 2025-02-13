<script>
	import { urlFor } from '$lib/sanity/client';

	// props
	export let image, alt, disableLazyLoading, classes;
	export let maxSize = 'lg';

	// build image urls
	let imageUrls = [];
	const sizeObjects = [
		{
			name: 'xs',
			width: 200
		},
		{
			name: 'sm',
			width: 500
		},
		{
			name: 'md',
			width: 800
		},
		{
			name: 'lg',
			width: 1500
		}
	];

	// build image url array
	$: {
		imageUrls = [];

		for (const size of sizeObjects) {
			const imageUrl = urlFor(image.asset.url).width(size.width).url();
			imageUrls.push({ width: size.width, url: imageUrl });

			if (size.name === maxSize) {
				break;
			}
		}
	}

	// build srcset and sizes strings
	$: srcset = imageUrls.map((image) => `${image.url} ${image.width}w`).join(', ');
	$: sizes = imageUrls.map((image) => `(max-width: ${image.width}px) ${image.width}px`).join(', ');
</script>

<img
	data-srcset={srcset}
	{sizes}
	{alt}
	loading={disableLazyLoading ? 'eager' : 'lazy'}
	fetchpriority={disableLazyLoading ? 'high' : 'auto'}
	class={`lazyload ${classes}`}
/>
