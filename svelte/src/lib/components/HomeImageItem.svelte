<script>
	import { goto } from '$app/navigation';
	import { PortableText } from '@portabletext/svelte';
	import { components } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';
	import Plus from './Plus.svelte';
	import { isLargeQuery } from '$lib/stores/globalStore';

	// props
	export let item;

	// destructuring item
	const { slug, columnCount, text, imageData, alt } = item;

	// setting width class
	const widthClass =
		columnCount !== '' ? `col-span-12 lg:col-span-${columnCount}` : 'col-span-12 lg:col-span-3';

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
		goto(href, {
			noScroll: true
		});

		// dispatch the event
		dispatch('imageClicked', item);
	}
</script>

<div class={`home-image-item enter-in-1 px-8 lg:px-[10vw] ${widthClass}`}>
	<a href={`/?detail=${slug.current}`} on:click={handleClick} bind:this={linkEl}>
		<figure class="sticky-block">
			<div style:aspect-ratio={imageData.aspectRatio} class="relative bg-grey-1">
				<img
					data-srcset={imageData.srcset}
					sizes={imageData.sizes}
					{alt}
					fetchpriority="high"
					class="lazyload media-cover"
				/>

				<div class="image-hover fill-parent"></div>

				<div class="plus">
					<Plus />
				</div>
			</div>

			<figcaption class="mt-3 lg:px-base flex justify-center items-start text-center leading-tight">
				<PortableText value={text} {components} />
			</figcaption>
		</figure>
	</a>
</div>

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

	.plus {
		background-color: var(--white);
		opacity: 1;
		position: absolute;
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);

		@media screen and (min-width: 1024px) {
			opacity: 0;
			bottom: auto;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.plus :global(.plus-icon) {
		width: 1rem;

		@media screen and (min-width: 1024px) {
			width: 10rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.home-image-item a:hover .plus {
			opacity: 1;
		}
	}
</style>
