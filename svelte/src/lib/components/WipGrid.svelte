<script>
	import { goto } from '$app/navigation';
	import Pagination from '$lib/components/Pagination.svelte';
	import WipGridItem from '$lib/components/WipGridItem.svelte';
	import WipSearchButton from '$lib/components/WipSearchButton.svelte';

	// props
	export let data,
		term,
		basePath = '/wip';

	// data
	let loading = false;

	// make wip reactive
	$: wipItems = data.wip;
	$: paginationData = data.paginationData;
	$: totalCount = data.totalCount;
	$: range = data.range;
	$: searchTerm = term;

	// handle pagination link clicked
	function handlePaginationLinkClicked(event) {
		goto(event.detail.href);

		wipItems = event.detail.data.wip;
		paginationData = event.detail.data.paginationData;
		range = event.detail.data.range;
		loading = false;
	}

	function handleSetLoading(event) {
		loading = event.detail;
	}
</script>

<div class="mt-20 lg:mt-40 pb-40 lg:pb-60">
	<div class="enter-in-1 text-center max-w-[250px] mx-auto">
		<h1>WIP</h1>
		{#if searchTerm}
			<p class="mt-6">
				{totalCount} results for: <span class="bg-pink">“{searchTerm}”</span>
			</p>
		{/if}
	</div>

	<div class={`content-container mt-8 lg:mt-48`}>
		<div class="flex justify-between items-center">
			<WipSearchButton />

			{#if loading === false}
				<p class="enter-in-1">{range.from} - {range.to} of {totalCount} items</p>
			{/if}
		</div>

		{#if loading === false}
			<ul class="enter-in-1 delay-100 grid-view grid grid-cols-2 lg:grid-cols-6 mt-4 lg:mt-6">
				{#each wipItems as item}
					<li key={item._id}>
						<WipGridItem {item} />
					</li>
				{/each}
			</ul>

			{#if paginationData.totalPages > 1}
				<Pagination
					{paginationData}
					{basePath}
					on:pagination-link-clicked={handlePaginationLinkClicked}
					on:set-loading={handleSetLoading}
				/>
			{/if}
		{/if}
	</div>
</div>

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

	/* add top border to first 2 items on mobile only */
	.grid-view li:nth-child(-n + 2) {
		border-top: 1px solid var(--grey-3);
	}

	/* add top border to first 6 items on desktop only */
	.grid-view li:nth-child(-n + 6) {
		@media screen and (min-width: 1024px) {
			border-top: 1px solid var(--grey-3);
		}
	}

	/* add left border to first item on each row for mobile. */
	.grid-view li:nth-child(2n + 1) {
		border-left: 1px solid var(--grey-3);

		@media screen and (min-width: 1024px) {
			border-left: none;
		}
	}

	/* add left border to first item on each row for desktop. */
	.grid-view li:nth-child(6n + 1) {
		@media screen and (min-width: 1024px) {
			border-left: 1px solid var(--grey-3);
		}
	}

	.list :global(li) {
		border-top: 1px solid var(--grey-3);
	}

	.list :global(li:last-child) {
		border-bottom: 1px solid var(--grey-3);
	}

	.content-container {
		transition: opacity 0.4s;
		pointer-events: auto;
	}
</style>
