<script>
	import WipGrid from '$lib/components/WipGrid.svelte';

	// props
	export let data;

	const { term, wipData } = data;
</script>

<svelte:head>
	<title>Mitchell Barton | WIP | Search results for: “{term}”</title>
</svelte:head>

<WipGrid data={wipData} {term} basePath="/wip/search?term={term}" />
