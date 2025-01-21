<script>
	import { page } from '$app/stores';
	import { defaultItemsPerPage } from '$lib/stores/paginationStore.js';
	import MainNavLink from './MainNavLink.svelte';
	import WipDetailControls from './WipDetailControls.svelte';

	// define nav links
	const navLinks = [
		{
			name: 'Info/CV',
			path: '/info'
		},
		{
			name: 'WIP',
			path: '/wip'
		}
	];

	// get wip data
	$: wipDetail = $page.data?.wipDetail;
	$: contextWipArchivePage = wipDetail
		? Math.floor($page.data.wipDetail.currentIndex / $defaultItemsPerPage) + 1
		: 1;
</script>

<header class="w-full px-base-1/2 py-base-1/2 grid grid-cols-12 gap-base-1/2 items-center">
	<div class="flex items-center col-span-4">
		<nav class="h-full flex items-center">
			<ul>
				<div>
					<li>
						<MainNavLink link={{ name: 'Mitchell Barton', path: '/' }} />
					</li>
				</div>
				<div class="flex items-center">
					{#each navLinks as link, index}
						<li>
							<MainNavLink {link} />
							{#if index !== navLinks.length - 1}
								<span>,</span>
							{/if}
						</li>
					{/each}
				</div>
			</ul>
		</nav>
	</div>

	{#if wipDetail}
		<WipDetailControls {wipDetail} />

		{#if contextWipArchivePage}
			<div class="enter-in-1 delay-100 col-span-4 flex justify-end">
				<a href={contextWipArchivePage === 1 ? '/wip' : `/wip?page_num=${contextWipArchivePage}`}
					>... WIP ...</a
				>
			</div>
		{/if}
	{/if}
</header>

<style lang="postcss">
	header {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: var(--nav-height);
		z-index: 500;
	}

	header nav li span {
		margin-left: -0.3em;
	}

	header nav li:not(:first-child) {
		margin-left: 0.3em;
	}

	header ul li :global(a.active) {
		color: var(--primary);
	}
</style>
