<script>
	import Image from '$lib/components/Image.svelte';
	import VideoPreview from '$lib/components/VideoPreview.svelte';
	import Play from '$lib/components/Play.svelte';
	import { format } from 'date-fns';

	// props
	export let item;

	// get first media item
	const firstMediaItem = item.media[0];
</script>

<a
	href={`/wip/${item.slug.current}`}
	class="search-list-item grid grid-cols-6 gap-base-1/2 pt-base-1/2 pb-base"
>
	<div class="col-span-1 pl-4">
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

	<div class="col-span-1">
		{#if item.date}
			<p>{format(new Date(item.date), 'MM.dd.yy')}</p>
		{:else}
			<p class="text-grey-4">N/A</p>
		{/if}
	</div>

	<div class="col-span-1">
		{#if item.medium}
			<p>{item.medium}</p>
			{#if firstMediaItem._type === 'Video'}
				<Play />
			{/if}
		{:else}
			<p class="text-grey-4">N/A</p>
		{/if}
	</div>
</a>

<style>
	.search-list-item :global(.play-icon) {
		width: 1.2rem;
		color: var(--primary);
		margin-top: 0.6rem;
	}

	.search-list-item:hover {
		background-color: var(--grey-1);
	}
</style>
