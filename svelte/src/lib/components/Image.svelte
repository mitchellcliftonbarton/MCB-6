<script>
	import { urlFor } from '$lib/sanity/client';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	// props
	export let image, alt, disableLazyLoading, classes;
	export let maxSize = 'lg';

	let imgElement;

	// setup event dispatcher
	const dispatch = createEventDispatcher();

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

	// on mount
	onMount(() => {
		if (imgElement) {
			imgElement.addEventListener('lazyloaded', () => {
				dispatch('lazyLoaded');
			});
		}
	});
</script>

<img
	bind:this={imgElement}
	data-srcset={srcset}
	{sizes}
	{alt}
	loading={disableLazyLoading ? 'eager' : 'lazy'}
	fetchpriority={disableLazyLoading ? 'high' : 'auto'}
	class={`lazyload ${classes}`}
/>
