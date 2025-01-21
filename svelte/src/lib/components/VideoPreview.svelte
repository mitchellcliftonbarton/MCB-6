<script>
	import Image from '$lib/components/Image.svelte';

	// props
	export let mediaItem, classes;

	// get preview_video
	$: previewVideo = mediaItem.preview_video;
	$: poster = mediaItem.poster;
</script>

{#if previewVideo}
	<video
		class={classes}
		poster={poster.asset.url}
		autoplay
		loop
		muted
		playsinline
		preload="metadata"
	>
		<source src={previewVideo.asset.url} type="video/mp4" />
	</video>
{:else}
	<Image image={poster} alt={poster.alt} classes="media-contain" />
{/if}
