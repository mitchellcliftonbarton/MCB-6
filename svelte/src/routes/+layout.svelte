<script>
	import '../styles/global.css';
	import MainNav from '$lib/components/MainNav.svelte';
	import SearchModal from '$lib/components/SearchModal.svelte';
	import { searchActive, isLargeQuery } from '$lib/stores/globalStore';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import { loadGoogleAnalytics } from '$lib/utils';

	const GA_TRACKING_ID = 'G-5B6FEEPJDB';

	// configure nprogress
	NProgress.configure({ showSpinner: false });

	if (typeof window !== 'undefined') {
		import('lazysizes');
	}

	// data prop
	export let data;

	// get site settings from data
	const { siteSettings } = data;

	let showGrid = false;
	let loadingTimeout;

	onMount(() => {
		$isLargeQuery = window.matchMedia('(min-width: 1024px)').matches;

		loadGoogleAnalytics(GA_TRACKING_ID);
	});

	// handle navigation
	beforeNavigate(() => {
		// start nprogress
		NProgress.start();

		// close search
		$searchActive = false;

		// set loading timeout
		loadingTimeout = setTimeout(() => {
			document.body.classList.add('loading');
		}, 100);
	});

	afterNavigate(() => {
		// stop nprogress
		NProgress.done();

		// clear loading timeout
		clearTimeout(loadingTimeout);

		// remove loading class
		document.body.classList.remove('loading');

		if (typeof window !== 'undefined' && window.gtag) {
			window.gtag('event', 'page_view', {
				page_path: window.location.pathname,
				page_title: document.title
			});
		}
	});

	// listen for command k shortcut
	const handleKeyDown = (event) => {
		if (event.metaKey && event.key === 'k') {
			$searchActive = !$searchActive;
		}
	};
</script>

<svelte:window on:keydown={handleKeyDown} />

<svelte:head>
	<meta name="description" content={siteSettings.metaDescription} />
	<meta property="og:title" content="Mitchell Barton" />
	<meta property="og:description" content={siteSettings.metaDescription} />
	<meta property="og:site_name" content="Mitchell Barton" />
	<meta property="og:locale" content="en_US" />
	{#if siteSettings.ogImage?.asset?.url}
		<meta property="og:image" content={siteSettings.ogImage.asset.url} />
	{/if}
</svelte:head>

<div class={`main-container ${showGrid ? 'show-grid' : ''}`}>
	<div class="grid-system w-full h-base-1/2 bg-grey-1"></div>

	<MainNav />

	<div class="grid-system w-full h-base-1/2 bg-grey-1"></div>

	<main class="px-4 lg:px-base-1/2">
		<slot />
	</main>

	<SearchModal active={$searchActive} on:closeSearch={() => ($searchActive = false)} />

	<div
		class="grid-system fixed top-0 left-0 w-full h-full flex justify-between z-[-1] pointer-events-none"
	>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
		<div class="w-base-1/2 h-full bg-grey-1"></div>
	</div>
</div>

<style>
	main {
		padding-top: var(--nav-height-mobile);

		@media screen and (min-width: 1024px) {
			padding-top: var(--nav-height);
		}
	}
</style>
