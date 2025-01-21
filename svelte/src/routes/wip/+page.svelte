<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Pagination from '$lib/components/Pagination.svelte';
	import WipGridItem from '$lib/components/WipGridItem.svelte';
	// import WipListItem from '$lib/components/WipListItem.svelte';
	// import LargeImagePreview from '$lib/components/LargeImagePreview.svelte';
	import SearchModal from '$lib/components/SearchModal.svelte';
	import SearchIcon from '$lib/components/SearchIcon.svelte';

	// props
	export let data;

	// data
	// let view;
	let loading = false;
	// make wip reactive
	$: wipItems = data.wip;
	$: paginationData = data.paginationData;

	// Get the 'view' query parameter from the URL
	// $: view = $page.url.searchParams.get('view') || 'grid';

	// let showPreview = false;
	// let currentPreview = 0;

	// function handleShowPreview(event) {
	// 	currentPreview = event.detail;
	// 	showPreview = true;
	// }

	// handle search
	let searchActive = false;

	// handle pagination link clicked
	function handlePaginationLinkClicked(event) {
		goto(event.detail.href);

		wipItems = event.detail.data.wip;
		paginationData = event.detail.data.paginationData;
		loading = false;
	}

	function handleSetLoading(event) {
		// console.log('set loading', event.detail);
		loading = event.detail;
	}

	// listen for command k shortcut
	const handleKeyDown = (event) => {
		if (event.metaKey && event.key === 'k') {
			searchActive = !searchActive;
		}
	};
</script>

<svelte:window on:keydown={handleKeyDown} />

<svelte:head>
	<title>Mitchell Barton | WIP</title>
</svelte:head>

<div class="mt-40 pb-60">
	<div class="enter-in-1 text-center max-w-[250px] mx-auto">
		<h1>WIP</h1>
		<!-- <p class="mt-8">
			Stuff being thrown around in the studio, organized by date. Maybe finished. Maybe not. Subject
			to change.
		</p> -->
	</div>

	<div class={`enter-in-1 delay-100 content-container mt-48 ${loading ? 'loading' : ''}`}>
		<div class="grid grid-cols-12 gap-base-1/2">
			<!-- <div class="col-span-1">
				<button>Filter +</button>
			</div> -->

			<div class="col-span-2">
				<button
					on:click={() => (searchActive = !searchActive)}
					class="search-button lg:hover:text-primary duration-300 transition-colors flex items-center"
				>
					<SearchIcon />
					<span class="ml-3">Search</span>
				</button>
			</div>

			<!-- <div class="col-span-1">
				<a href="/wip?view=grid" class={view === 'grid' ? 'text-primary' : ''}>Grid</a>
				<span class="mx-1">:</span>
				<a href="/wip?view=list" class={view === 'list' ? 'text-primary' : ''}>List</a>
			</div>

			{#if view === 'grid'}
				<div class="col-span-8"></div>
			{:else}
				<div class="col-span-2 text-grey-4">Title</div>
				<div class="col-span-2 text-grey-4">Date</div>
				<div class="col-span-2 text-grey-4">Medium</div>
				<div class="col-span-2 text-grey-4">Categories</div>
				<div class="col-span-2 text-grey-4">Related</div>
			{/if} -->
		</div>

		<ul class="grid-view grid grid-cols-6 delay-200 mt-base">
			{#each wipItems as item}
				<li key={item._id}>
					<WipGridItem {item} />
				</li>
			{/each}
		</ul>

		<!-- {#if view === 'grid'}
			<ul class="grid-view grid grid-cols-6 delay-200 mt-base">
				{#each wipItems as item}
					<li key={item._id}>
						<WipGridItem {item} />
					</li>
				{/each}
			</ul>
		{:else if view === 'list'}
			<ul class="list delay-200 mt-base" role="list">
				{#each wipItems as item, index}
					<li key={item._id}>
						<WipListItem {item} {index} />
					</li>
				{/each}
			</ul>
		{/if} -->

		{#if paginationData.totalPages > 1}
			<Pagination
				{paginationData}
				on:pagination-link-clicked={handlePaginationLinkClicked}
				on:set-loading={handleSetLoading}
			/>
		{/if}
	</div>
</div>

<!-- {#if view === 'list'}
	<div
		class="fixed bottom-base-1/2 right-base-1/2 w-1/5 aspect-[4/5] z-10 pointer-events-none transition-opacity duration-300 {showPreview
			? 'opacity-100'
			: 'opacity-0'}"
	>
		{#each wip as item, index}
			<LargeImagePreview {item} active={index === currentPreview} />
		{/each}
	</div>
{/if} -->

<SearchModal active={searchActive} on:closeSearch={() => (searchActive = false)} />

<style>
	/* add bottom and right border to all items */
	.grid-view li {
		border-bottom: 1px solid var(--grey-3);
		border-right: 1px solid var(--grey-3);
		display: flex;
		align-items: stretch;
	}

	.grid-view li :global(a) {
		flex: 1;
		width: 100%;
	}

	/* add top border to first 6 items */
	.grid-view li:nth-child(-n + 6) {
		border-top: 1px solid var(--grey-3);
	}

	/* add left border to first item on each row. */
	.grid-view li:nth-child(6n + 1) {
		border-left: 1px solid var(--grey-3);
	}

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

	.content-container {
		transition: opacity 0.4s;
		pointer-events: auto;
	}

	.content-container.loading {
		opacity: 0;
		transition: opacity 0.2s;
		pointer-events: none;
	}
</style>
