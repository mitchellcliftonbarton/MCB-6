<script>
	import { createEventDispatcher } from 'svelte';
	import { defaultItemsPerPage } from '$lib/stores/paginationStore';

	// props
	export let href, label;

	// data
	const dispatch = createEventDispatcher();

	// handle click
	async function handleClick() {
		// set loading state
		dispatch('set-loading', true);

		// smooth scroll to top
		window.scrollTo({ top: 0, behavior: 'smooth' });

		// Wait for the smooth scroll to complete
		await new Promise((resolve) => {
			const checkScroll = () => {
				if (window.scrollY === 0) {
					resolve();
				} else {
					requestAnimationFrame(checkScroll);
				}
			};
			checkScroll();
		});

		// Ensure href is a full URL
		const baseUrl = window.location.origin; // Get the base URL
		const fullUrl = href.startsWith('http') ? href : `${baseUrl}${href}`; // Construct full URL if necessary

		// get page_num url param
		const url = new URL(fullUrl);
		const pageNum = url.searchParams.get('page_num');
		const itemsPerPage = url.searchParams.get('items_per_page') || $defaultItemsPerPage;

		const linkResponse = await fetch(`/api/wip`, {
			body: JSON.stringify({
				pageNum,
				itemsPerPage
			}),

			headers: {
				'Content-Type': 'application/json'
			},

			method: 'POST'
		});

		// get response
		const linkResponseObject = await linkResponse.json();

		if (linkResponseObject.status !== 'success') {
			window.location.href = href;
		}

		dispatch('pagination-link-clicked', {
			data: linkResponseObject.data,
			href
		});
	}
</script>

<a {href} on:click|preventDefault={handleClick}>{label}</a>
