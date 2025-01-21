<script>
	import Image from '$lib/components/Image.svelte';
	import VideoPreview from '$lib/components/VideoPreview.svelte';
	import Play from '$lib/components/Play.svelte';
	import WipListItemRelated from '$lib/components/WipListItemRelated.svelte';
	import { format } from 'date-fns';
	import { createEventDispatcher } from 'svelte';

	// props
	export let item, index;

	// setup event dispatcher
	const dispatch = createEventDispatcher();

	// get first media item
	const firstMediaItem = item.media[0];

	// get category title string
	const categoryTitles = item?.categories
		? item.categories.map((category) => category.title).join(', ')
		: false;
</script>

<a
	href={`/wip/${item.slug.current}`}
	class="wip-list-item grid grid-cols-12 gap-base-1/2 pt-base-1/2 pb-base"
	on:mouseenter={() => dispatch('showPreview', index)}
>
	<div class="col-span-1">
		<div class="aspect-[3/2.5]">
			{#if firstMediaItem._type === 'Image' && firstMediaItem.asset}
				<Image
					image={firstMediaItem}
					alt={firstMediaItem.alt}
					classes="object-contain object-left w-full h-full"
					maxSize="xs"
				/>
			{:else if firstMediaItem._type === 'Video' && firstMediaItem.file}
				<VideoPreview
					mediaItem={firstMediaItem}
					classes="object-contain object-left w-full h-full"
				/>
			{/if}
		</div>
	</div>

	<div class="col-span-2">
		<h2>{item.title}</h2>
	</div>

	<div class="col-span-2">
		{#if item.date}
			<p>{format(new Date(item.date), 'MM.dd.yy')}</p>
		{:else}
			<p class="text-grey-4">N/A</p>
		{/if}
	</div>

	<div class="col-span-2">
		{#if item.medium}
			<p>{item.medium}</p>
			{#if firstMediaItem._type === 'Video'}
				<Play />
			{/if}
		{:else}
			<p class="text-grey-4">N/A</p>
		{/if}
	</div>

	<div class="col-span-2">
		{#if item?.categories}
			<p>{categoryTitles}</p>
		{:else}
			<p class="text-grey-4">N/A</p>
		{/if}
	</div>

	<div class="col-span-2">
		{#if item?.related}
			<WipListItemRelated items={item.related} />
		{:else}
			<p class="text-grey-4">N/A</p>
		{/if}
	</div>
</a>

<style>
	.wip-list-item :global(.play-icon) {
		width: 1.2rem;
		color: var(--primary);
		margin-top: 0.6rem;
	}

	.wip-list-item:hover {
		background-color: var(--grey-1);
	}
</style>
