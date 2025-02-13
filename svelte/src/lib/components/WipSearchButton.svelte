<script>
	import { searchActive } from '$lib/stores/globalStore';
	import SearchIcon from '$lib/components/SearchIcon.svelte';

	const toggleSearch = () => {
		$searchActive = !$searchActive;
	};
</script>

<button
	on:click={toggleSearch}
	class="enter-in-1 search-button lg:hover:text-primary duration-300 transition-colors flex items-center"
>
	<SearchIcon />
	<span class="search-button-text ml-2 lg:ml-3">
		<span>Search</span>
		<span class="search-button-shortcut hidden lg:inline">⌘K</span>
	</span>
</button>

<style>
	.search-button :global(svg) {
		width: 1.1rem;
		transform: translateY(0.5px);

		@media screen and (min-width: 1024px) {
			width: 1.3rem;
		}
	}

	.search-button-text .search-button-shortcut {
		color: var(--grey-3);
	}
</style>
