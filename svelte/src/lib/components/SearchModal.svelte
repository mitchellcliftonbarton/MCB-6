<script>
	// import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import SearchIcon from './SearchIcon.svelte';
	import SearchListItem from './SearchListItem.svelte';
	import { createEventDispatcher } from 'svelte';

	// props
	export let active;

	// data
	const dispatch = createEventDispatcher();
	let searchInput, searchTerm;
	let searchTimeout = null;
	let searchResults = [];
	let isLoading = false;
	let previousActive = false;

	// focus on input when modal is made active
	$: if (active !== previousActive) {
		previousActive = active;

		if (active && searchInput) {
			// clear search term
			searchTerm = '';

			// focus on input
			searchInput.focus();
		}
	}

	// handle search input with a debounce
	$: if (searchTerm && searchTerm !== '') {
		isLoading = true;
		clearTimeout(searchTimeout);

		searchTimeout = setTimeout(async () => {
			const res = await fetch('/api/search', {
				body: JSON.stringify({
					searchTerm
				}),

				headers: {
					'Content-Type': 'application/json'
				},

				method: 'POST'
			});

			// get response
			const resObject = await res.json();

			// handle errors
			if (resObject.status !== 'success') {
				return;
			}

			searchResults = resObject.data.wip;

			isLoading = false;
		}, 500);
	} else {
		searchResults = [];
	}

	function handleSubmit() {
		goto(`/wip/search?term=${searchTerm}`);
	}
</script>

<div
	class="search-modal fixed top-0 left-0 w-full h-full flex justify-center items-center {active
		? 'active'
		: ''}"
>
	<button class="closer fill-parent" on:click={() => dispatch('closeSearch')}>
		<span class="sr-only">Close Search</span>
	</button>

	<div class="modal bg-white flex flex-col border border-black">
		<div class="flex-none pt-6 lg:pt-base px-6 lg:px-base">
			<form on:submit|preventDefault={handleSubmit}>
				<div class="relative">
					<SearchIcon />

					<input
						bind:this={searchInput}
						bind:value={searchTerm}
						type="search"
						placeholder="Search in WIP.."
						class="w-full bg-transparent text-black placeholder-black border-b border-black text-center"
					/>
				</div>
			</form>
		</div>

		<div class="flex-1 flex justify-center items-center relative">
			{#if isLoading}
				<div class="search-loader"></div>
			{:else if searchTerm && searchTerm !== '' && searchResults.length > 0}
				<div class="results fill-parent px-6 lg:px-base pt-8 lg:pt-20 pb-40 overflow-y-auto">
					<ul>
						{#each searchResults as result}
							<li>
								<SearchListItem item={result} />
							</li>
						{/each}
					</ul>

					<div class="flex justify-center mt-8">
						<a
							href={`/wip/search?term=${searchTerm}`}
							class="bg-yellow lg:hover:bg-black lg:hover:text-white text-center py-6 px-6 inline-block"
							>View all results</a
						>
					</div>
				</div>
			{:else if searchTerm && searchTerm !== '' && searchResults.length === 0}
				<p>No results</p>
			{:else}
				<p>Search by medium, title, or notes</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.search-modal {
		z-index: 10000;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.closer {
		background-color: var(--white);
		opacity: 0.85;
	}

	.search-modal.active {
		opacity: 1;
		pointer-events: auto;
	}

	.modal {
		z-index: 10;
		width: 90vw;
		height: 70svh;
		min-height: 300px;
		max-height: 500px;

		@media screen and (min-width: 1024px) {
			min-width: 500px;
			max-width: 700px;
			width: 50vw;
			height: 50svh;
		}
	}

	.search-modal.active .modal {
		/* transform: translateY(0px); */
	}

	.modal :global(.search-icon) {
		width: 1.3rem;
		position: absolute;
		left: 0px;
		top: 50%;
		transform: translateY(-50%);
	}

	input[type='search'] {
		outline: none;
		appearance: none;
		padding: 0.6rem 0;
	}

	input[type='search']::-webkit-search-decoration,
	input[type='search']::-webkit-search-cancel-button,
	input[type='search']::-webkit-search-results-button,
	input[type='search']::-webkit-search-results-decoration {
		display: none;
	}

	input::selection {
		background-color: var(--black);
		color: var(--white);
	}

	.search-loader {
		width: 150px;
		height: 20px;
		/* border: 1px solid var(--black); */
		display: flex;
		position: relative;
	}

	.search-loader::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--black);
		transform-origin: left;
		animation: load 1s steps(11, jump-none) infinite;
	}

	@keyframes load {
		0% {
			transform: scaleX(0);
		}

		100% {
			transform: scaleX(1);
		}
	}

	.results {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		-webkit-overflow-scrolling: touch;
	}

	.results::-webkit-scrollbar {
		display: none; /* Chrome, Safari and Opera */
	}

	.results ul li {
		border-top: 1px solid var(--grey-3);
	}

	.results ul li:last-child {
		border-bottom: 1px solid var(--grey-3);
	}
</style>
