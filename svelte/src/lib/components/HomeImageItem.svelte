<script>
	import { goto } from '$app/navigation';
	import { PortableText } from '@portabletext/svelte';
	import { components } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';
	import Plus from './Plus.svelte';

	// props
	export let item;

	// destructuring item
	const { slug, columnCount, text, imageData, alt } = item;

	// setting width class
	const widthClass = columnCount !== '' ? `col-span-${columnCount}` : 'col-span-3';

	// setup event dispatcher
	const dispatch = createEventDispatcher();

	// link element
	let linkEl;

	// function to handle click
	function handleClick(event) {
		event.preventDefault();

		// get the targets href
		const href = linkEl.href;

		// programmatically navigate to the href
		console.log('set detail url');
		goto(href);

		// dispatch the event
		dispatch('imageClicked', item);
	}
</script>

<a
	href={`/?detail=${slug.current}`}
	class={`home-image-item enter-in-1 ${widthClass}`}
	on:click={handleClick}
	bind:this={linkEl}
>
	<figure class="sticky-block">
		<div style:aspect-ratio={imageData.aspectRatio} class="relative bg-grey-1">
			<img
				srcset={imageData.srcset}
				sizes={imageData.sizes}
				{alt}
				fetchpriority="high"
				class="media-cover"
			/>

			<div class="image-hover fill-parent"></div>

			<div class="plus">
				<Plus />
			</div>
		</div>

		<figcaption class="text-center mt-3 px-base leading-tight">
			<PortableText value={text} {components} />
		</figcaption>
	</figure>
</a>

<style>
	.home-image-item {
		display: block;
		position: relative;
	}

	.image-hover {
		opacity: 0;
		background: var(--primary);
		mix-blend-mode: screen;
		transition: opacity 0.3s;
	}

	/* .home-image-item:hover .image-hover {
		opacity: 1;
	} */

	/* .home-image-item:hover img {
		filter: grayscale(100%);
	} */

	.plus {
		background-color: var(--white);
		opacity: 0;
		/* transition: opacity 0.3s; */
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* mix-blend-mode: difference; */
		/* color: var(--white); */
	}

	.plus :global(.plus-icon) {
		width: 10rem;
	}

	.home-image-item:hover .plus {
		opacity: 1;
	}
</style>
