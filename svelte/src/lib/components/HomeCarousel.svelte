<script>
	import { goto } from '$app/navigation';
	import { PortableText } from '@portabletext/svelte';
	import { components } from '$lib/utils';
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	import LeftArrow from './LeftArrow.svelte';
	import RightArrow from './RightArrow.svelte';
	import XAlt from './XAlt.svelte';
	import EmblaCarousel from 'embla-carousel';

	// -------------------------
	// Data
	// -------------------------

	export let carouselOpen, imageItems, detail;
	const dispatch = createEventDispatcher();

	// -------------------------
	// Setup Embla
	// -------------------------

	let emblaEl, emblaApi;
	let currentIndex = 1;
	let carouselInit = false;

	function onSelect() {
		// get the index
		const index = emblaApi.selectedScrollSnap();

		// check if there is a url param for detail
		const urlParams = new URLSearchParams(window.location.search);
		const detail = urlParams.get('detail');

		if (detail) {
			console.log('set detail url');
			goto(`/?detail=${imageItems[index].slug.current}`);
		}

		// set the current index
		currentIndex = index + 1;
	}

	onMount(() => {
		if (emblaEl) {
			let detailIndex = false;

			if (detail) {
				const imageDetailIndex = imageItems.findIndex((item) => item.slug.current === detail);

				if (imageDetailIndex !== -1) {
					document.body.style.overflow = 'hidden';
					detailIndex = imageDetailIndex;
					currentIndex = detailIndex + 1;
				} else {
					// send to 404
					goto('/404');
				}
			}

			emblaApi = EmblaCarousel(emblaEl, {
				loop: true,
				dragThreshold: 10,
				duration: 20,
				startIndex: detailIndex ? detailIndex : 0
			});

			emblaApi.on('init', () => {
				carouselInit = true;
			});

			emblaApi.on('select', onSelect);

			/*
			Handle popstate
			*/

			window.addEventListener('popstate', () => {
				// get URL params
				const urlParams = new URLSearchParams(window.location.search);
				const detail = urlParams.get('detail');

				if (detail) {
					const index = imageItems.findIndex((item) => item.slug.current === detail);

					if (carouselOpen) {
						console.log('popstate, carousel was open, scroll to index');
						emblaApi.scrollTo(index);
					} else {
						console.log('popstate, carousel was closed, jump to index and open');
						emblaApi.scrollTo(index, true);
						dispatch('setCarouselOpen', true);
					}
				} else {
					console.log('popstate, no detail, close');
					dispatch('setCarouselOpen', false);
				}
			});
		}
	});

	onDestroy(() => {
		if (emblaApi) {
			emblaApi.off('select', onSelect);
			emblaApi.destroy();
			emblaApi = null;
		}
	});

	export function setSlide({ index }) {
		if (emblaApi) {
			emblaApi.scrollTo(index, true);
		}
	}

	// -------------------------
	// Methods
	// -------------------------

	function handleCloseCarousel(event) {
		event.preventDefault();

		// programmatically navigate to the href
		goto('/');

		dispatch('setCarouselOpen', false);
	}

	function handlePrevious() {
		if (emblaApi) {
			emblaApi.scrollPrev();
		}
	}

	function handleNext() {
		if (emblaApi) {
			emblaApi.scrollNext();
		}
	}
</script>

<div
	class="carousel fixed top-0 left-0 w-full h-full bg-white flex flex-col {carouselOpen
		? 'open'
		: ''} {carouselInit ? 'carousel-init' : ''}"
>
	<div
		class="carousel-header flex-none relative flex justify-center items-center px-base-1/2 py-base"
	>
		<p class="indexes">
			<span>{currentIndex}</span><span>/{imageItems.length}</span>
		</p>

		<a
			href="/"
			class="closer lg:hover:text-primary transition-colors duration-300 absolute right-[2.7rem]"
			on:click={handleCloseCarousel}
		>
			<span class="sr-only">Close</span>
			<XAlt />
		</a>
	</div>

	<div class="flex-1 flex items-center justify-center relative">
		<button
			class="prev arrow absolute left-base top-1/2 -translate-y-1/2 z-10"
			on:click={handlePrevious}
		>
			<span class="sr-only">Previous</span>
			<LeftArrow />
		</button>

		<button
			class="next arrow absolute right-base top-1/2 -translate-y-1/2 z-10"
			on:click={handleNext}
		>
			<span class="sr-only">Next</span>
			<RightArrow />
		</button>

		<div class="h-full flex-1 relative">
			<div class="embla" bind:this={emblaEl}>
				<div class="embla__container">
					{#each imageItems as item}
						<div class="embla__slide relative">
							<figure class="fill-parent">
								<img
									loading="lazy"
									srcset={item.imageData.srcset}
									sizes={item.imageData.sizes}
									alt={item.alt}
									class="media-contain"
								/>
							</figure>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="captions flex-none py-base px-base-1/2 text-center">
		{#if imageItems[currentIndex - 1].text}
			<PortableText value={imageItems[currentIndex - 1].text} {components} />
		{/if}
	</div>

	<div class="grid-system fill-parent flex justify-between z-[-1] pointer-events-none">
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
	</div>
</div>

<style lang="postcss">
	.carousel {
		z-index: 5000;
		opacity: 0;
		transition: opacity 0.3s;
		pointer-events: none;
	}

	.carousel.open {
		opacity: 1;
		pointer-events: auto;
	}

	.closer :global(svg) {
		width: 2.5rem;
	}

	.arrow {
		transition: color 0.3s;
	}

	.arrow :global(svg) {
		width: 3rem;
	}

	.arrow:hover {
		color: var(--primary);
	}

	.indexes,
	.captions {
		opacity: 0;
		transition: opacity 0.3s;
	}

	.embla {
		overflow: hidden;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.carousel.carousel-init .embla,
	.carousel.carousel-init .captions,
	.carousel.carousel-init .indexes {
		opacity: 1;
	}

	.embla__container {
		display: flex;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
