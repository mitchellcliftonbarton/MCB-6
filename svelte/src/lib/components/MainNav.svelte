<script>
	import { page } from '$app/stores';
	import MainNavLink from './MainNavLink.svelte';
	import WipDetailControls from './WipDetailControls.svelte';
	import NavOptionsDropdown from './NavOptionsDropdown.svelte';

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
</script>

<header
	class="w-full px-4 lg:px-base-1/2 py-4 lg:py-base-1/2 grid grid-cols-12 gap-2 lg:gap-base-1/2 items-center"
>
	<div class="flex items-center col-span-6 lg:col-span-4">
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

		<NavOptionsDropdown {wipDetail} />
	{/if}
</header>

<style lang="postcss">
	header {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: var(--nav-height-mobile);
		z-index: 500;

		@media screen and (min-width: 1024px) {
			height: var(--nav-height);
		}
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

	header :global(.nav-options-dropdown) {
		display: none;

		@media screen and (min-width: 1024px) {
			display: flex;
		}
	}
</style>
