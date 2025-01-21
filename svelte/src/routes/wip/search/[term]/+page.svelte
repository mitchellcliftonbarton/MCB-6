<script>
	// props
	export let data;

	const { term } = data;
</script>

<svelte:head>
	<title>Mitchell Barton | Search</title>
</svelte:head>

<div class="mt-40">
	<div class="text-center max-w-[250px] mx-auto">
		<h1>Search results for "{term}"</h1>
	</div>
</div>

<style>
	.list :global(li) {
		border-top: 1px solid var(--grey-3);
	}

	.list :global(li:last-child) {
		border-bottom: 1px solid var(--grey-3);
	}

	.search-button :global(svg) {
		width: 1.3rem;
		transform: translateY(0.5px);
	}
</style>
