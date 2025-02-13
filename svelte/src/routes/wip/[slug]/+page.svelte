<script>
	import { format } from 'date-fns';
	import { PortableText } from '@portabletext/svelte';
	import { components } from '$lib/utils';
	import Image from '$lib/components/Image.svelte';
	import Video from '$lib/components/Video.svelte';
	import WipGridItem from '$lib/components/WipGridItem.svelte';
	import NavOptionsDropdown from '$lib/components/NavOptionsDropdown.svelte';
	import { onMount } from 'svelte';

	// props
	export let data;

	// making this reactive so the page updates when the data changes
	$: wip = data.wipDetail;

	let showNotes = false;

	onMount(() => {
		console.log(wip.media);
	});
</script>

<svelte:head>
	<title>Mitchell Barton | WIP | {wip.title}</title>
</svelte:head>

<div class="wip-container grid grid-cols-4 items-start pb-32 lg:pb-60">
	{#key wip}
		<div class="flex lg:hidden justify-between bg-grey-1 col-span-4 py-2 px-4 z-10 relative">
			<p>{wip.currentIndex} of {wip.totalCount}</p>

			<NavOptionsDropdown wipDetail={wip} />
		</div>

		<div
			class="info enter-in-1 pt-8 lg:pt-0 lg:px-32 col-span-4 lg:col-span-1 flex flex-col items-center justify-center"
		>
			<div class="breadcrumbs text-center">
				<h1 class="italic inline">{wip.title}</h1>

				{#if wip.date}
					<p class="text-grey-5">{format(new Date(wip.date), 'MM.dd.yy')}</p>
				{/if}

				{#if wip.medium}
					<p class="text-grey-5">{wip.medium}</p>
				{/if}
			</div>

			{#if wip.notes}
				<div class="text-center hidden lg:block">
					<PortableText value={wip.notes} {components} />
				</div>

				<div class="lg:hidden text-center">
					<button on:click={() => (showNotes = !showNotes)}>
						Notes <span class="inline-block w-4">{showNotes ? '-' : '+'}</span>
					</button>

					{#if showNotes}
						<div class="mt-4">
							<PortableText value={wip.notes} {components} />
						</div>
					{/if}
				</div>
			{/if}
		</div>

		<div class="image enter-in-1 col-span-4 lg:col-span-2 mt-12 lg:mt-0 lg:py-20">
			{#if wip.media.length > 0}
				{#each wip.media as media}
					<div
						class={`image-container relative ${media._type === 'Image' && media.asset ? 'is-image' : 'is-video'}`}
						style="aspect-ratio: {media.asset?.metadata?.dimensions?.aspectRatio ?? 'auto'};"
					>
						<figure class={media.asset?.metadata?.dimensions?.aspectRatio ? 'fill-parent' : ''}>
							{#if media._type === 'Image' && media.asset}
								<Image image={media} alt={media.alt} classes="media-cover" />
							{:else if media._type === 'Video' && media.file}
								<Video mediaItem={media} classes="media-contain" />
							{/if}
						</figure>
					</div>
				{/each}
			{/if}
		</div>

		{#if wip?.related?.length > 0}
			<div class="related enter-in-1 lg:px-32 col-span-4 lg:col-span-1 flex flex-col py-20">
				<div class="related-inner text-center">
					<h2>Related</h2>

					<ul class="related-items mt-8">
						{#each wip.related as item}
							<li class="w-[200px]">
								<WipGridItem {item} />
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/if}
	{/key}
</div>

<style>
	.info {
		height: auto;

		@media screen and (min-width: 1024px) {
			height: calc(100svh - var(--nav-height));
		}
	}

	.info > * + * {
		margin-top: 1.5rem;
	}

	.related {
		@media screen and (min-width: 1024px) {
			min-height: calc(100svh - var(--nav-height));
		}
	}

	.related-inner {
		margin: auto;
	}

	.related-items li {
		border-top: 1px solid var(--grey-3);
		border-left: 1px solid var(--grey-3);
		border-right: 1px solid var(--grey-3);
	}

	.related-items li:last-child {
		border-bottom: 1px solid var(--grey-3);
	}

	.breadcrumbs :global(svg) {
		width: 1.1rem;
		margin: 0 0.6rem;
	}

	.image-container.is-image {
		max-height: calc(100svh - (var(--nav-height) * 3));
		margin: 0 auto;
	}

	/* .image-container :global(img), */
	.image-container :global(video) {
		@media screen and (min-width: 1024px) {
			max-width: 100%;
			max-height: calc(100svh - (var(--nav-height) * 3.5));
		}
	}

	.image > * + * {
		margin-top: 2rem;

		@media screen and (min-width: 1024px) {
			margin-top: 5rem;
		}
	}
</style>
