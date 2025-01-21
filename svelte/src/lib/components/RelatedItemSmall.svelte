<script>
	import Image from '$lib/components/Image.svelte';
	import VideoPreview from '$lib/components/VideoPreview.svelte';

	// props
	export let item;

	// get first media item
	const firstMediaItem = item.media[0];
</script>

<figure class="w-[40px]">
	{#if firstMediaItem._type === 'Image' && firstMediaItem.asset}
		<Image
			image={firstMediaItem}
			alt={firstMediaItem.alt}
			classes="object-contain object-right w-full h-full"
			maxSize="xs"
		/>
	{:else if firstMediaItem._type === 'Video' && firstMediaItem.file}
		<VideoPreview mediaItem={firstMediaItem} classes="object-contain object-right w-full h-full" />
	{/if}
</figure>
