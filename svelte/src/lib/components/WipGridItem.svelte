<script>
	import Image from '$lib/components/Image.svelte';
	import VideoPreview from '$lib/components/VideoPreview.svelte';
	import Play from '$lib/components/Play.svelte';
	// import DotLoader from '$lib/components/DotLoader.svelte';
	import { format } from 'date-fns';

	// props
	export let item;

	// let imageLoaded = false;

	// get first media item
	$: firstMediaItem = item.media[0];
</script>

<a
	href={`/wip/${item.slug.current}`}
	class="wip-grid-item aspect-square flex flex-col px-4 pt-4 pb-8"
>
	<div class="image aspect-[3/4] lg:aspect-[3/2.5] relative">
		<figure class="fill-parent p-4">
			<!-- {#if !imageLoaded}
				<DotLoader />
			{/if} -->

			{#if firstMediaItem._type === 'Image' && firstMediaItem.asset}
				<Image
					image={firstMediaItem}
					alt={firstMediaItem.alt}
					classes="media-contain"
					maxSize="xs"
				/>
			{:else if firstMediaItem._type === 'Video' && firstMediaItem.file}
				<VideoPreview mediaItem={firstMediaItem} classes="media-contain" />
			{/if}
		</figure>
	</div>

	<div class="titles flex-none text-center pt-4">
		<h2>{item.title}</h2>

		{#if item.medium || item.date}
			<div class="mt-1 leading-[1.2] text-grey-5">
				{#if item.date}
					<p>{format(new Date(item.date), 'MM.dd.yy')}</p>
				{/if}
				{#if item.medium}
					<p class="line-clamp-1">{item.medium}</p>
				{/if}
			</div>
		{/if}

		{#if firstMediaItem._type === 'Video'}
			<div class="flex justify-center mt-3">
				<Play />
			</div>
		{/if}
	</div>
</a>

<style>
	/* a {
		border: 1px solid transparent;
		transition: border-color 0.3s;
	} */

	@media screen and (min-width: 1024px) {
		a:hover {
			border-color: var(--grey-3);
			background-color: var(--grey-1);
		}
	}

	.wip-grid-item :global(.play-icon) {
		width: 1.2rem;
		color: var(--primary);
	}
</style>
