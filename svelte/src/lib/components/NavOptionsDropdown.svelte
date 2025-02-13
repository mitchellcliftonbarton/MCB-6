<script>
	import { defaultItemsPerPage } from '$lib/stores/globalStore';
	import { searchActive } from '$lib/stores/globalStore';
	import { onMount } from 'svelte';

	export let wipDetail;

	$: contextWipArchivePage = wipDetail
		? Math.floor(wipDetail.currentIndex / $defaultItemsPerPage) + 1
		: 1;

	let isOpen = false;
	let referrer = false;
	let referrerIsArchive = false;

	const openSearch = () => {
		$searchActive = true;
		isOpen = false;
	};

	const handleBack = () => {
		window.history.back();
	};

	onMount(() => {
		// check if referrer has same domain as current page
		if (document.referrer.includes(window.location.hostname)) {
			referrer = document.referrer;

			const referrerDomain = new URL(referrer);

			if (!referrerDomain.pathname.includes('/wip/') && referrerDomain.pathname.length <= 5) {
				referrerIsArchive = true;
			}
		}
	});
</script>

<div
	class={`nav-options-dropdown enter-in-1 delay-100 col-span-6 lg:col-span-4 flex justify-end relative ${isOpen ? 'open' : ''}`}
>
	<button class="dropdown-button" on:click={() => (isOpen = !isOpen)}>
		Tools <span class="inline-block w-3">{isOpen ? '-' : '+'}</span>
	</button>

	<div class="dropdown-content absolute bottom-0 right-0 flex flex-col">
		{#if referrer && referrerIsArchive}
			<button on:click={handleBack}>Back to WIP archive</button>
		{:else if referrer && !referrerIsArchive}
			<a href={contextWipArchivePage === 1 ? '/wip' : `/wip?page_num=${contextWipArchivePage}`}
				>Back to WIP archive</a
			>
		{:else}
			<a href={contextWipArchivePage === 1 ? '/wip' : `/wip?page_num=${contextWipArchivePage}`}
				>Back to WIP archive</a
			>
		{/if}

		<button on:click={openSearch}>
			<span>Search</span>
			<span class="search-button-shortcut">⌘K</span>
		</button>

		<!-- <button>View references/research</button> -->
	</div>
</div>

<style>
	.dropdown-content {
		opacity: 0;
		transform: translateY(calc(100% + 15px));
		border: 1px solid black;
		pointer-events: none;
		background-color: var(--white);
		transition:
			opacity 0.2s,
			transform 0.2s;
	}

	.nav-options-dropdown.open .dropdown-content {
		opacity: 1;
		transform: translateY(calc(100% + 10px));
		pointer-events: auto;
	}

	.dropdown-content a,
	.dropdown-content button {
		display: flex;
		width: 100%;
		padding: 0.6rem 2.5rem;
		text-align: center;
		justify-content: center;
		transition: background-color 0.3s;
		white-space: nowrap;

		@media screen and (min-width: 1024px) {
			padding: 1rem 3rem;
		}
	}

	.dropdown-content a:hover,
	.dropdown-content button:hover {
		background-color: var(--grey-2);
	}

	.dropdown-content button .search-button-shortcut {
		color: var(--grey-3);
	}

	.dropdown-content > *:not(:last-child) {
		border-bottom: 1px solid var(--grey-3);
	}
</style>
