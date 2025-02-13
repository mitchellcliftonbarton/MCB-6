<script>
	import { PortableText } from '@portabletext/svelte';
	import { components, getImageData } from '$lib/utils';
	import HomeTextItem from '$lib/components/HomeTextItem.svelte';
	import HomeImageItem from '$lib/components/HomeImageItem.svelte';
	import HomeCarousel from '$lib/components/HomeCarousel.svelte';

	// -------------------------
	// Data
	// -------------------------

	export let data;

	// get site settings from data
	const { siteSettings, homePage, detail } = data;

	// figure out grid items
	const gridItems = homePage?.gridItems.reduce((acc, item) => {
		const { _type } = item;

		if (_type === 'textBlock') {
			acc.push({
				component: HomeTextItem,
				...item
			});
		}

		if (_type === 'imageBlock') {
			// getting image data here, so we can pass into grid item AND carousel components
			const imageData = getImageData(item.image);

			acc.push({
				component: HomeImageItem,
				...item,
				imageData
			});
		}

		return acc;
	}, []);

	// -------------------------
	// Carousel
	// -------------------------

	// get all grid items that are image blocks
	const imageItems = gridItems.filter((item) => item._type === 'imageBlock');
	let carouselOpen = detail ? true : false;
	let carouselComponent;

	function openCarousel(index) {
		if (carouselComponent) {
			document.body.style.overflow = 'hidden';
			carouselComponent.setSlide({ index });
			carouselOpen = true;
		}
	}

	function setCarouselOpen(value) {
		carouselOpen = value.detail;
	}
</script>

<svelte:head>
	<title>Mitchell Barton</title>
</svelte:head>

<div class="mt-16 pb-60">
	{#if siteSettings.announcement?.length > 0}
		<div
			class="announcement w-full text-center border border-light-grey rich-text p-base-1/2 text-black"
		>
			<PortableText value={siteSettings.announcement} {components} />
		</div>
	{/if}

	{#if homePage?.gridItems?.length > 0}
		<div class="main-content grid grid-cols-12 gap-x-base-1/2 gap-y-32 delay-100 items-center">
			{#each gridItems as item, index}
				<svelte:component
					this={item.component}
					{item}
					on:imageClicked={() => openCarousel(index)}
				/>
			{/each}
		</div>
	{/if}
</div>

{#if homePage?.gridItems?.length > 0}
	<HomeCarousel
		bind:this={carouselComponent}
		{carouselOpen}
		{imageItems}
		on:setCarouselOpen={setCarouselOpen}
		{detail}
	/>
{/if}

<style lang="postcss">
	:global(.sticky-block) {
		position: sticky;
		top: var(--nav-height-mobile);

		@media screen and (min-width: 1024px) {
			top: var(--nav-height);
		}
	}

	.announcement + .main-content {
		margin-top: var(--base-spacing-half);
	}
</style>
