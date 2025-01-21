<script>
	import LeftArrow from '$lib/components/LeftArrow.svelte';
	import RightArrow from '$lib/components/RightArrow.svelte';

	// props
	export let wipDetail;
</script>

<div class="wip-controls col-span-4 flex justify-center enter-in-1">
	{#if wipDetail.previousItem}
		<a href={`/wip/${wipDetail.previousItem.slug.current}`}>
			<LeftArrow />
		</a>
	{:else}
		<a href={`/wip/${wipDetail.lastItem.slug.current}`}>
			<LeftArrow />
		</a>
	{/if}

	<div class="px-20">
		<p>
			{wipDetail.currentIndex} of {wipDetail.totalCount}
		</p>
	</div>

	{#if wipDetail.nextItem}
		<a href={`/wip/${wipDetail.nextItem.slug.current}`}>
			<RightArrow />
		</a>
	{:else}
		<a href={`/wip/${wipDetail.firstItem.slug.current}`}>
			<RightArrow />
		</a>
	{/if}
</div>

<style>
	.wip-controls :global(svg) {
		width: 2rem;
	}
</style>
