<script>
	import { createEventDispatcher } from 'svelte';
	import PaginationLink from './PaginationLink.svelte';

	// props
	export let paginationData,
		basePath = '/wip';

	// data
	const dispatch = createEventDispatcher();

	$: prevPageLink = paginationData.prevPageLink;
	$: nextPageLink = paginationData.nextPageLink;
	$: isLastPage = paginationData.isLastPage;
	$: isFirstPage = paginationData.isFirstPage;
	$: pageNum = paginationData.pageNum;
	$: totalPages = paginationData.totalPages;

	// parse link function
	function parseLink(num) {
		// create phony url with the base path added to it
		const url = new URL('https://test.com' + basePath);

		// if the page number is 1, just return the base path
		if (num === 1) {
			return `${basePath}`;
		} else {
			// otherwise, add the page number to the search params
			url.searchParams.set('page_num', num);

			// then just return the pathname and search params
			return url.pathname + '?' + url.searchParams.toString();
		}
	}

	// // build pagination links
	const groupMax = 3; // this must be an odd number
	const middleGroupNum = Math.floor(groupMax / 2) + 1;
	const leftOverNumber = groupMax - middleGroupNum;

	$: {
		paginationLinks = [];

		if (totalPages <= groupMax * 2) {
			// if the totalpages is less than or equal to groupMax * 2, show all page numbers
			for (let i = 1; i <= totalPages; i++) {
				paginationLinks.push({
					link: parseLink(i),
					label: i
				});
			}
		} else if (pageNum <= groupMax) {
			// if the current page is less than or equal to groupMax and less than or equal to middleGroupNum, show the first groupMax page numbers and the last page number

			const totalToShow = pageNum === groupMax ? groupMax + leftOverNumber : groupMax;

			for (let i = 1; i <= totalToShow; i++) {
				paginationLinks.push({
					link: parseLink(i),
					label: i
				});
			}

			paginationLinks.push({
				link: null,
				label: '...'
			});

			paginationLinks.push({
				link: parseLink(totalPages),
				label: totalPages
			});
		} else if (pageNum >= totalPages - middleGroupNum) {
			// if the current page is greater than totalPages - middleGroupNum, show the first page number and the last groupMax page numbers

			paginationLinks.push({
				link: parseLink(1),
				label: 1
			});

			paginationLinks.push({
				link: null,
				label: '...'
			});

			const totalToAdd = pageNum === totalPages - middleGroupNum ? 0 : leftOverNumber;

			for (let i = totalPages - groupMax + totalToAdd; i <= totalPages; i++) {
				paginationLinks.push({
					link: parseLink(i),
					label: i
				});
			}
		} else {
			paginationLinks.push({
				link: parseLink(1),
				label: 1
			});

			paginationLinks.push({
				link: null,
				label: '...'
			});

			for (let i = pageNum - middleGroupNum + 1; i <= pageNum + middleGroupNum - 1; i++) {
				paginationLinks.push({
					link: parseLink(i),
					label: i
				});
			}

			paginationLinks.push({
				link: null,
				label: '...'
			});

			paginationLinks.push({
				link: parseLink(totalPages),
				label: totalPages
			});
		}
	}

	$: paginationLinks = [];

	// handle pagination link clicked
	function handlePaginationLinkClicked(event) {
		dispatch('pagination-link-clicked', event.detail);
	}

	function handleSetLoading(event) {
		dispatch('set-loading', event.detail);
	}
</script>

<div class="pagination flex justify-center mt-20 enter-in-1 delay-100">
	{#if !isFirstPage}
		<PaginationLink
			href={parseLink(prevPageLink.pageNum)}
			label="Prev"
			on:pagination-link-clicked={handlePaginationLinkClicked}
			on:set-loading={handleSetLoading}
		/>
	{/if}

	{#if paginationLinks.length > 0}
		<ul class="flex gap-4">
			{#each paginationLinks as link}
				<li class:active={link.label === pageNum}>
					{#if link.link}
						<PaginationLink
							href={link.link}
							label={link.label}
							on:pagination-link-clicked={handlePaginationLinkClicked}
							on:set-loading={handleSetLoading}
						/>
					{:else}
						<span>{link.label}</span>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}

	{#if !isLastPage}
		<PaginationLink
			href={parseLink(nextPageLink.pageNum)}
			label="Next"
			on:pagination-link-clicked={handlePaginationLinkClicked}
			on:set-loading={handleSetLoading}
		/>
	{/if}
</div>

<style>
	.pagination :global(a + ul) {
		margin-left: 5rem;
	}

	.pagination :global(ul + a) {
		margin-left: 5rem;
	}

	.pagination :global(ul li.active a) {
		text-decoration-line: underline;
		text-decoration-thickness: 0.1em;
		text-underline-offset: 0.15em;
	}
</style>
