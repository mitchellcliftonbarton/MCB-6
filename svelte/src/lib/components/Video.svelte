<script>
	import Image from '$lib/components/Image.svelte';

	// props
	export let mediaItem, classes;

	// get preview_video
	const previewVideo = mediaItem.preview_video;
	const poster = mediaItem.poster;
</script>

{#if previewVideo}
	<!-- svelte-ignore a11y-media-has-caption -->
	<video class={classes} poster={poster.asset.url} loop playsinline preload="metadata" controls>
		<source src={previewVideo.asset.url} type="video/mp4" />
	</video>
{:else}
	<Image image={poster} alt={poster.alt} classes="media-contain {classes}" />
{/if}
