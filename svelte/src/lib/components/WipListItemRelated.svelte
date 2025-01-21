<script>
	import RelatedItemSmall from '$lib/components/RelatedItemSmall.svelte';

	// props
	export let items;

	// get first three related items
	const firstThreeItems = items.slice(0, 3);

	// calculate the remaining amount of items
	const remainingItemsCount = items.length > 3 ? items.length - 3 : 0;
</script>

<div class="flex items-start gap-x-4">
	{#each firstThreeItems as item}
		<RelatedItemSmall {item} />
	{/each}

	{#if remainingItemsCount > 0}
		<p>+{remainingItemsCount}</p>
	{/if}
</div>
