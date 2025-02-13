<script>
	import LeftArrow from '$lib/components/LeftArrow.svelte';
	import RightArrow from '$lib/components/RightArrow.svelte';

	// props
	export let wipDetail;
</script>

<div
	class="wip-controls col-span-6 lg:col-span-4 flex gap-6 lg:gap-20 justify-end lg:justify-center enter-in-1"
>
	<a
		href={`/wip/${wipDetail.previousItem ? wipDetail.previousItem.slug.current : wipDetail.lastItem.slug.current}`}
	>
		<LeftArrow />
	</a>

	<div class="hidden lg:block">
		<p>
			{wipDetail.currentIndex} of {wipDetail.totalCount}
		</p>
	</div>

	{#if wipDetail.nextItem}
		<a
			href={`/wip/${wipDetail.nextItem ? wipDetail.nextItem.slug.current : wipDetail.firstItem.slug.current}`}
		>
			<RightArrow />
		</a>
	{/if}
</div>

<style>
	.wip-controls :global(svg) {
		width: 1.8rem;

		@media screen and (min-width: 1024px) {
			width: 2rem;
		}
	}
</style>
