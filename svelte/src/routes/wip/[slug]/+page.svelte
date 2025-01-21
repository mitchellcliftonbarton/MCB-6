<script>
	import { format } from 'date-fns';
	import { PortableText } from '@portabletext/svelte';
	import { components } from '$lib/utils';
	import Image from '$lib/components/Image.svelte';
	import Video from '$lib/components/Video.svelte';
	import WipGridItem from '$lib/components/WipGridItem.svelte';

	// props
	export let data;

	// making this reactive so the page updates when the data changes
	$: wip = data.wipDetail;
</script>

<svelte:head>
	<title>Mitchell Barton | WIP | {wip.title}</title>
</svelte:head>

<div class="wip-container grid grid-cols-4 items-start">
	{#key wip}
		<div class="info enter-in-1 px-32 col-span-1 flex flex-col items-center justify-center">
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
				<div class="text-center">
					<PortableText value={wip.notes} {components} />
				</div>
			{/if}
		</div>

		<div class="image enter-in-1 delay-100 col-span-2 py-20">
			{#if wip.media.length > 0}
				{#each wip.media as media}
					<figure class="image-container relative">
						{#if media._type === 'Image' && media.asset}
							<Image image={media} alt={media.alt} classes="media-contain" />
						{:else if media._type === 'Video' && media.file}
							<Video mediaItem={media} classes="media-contain" />
						{/if}
					</figure>
				{/each}
			{/if}
		</div>

		<div class="related enter-in-1 delay-200 px-32 col-span-1 flex flex-col py-20">
			{#if wip?.related?.length > 0}
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
			{/if}
		</div>
	{/key}
</div>

<style>
	.info {
		height: calc(100svh - var(--nav-height));
	}

	.info > * + * {
		margin-top: 1.5rem;
	}

	.related {
		min-height: calc(100svh - var(--nav-height));
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

	.image-container :global(img),
	.image-container :global(video) {
		max-width: 100%;
		max-height: calc(100svh - (var(--nav-height) * 3.5));
	}

	/* .image-container :global(video) {
		box-shadow: 0px 4px 8px 2px #c7c7c7;
	} */

	/* .wip-container {
		height: 100%;
		width: 100%;
	} */

	.image > * + * {
		margin-top: 5rem;
	}
</style>
