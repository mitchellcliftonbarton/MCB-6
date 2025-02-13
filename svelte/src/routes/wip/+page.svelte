<script>
	import WipGrid from '$lib/components/WipGrid.svelte';

	// props
	export let data;
</script>

<svelte:head>
	<title>Mitchell Barton | WIP</title>
</svelte:head>

<WipGrid {data} />
